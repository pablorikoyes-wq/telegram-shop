import asyncio
import os

from aiogram import Bot, Dispatcher, types
from aiogram.filters import CommandStart
from aiogram.types import InlineKeyboardButton
from aiogram.utils.keyboard import InlineKeyboardBuilder
from dotenv import load_dotenv

load_dotenv()

BOT_TOKEN = os.getenv("BOT_TOKEN")

if not BOT_TOKEN:
    raise ValueError("❌ BOT_TOKEN не найден в .env")

bot = Bot(token=BOT_TOKEN)
dp = Dispatcher()


@dp.message(CommandStart())
async def start_handler(message: types.Message):
    user_name = message.from_user.first_name or "Do'st"

    text = (
        f"*Assalomu alaykum {user_name} 👋*\n\n"
        f"Do'konga kirish uchun tugmani bosing 👇"
    )

    builder = InlineKeyboardBuilder()
    builder.button(
        text="🛒 UzumBox ochish",
        web_app=types.WebAppInfo(
            url="https://pablorikoyes-wq.github.io/telegram-shop/"
        )
    )

    await message.answer(
        text=text,
        reply_markup=builder.as_markup(),
        parse_mode="Markdown"
    )


async def main() -> None:
    await dp.start_polling(bot)


if __name__ == "__main__":
    print("🚀 Bot ishga tushmoqda...")
    asyncio.run(main())