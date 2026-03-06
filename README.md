# good santa | Moonlit Fullstack

Персональний лендінг-портфоліо у lo-fi стилі з підтримкою 2 мов (UA/EN), адаптивною мобільною версією та бургер-меню.

## Live
- GitHub Pages: https://good-santa.github.io/
- Repository: https://github.com/good-santa/good-santa.github.io

## Features
- Двомовний інтерфейс (UA/EN) з перемикачем мов
- Збереження вибраної мови в `localStorage`
- Анімовані секції через `IntersectionObserver`
- Іконки через Lucide
- Адаптивний layout для desktop/tablet/mobile
- Мобільне бургер-меню
- Hero-блок з вбудованим animated embed

## Tech Stack
- HTML5
- CSS3 (custom responsive styles)
- Vanilla JavaScript
- Lucide Icons (CDN)

## Project Structure
```text
.
|- index.html
|- styles.css
|- script.js
|- assets/
   |- background.jpg
   |- Avatar-removebg-preview.png
```

## Run Locally
Це статичний сайт, тому можна запускати без збірки:

1. Відкрити `index.html` у браузері
2. Або підняти локальний сервер (рекомендовано)

Приклад через VS Code Live Server або будь-який static server.

## Content Sections
- Hero
- About
- Stack
- Now
- Goals 2026
- Featured Projects
- Collab
- Contact

## Contacts
- GitHub: https://github.com/good-santa
- Telegram: https://t.me/g00d_santa
- Steam: https://steamcommunity.com/profiles/76561199033140296

## Deployment
Сайт деплоїться через GitHub Pages з гілки `main`.

```bash
git add .
git commit -m "Update site"
git push origin main
```

Після push оновлення з'являються на GitHub Pages (зазвичай за 1-3 хвилини).

## Notes
- Якщо після змін не видно оновлень: зроби hard refresh (`Ctrl+F5`)
- Якщо ламається відображення: перевір кодування файлів (UTF-8)
