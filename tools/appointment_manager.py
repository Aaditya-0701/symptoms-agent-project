from typing import Dict, Optional
import requests
from datetime import datetime

from ibm_watsonx_orchestrate.agent_builder.tools import tool, ToolPermission
from ibm_watsonx_orchestrate.run import connections
from ibm_watsonx_orchestrate.agent_builder.connections import ConnectionType

@tool(
    description="Books a medical appointment with selected doctor and patient details.",
    permission=ToolPermission.READ_WRITE,
    expected_credentials=[
        {"app_id": "hospital_system", "type": ConnectionType.KEY_VALUE}
    ]
)
def appointment_scheduler(
    patient_name: str,
    doctor_id: str,
    doctor_name: str,
    appointment_time: str,
    appointment_date: str,
    symptoms_category: str,
    contact_info: Optional[str] = None
) -> Dict:
    creds = connections.key_value("hospital_system")
    url = f"{creds.get('api_url').rstrip('/')}/appointments"
    headers = {"Authorization": f"Bearer {creds.get('api_key')}"}

    payload = {
        "patientName": patient_name,
        "doctorId": doctor_id,
        "doctorName": doctor_name,
        "appointmentTime": appointment_time,
        "appointmentDate": appointment_date,
        "symptomsCategory": symptoms_category,
        "contactInfo": contact_info
    }
    response = requests.post(url, json=payload, headers=headers, timeout=30)
    response.raise_for_status()
    return response.json()
