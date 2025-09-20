from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from .sheets import get_certificate_from_sheet

@api_view(["GET"])
def verify_certificate(request, cert_id):
    """
    Fetch certificate details from Google Sheets and return as API response.
    """
    data = get_certificate_from_sheet(cert_id)

    if "error" in data:
        return Response({"error": data["error"]}, status=status.HTTP_404_NOT_FOUND)

    return Response(data, status=status.HTTP_200_OK)
