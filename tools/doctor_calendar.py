# tools/doctor_calendar.py
import uuid
from typing import List, Dict
from ibm_watsonx_orchestrate.agent_builder.tools import tool, ToolPermission

# Simulated availability for multiple doctors per specialty
doctor_availability = {
    "General": {
        "Dr. Smith": [
            "2025-08-10T09:00:00",
            "2025-08-10T10:00:00",
            "2025-08-10T11:00:00"
        ],
        "Dr. Lee": [
            "2025-08-10T13:00:00",
            "2025-08-10T14:00:00",
            "2025-08-11T09:00:00"
        ]
    },
    "Mental": {
        "Dr. Patel": [
            "2025-08-10T09:00:00",
            "2025-08-10T10:30:00",
            "2025-08-11T13:00:00"
        ],
        "Dr. Kim": [
            "2025-08-10T11:00:00",
            "2025-08-11T14:00:00",
            "2025-08-12T09:00:00"
        ]
    },
    "Emergency": {
        "Dr. Adams": [
            "2025-08-10T00:00:00"  # Emergency always available (for simulation)
        ],
        "Dr. Baker": [
            "2025-08-10T00:00:00"
        ]
    }
}

# Booked appointments stored here
booked_appointments = {}

@tool(
    name="get_available_slots",
    description="Get available appointment slots for a specialty with multiple doctors",
    permission=ToolPermission.READ_ONLY
)
def get_available_slots(specialty: str) -> List[Dict]:
    """
    Returns a list of available slots with doctor names for the given specialty.
    Example return: 
    [
      {"doctor": "Dr. Smith", "time": "2025-08-10T09:00:00"},
      {"doctor": "Dr. Lee", "time": "2025-08-10T13:00:00"},
      ...
    ]
    """
    availability = []
    if specialty not in doctor_availability:
        return availability
    
    for doctor, slots in doctor_availability[specialty].items():
        for slot in slots:
            # Check if booked
            if not any(appt['specialty'] == specialty and appt['doctor'] == doctor and appt['time'] == slot for appt in booked_appointments.values()):
                availability.append({"doctor": doctor, "time": slot})
    return availability

@tool(
    name="book_appointment",
    description="Book appointment with a specific doctor at chosen time using stored context",
    permission=ToolPermission.ADMIN
)
def book_appointment(patient_name: str, specialty: str, doctor: str, chosen_time: str) -> Dict:
    """
    Enhanced booking function that can work with context variables.
    """
    # Check availability again to avoid race conditions
    available_slots = get_available_slots(specialty)
    slot_valid = any(slot for slot in available_slots if slot['doctor'] == doctor and slot['time'] == chosen_time)
    
    if not slot_valid:
        return {"success": False, "message": "Chosen time slot is no longer available."}
    
    appt_id = str(uuid.uuid4())
    booked_appointments[appt_id] = {
        "patient_name": patient_name,
        "specialty": specialty,
        "doctor": doctor,
        "time": chosen_time
    }
    
    return {
        "success": True, 
        "appointment_id": appt_id, 
        "doctor": doctor, 
        "time": chosen_time,
        "patient_name": patient_name
    }
