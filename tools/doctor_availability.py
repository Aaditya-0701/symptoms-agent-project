from typing import Dict
import requests
from datetime import datetime

from ibm_watsonx_orchestrate.agent_builder.tools import tool, ToolPermission
from ibm_watsonx_orchestrate.run import connections
from ibm_watsonx_orchestrate.agent_builder.connections import ConnectionType

@tool(
    description="Checks doctor availability for a given time slot, specialty, and location.",
    permission=ToolPermission.READ_ONLY,
    expected_credentials=[
        {"app_id": "hospital_system", "type": ConnectionType.KEY_VALUE}
    ]
)
def doctor_availability_checker(
    preferred_time_slot: str,
    specialty_required: str = "general_medicine",
    location_preference: str = "any"
) -> Dict:
    creds = connections.key_value("hospital_system")
    url = f"{creds.get('api_url').rstrip('/')}/doctor-availability"
    headers = {"Authorization": f"Bearer {creds.get('api_key')}"}

    payload = {
        "preferredTimeSlot": preferred_time_slot,
        "specialtyRequired": specialty_required,
        "locationPreference": location_preference
    }
    response = requests.post(url, json=payload, headers=headers, timeout=30)
    response.raise_for_status()
    return response.json()
