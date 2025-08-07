from ibm_watsonx_orchestrate.agent_builder.tools import tool, ToolPermission

@tool(
    name="classify_symptoms",
    description="Classify symptom description as General, Mental, or Emergency and store context.",
    permission=ToolPermission.READ_ONLY
)
def classify_symptoms(symptoms: str, user_name: str = None) -> str:
    """
    Classify symptoms and store context for later use.
    This function now accepts user_name to maintain context.
    """
    text = symptoms.lower()
    
    # Classification logic
    if any(w in text for w in ["chest pain","broken","severe","bleeding","unconscious","emergency"]):
        classification = "Emergency"
    elif any(w in text for w in ["sad","anxious","depressed","stress","panic"]):
        classification = "Mental"
    else:
        classification = "General"
    
    # Return classification result
    return classification
