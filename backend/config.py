import os

class Settings:
    MONGO_URL: str = os.getenv("MONGO_URL", "mongodb://localhost:27017/")
    DB_NAME: str = "pretarouler"
    COLLECTION_NAME: str = "cars"

settings = Settings()
