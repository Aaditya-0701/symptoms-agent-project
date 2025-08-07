from ibm_watsonx_orchestrate.agent_builder.tools import tool, ToolPermission

@tool(
    name="contact_doctor",
    description="Notify doctor for emergencies only.",
    permission=ToolPermission.ADMIN
)
def contact_doctor(patient_name: str, specialty: str, symptoms: str) -> str:
    if specialty == "Emergency":
        # Send alert email/paging (or simulated notification)
        return f"Emergency contacted immediately for {patient_name}. Please rush to hospital!"
    else:
        # Non-emergency handled by appointment booking; no email needed
        return f"{specialty} care scheduled for {patient_name} via appointment booking."
