from typing import Dict, Optional, List
import requests
from datetime import datetime

from ibm_watsonx_orchestrate.agent_builder.tools import tool, ToolPermission
from ibm_watsonx_orchestrate.run import connections
from ibm_watsonx_orchestrate.agent_builder.connections import ConnectionType

@tool(
    description="Sends notifications to patients such as appointment confirmations or alerts.",
    permission=ToolPermission.READ_WRITE,
    expected_credentials=[
        {"app_id": "notification_service", "type": ConnectionType.KEY_VALUE}
    ]
)
def notification_sender(
    patient_name: str,
    notification_type: str,
    message: str,
    priority: str = "medium",
    contact_methods: Optional[List[str]] = None
) -> Dict:
    if contact_methods is None:
        contact_methods = ["email", "sms"]

    creds = connections.key_value("notification_service")
    url = f"{creds.get('api_url').rstrip('/')}/notifications"
    headers = {"Authorization": f"Bearer {creds.get('api_key')}"}

    payload = {
        "patientName": patient_name,
        "notificationType": notification_type,
        "message": message,
        "priority": priority,
        "contactMethods": contact_methods
    }
    response = requests.post(url, json=payload, headers=headers, timeout=30)
    response.raise_for_status()
    return response.json()
