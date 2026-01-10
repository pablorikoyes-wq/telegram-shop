import os
from aiogram import Bot, Dispatcher, types
from aiogram.utils import executor
from dotenv import load_dotenv

# Загружаем .env
load_dotenv()

BOT_TOKEN = os.getenv("BOT_TOKEN")
if not BOT_TOKEN:
    raise ValueError("❌ BOT_TOKEN не найден в .env")

bot = Bot(token=BOT_TOKEN, parse_mode="HTML")
dp = Dispatcher(bot)


@dp.message_handler(commands=["start"])
async def start(message: types.Message):
    # Берем ТОЛЬКО имя
    first_name = message.from_user.first_name or "do‘st"

    text = (
        f"<b>Assalomu alaykum, {first_name} 👋</b>\n\n"
        "Do'konga kirish uchun tugmani bosing 👇"
    )

    keyboard = types.InlineKeyboardMarkup()
    keyboard.add(
        types.InlineKeyboardButton(
            text="🛒 UzumBox ochish",
            web_app=types.WebAppInfo(
                url="https://example.com"  # потом заменим на Mini App
            )
        )
    )

    await message.answer(text, reply_markup=keyboard)


if __name__ == "__main__":
    executor.start_polling(dp, skip_updates=True)


