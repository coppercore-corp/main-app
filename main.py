import os
from fastapi import FastAPI, Request
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates

static_dir = os.path.join(os.path.dirname(os.path.abspath(__file__)), "static")
template_dir = os.path.join(os.path.dirname(os.path.abspath(__file__)), "templates")

app = FastAPI()
app.mount("/static", StaticFiles(directory=static_dir), name="static")

templates = Jinja2Templates(directory=template_dir)

@app.get("/contacts", response_class=HTMLResponse)
@app.get("/products", response_class=HTMLResponse)
@app.get("/", response_class=HTMLResponse)
def index(request: Request):
    temp = str(request.url).split("/").pop()
    page = "Home" if temp == "" else temp.capitalize()

    context = {
        "request": request,
        "title": "Welcome %s" % page,
        "url": str(request.url),
        "page": page
    }
    return templates.TemplateResponse("home/index.html", context)
