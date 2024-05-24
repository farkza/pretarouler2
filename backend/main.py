from fastapi import FastAPI
from routers import cars
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse

app = FastAPI()

app.include_router(cars.router)


# Origines autorisées (à ajuster selon vos besoins)
origins = [
    "http://localhost",
    "http://localhost:3000",  # Ajoutez votre adresse React
]

# Ajouter le middleware CORS à votre application
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Modifier ceci pour autoriser les origines spécifiques
    allow_credentials=True,
    allow_methods=["GET"],
    allow_headers=["*"],
    expose_headers=["*"],
    allow_origin_regex="https?://.*",
)

# Montage du dossier d'images pour être servi par FastAPI
app.mount("/img", StaticFiles(directory="img"), name="img")

# Montage du dossier 'app' pour les fichiers statiques
app.mount("/static", StaticFiles(directory="app"), name="static")

# Affiche la page index à la racine de l'application
@app.get("/", tags=["Index"])
async def read_index():
    return FileResponse("app/index.html")