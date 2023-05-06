from fastapi import FastAPI, Request
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
app = FastAPI()
app.mount("/static", StaticFiles(directory="static"), name="static")
templates = Jinja2Templates(directory="templates")


@app.get("/", response_class=HTMLResponse)
def index(request: Request):
    context = {
        "request": request,
        "title": "Welcome Home",
        "url": "/",
        "page": "Home"
    }
    return templates.TemplateResponse("home/index.html", context)


@app.get("/products", response_class=HTMLResponse)
def products(request: Request):
    context = {
        "request": request,
        "title": "Our Products",
        "url": "/products",
        "page": "Products"
    }
    return templates.TemplateResponse("home/index.html", context)


@app.get("/contacts", response_class=HTMLResponse)
def contacts(request: Request):
    context = {
        "request": request,
        "title": "Get in touch with us",
        "url": "/contacts",
        "page": "Contacts"
    }
    return templates.TemplateResponse("home/index.html", context)
