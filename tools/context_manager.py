from ibm_watsonx_orchestrate.agent_builder.tools import tool, ToolPermission
from typing import Dict, Any

@tool(
    name="store_context",
    description="Store user information in context for later retrieval",
    permission=ToolPermission.ADMIN
)
def store_context(key: str, value: str) -> Dict[str, Any]:
    """
    Store a key-value pair in the conversation context.
    This helps maintain continuity across the conversation.
    """
    return {
        "status": "stored",
        "key": key,
        "value": value,
        "message": f"Stored {key} in context"
    }

@tool(
    name="retrieve_context",
    description="Retrieve previously stored user information from context",
    permission=ToolPermission.READ_ONLY
)
def retrieve_context(key: str) -> Dict[str, Any]:
    """
    Retrieve a previously stored context value.
    """
    # In a real implementation, this would access the session context
    return {
        "status": "retrieved",
        "key": key,
        "message": f"Retrieved {key} from context"
    }
