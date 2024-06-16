from fastapi import APIRouter, HTTPException
from pymongo import MongoClient
from passlib.context import CryptContext
from bson import ObjectId
from schemas.user import UserCreate, UserLogin
import os

router = APIRouter()

# Configuration MongoDB
MONGO_URL = os.getenv("MONGO_URL", "mongodb://localhost:27017/")
DB_NAME = "pretarouler"
COLLECTION_NAME = "users"

# Connexion à MongoDB
client = MongoClient(MONGO_URL)
db = client[DB_NAME]
collection = db[COLLECTION_NAME]

# Configuration du cryptage du mot de passe
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

def hash_password(password):
    return pwd_context.hash(password)

def verify_password(plain_password, hashed_password):
    return pwd_context.verify(plain_password, hashed_password)

def get_user(email: str):
    user = collection.find_one({"email": email})
    return user

@router.post("/api/create_user/", response_model=UserCreate, tags=["Users"])
async def create_user(user: UserCreate):
    try:
        hashed_password = hash_password(user.password)
        user_data = user.dict(by_alias=True)
        user_data["password"] = hashed_password
        result = collection.insert_one(user_data)
        user_data["_id"] = str(result.inserted_id)
        return user_data
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.post("/api/login", tags=["Authentication"])
async def login(user_login: UserLogin):
    user = get_user(user_login.email)
    if not user or not verify_password(user_login.password, user["password"]):
        raise HTTPException(status_code=401, detail="Invalid email or password")
    return {"message": "Login successful"}
