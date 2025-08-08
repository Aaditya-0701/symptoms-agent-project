from typing import Dict, Any, Optional
import requests
from datetime import datetime

from ibm_watsonx_orchestrate.agent_builder.tools import tool, ToolPermission
from ibm_watsonx_orchestrate.run import connections
from ibm_watsonx_orchestrate.agent_builder.connections import ConnectionType

@tool(
    description="Logs patient-agent interactions and system events for auditing and troubleshooting.",
    permission=ToolPermission.READ_WRITE,
    expected_credentials=[
        {"app_id": "logging_system", "type": ConnectionType.KEY_VALUE}
    ]
)
def interaction_logger(
    patient_name: str,
    interaction_type: str,
    interaction_data: Dict[str, Any],
    session_id: Optional[str] = None,
    severity_level: str = "INFO"
) -> Dict:
    creds = connections.key_value("logging_system")
    url = f"{creds.get('api_url').rstrip('/')}/logs"
    headers = {"Authorization": f"Bearer {creds.get('api_key')}"}

    payload = {
        "patientName": patient_name,
        "interactionType": interaction_type,
        "interactionData": interaction_data,
        "sessionId": session_id,
        "severityLevel": severity_level,
        "timestamp": datetime.utcnow().isoformat()
    }
    response = requests.post(url, json=payload, headers=headers, timeout=30)
    response.raise_for_status()
    return {"success": True, "logResponse": response.text}
