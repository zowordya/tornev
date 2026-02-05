# 🚀 Инструкция по деплою на Vercel

## Вариант 1: Через Vercel CLI (Быстрый)

### Шаг 1: Установка Vercel CLI
```bash
npm i -g vercel
```

### Шаг 2: Вход в аккаунт
```bash
vercel login
```
Откроется браузер для авторизации.

### Шаг 3: Деплой
```bash
vercel
```

Следуйте инструкциям:
- Set up and deploy? **Y**
- Which scope? Выберите ваш аккаунт
- Link to existing project? **N**
- What's your project's name? **pzt-industrial-audit** (или свое название)
- In which directory is your code located? **./**
- Want to override the settings? **N**

### Шаг 4: Production деплой
```bash
vercel --prod
```

Ваш сайт будет доступен по адресу: `https://your-project.vercel.app`

---

## Вариант 2: Через GitHub (Рекомендуется)

### Шаг 1: Создайте репозиторий на GitHub
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/ваш-username/pzt-industrial-audit.git
git push -u origin main
```

### Шаг 2: Импорт в Vercel
1. Зайдите на [vercel.com](https://vercel.com)
2. Нажмите **"Add New..."** → **"Project"**
3. Выберите **"Import Git Repository"**
4. Найдите ваш репозиторий **pzt-industrial-audit**
5. Нажмите **"Import"**

### Шаг 3: Настройки проекта
Vercel автоматически определит:
- **Framework Preset**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

Нажмите **"Deploy"**

### Шаг 4: Готово! 🎉
- Ваш сайт будет доступен по адресу: `https://your-project.vercel.app`
- Каждый push в `main` будет автоматически деплоиться
- Pull requests создают preview-деплои

---

## Настройка кастомного домена

1. В Vercel перейдите в **Settings** → **Domains**
2. Добавьте ваш домен (например, `pzt-audit.ru`)
3. Следуйте инструкциям для настройки DNS:
   - Добавьте A-запись: `76.76.21.21`
   - Или CNAME: `cname.vercel-dns.com`
4. Подождите 24-48 часов для распространения DNS

---

## Переменные окружения (если нужны)

Если в будущем понадобятся API ключи:

1. В Vercel: **Settings** → **Environment Variables**
2. Добавьте переменные:
   - `VITE_API_KEY=your_key`
   - `VITE_ANALYTICS_ID=your_id`
3. Redeploy проект

---

## Проверка перед деплоем

✅ Сборка работает локально:
```bash
npm run build
npm run preview
```

✅ Все файлы закоммичены:
```bash
git status
```

✅ Лого находится в `public/лого.png`

✅ Все зависимости установлены:
```bash
npm install
```

---

## Полезные команды

```bash
# Локальный preview production-сборки
npm run preview

# Проверка сборки
npm run build

# Удалить node_modules и переустановить
rm -rf node_modules package-lock.json
npm install

# Vercel CLI команды
vercel          # Deploy to preview
vercel --prod   # Deploy to production
vercel ls       # Список деплоев
vercel logs     # Логи последнего деплоя
```

---

## Troubleshooting

### Ошибка: "Module not found"
```bash
npm install
npm run build
```

### Ошибка: "Build failed"
Проверьте логи в Vercel Dashboard → Deployments → View Function Logs

### Изображения не загружаются
Убедитесь, что все изображения в папке `public/`

---

## 🎯 Готово к деплою!

Проект полностью настроен и готов к публикации на Vercel.
