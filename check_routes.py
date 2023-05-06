import sys
import os

# sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), "..")))

from fastapi.testclient import TestClient
# from importlib import import_module
# main = import_module('main')
# app = getattr(main,"app")

from main import app

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
