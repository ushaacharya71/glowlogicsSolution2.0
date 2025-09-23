import requests

# Your deployed Google Apps Script Web App URL
BASE_URL = "https://script.google.com/macros/s/AKfycbwyEcYM_6U7zQKU5uR4EYhCSTLaTJb4YzS1tDdLGQNxcgb_SDpbdUcNW2svWKXWiKi0Ow/exec"


def get_certificate_from_sheet(cert_id: str):
    """
    Fetch certificate details from Google Sheets using Certificate ID.
    Returns a dict with certificate data or an error message.
    """
    try:
        response = requests.get(BASE_URL, params={"cert_id": cert_id}, timeout=10)
        response.raise_for_status()  # Raises HTTPError for bad responses
        data = response.json()

        if not data or "error" in data:
            return {"error": "Certificate nahi mila"}

        return data

    except requests.exceptions.Timeout:
        return {"error": "Request timed out"}
    except requests.exceptions.RequestException as e:
        return {"error": f"Request failed: {str(e)}"}
