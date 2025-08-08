from typing import Dict, Optional, List
import requests
from datetime import datetime

from ibm_watsonx_orchestrate.agent_builder.tools import tool, ToolPermission
from ibm_watsonx_orchestrate.run import connections
from ibm_watsonx_orchestrate.agent_builder.connections import ConnectionType

@tool(
    description="Provides health awareness alerts and information based on patient conditions and location.",
    permission=ToolPermission.READ_ONLY,
    expected_credentials=[
        {"app_id": "health_alerts_api", "type": ConnectionType.KEY_VALUE}
    ]
)
def health_awareness_checker(
    patient_conditions: Optional[List[str]] = None,
    location: Optional[str] = None
) -> Dict:
    creds = connections.key_value("health_alerts_api")
    url = f"{creds.get('api_url').rstrip('/')}/health-awareness"
    headers = {"Authorization": f"Bearer {creds.get('api_key')}"}

    params = {
        "location": location or "default",
        "patientConditions": patient_conditions or []
    }
    response = requests.get(url, headers=headers, params=params, timeout=30)
    response.raise_for_status()
    return response.json()
