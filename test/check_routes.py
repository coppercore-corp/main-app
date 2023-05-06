from fastapi.testclient import TestClient
from ..main import app

client = TestClient(app)

def test_read_routes():
    response = client.get("/")
    assert response.status_code == 200
    assert "<title>CopperCore Corp. Home</title>" in response.text

    response = client.get("/products")
    assert response.status_code == 200
    assert "<title>CopperCore Corp. Products</title>" in response.text

    response = client.get("/contacts")
    assert response.status_code == 200
    assert "<title>CopperCore Corp. Contacts</title>" in response.text