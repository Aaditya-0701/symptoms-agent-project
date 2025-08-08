from typing import Dict, Optional
import requests
from datetime import datetime

from ibm_watsonx_orchestrate.agent_builder.tools import tool, ToolPermission
from ibm_watsonx_orchestrate.run import connections
from ibm_watsonx_orchestrate.agent_builder.connections import ConnectionType

@tool(
    description="Classifies patient symptoms into categories such as emergency, mental, or general.",
    permission=ToolPermission.READ_ONLY,
    expected_credentials=[
        {"app_id": "medical-db", "type": ConnectionType.KEY_VALUE}
    ]
)
def symptom_classifier(
    patient_name: str,
    symptoms_description: str,
    patient_age: Optional[int] = None,
    patient_gender: Optional[str] = None
) -> Dict:
    creds = connections.key_value("medical-db")
    url = f"{creds.get('api_url').rstrip('/')}/classify-symptoms"
    headers = {"Authorization": f"Bearer {creds.get('api_key')}"}

    payload = {
        "patientName": patient_name,
        "symptomsDescription": symptoms_description,
        "patientAge": patient_age,
        "patientGender": patient_gender
    }
    response = requests.post(url, json=payload, headers=headers, timeout=30)
    response.raise_for_status()
    result = response.json()
    return result
