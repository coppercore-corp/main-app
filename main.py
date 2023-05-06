from fastapi import FastAPI, Request
#from pydantic import BaseModel
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates

app = FastAPI()
app.mount("/static", StaticFiles(directory="static"), name="static")
templates = Jinja2Templates(directory="templates")


@app.get("/products", response_class=HTMLResponse)
@app.get("/contacts", response_class=HTMLResponse)
@app.get("/", response_class=HTMLResponse)
def index(request: Request):
    return templates.TemplateResponse("home/index.html", {"request": request})