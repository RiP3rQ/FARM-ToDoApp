#MongoDB driver
import motor.motor_asyncio
from model import Todo
from env import DB_URL

DB_NAME="FARM-ToDoApp"

client = motor.motor_asyncio.AsyncIOMotorClient(DB_URL)
database = client.DB_NAME
collection = database.todo

async def fetch_one_todo(title):
    document = await collection.find_one({"title": title})
    return document

async def fetch_all_todos():
    todos = []
    cursor = collection.find({})
    async for document in cursor:
        todos.append(Todo(**document))
    return todos

async def create_todo(todo):
    document = todo
    result = await collection.insert_one(document)
    return document


async def update_todo(title, desc, completed):
    await collection.update_one({"title": title}, {"$set": {"description": desc, "completed": completed}})
    document = await collection.find_one({"title": title})
    return document

async def remove_todo(title):
    await collection.delete_one({"title": title})
    return True