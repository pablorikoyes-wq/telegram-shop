import os
from aiogram import Bot, Dispatcher, types
from aiogram.utils import executor
from aiogram.types import InlineKeyboardMarkup, InlineKeyboardButton
from dotenv import load_dotenv

load_dotenv()

BOT_TOKEN = os.getenv("BOT_TOKEN")

if not BOT_TOKEN:
    raise ValueError("❌ BOT_TOKEN не найден в .env")

bot = Bot(token=BOT_TOKEN)
dp = Dispatcher(bot)


@dp.message_handler(commands=["start"])
async def start_handler(message: types.Message):
    user_name = message.from_user.first_name or "Do‘st"

    text = (
        f"*Assalomu alaykum {user_name} 👋*\n\n"
        f"Do'konga kirish uchun tugmani bosing 👇"
    )

    keyboard = InlineKeyboardMarkup()
    keyboard.add(
        InlineKeyboardButton(
            text="🛒 UzumBox ochish",
            web_app=types.WebAppInfo(
                url="https://pablorikoyes-wq.github.io/telegram-shop/"
            )
        )
    )

    await message.answer(
        text=text,
        reply_markup=keyboard,
        parse_mode="Markdown"
    )


if __name__ == "__main__":
    executor.start_polling(dp, skip_updates=True)



