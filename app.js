/* Self-help tool. */

const STORAGE_KEY = "selfhelp.v2";
const LANG_KEY = "selfhelp.lang";
const MOOD_MONTH_KEY = "selfhelp.moodMonth";
const MOOD_VIEW_KEY = "selfhelp.moodView";
const ROUTES = ["home", "mood", "journal", "exercises", "articles", "tests", "goals", "auth", "settings"];

const todayISO = () => new Date().toISOString().slice(0, 10);
const nowISO = () => new Date().toISOString();

// Fixed history range for the "mood" chart: 2026-01-01..2026-12-31.
const HISTORY_START_ISO = "2026-01-01";
const HISTORY_END_ISO = "2026-12-31";
const HISTORY_START_YM = "2026-01";
const HISTORY_YEAR = 2026;

const I18N = {
  ru: {
    "app.title": "Самопомощь и мотивация",
    "app.skip": "Перейти к содержимому",
    "brand.title": "Самопомощь",
    "brand.subtitle": "настроение · дневник · упражнения · цели",
    "nav.home": "Главная",
    "nav.mood": "Настроение",
    "nav.journal": "Дневник",
    "nav.exercises": "Упражнения",
    "nav.articles": "Статьи",
    "nav.tests": "Тесты",
    "nav.chat": "Запись",
    "nav.goals": "Цели",
    "nav.auth": "Вход",
    "nav.settings": "Настройки",
    "home.h1": "Поддержка, когда она нужна",
    "home.lead":
      "Этот инструмент помогает отслеживать состояние, вести заметки и поддерживать мотивацию каждый день.",
    "home.ctaMood": "Отметить настроение",
    "home.ctaJournal": "Сделать запись",
    "home.ctaArticles": "Читать статьи",
    "home.summaryAria": "Сводка на сегодня",
    "home.today": "Сегодня",
    "home.goalsFocusAria": "Фокус целей на сегодня",
    "home.quickTitle": "Быстрый чек-ин (2 минуты)",
    "home.quickDesc": "Выберите одно маленькое действие и зафиксируйте, что вы чувствуете.",
    "home.quickBtn": "Чек-ин",
    "home.relaxTitle": "Снять напряжение",
    "home.relaxDesc": "Дыхание, заземление и быстрые техники — без мистики, только практика.",
    "home.relaxBtn": "Квадратное дыхание",
    "home.motivationTitle": "Вернуть мотивацию",
    "home.motivationDesc": "Определите ценности, сформулируйте цель и сделайте следующий шаг.",
    "home.motivationBtn": "Открыть цели",
    "footer.about": "Платформа самопомощи для отслеживания настроения, ведения дневника и ежедневных практик.",
    "footer.support": "Поддержка:",
    "footer.feedback": "Обратная связь",
    "footer.contacts": "Контакты",
    "footer.terms": "Пользовательское соглашение",
    "footer.privacy": "Политика конфиденциальности",
    "auth.guest": "Гость",
    "auth.logout": "Выйти",
    "auth.title": "Регистрация и вход",
    "auth.create": "Создать аккаунт",
    "auth.signIn": "Войти",
    "common.mood": "Настроение",
    "common.energy": "Энергия",
    "common.save": "Сохранить",
    "common.hint": "Подсказка",
    "common.tip": "Подсказка",
    "common.close": "Закрыть",
    "common.ok": "Ок",
    "common.prev": "Назад",
    "common.next": "Вперёд",
    "common.open": "Открыть",
    "common.delete": "Удалить",
    "common.saved": "Сохранено",
    "common.error": "Ошибка",
    "common.done": "Готово",
    "common.success": "Успешно",
    "common.energyLower": "энергия",
    "mood.title": "Настроение",
    "mood.desc": "Отметка занимает меньше минуты. Чем честнее — тем полезнее подсказки.",
    "mood.scaleLow": "тяжело",
    "mood.scaleMid": "норм",
    "mood.scaleHigh": "хорошо",
    "mood.energyLow": "нет сил",
    "mood.energyMid": "средне",
    "mood.energyHigh": "много",
    "mood.tagsLabel": "Что влияет? (по желанию)",
    "mood.tagsPlaceholder": "сон, работа, отношения, здоровье...",
    "mood.tagsHint": "Можно через запятую. Например: сон, тревога, дедлайн.",
    "mood.noteLabel": "Короткая заметка (по желанию)",
    "mood.notePlaceholder": "Что сейчас происходит?",
    "mood.historyTitle": "История (2026)",
    "mood.chartAria": "Мини-график настроения",
    "mood.historyHint": "График строится по вашим отметкам за 2026 год.",
    "mood.trend.noData": "Пока нет данных для анализа.",
    "mood.trend.avg30": "Среднее за 30 дней",
    "mood.trend.needMore": "Нужно больше отметок, чтобы показать динамику.",
    "mood.trend.stable": "Без заметных изменений за последние 2 недели.",
    "mood.trend.better": "Стало лучше",
    "mood.trend.worse": "Стало хуже",
    "mood.trend.avgMonth": "Среднее за месяц",
    "mood.trend.betterVsPrev": "Лучше, чем прошлый месяц",
    "mood.trend.worseVsPrev": "Хуже, чем прошлый месяц",
    "mood.trend.sameVsPrev": "Почти без изменений к прошлому месяцу",
    "mood.viewYear": "2026 год",
    "mood.viewMonth": "Месяц",
    "mood.trend.avgYear": "Среднее за год",
    "mood.trend.betterVsPrevYear": "Лучше, чем прошлый год",
    "mood.trend.worseVsPrevYear": "Хуже, чем прошлый год",
    "mood.trend.sameVsPrevYear": "Почти без изменений к прошлому году",
    "mood.lastEntries": "Последние отметки",
    "journal.title": "Дневник",
    "journal.clearAll": "Удалить всё",
    "exercises.title": "Упражнения",
    "articles.title": "Статьи",
    "tests.title": "Тесты",
    "tests.desc": "Короткие опросники для самопроверки. Результаты не являются диагнозом.",
    "tests.take": "пройти тест ›",
    "tests.recoTitle": "Рекомендательный модуль",
    "tests.recoBody":
      "На основе результатов тестов и записей в дневнике система предлагает релевантные техники самопомощи. Например, при высоком балле по Шкале безнадежности Бека, система в первую очередь выдаст контакты кризисных центров и подчеркнет важность обращения к специалисту. При высоком балле по соматической шкале BAI будут предложены дыхательные упражнения.",
    "chat.title": "Запись к психологу",
    "chat.desc": "Выберите удобное время и оставьте контакт. Мы свяжемся для подтверждения.",
    "chat.badge": "Запись",
    "chat.reset": "Очистить записи",
    "chat.send": "Записаться",
    "chat.date": "Дата",
    "chat.time": "Время",
    "chat.contactLabel": "Контакт (email или телефон)",
    "chat.contactPlaceholder": "name@example.com или +7...",
    "chat.note": "Комментарий (по желанию)",
    "chat.notePlaceholder": "Коротко опишите запрос...",
    "chat.empty": "Пока нет записей.",
    "chat.saved": "Запись отправлена.",
    "chat.err.contact": "Укажите контакт для связи.",
    "chat.err.contactFormat": "Введите корректный email или телефон.",
    "chat.err.authRequired": "Чтобы записаться, сначала войдите в аккаунт.",
    "chat.err.noAccountContact": "В вашем аккаунте нет телефона или email. Добавьте контакт и повторите.",
    "chat.err.dateTime": "Укажите корректные дату и время.",
    "chat.savedLocalOnly": "Запись сохранена локально. В Supabase не записалось: ",
    "chat.placeholder": "Напишите сообщение...",
    "chat.safety": "Если вам небезопасно — обратитесь к близким и в экстренные службы вашего региона.",
    "chat.contact": "Связаться с поддержкой:",
    "goals.title": "Цели и мотивация",
    "settings.title": "Настройки",
    "settings.export": "Экспорт JSON",
    "settings.import": "Импорт JSON",
    "settings.wipe": "Удалить все данные",
    "journal.clear.confirm": "Удалить все записи дневника? Это действие нельзя отменить.",
    "journal.clear.doneTitle": "Готово",
    "journal.clear.doneBody": "Все записи дневника удалены.",
    "journal.promptTitle": "Подсказка вопроса",
    "journal.saved": "Запись дневника сохранена.",
    "journal.empty": "Записей пока нет. Начните с короткой заметки.",
    "journal.meta.feelings": "эмоции",
    "journal.meta.needs": "нужно",
    "journal.noTitle": "Без заголовка",
    "home.noGoalsHint": "Добавьте 1 цель и маленький следующий шаг — это хорошо возвращает контроль.",
    "home.todayHint.noMood": "Начните с чек-ина настроения. Это простая точка опоры для дня.",
    "home.todayHint.lowBoth": "Похоже, сейчас тяжело и мало сил. Снизьте планку: один маленький шаг + базовая забота.",
    "home.todayHint.lowMood": "Энергия есть, но эмоции тяжелые. Подойдет дневник + короткое заземление.",
    "home.todayHint.lowEnergy": "Настроение неплохое, но энергии мало. 1 задача максимум на 10-15 минут.",
    "home.todayHint.noGoals": "Сформулируйте одну цель и следующий шаг <= 15 минут.",
    "home.todayHint.goodRhythm": "Хороший ритм. Выберите один шаг по цели и отметьте выполнение.",
    "mood.saved": "Отметка настроения сохранена.",
    "mood.empty": "Пока нет отметок. Сделайте первую выше.",
    "mood.hint.lowBoth":
      "Сейчас может быть очень тяжело.\nПопробуйте: вода, 5 медленных выдохов, теплый плед.\nЗатем 3 строки в дневник: что происходит / что чувствую / что нужно.",
    "mood.hint.lowMood":
      "Снизьте требования к себе.\nВыберите одно: 10 минут прогулки, душ, легкая уборка или короткая запись в дневник.",
    "mood.hint.lowEnergy": "Сил немного.\nСделайте один маленький полезный шаг <= 15 минут и добавьте восстановление.",
    "mood.hint.good": "Хорошая точка для прогресса.\nСформулируйте конкретный следующий шаг и отметьте выполненное.",
    "goals.empty": "Пока нет целей. Добавьте одну выше и следующий шаг <= 15 минут.",
    "goals.value": "ценность",
    "goals.restore": "Вернуть",
    "goals.done": "Готово",
    "goals.nextStep": "Следующий шаг",
    "goals.obstacle": "Может помешать",
    "auth.err.name": "Имя должно быть не короче 2 символов.",
    "auth.err.email": "Введите корректный email.",
    "auth.err.password": "Пароль должен быть минимум 6 символов.",
    "auth.err.exists": "Пользователь с таким email уже существует.",
    "auth.created": "Аккаунт создан. Вы вошли в систему.",
    "auth.err.notFound": "Пользователь не найден.",
    "auth.err.wrongPassword": "Неверный пароль.",
    "auth.welcome": "С возвращением",
    "auth.logoutTitle": "Выход",
    "auth.logoutDone": "Вы вышли из аккаунта.",
    "settings.importErr": "Не удалось прочитать JSON.",
    "settings.importDoneTitle": "Импорт выполнен",
    "settings.importDoneBody": "Данные импортированы.",
    "settings.wipeTitle": "Удаление данных",
    "settings.wipeBody": "Чтобы удалить все данные, подтвердите действие в следующем окне.",
    "settings.wipeConfirm": "Точно удалить ВСЕ данные (аккаунты, настроение, дневник, цели)?",
    "settings.wipeDone": "Данные удалены.",
  },
  en: {
    "app.title": "Self-help & Motivation",
    "app.skip": "Skip to content",
    "brand.title": "Self-help",
    "brand.subtitle": "mood · journal · exercises · goals",
    "nav.home": "Home",
    "nav.mood": "Mood",
    "nav.journal": "Journal",
    "nav.exercises": "Exercises",
    "nav.articles": "Articles",
    "nav.tests": "Tests",
    "nav.chat": "Booking",
    "nav.goals": "Goals",
    "nav.auth": "Sign in",
    "nav.settings": "Settings",
    "home.h1": "Support when you need it",
    "home.lead": "Track your mood, journal your thoughts, and support your motivation every day.",
    "home.ctaMood": "Check in mood",
    "home.ctaJournal": "Write an entry",
    "home.ctaArticles": "Read articles",
    "home.summaryAria": "Today summary",
    "home.today": "Today",
    "home.goalsFocusAria": "Goals focus for today",
    "home.quickTitle": "Quick check-in (2 min)",
    "home.quickDesc": "Pick one small action and note how you feel.",
    "home.quickBtn": "Check-in",
    "home.relaxTitle": "Release tension",
    "home.relaxDesc": "Breathing, grounding, and fast techniques with practical focus.",
    "home.relaxBtn": "Box breathing",
    "home.motivationTitle": "Restore motivation",
    "home.motivationDesc": "Define values, set a goal, and take the next step.",
    "home.motivationBtn": "Open goals",
    "footer.about": "A self-help platform for mood tracking, journaling, and daily practices.",
    "footer.support": "Support:",
    "footer.feedback": "Feedback",
    "footer.contacts": "Contacts",
    "footer.terms": "User Agreement",
    "footer.privacy": "Privacy Policy",
    "auth.guest": "Guest",
    "auth.logout": "Log out",
    "auth.title": "Sign up and sign in",
    "auth.create": "Create account",
    "auth.signIn": "Sign in",
    "common.mood": "Mood",
    "common.energy": "Energy",
    "common.save": "Save",
    "common.hint": "Hint",
    "common.tip": "Tip",
    "common.close": "Close",
    "common.ok": "OK",
    "common.prev": "Prev",
    "common.next": "Next",
    "common.open": "Open",
    "common.delete": "Delete",
    "common.saved": "Saved",
    "common.error": "Error",
    "common.done": "Done",
    "common.success": "Success",
    "common.energyLower": "energy",
    "mood.title": "Mood",
    "mood.desc": "This takes less than a minute. The more honest you are, the more useful hints become.",
    "mood.scaleLow": "low",
    "mood.scaleMid": "mid",
    "mood.scaleHigh": "high",
    "mood.energyLow": "no energy",
    "mood.energyMid": "average",
    "mood.energyHigh": "high",
    "mood.tagsLabel": "What affects it? (optional)",
    "mood.tagsPlaceholder": "sleep, work, relationships, health...",
    "mood.tagsHint": "Comma-separated. Example: sleep, anxiety, deadline.",
    "mood.noteLabel": "Short note (optional)",
    "mood.notePlaceholder": "What is happening right now?",
    "mood.historyTitle": "History (2026)",
    "mood.chartAria": "Mood mini chart",
    "mood.historyHint": "The chart is built from your entries in 2026.",
    "mood.trend.noData": "Not enough data yet.",
    "mood.trend.avg30": "30-day average",
    "mood.trend.needMore": "Add more entries to see a trend.",
    "mood.trend.stable": "No noticeable change over the last two weeks.",
    "mood.trend.better": "Improved",
    "mood.trend.worse": "Got worse",
    "mood.trend.avgMonth": "Monthly average",
    "mood.trend.betterVsPrev": "Better than last month",
    "mood.trend.worseVsPrev": "Worse than last month",
    "mood.trend.sameVsPrev": "Almost no change vs last month",
    "mood.viewYear": "2026 year",
    "mood.viewMonth": "Month",
    "mood.trend.avgYear": "Year average",
    "mood.trend.betterVsPrevYear": "Better than last year",
    "mood.trend.worseVsPrevYear": "Worse than last year",
    "mood.trend.sameVsPrevYear": "Almost no change vs last year",
    "mood.lastEntries": "Latest entries",
    "journal.title": "Journal",
    "journal.clearAll": "Delete all",
    "exercises.title": "Exercises",
    "articles.title": "Articles",
    "tests.title": "Tests",
    "tests.desc": "Short self-check questionnaires. Results are not a diagnosis.",
    "tests.take": "take the test ›",
    "tests.recoTitle": "Recommendation module",
    "tests.recoBody":
      "Based on test results and journal entries, the system suggests relevant self-help techniques. For example, with a high Beck Hopelessness Scale score, the app prioritizes crisis center contacts and emphasizes reaching out to a professional. With high somatic anxiety on BAI, it suggests breathing exercises.",
    "chat.title": "Book a psychologist session",
    "chat.desc": "Choose a convenient time and leave your contact. We will confirm your appointment.",
    "chat.badge": "Booking",
    "chat.reset": "Clear bookings",
    "chat.send": "Book",
    "chat.date": "Date",
    "chat.time": "Time",
    "chat.contactLabel": "Contact (email or phone)",
    "chat.contactPlaceholder": "name@example.com or +1...",
    "chat.note": "Comment (optional)",
    "chat.notePlaceholder": "Briefly describe your request...",
    "chat.empty": "No bookings yet.",
    "chat.saved": "Booking submitted.",
    "chat.err.contact": "Please enter your contact details.",
    "chat.err.contactFormat": "Please enter a valid email or phone number.",
    "chat.err.authRequired": "Please sign in before booking.",
    "chat.err.noAccountContact": "No phone or email found in your account. Add contact info and try again.",
    "chat.err.dateTime": "Please provide a valid date and time.",
    "chat.savedLocalOnly": "Booking saved locally. Supabase sync failed: ",
    "chat.placeholder": "Type a message...",
    "chat.safety": "If you feel unsafe, contact trusted people and emergency services in your region.",
    "chat.contact": "Contact support:",
    "goals.title": "Goals and motivation",
    "settings.title": "Settings",
    "settings.export": "Export JSON",
    "settings.import": "Import JSON",
    "settings.wipe": "Delete all data",
    "journal.clear.confirm": "Delete all journal entries? This action cannot be undone.",
    "journal.clear.doneTitle": "Done",
    "journal.clear.doneBody": "All journal entries were deleted.",
    "journal.promptTitle": "Journal prompt",
    "journal.saved": "Journal entry saved.",
    "journal.empty": "No entries yet. Start with a short note.",
    "journal.meta.feelings": "feelings",
    "journal.meta.needs": "needs",
    "journal.noTitle": "Untitled",
    "home.noGoalsHint": "Add one goal and a tiny next step — it helps restore a sense of control.",
    "home.todayHint.noMood": "Start with a mood check-in. It's a simple anchor for the day.",
    "home.todayHint.lowBoth": "Looks like it's heavy and energy is low. Lower the bar: one tiny step + basic self-care.",
    "home.todayHint.lowMood": "You have energy but emotions are heavy. Try journaling + short grounding.",
    "home.todayHint.lowEnergy": "Mood is okay but energy is low. Keep it to one 10-15 minute task.",
    "home.todayHint.noGoals": "Set one goal and a next step <= 15 minutes.",
    "home.todayHint.goodRhythm": "Good rhythm. Pick one step toward your goal and mark it done.",
    "mood.saved": "Mood entry saved.",
    "mood.empty": "No entries yet. Add your first one above.",
    "mood.hint.lowBoth":
      "This may feel very hard right now.\nTry: water, 5 slow exhales, a warm blanket.\nThen write 3 lines: what happened / what I feel / what I need.",
    "mood.hint.lowMood":
      "Lower expectations for now.\nChoose one: 10-minute walk, shower, light cleanup, or a short journal note.",
    "mood.hint.lowEnergy": "Energy is low.\nDo one useful step <= 15 minutes and add recovery.",
    "mood.hint.good": "Good point for progress.\nDefine one specific next step and mark it complete.",
    "goals.empty": "No goals yet. Add one above and a next step <= 15 minutes.",
    "goals.value": "value",
    "goals.restore": "Restore",
    "goals.done": "Done",
    "goals.nextStep": "Next step",
    "goals.obstacle": "Possible obstacle",
    "auth.err.name": "Name must be at least 2 characters.",
    "auth.err.email": "Please enter a valid email.",
    "auth.err.password": "Password must be at least 6 characters.",
    "auth.err.exists": "A user with this email already exists.",
    "auth.created": "Account created. You are now signed in.",
    "auth.err.notFound": "User not found.",
    "auth.err.wrongPassword": "Wrong password.",
    "auth.welcome": "Welcome back",
    "auth.logoutTitle": "Sign out",
    "auth.logoutDone": "You signed out.",
    "settings.importErr": "Failed to read JSON.",
    "settings.importDoneTitle": "Import completed",
    "settings.importDoneBody": "Data imported.",
    "settings.wipeTitle": "Delete data",
    "settings.wipeBody": "To delete all data, confirm the action in the next dialog.",
    "settings.wipeConfirm": "Delete ALL data (accounts, mood, journal, goals)?",
    "settings.wipeDone": "Data deleted.",
  },
};

let currentLang = (localStorage.getItem(LANG_KEY) || "ru").toLowerCase();
if (!["ru", "en"].includes(currentLang)) currentLang = "ru";

function t(key) {
  return I18N[currentLang]?.[key] ?? I18N.ru[key] ?? key;
}

const STATIC_TRANSLATIONS = {
  '[data-view="journal"] .page-head p': {
    ru: "Записи помогают выгрузить мысли и увидеть повторяющиеся паттерны.",
    en: "Journal entries help unload thoughts and notice repeating patterns.",
  },
  'label[for="journalTitle"]': { ru: "Заголовок (по желанию)", en: "Title (optional)" },
  '#journalTitle': { ru: "Например: Сложный день", en: "For example: A hard day" },
  'label[for="journalText"]': { ru: "Текст", en: "Text" },
  '#journalText': { ru: "Опишите ситуацию, мысли, эмоции и что вам сейчас нужно...", en: "Describe the situation, thoughts, emotions, and what you need now..." },
  'label[for="journalFeelings"]': { ru: "Эмоции (по желанию)", en: "Feelings (optional)" },
  '#journalFeelings': { ru: "тревога, злость, грусть...", en: "anxiety, anger, sadness..." },
  'label[for="journalNeeds"]': { ru: "Потребности (по желанию)", en: "Needs (optional)" },
  '#journalNeeds': { ru: "отдых, поддержка, ясность...", en: "rest, support, clarity..." },
  '#journalForm button[type="submit"]': { ru: "Сохранить запись", en: "Save entry" },
  '#journalPrompt': { ru: "Подсказка вопроса", en: "Prompt idea" },
  '[data-view="journal"] .card-title': { ru: "Записи", en: "Entries" },
  '#journalSearch': { ru: "Поиск по записям...", en: "Search entries..." },
  '[data-view="exercises"] .page-head p': { ru: "Короткие практики: дыхание, заземление, когнитивные техники.", en: "Short practices: breathing, grounding, and cognitive techniques." },
  '[data-view="articles"] .page-head p': { ru: "Короткие материалы о тревоге, выгорании, самооценке и мотивации.", en: "Short reads about anxiety, burnout, self-esteem, and motivation." },
  '[data-view="tests"] .page-head p': { ru: "Короткие опросники для самопроверки. Результаты не являются диагнозом.", en: "Short self-check questionnaires. Results are not a diagnosis." },
  '[data-view="chat"] .page-head p': { ru: "Выберите удобное время и оставьте контакт. Мы свяжемся для подтверждения.", en: "Choose a convenient time and leave your contact. We will confirm your appointment." },
  '[data-view="goals"] .page-head p': { ru: "Сфокусируйтесь на смысле и следующем маленьком шаге.", en: "Focus on meaning and the next small step." },
  'label[for="goalTitle"]': { ru: "Цель", en: "Goal" },
  '#goalTitle': { ru: "Например: Сдать проект", en: "For example: Submit the project" },
  'label[for="goalWhy"]': { ru: "Зачем это важно? (ценность)", en: "Why is it important? (value)" },
  '#goalWhy': { ru: "Например: рост, стабильность, семья", en: "For example: growth, stability, family" },
  'label[for="goalNext"]': { ru: "Следующий шаг (<= 15 минут)", en: "Next step (<= 15 minutes)" },
  '#goalNext': { ru: "Например: написать план из 5 пунктов", en: "For example: draft a 5-point plan" },
  'label[for="goalObstacle"]': { ru: "Что может помешать?", en: "What can get in the way?" },
  '#goalObstacle': { ru: "Например: усталость, страх ошибки", en: "For example: fatigue, fear of mistakes" },
  '#goalForm button[type="submit"]': { ru: "Добавить", en: "Add" },
  '[data-view="goals"] section.card .card-title': { ru: "Мои цели", en: "My goals" },
  '[data-view="settings"] .page-head p': { ru: "Управление данными и приватностью.", en: "Data and privacy management." },
  '[data-view="settings"] section.card .card-title': { ru: "Данные", en: "Data" },
  '[data-view="settings"] .hint': { ru: "Экспорт полезен для резервной копии. Импорт перезапишет текущие данные.", en: "Export is useful for backups. Import will overwrite current data." },
  '[data-view="settings"] section.card:nth-of-type(2) .card-title': { ru: "Важно", en: "Important" },
  '[data-view="settings"] section.card:nth-of-type(2) p': { ru: "Этот инструмент не заменяет профессиональную помощь. Если вы чувствуете, что вам небезопасно — обратитесь к близким и в emergency services вашего региона.", en: "This tool does not replace professional help. If you feel unsafe, contact trusted people and emergency services in your region." },
  '[data-view="auth"] .page-head p': { ru: "Управляйте аккаунтом для персонального доступа к функциям.", en: "Manage your account for personalized access to features." },
  '#registerForm .card-title': { ru: "Регистрация", en: "Sign up" },
  'label[for="registerName"]': { ru: "Имя", en: "Name" },
  '#registerName': { ru: "Ваше имя", en: "Your name" },
  'label[for="registerPassword"]': { ru: "Пароль", en: "Password" },
  '#registerPassword': { ru: "Минимум 6 символов", en: "At least 6 characters" },
  '#loginForm .card-title': { ru: "Вход", en: "Sign in" },
  'label[for="loginPassword"]': { ru: "Пароль", en: "Password" },
  '#loginPassword': { ru: "Ваш пароль", en: "Your password" },
  '#loginForm .hint': { ru: "После входа новые записи будут сохраняться в вашем профиле.", en: "After sign in, new entries will be saved to your profile." },
  '#appointmentDate': { ru: "ДД.ММ.ГГГГ", en: "MM/DD/YYYY" },
  '#appointmentTime': { ru: "чч:мм", en: "hh:mm" },
};

function applyStaticTranslations() {
  for (const [selector, value] of Object.entries(STATIC_TRANSLATIONS)) {
    const nodes = $all(selector);
    if (!nodes.length) continue;
    const text = value[currentLang] || value.ru;
    for (const node of nodes) {
      if (
        node instanceof HTMLInputElement ||
        node instanceof HTMLTextAreaElement
      ) {
        node.setAttribute("placeholder", text);
      } else {
        node.textContent = text;
      }
    }
  }
}

function applyI18n() {
  document.documentElement.lang = currentLang;
  for (const el of $all("[data-i18n]")) {
    const k = el.getAttribute("data-i18n");
    if (!k) continue;
    el.textContent = t(k);
  }
  for (const el of $all("[data-i18n-placeholder]")) {
    const k = el.getAttribute("data-i18n-placeholder");
    if (!k) continue;
    el.setAttribute("placeholder", t(k));
  }
  for (const el of $all("[data-i18n-aria-label]")) {
    const k = el.getAttribute("data-i18n-aria-label");
    if (!k) continue;
    el.setAttribute("aria-label", t(k));
  }
  const titleEl = document.querySelector("title[data-i18n]");
  if (titleEl) document.title = t(titleEl.getAttribute("data-i18n"));
  const btn = $("#langToggle");
  if (btn) btn.textContent = currentLang === "ru" ? "EN" : "RU";
  applyStaticTranslations();
  applyDateTimeLocale();
  syncMoodMonthControls();
}

function applyDateTimeLocale() {
  const dateEl = $("#appointmentDate");
  const timeEl = $("#appointmentTime");
  const isEn = currentLang === "en";
  if (dateEl) {
    dateEl.setAttribute("lang", isEn ? "en-US" : "ru-RU");
    dateEl.setAttribute("data-locale", isEn ? "en-US" : "ru-RU");
  }
  if (timeEl) {
    timeEl.setAttribute("lang", isEn ? "en-US" : "ru-RU");
    timeEl.setAttribute("data-locale", isEn ? "en-US" : "ru-RU");
  }
}

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem(LANG_KEY, currentLang);
  applyI18n();
  renderAll();
}

function safeJsonParse(text, fallback) {
  try {
    return JSON.parse(text);
  } catch {
    return fallback;
  }
}

function loadState() {
  const raw = localStorage.getItem(STORAGE_KEY);
  const st = raw ? safeJsonParse(raw, null) : null;
  if (st && typeof st === "object") return normalizeState(st);
  return normalizeState({});
}

function normalizeState(st) {
  return {
    version: 2,
    users: Array.isArray(st.users) ? st.users : [],
    session: st.session && typeof st.session === "object" ? st.session : { userId: null },
    moodEntries: Array.isArray(st.moodEntries) ? st.moodEntries : [],
    journalEntries: Array.isArray(st.journalEntries) ? st.journalEntries : [],
    goals: Array.isArray(st.goals) ? st.goals : [],
  };
}

function saveState(nextState) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(nextState));
}

let state = loadState();

const MOSCOW_TZ = "Europe/Moscow";
const SUPABASE_URL = "https://rvywzrkeyjgvxpxixsiv.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ2eXd6cmtleWpndnhweGl4c2l2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY2ODM0MzAsImV4cCI6MjA5MjI1OTQzMH0.4czKU2X9v5Ruo98SEsG5N-hYtHsGswmfTNpXBnuJx8E";

const sb = (() => {
  const lib = window.supabase;
  if (!lib || typeof lib.createClient !== "function") return null;
  try {
    return lib.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  } catch {
    return null;
  }
})();

function isLocalhostRuntime() {
  const h = String(location.hostname || "").toLowerCase();
  return h === "localhost" || h === "127.0.0.1" || h === "::1";
}

function shouldUseLocalAuthOnly() {
  // On local dev server, prefer deterministic local auth over external API limits.
  return isLocalhostRuntime();
}

async function authGetUser() {
  if (!sb) return { data: { user: null }, error: null };
  try {
    const { data, error } = await sb.auth.getSession();
    return { data: { user: data?.session?.user || null }, error };
  } catch (e) {
    return { data: { user: null }, error: e };
  }
}

async function authSignUp(payload) {
  if (!sb) return { data: null, error: new Error("Supabase not initialized") };
  try {
    return await sb.auth.signUp(payload);
  } catch (e) {
    return { data: null, error: e };
  }
}

async function authSignInWithPassword(payload) {
  if (!sb) return { data: null, error: new Error("Supabase not initialized") };
  try {
    return await sb.auth.signInWithPassword(payload);
  } catch (e) {
    return { data: null, error: e };
  }
}

async function authSignOut() {
  if (!sb) return { error: null };
  try {
    return await sb.auth.signOut({ scope: "local" });
  } catch (e) {
    return { error: e };
  }
}

function $(sel, root = document) {
  return root.querySelector(sel);
}
function $all(sel, root = document) {
  return Array.from(root.querySelectorAll(sel));
}

function escapeHtml(str) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function fmtDateTime(iso) {
  const d = new Date(iso);
  const locale = currentLang === "en" ? "en-US" : "ru-RU";
  return d.toLocaleString(locale, {
    timeZone: MOSCOW_TZ,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function openModal(title, bodyText) {
  const modal = $("#modal");
  $("#modalTitle").textContent = title;
  $("#modalBody").textContent = bodyText;
  if (typeof modal.showModal === "function") modal.showModal();
  else alert(`${title}\n\n${bodyText}`);
}

function openModalNode(title, bodyNode) {
  const modal = $("#modal");
  $("#modalTitle").textContent = title;
  const body = $("#modalBody");
  body.textContent = "";
  body.innerHTML = "";
  body.appendChild(bodyNode);
  if (typeof modal.showModal === "function") modal.showModal();
  else alert(title);
}

function getFooterInfo(type) {
  const map = {
    ru: {
      feedback: {
        title: "Обратная связь",
        body:
          "Если хотите сообщить об ошибке, предложить улучшение или оставить отзыв, напишите на почту поддержки: PSYsupport@gmail.com\n\nМы стараемся отвечать в течение 1-3 рабочих дней.",
      },
      contacts: {
        title: "Контакты",
        body:
          "Email поддержки: PSYsupport@gmail.com\n\nПо вопросам работы сервиса, доступа к данным, ошибкам и предложениям пишите на этот адрес.",
      },
      terms: {
        title: "Пользовательское соглашение",
        body:
          "1) Сервис носит информационный характер и не заменяет профессиональную медицинскую или психологическую помощь.\n2) Пользователь самостоятельно принимает решения на основе материалов сервиса.\n3) Запрещено использовать сервис для незаконной деятельности.\n4) Функциональность сервиса может обновляться без предварительного уведомления.",
      },
      privacy: {
        title: "Политика конфиденциальности",
        body:
          "1) Сервис уделяет внимание защите персональной информации.\n2) Рекомендуем не передавать третьим лицам доступ к вашему аккаунту и устройству.\n3) Вы можете экспортировать или удалить свои данные в разделе «Настройки».\n4) Используя сервис, вы соглашаетесь с этими условиями обработки данных.",
      },
    },
    en: {
      feedback: {
        title: "Feedback",
        body:
          "If you want to report a bug, suggest improvements, or leave feedback, contact support by email: PSYsupport@gmail.com\n\nWe usually reply within 1-3 business days.",
      },
      contacts: {
        title: "Contacts",
        body:
          "Support email: PSYsupport@gmail.com\n\nFor service issues, data access questions, bugs, or suggestions, please use this address.",
      },
      terms: {
        title: "User Agreement",
        body:
          "1) This service is informational and does not replace professional medical or psychological help.\n2) Users make their own decisions based on the provided materials.\n3) Illegal use of the service is prohibited.\n4) Service functionality may be updated without prior notice.",
      },
      privacy: {
        title: "Privacy Policy",
        body:
          "1) The service is designed with personal data protection in mind.\n2) Do not share access to your account and device with third parties.\n3) You can export or delete your data in the Settings section.\n4) By using the service, you agree to these data processing terms.",
      },
    },
  };
  return map[currentLang]?.[type] || map.ru[type] || null;
}

function bindFooterInfo() {
  document.addEventListener("click", (e) => {
    const tNode = e.target;
    if (!(tNode instanceof HTMLElement)) return;
    const trigger = tNode.closest("[data-footer-info]");
    if (!(trigger instanceof HTMLElement)) return;
    const type = trigger.getAttribute("data-footer-info");
    if (!type) return;
    const info = getFooterInfo(type);
    if (!info) return;
    openModal(info.title, info.body);
  });
}

function bindModalDismiss() {
  const modal = $("#modal");
  if (!modal) return;
  // Close when clicking the backdrop (outside the modal content).
  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.close("cancel");
  });
}

const TESTS = [
  {
    id: "bdi",
    titleRu: "Тест на депрессию Аарона Бека (BDI)",
    titleEn: "Beck Depression Inventory (BDI)",
    descRu:
      "Один из первых тестов для оценки депрессии. Помогает заметить выраженность симптомов.",
    descEn: "A classic questionnaire for estimating depressive symptom severity.",
    url: "https://en.wikipedia.org/wiki/Beck_Depression_Inventory",
  },
  {
    id: "bai",
    titleRu: "Шкала тревоги Аарона Бека (BAI)",
    titleEn: "Beck Anxiety Inventory (BAI)",
    descRu: "Короткий опросник для ориентировочной оценки выраженности тревоги.",
    descEn: "A short questionnaire for estimating anxiety severity.",
    url: "https://en.wikipedia.org/wiki/Beck_Anxiety_Inventory",
  },
  {
    id: "bhs",
    titleRu: "Шкала безнадёжности Аарона Бека (BHS)",
    titleEn: "Beck Hopelessness Scale (BHS)",
    descRu: "Оценивает безнадёжность и негативные ожидания относительно будущего.",
    descEn: "Measures hopelessness and negative expectations about the future.",
    url: "https://en.wikipedia.org/wiki/Beck_Hopelessness_Scale",
  },
  {
    id: "stai-state",
    titleRu: "Шкала ситуативной тревоги Спилбергера",
    titleEn: "State Anxiety (STAI-S)",
    descRu: "Измеряет ситуативную (реактивную) тревожность в текущий момент.",
    descEn: "Measures state (reactive) anxiety right now.",
    url: "https://en.wikipedia.org/wiki/State-Trait_Anxiety_Inventory",
  },
  {
    id: "hads",
    titleRu: "Госпитальная шкала тревоги и депрессии (HADS)",
    titleEn: "Hospital Anxiety and Depression Scale (HADS)",
    descRu:
      "Быстрый скрининг тревоги и депрессии. Часто используется в медицинской практике.",
    descEn: "A quick screening tool for anxiety and depression symptoms.",
    url: "https://en.wikipedia.org/wiki/Hospital_Anxiety_and_Depression_Scale",
  },
  {
    id: "chen-attachment",
    titleRu: "Тест на тип привязанности Чен",
    titleEn: "Attachment style test (Chen)",
    descRu: "Ориентировочно помогает понять, к какому стилю привязанности вы ближе.",
    descEn: "A rough self-check to reflect on your attachment style.",
    url: "https://en.wikipedia.org/wiki/Attachment_theory",
  },
  {
    id: "stai-trait",
    titleRu: "Шкала личностной тревоги Спилбергера",
    titleEn: "Trait Anxiety (STAI-T)",
    descRu: "Измеряет устойчивую (личностную) тревожность как характеристику.",
    descEn: "Measures trait (stable) anxiety as a personality characteristic.",
    url: "https://en.wikipedia.org/wiki/State-Trait_Anxiety_Inventory",
  },
];

function screeningLabel() {
  return currentLang === "en" ? "Built-in screening" : "Встроенный скрининг";
}

function percentOf(total, max) {
  if (!max) return 0;
  return Math.round((total / max) * 100);
}

function resultGuideText(defId, levelKey, isEn) {
  if (defId === "bhs" && levelKey === "high") {
    return isEn
      ? "High hopelessness scores are a serious warning sign. Please prioritize immediate support: contact trusted people, local emergency services, or a crisis hotline."
      : "Высокий балл по безнадежности - значимый сигнал риска. В приоритете немедленная поддержка: свяжитесь с близкими, экстренными службами или кризисной линией.";
  }
  if (defId === "bai" && (levelKey === "moderate" || levelKey === "high")) {
    return isEn
      ? "Anxiety is showing up strongly in the body. Start with 2-5 minutes of slow breathing (exhale longer than inhale), then grounding through body sensations."
      : "Тревога заметно проявляется через тело. Начните с 2-5 минут медленного дыхания (выдох длиннее вдоха), затем сделайте заземление через телесные опоры.";
  }
  if (levelKey === "high") {
    return isEn
      ? "Symptoms look pronounced. It is worth discussing this with a psychologist or psychiatrist to get a proper assessment and support plan."
      : "Симптомы выражены заметно. Имеет смысл обсудить это с психологом или психиатром, чтобы получить точную оценку и план поддержки.";
  }
  if (levelKey === "moderate") {
    return isEn
      ? "There are meaningful signs of strain. Try daily self-help practices this week and recheck the test in 7-14 days."
      : "Есть заметные признаки напряжения. Попробуйте ежедневные практики самопомощи в течение недели и повторите тест через 7-14 дней.";
  }
  return isEn
    ? "Current signs are mild. Keep observation, sleep routine, and brief daily regulation practices."
    : "Текущие признаки скорее легкие. Сохраняйте наблюдение за состоянием, режим сна и короткие ежедневные практики саморегуляции.";
}

function makeLikert4Scale() {
  // 0..3
  return currentLang === "en"
    ? [
        { v: 0, label: "Not at all" },
        { v: 1, label: "Several days / a little" },
        { v: 2, label: "More than half the time" },
        { v: 3, label: "Nearly every day / a lot" },
      ]
    : [
        { v: 0, label: "Совсем нет" },
        { v: 1, label: "Немного / иногда" },
        { v: 2, label: "Часто" },
        { v: 3, label: "Почти постоянно" },
      ];
}

const BUILTIN_TESTS = {
  bdi: {
    id: "bdi",
    titleRu: "Скрининг депрессивных симптомов",
    titleEn: "Depression symptoms screening",
    introRu:
      "Оцените, как вы чувствовали себя в последние 2 недели. Это не диагноз, а ориентир.",
    introEn:
      "Rate how you felt over the last 2 weeks. This is not a diagnosis—just a guide.",
    scale: makeLikert4Scale,
    questionsRu: [
      "Сниженное настроение / грусть",
      "Потеря интереса или удовольствия",
      "Усталость, упадок сил",
      "Трудно начать дела, ощущение «нет энергии»",
      "Самокритика или чувство вины",
      "Трудно концентрироваться",
      "Изменения сна (хуже/больше обычного)",
      "Изменения аппетита (меньше/больше обычного)",
      "Мысли, что всё бессмысленно",
    ],
    questionsEn: [
      "Low mood / sadness",
      "Loss of interest or pleasure",
      "Fatigue / low energy",
      "Hard to start tasks",
      "Self-criticism or guilt",
      "Difficulty concentrating",
      "Sleep changes (worse/more than usual)",
      "Appetite changes (less/more than usual)",
      "Feeling that things are pointless",
    ],
    interpret(total, max) {
      const pct = total / max;
      if (pct < 0.2) return { level: "low", ru: "Низкая выраженность", en: "Low" };
      if (pct < 0.4) return { level: "mild", ru: "Лёгкая выраженность", en: "Mild" };
      if (pct < 0.6) return { level: "moderate", ru: "Умеренная выраженность", en: "Moderate" };
      return { level: "high", ru: "Высокая выраженность", en: "High" };
    },
  },
  bai: {
    id: "bai",
    titleRu: "Скрининг тревожных симптомов",
    titleEn: "Anxiety symptoms screening",
    introRu:
      "Оцените выраженность тревожных симптомов за последние 2 недели.",
    introEn: "Rate anxiety symptoms over the last 2 weeks.",
    scale: makeLikert4Scale,
    questionsRu: [
      "Чувство напряжения / внутренний «зажим»",
      "Навязчивые тревожные мысли",
      "Трудно расслабиться",
      "Раздражительность",
      "Ощущение, что «что-то плохое случится»",
      "Проблемы со сном из-за тревоги",
      "Сердцебиение/дрожь/потливость на фоне тревоги",
      "Избегание ситуаций из-за тревоги",
    ],
    questionsEn: [
      "Tension / feeling on edge",
      "Intrusive worrying thoughts",
      "Hard to relax",
      "Irritability",
      "Feeling that something bad will happen",
      "Sleep problems because of worry",
      "Palpitations/trembling/sweating with anxiety",
      "Avoiding situations due to anxiety",
    ],
    interpret(total, max) {
      const pct = total / max;
      if (pct < 0.2) return { level: "low", ru: "Низкая", en: "Low" };
      if (pct < 0.45) return { level: "mild", ru: "Лёгкая", en: "Mild" };
      if (pct < 0.65) return { level: "moderate", ru: "Умеренная", en: "Moderate" };
      return { level: "high", ru: "Высокая", en: "High" };
    },
  },
  bhs: {
    id: "bhs",
    titleRu: "Скрининг безнадёжности",
    titleEn: "Hopelessness screening",
    introRu:
      "Оцените, насколько эти мысли были вам близки в последние 2 недели.",
    introEn: "Rate how true these felt in the last 2 weeks.",
    scale: makeLikert4Scale,
    questionsRu: [
      "Мне трудно представить хорошее будущее",
      "Я часто думаю, что ничего не изменится",
      "Я сомневаюсь, что мои усилия что-то дадут",
      "Мне кажется, что у меня мало контроля над жизнью",
      "Я редко жду хороших новостей",
      "Мне трудно видеть смысл в целях",
    ],
    questionsEn: [
      "It's hard to imagine a good future",
      "I often think nothing will change",
      "I doubt my efforts will help",
      "I feel I have little control over life",
      "I rarely expect good news",
      "It's hard to see meaning in goals",
    ],
    interpret(total, max) {
      const pct = total / max;
      if (pct < 0.25) return { level: "low", ru: "Низкая", en: "Low" };
      if (pct < 0.5) return { level: "mild", ru: "Средняя", en: "Medium" };
      return { level: "high", ru: "Высокая", en: "High" };
    },
  },
  hads: {
    id: "hads",
    titleRu: "Скрининг тревоги и депрессии (2 шкалы)",
    titleEn: "Anxiety & depression screening (2 subscales)",
    introRu:
      "Оцените состояние за последние 2 недели. Будут две подшкалы: тревога и депрессия.",
    introEn:
      "Rate the last 2 weeks. You'll get two subscales: anxiety and depression.",
    scale: makeLikert4Scale,
    questionsRu: [
      { key: "a", text: "Я чувствую напряжение или беспокойство" },
      { key: "d", text: "Мне трудно получать удовольствие от привычных вещей" },
      { key: "a", text: "Мне сложно остановить поток тревожных мыслей" },
      { key: "d", text: "Я чувствую упадок сил" },
      { key: "a", text: "Я избегаю ситуаций из-за тревоги" },
      { key: "d", text: "Я часто обесцениваю себя" },
      { key: "a", text: "Мне трудно расслабиться" },
      { key: "d", text: "Мне трудно сохранять интерес к делам" },
    ],
    questionsEn: [
      { key: "a", text: "I feel tense or worried" },
      { key: "d", text: "It's hard to enjoy usual things" },
      { key: "a", text: "I can't stop worrying thoughts" },
      { key: "d", text: "I feel low energy" },
      { key: "a", text: "I avoid situations due to anxiety" },
      { key: "d", text: "I often devalue myself" },
      { key: "a", text: "It's hard to relax" },
      { key: "d", text: "It's hard to stay interested in tasks" },
    ],
    interpretSub(total, max) {
      const pct = total / max;
      if (pct < 0.25) return { ru: "низкая", en: "low" };
      if (pct < 0.5) return { ru: "лёгкая", en: "mild" };
      if (pct < 0.7) return { ru: "умеренная", en: "moderate" };
      return { ru: "высокая", en: "high" };
    },
  },
  "stai-state": {
    id: "stai-state",
    titleRu: "Ситуативная тревога (сейчас)",
    titleEn: "State anxiety (right now)",
    introRu:
      "Оцените, что вы чувствуете прямо сейчас или в течение последнего часа.",
    introEn: "Rate how you feel right now / in the last hour.",
    scale() {
      // 1..4 in classic STAI, but we'll keep 0..3 for consistency
      return makeLikert4Scale();
    },
    questionsRu: ["Я напряжён(а)", "Я беспокоюсь", "Мне трудно успокоиться", "Я чувствую внутреннюю дрожь", "Я насторожен(а)"],
    questionsEn: ["I feel tense", "I feel worried", "Hard to calm down", "I feel jittery", "I feel alert/on guard"],
    interpret(total, max) {
      const pct = total / max;
      if (pct < 0.25) return { level: "low", ru: "Низкая", en: "Low" };
      if (pct < 0.55) return { level: "moderate", ru: "Умеренная", en: "Moderate" };
      return { level: "high", ru: "Высокая", en: "High" };
    },
  },
  "stai-trait": {
    id: "stai-trait",
    titleRu: "Личностная тревожность (обычно)",
    titleEn: "Trait anxiety (usually)",
    introRu: "Оцените, насколько это обычно про вас.",
    introEn: "Rate how typical this is for you.",
    scale: makeLikert4Scale,
    questionsRu: ["Я часто заранее переживаю", "Мне трудно переносить неопределённость", "Я часто ожидаю худшего", "Мне сложно отпускать контроль", "Я легко пугаюсь"],
    questionsEn: ["I often worry in advance", "Uncertainty is hard for me", "I often expect the worst", "I struggle to let go of control", "I get startled easily"],
    interpret(total, max) {
      const pct = total / max;
      if (pct < 0.25) return { level: "low", ru: "Низкая", en: "Low" };
      if (pct < 0.55) return { level: "moderate", ru: "Умеренная", en: "Moderate" };
      return { level: "high", ru: "Высокая", en: "High" };
    },
  },
  "chen-attachment": {
    id: "chen-attachment",
    titleRu: "Стили привязанности (скрининг)",
    titleEn: "Attachment styles (screening)",
    introRu:
      "Отметьте, насколько утверждения про вас в отношениях. Результат — ориентир, не «ярлык».",
    introEn:
      "Rate how true these are for you in relationships. It's a guide, not a label.",
    scale: makeLikert4Scale,
    // higher = more insecure; we also compute leaning to anxious vs avoidant
    questionsRu: [
      { key: "anx", text: "Мне важно постоянное подтверждение, что меня любят" },
      { key: "anx", text: "Я боюсь, что меня бросят" },
      { key: "avo", text: "Мне сложно просить поддержку" },
      { key: "avo", text: "Я предпочитаю держать дистанцию, когда мне тяжело" },
      { key: "anx", text: "Я сильно переживаю, если человек отвечает не сразу" },
      { key: "avo", text: "Мне комфортнее полагаться на себя, чем на партнёра" },
    ],
    questionsEn: [
      { key: "anx", text: "I need frequent reassurance that I'm loved" },
      { key: "anx", text: "I fear being abandoned" },
      { key: "avo", text: "It's hard to ask for support" },
      { key: "avo", text: "I prefer distance when I'm stressed" },
      { key: "anx", text: "I get very anxious when replies are delayed" },
      { key: "avo", text: "I feel safer relying on myself than on a partner" },
    ],
  },
};

function getBuiltinTest(id) {
  return BUILTIN_TESTS[id] || null;
}

const APPOINTMENT_KEY = "selfhelp.appointments.v1";

function loadAppointments() {
  const raw = localStorage.getItem(APPOINTMENT_KEY);
  const parsed = raw ? safeJsonParse(raw, null) : null;
  if (!Array.isArray(parsed)) return [];
  return parsed.filter((x) => x && typeof x === "object").slice(0, 300);
}

function saveAppointments(items) {
  localStorage.setItem(APPOINTMENT_KEY, JSON.stringify(items.slice(0, 300)));
}

function myAppointments() {
  const owner = currentOwnerId();
  return loadAppointments()
    .filter((x) => (x.ownerId || "guest") === owner)
    .sort((a, b) => (a.appointmentAt > b.appointmentAt ? 1 : -1));
}

async function saveAppointmentToSupabase(item) {
  if (!sb) return { ok: false, message: "Supabase client is not initialized." };
  const rpcAttempt = await sb.rpc("create_appointment", {
    p_appointment_at: item.appointmentAt,
    p_contact: item.contact,
    p_note: item.note || null,
  });
  if (!rpcAttempt.error) return { ok: true };
  return { ok: false, message: rpcAttempt.error.message };
}

async function getAccountContactStrict() {
  if (!sb) return { user: null, contact: "" };
  try {
    const {
      data: { user },
    } = await authGetUser();
    if (!user) return { user: null, contact: "" };
    const phone = String(user.phone || user.user_metadata?.phone || "").trim();
    const email = String(user.email || "").trim();
    return { user, contact: phone || email || "" };
  } catch {
    return { user: null, contact: "" };
  }
}

function getSessionContact() {
  return String(state?.session?.userPhone || state?.session?.userEmail || "").trim();
}

function parseAppointmentDateTime(day, tm) {
  const rawDay = String(day || "").trim();
  const rawTime = String(tm || "").trim();
  if (!rawDay || !rawTime) return null;

  let normalizedDay = rawDay;
  if (/^\d{2}\.\d{2}\.\d{4}$/.test(rawDay)) {
    const [dd, mm, yyyy] = rawDay.split(".");
    normalizedDay = `${yyyy}-${mm}-${dd}`;
  }
  if (!/^\d{4}-\d{2}-\d{2}$/.test(normalizedDay)) return null;
  if (!/^\d{2}:\d{2}$/.test(rawTime)) return null;

  const dateObj = new Date(`${normalizedDay}T${rawTime}:00`);
  if (Number.isNaN(dateObj.getTime())) return null;
  return dateObj.toISOString();
}

function isValidContact(value) {
  const v = String(value || "").trim();
  if (!v) return false;
  const emailRe = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  const phoneRe = /^\+?[0-9][0-9\-\s()]{7,}$/;
  return emailRe.test(v) || phoneRe.test(v);
}

function renderChat() {
  const wrap = $("#chatMessages");
  if (!wrap) return;
  const items = myAppointments();
  if (!items.length) {
    wrap.innerHTML = `<div class="hint">${escapeHtml(t("chat.empty"))}</div>`;
    return;
  }

  wrap.innerHTML = "";
  for (const item of items) {
    const node = document.createElement("div");
    node.className = "item";
    const dateText = fmtDateTime(item.appointmentAt);
    node.innerHTML = `
      <div class="item-head">
        <div>
          <div class="item-title">${escapeHtml(dateText)}</div>
          <div class="item-meta">${escapeHtml(item.contact || "")}</div>
        </div>
      </div>
      ${item.note ? `<div class="item-body">${escapeHtml(item.note)}</div>` : ""}
    `;
    wrap.appendChild(node);
  }
}

function bindChat() {
  const form = $("#chatForm");
  const reset = $("#chatReset");
  const dateEl = $("#appointmentDate");
  const timeEl = $("#appointmentTime");
  const contactEl = $("#appointmentContact");
  const noteEl = $("#appointmentNote");
  if (!form || !reset || !dateEl || !timeEl || !contactEl || !noteEl) return;
  contactEl.readOnly = false;

  const fillContactFromUser = () => {
    contactEl.value = getSessionContact();
  };

  fillContactFromUser();

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const day = String(dateEl.value || "").trim();
    const tm = String(timeEl.value || "").trim();
    const info = await getAccountContactStrict();
    if (!info.user) return openModal(t("common.error"), t("chat.err.authRequired"));
    const contact = String(info.contact || "").trim().slice(0, 120);
    const note = String(noteEl.value || "").trim().slice(0, 800);
    if (!contact) return openModal(t("common.error"), t("chat.err.noAccountContact"));
    if (!isValidContact(contact)) return openModal(t("common.error"), t("chat.err.contactFormat"));
    const appointmentAt = parseAppointmentDateTime(day, tm);
    if (!appointmentAt) return openModal(t("common.error"), t("chat.err.dateTime"));

    const next = loadAppointments();
    next.push({
      id: crypto.randomUUID ? crypto.randomUUID() : String(Math.random()).slice(2),
      ownerId: currentOwnerId(),
      contact,
      note,
      appointmentAt,
      createdAt: nowISO(),
    });
    saveAppointments(next);
    form.reset();
    renderChat();
    const sync = await saveAppointmentToSupabase({
      contact,
      note,
      appointmentAt,
    });
    if (!sync.ok) {
      openModal(t("common.done"), `${t("chat.savedLocalOnly")}${sync.message}`);
      return;
    }
    openModal(t("common.done"), t("chat.saved"));
  });

  reset.addEventListener("click", () => {
    const owner = currentOwnerId();
    const rest = loadAppointments().filter((x) => (x.ownerId || "guest") !== owner);
    saveAppointments(rest);
    renderChat();
  });

}

function renderBuiltinTestRunner(testId) {
  const def = getBuiltinTest(testId);
  if (!def) return null;

  const isEn = currentLang === "en";
  const title = isEn ? def.titleEn : def.titleRu;
  const intro = isEn ? def.introEn : def.introRu;
  const scale = (typeof def.scale === "function" ? def.scale() : makeLikert4Scale()) || makeLikert4Scale();

  const wrap = document.createElement("div");

  const top = document.createElement("div");
  top.className = "test-runner-top";
  top.innerHTML = `
    <div class="chip">${escapeHtml(screeningLabel())}</div>
    <div class="hint" style="margin-top:10px">${escapeHtml(intro)}</div>
    <div class="divider"></div>
  `;
  wrap.appendChild(top);

  const form = document.createElement("form");
  form.className = "test-runner-form";

  const questions = isEn ? def.questionsEn : def.questionsRu;
  const qArr = Array.isArray(questions) ? questions : [];

  const qWrap = document.createElement("div");
  qWrap.className = "test-q-list";

  qArr.forEach((q, idx) => {
    const qText = typeof q === "string" ? q : q.text;
    const qKey = typeof q === "string" ? "main" : q.key || "main";

    const block = document.createElement("div");
    block.className = "test-q card";
    block.setAttribute("data-qkey", qKey);
    block.innerHTML = `<div class="test-q-title">${escapeHtml(String(idx + 1))}. ${escapeHtml(qText)}</div>`;

    const options = document.createElement("div");
    options.className = "test-q-options";

    scale.forEach((opt) => {
      const id = `t_${def.id}_${idx}_${opt.v}`;
      const label = document.createElement("label");
      label.className = "test-opt";
      label.setAttribute("for", id);
      label.innerHTML = `
        <input id="${escapeHtml(id)}" type="radio" name="q_${idx}" value="${escapeHtml(String(opt.v))}" />
        <span>${escapeHtml(opt.label)}</span>
      `;
      options.appendChild(label);
    });

    block.appendChild(options);
    qWrap.appendChild(block);
  });

  const questionsShell = document.createElement("div");
  questionsShell.className = "test-runner-questions-shell";
  questionsShell.appendChild(qWrap);

  const actions = document.createElement("div");
  actions.className = "actions";
  actions.style.marginTop = "12px";

  const submit = document.createElement("button");
  submit.className = "btn primary";
  submit.type = "submit";
  submit.textContent = isEn ? "Calculate result" : "Посчитать результат";

  const reset = document.createElement("button");
  reset.className = "btn";
  reset.type = "button";
  reset.textContent = isEn ? "Reset" : "Сбросить";
  reset.addEventListener("click", () => {
    form.reset();
    top.hidden = false;
    questionsShell.hidden = false;
    result.textContent = "";
    result.innerHTML = "";
    result.style.marginTop = "12px";
    const modalTitle = $("#modalTitle");
    if (modalTitle) modalTitle.textContent = title;
  });

  actions.appendChild(submit);
  actions.appendChild(reset);
  questionsShell.appendChild(actions);
  form.appendChild(questionsShell);

  const result = document.createElement("div");
  result.className = "test-result";
  result.style.marginTop = "12px";
  form.appendChild(result);

  const enterTestResultPhase = () => {
    top.hidden = true;
    questionsShell.hidden = true;
    result.style.marginTop = "0";
    const modalTitle = $("#modalTitle");
    if (modalTitle) modalTitle.textContent = isEn ? "Result" : "Результат";
    const modalBody = $("#modalBody");
    if (modalBody) modalBody.scrollTop = 0;
  };

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const answers = [];
    for (let i = 0; i < qArr.length; i++) {
      const v = form.querySelector(`input[name="q_${i}"]:checked`);
      answers.push(v ? Number(v.value) : null);
    }
    if (answers.some((x) => x === null)) {
      result.textContent = isEn ? "Please answer all questions." : "Пожалуйста, ответьте на все вопросы.";
      return;
    }

    enterTestResultPhase();

    const max = qArr.length * Math.max(...scale.map((s) => Number(s.v)));

    // compute
    if (def.id === "hads") {
      let a = 0;
      let d = 0;
      qArr.forEach((q, i) => {
        const key = typeof q === "string" ? "main" : q.key;
        if (key === "a") a += answers[i];
        else d += answers[i];
      });
      const perMax = (qArr.length / 2) * Math.max(...scale.map((s) => Number(s.v)));
      const ia = def.interpretSub(a, perMax);
      const idp = def.interpretSub(d, perMax);
      const aPct = percentOf(a, perMax);
      const dPct = percentOf(d, perMax);
      result.innerHTML = `
        <div class="card">
          <div class="card-title">${escapeHtml(isEn ? "Result" : "Результат")}</div>
          <div class="item-body">${escapeHtml(isEn ? "Anxiety" : "Тревога")}: <b>${escapeHtml(String(a))}</b> / ${escapeHtml(String(perMax))} — ${escapeHtml(isEn ? ia.en : ia.ru)}</div>
          <div class="item-body">${escapeHtml(isEn ? "Depression" : "Депрессия")}: <b>${escapeHtml(String(d))}</b> / ${escapeHtml(String(perMax))} — ${escapeHtml(isEn ? idp.en : idp.ru)}</div>
          <div class="item-body">${escapeHtml(isEn ? "Profile" : "Профиль")}: ${escapeHtml(isEn ? "anxiety" : "тревога")} <b>${escapeHtml(String(aPct))}%</b>, ${escapeHtml(isEn ? "depression" : "депрессия")} <b>${escapeHtml(String(dPct))}%</b>.</div>
          <div class="item-body">${escapeHtml(
            isEn
              ? "If one of the scales is moderate/high, consider adding regular grounding and discussing symptoms with a specialist."
              : "Если одна из шкал в умеренной/высокой зоне, добавьте регулярные техники стабилизации и обсудите симптомы со специалистом."
          )}</div>
          <div class="hint">${escapeHtml(isEn ? "This is a screening result, not a diagnosis." : "Это скрининг-результат, не диагноз.")}</div>
        </div>
      `;
      return;
    }

    if (def.id === "chen-attachment") {
      let anx = 0;
      let avo = 0;
      qArr.forEach((q, i) => {
        const key = typeof q === "string" ? "main" : q.key;
        if (key === "anx") anx += answers[i];
        if (key === "avo") avo += answers[i];
      });
      const perMax = (qArr.length / 2) * Math.max(...scale.map((s) => Number(s.v)));
      const anxPct = anx / perMax;
      const avoPct = avo / perMax;
      const anxPctInt = Math.round(anxPct * 100);
      const avoPctInt = Math.round(avoPct * 100);
      const label =
        anxPct < 0.35 && avoPct < 0.35
          ? (isEn ? "More secure leaning" : "Больше похоже на надёжный стиль")
          : anxPct >= avoPct
            ? (isEn ? "More anxious leaning" : "Больше тревожный уклон")
            : (isEn ? "More avoidant leaning" : "Больше избегающий уклон");
      result.innerHTML = `
        <div class="card">
          <div class="card-title">${escapeHtml(isEn ? "Result" : "Результат")}</div>
          <div class="item-body">${escapeHtml(isEn ? "Anxious" : "Тревожный")}: <b>${escapeHtml(String(anx))}</b> / ${escapeHtml(String(perMax))}</div>
          <div class="item-body">${escapeHtml(isEn ? "Avoidant" : "Избегающий")}: <b>${escapeHtml(String(avo))}</b> / ${escapeHtml(String(perMax))}</div>
          <div class="item-body"><b>${escapeHtml(label)}</b></div>
          <div class="item-body">${escapeHtml(isEn ? "Profile" : "Профиль")}: ${escapeHtml(isEn ? "anxious" : "тревожный")} <b>${escapeHtml(String(anxPctInt))}%</b>, ${escapeHtml(isEn ? "avoidant" : "избегающий")} <b>${escapeHtml(String(avoPctInt))}%</b>.</div>
          <div class="item-body">${escapeHtml(
            isEn
              ? "Use this as a direction for reflection: notice repeated triggers in relationships and practice clear requests for support."
              : "Используйте это как ориентир для рефлексии: замечайте повторяющиеся триггеры в отношениях и тренируйте ясные просьбы о поддержке."
          )}</div>
          <div class="hint">${escapeHtml(isEn ? "This is a screening result, not a diagnosis." : "Это скрининг-результат, не диагноз.")}</div>
        </div>
      `;
      return;
    }

    const total = answers.reduce((s, x) => s + x, 0);
    const interp = def.interpret ? def.interpret(total, max) : null;
    const levelText = interp ? (isEn ? interp.en : interp.ru) : "";
    const levelKey = interp?.level || "";
    const pct = percentOf(total, max);
    const guide = resultGuideText(def.id, levelKey, isEn);

    result.innerHTML = `
      <div class="card">
        <div class="card-title">${escapeHtml(isEn ? "Result" : "Результат")}</div>
        <div class="item-body"><b>${escapeHtml(String(total))}</b> / ${escapeHtml(String(max))}${levelText ? ` — <b>${escapeHtml(levelText)}</b>` : ""}</div>
        <div class="item-body">${escapeHtml(isEn ? "Relative intensity" : "Относительная выраженность")}: <b>${escapeHtml(String(pct))}%</b></div>
        <div class="item-body">${escapeHtml(guide)}</div>
        <div class="hint">${escapeHtml(isEn ? "This is a screening result, not a diagnosis." : "Это скрининг-результат, не диагноз.")}</div>
      </div>
    `;
  });

  wrap.appendChild(form);
  return { title, node: wrap };
}

function getCurrentUser() {
  if (!state.session?.userId) return null;
  return {
    id: state.session.userId,
    name: state.session.userName || state.session.userEmail || "User",
    email: state.session.userEmail || "",
  };
}

function currentOwnerId() {
  const u = getCurrentUser();
  return u ? u.id : "guest";
}

function myMoodEntries() {
  const owner = currentOwnerId();
  return state.moodEntries.filter((x) => (x.ownerId || "guest") === owner);
}

function myJournalEntries() {
  const owner = currentOwnerId();
  return state.journalEntries.filter((x) => (x.ownerId || "guest") === owner);
}

function myGoals() {
  const owner = currentOwnerId();
  return state.goals.filter((x) => (x.ownerId || "guest") === owner);
}

async function sha256(text) {
  const msgUint8 = new TextEncoder().encode(text);
  const hashBuffer = await crypto.subtle.digest("SHA-256", msgUint8);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
}

function findLocalUserByEmail(email) {
  const normalized = String(email || "").trim().toLowerCase();
  return state.users.find((u) => String(u.email || "").toLowerCase() === normalized) || null;
}

function makeLocalUserId() {
  if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") {
    return `local-${crypto.randomUUID()}`;
  }
  return `local-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
}

async function upsertLocalUser({ name, email, password }) {
  const normalizedEmail = String(email || "").trim().toLowerCase();
  const passwordHash = await sha256(String(password || ""));
  let user = findLocalUserByEmail(normalizedEmail);
  if (!user) {
    user = {
      id: makeLocalUserId(),
      name: String(name || normalizedEmail || "User").trim() || "User",
      email: normalizedEmail,
      passwordHash,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    state.users.push(user);
  } else {
    user.name = String(name || user.name || normalizedEmail || "User").trim() || "User";
    user.passwordHash = passwordHash;
    user.updatedAt = new Date().toISOString();
  }
  saveState(state);
  return user;
}

async function localRegister({ name, email, password }) {
  const normalizedEmail = String(email || "").trim().toLowerCase();
  if (findLocalUserByEmail(normalizedEmail)) {
    return { data: null, error: new Error(t("auth.err.exists")) };
  }
  const user = await upsertLocalUser({ name, email: normalizedEmail, password });
  return { data: { user }, error: null };
}

async function localLogin({ email, password }) {
  const normalizedEmail = String(email || "").trim().toLowerCase();
  const user = findLocalUserByEmail(normalizedEmail);
  if (!user) return { data: null, error: new Error(t("auth.err.notFound")) };
  const passwordHash = await sha256(String(password || ""));
  if (user.passwordHash !== passwordHash) {
    return { data: null, error: new Error(t("auth.err.wrongPassword")) };
  }
  return { data: { user }, error: null };
}

function refreshAuthUi() {
  const user = getCurrentUser();
  $("#authStatus").textContent = user ? `${user.name}` : t("auth.guest");
  $("#logoutBtn").hidden = !user;
}

async function syncAuthFromSupabase({ clearOnMissing = false } = {}) {
  if (!sb) return;
  try {
    const { data } = await authGetUser();
    const u = data?.user || null;
    if (!u) {
      if (clearOnMissing && state.session?.userId) {
        state.session.userId = null;
        state.session.userName = null;
        state.session.userEmail = null;
        state.session.userPhone = null;
        saveState(state);
      }
      refreshAuthUi();
      return;
    }
    state.session.userId = u.id;
    state.session.userName = u.user_metadata?.display_name || u.email || "User";
    state.session.userEmail = u.email || "";
    state.session.userPhone = u.phone || u.user_metadata?.phone || "";
    saveState(state);
    refreshAuthUi();
  } catch {
    // no-op
  }
}

async function ensureConnectionForCurrentUser() {
  if (!sb) return;
  try {
    const { data } = await authGetUser();
    const u = data?.user || null;
    if (!u) return;

    const payload = {
      user_id: u.id,
      provider: "email",
      external_account_id: u.id,
      status: "active",
      metadata: {
        source: "web",
        email: u.email || null,
      },
      access_token: null,
      refresh_token: null,
      token_expires_at: null,
    };

    const { error } = await sb.from("connections").upsert(payload, {
      onConflict: "user_id,provider,external_account_id",
    });
    if (error) throw error;
  } catch (e) {
    // Keep auth UX uninterrupted; row can be written on next successful sign in.
    console.warn("connections upsert failed:", e?.message || e);
  }
}

function routeTo(route) {
  const target = ROUTES.includes(route) ? route : "home";
  for (const v of $all(".route")) v.hidden = v.dataset.view !== target;
  for (const btn of $all(".nav-link")) btn.classList.toggle("active", btn.dataset.route === target);
  history.replaceState(null, "", `#${target}`);
  $("#main")?.focus?.();
}

function bindRouting() {
  document.addEventListener("click", (e) => {
    const t = e.target;
    if (!(t instanceof HTMLElement)) return;
    const routeNode = t.closest("[data-route]");
    if (!(routeNode instanceof HTMLElement)) return;
    const r = routeNode.getAttribute("data-route");
    if (!r) return;
    e.preventDefault();
    routeTo(r);
  });
  window.addEventListener("hashchange", () => routeTo((location.hash || "#home").slice(1)));
}

function getLastMoodForDay(day) {
  const entries = myMoodEntries()
    .filter((x) => x.day === day)
    .sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));
  return entries[0] || null;
}

function renderHome() {
  const day = todayISO();
  const m = getLastMoodForDay(day);
  $("#todayMoodValue").textContent = m ? String(m.moodScore) : "—";
  $("#todayEnergyValue").textContent = m ? String(m.energyScore) : "—";

  const list = $("#todayGoalsList");
  list.innerHTML = "";
  const activeGoals = myGoals().filter((g) => !g.done).slice(0, 3);
  if (activeGoals.length === 0) {
    list.innerHTML = `<div class="hint">${escapeHtml(t("home.noGoalsHint"))}</div>`;
  } else {
    for (const g of activeGoals) {
      const pill = document.createElement("div");
      pill.className = "pill";
      pill.textContent = g.title;
      list.appendChild(pill);
    }
  }
  $("#todayHint").textContent = buildTodayHint(m, activeGoals.length);
}

function buildTodayHint(mood, goalsCount) {
  if (!mood) return t("home.todayHint.noMood");
  const ms = mood.moodScore;
  const es = mood.energyScore;
  if (ms <= 4 && es <= 4) return t("home.todayHint.lowBoth");
  if (ms <= 4 && es >= 6) return t("home.todayHint.lowMood");
  if (ms >= 7 && es <= 4) return t("home.todayHint.lowEnergy");
  if (goalsCount === 0) return t("home.todayHint.noGoals");
  return t("home.todayHint.goodRhythm");
}

function bindMood() {
  const moodScore = $("#moodScore");
  const energyScore = $("#energyScore");
  const moodOut = $("#moodScoreOut");
  const energyOut = $("#energyScoreOut");
  const updateOut = () => {
    moodOut.textContent = moodScore.value;
    energyOut.textContent = energyScore.value;
  };
  moodScore.addEventListener("input", updateOut);
  energyScore.addEventListener("input", updateOut);
  updateOut();

  $("#moodQuickHelp").addEventListener("click", () => {
    openModal(t("common.tip"), moodHint(Number(moodScore.value), Number(energyScore.value)));
  });

  $("#moodForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const tags = ($("#moodTags").value || "")
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean)
      .slice(0, 12);
    const entry = {
      id: crypto.randomUUID ? crypto.randomUUID() : String(Math.random()).slice(2),
      ownerId: currentOwnerId(),
      createdAt: nowISO(),
      day: todayISO(),
      moodScore: Number(moodScore.value),
      energyScore: Number(energyScore.value),
      tags,
      note: String($("#moodNote").value || "").slice(0, 800),
    };
    state.moodEntries.unshift(entry);
    state.moodEntries = state.moodEntries.slice(0, 280);
    saveState(state);
    $("#moodNote").value = "";
    $("#moodTags").value = "";
    renderAll();
    openModal(t("common.saved"), t("mood.saved"));
  });
}

function moodHint(ms, es) {
  if (ms <= 3 && es <= 3) return t("mood.hint.lowBoth");
  if (ms <= 4) return t("mood.hint.lowMood");
  if (es <= 4) return t("mood.hint.lowEnergy");
  return t("mood.hint.good");
}

function renderMood() {
  const list = $("#moodList");
  const entries = myMoodEntries().slice(0, 12);
  list.innerHTML = entries.length ? "" : `<div class="hint">${escapeHtml(t("mood.empty"))}</div>`;
  for (const e of entries) {
    const tags = e.tags?.length ? e.tags.map((t) => `<span class="chip">${escapeHtml(t)}</span>`).join(" ") : "";
    const node = document.createElement("div");
    node.className = "item";
    node.innerHTML = `
      <div class="item-head">
        <div>
          <div class="item-title">${escapeHtml(t("common.mood"))} ${e.moodScore}/10 · ${escapeHtml(t("common.energyLower"))} ${e.energyScore}/10</div>
          <div class="item-meta">${escapeHtml(fmtDateTime(e.createdAt))}</div>
        </div>
        <button class="btn small danger" data-del-mood="${escapeHtml(e.id)}" type="button">${escapeHtml(t("common.delete"))}</button>
      </div>
      ${tags ? `<div class="item-actions">${tags}</div>` : ""}
      ${e.note ? `<div class="item-body">${escapeHtml(e.note)}</div>` : ""}
    `;
    list.appendChild(node);
  }

  syncMoodMonthControls();
  const chart = $("#moodChart");
  const trendEl = $("#moodTrend");
  if (!chart) return;

  const avg = (arr) => (arr.length ? arr.reduce((a, b) => a + b, 0) / arr.length : 0);

  if (moodView === "year") {
    const year = HISTORY_YEAR;
    const months = yearMonthKeys(year);
    chart.innerHTML = "";
    chart.style.gridTemplateColumns = `repeat(12,1fr)`;

    const monthAverages = [];
    for (const mk of months) {
      const days = monthDays(mk);
      const scores = [];
      for (const day of days) {
        const m = getLastMoodForDay(day);
        if (m) scores.push(m.moodScore);
      }
      const a = avg(scores);
      if (scores.length) monthAverages.push(a);
      const h = scores.length ? Math.round((a / 10) * 100) : 0;
      const bar = document.createElement("div");
      bar.className = "bar";
      bar.setAttribute("data-mood-month", mk);
      bar.innerHTML = `<i style="height:${h}%"></i><em>${escapeHtml(mk.slice(5))}</em><b>${scores.length ? escapeHtml(a.toFixed(1)) : "—"}</b>`;
      chart.appendChild(bar);
    }

    if (trendEl) {
      const avgYear = avg(monthAverages);
      // Compare with previous year if any data
      const prevMonths = yearMonthKeys(year - 1);
      const prevMonthAverages = [];
      for (const mk of prevMonths) {
        const days = monthDays(mk);
        const scores = [];
        for (const day of days) {
          const m = getLastMoodForDay(day);
          if (m) scores.push(m.moodScore);
        }
        if (scores.length) prevMonthAverages.push(avg(scores));
      }
      const avgPrevYear = avg(prevMonthAverages);

      if (monthAverages.length === 0) {
        trendEl.textContent = t("mood.trend.noData");
      } else if (prevMonthAverages.length < 2) {
        trendEl.textContent = `${t("mood.trend.avgYear")}: ${avgYear.toFixed(1)}/10. ${t("mood.trend.needMore")}`;
      } else {
        const diff = avgYear - avgPrevYear;
        const abs = Math.abs(diff);
        if (abs < 0.3) {
          trendEl.textContent = `${t("mood.trend.avgYear")}: ${avgYear.toFixed(1)}/10. ${t("mood.trend.sameVsPrevYear")}`;
        } else if (diff > 0) {
          trendEl.textContent = `${t("mood.trend.avgYear")}: ${avgYear.toFixed(1)}/10. ${t("mood.trend.betterVsPrevYear")}: +${abs.toFixed(1)}`;
        } else {
          trendEl.textContent = `${t("mood.trend.avgYear")}: ${avgYear.toFixed(1)}/10. ${t("mood.trend.worseVsPrevYear")}: -${abs.toFixed(1)}`;
        }
      }
    }
    return;
  }

  // Month view (selected month)
  const days = monthDays(selectedMoodMonth);
  const today = todayISO();
  chart.innerHTML = "";
  chart.style.gridTemplateColumns = `repeat(${days.length},1fr)`;
  const moodScores = [];
  for (const day of days) {
    const m = getLastMoodForDay(day);
    const v = m ? m.moodScore : 0;
    if (m) moodScores.push(v);
    const h = m ? Math.round((v / 10) * 100) : 0;
    const bar = document.createElement("div");
    bar.className = "bar";
    if (day === today) bar.classList.add("is-today");
    bar.innerHTML = `<i style="height:${h}%"></i><em>${escapeHtml(day.slice(8))}</em><b>${m ? escapeHtml(String(v)) : "—"}</b>`;
    chart.appendChild(bar);
  }

  if (trendEl) {
    const avgMonth = avg(moodScores);
    const prevMonthKey = addMonths(selectedMoodMonth, -1);
    const prevDays = monthDays(prevMonthKey);
    const prevScores = [];
    for (const day of prevDays) {
      const m = getLastMoodForDay(day);
      if (m) prevScores.push(m.moodScore);
    }
    const avgPrev = avg(prevScores);
    if (moodScores.length === 0) {
      trendEl.textContent = t("mood.trend.noData");
    } else if (prevScores.length < 2) {
      trendEl.textContent = `${t("mood.trend.avgMonth")}: ${avgMonth.toFixed(1)}/10. ${t("mood.trend.needMore")}`;
    } else {
      const diff = avgMonth - avgPrev;
      const abs = Math.abs(diff);
      if (abs < 0.3) {
        trendEl.textContent = `${t("mood.trend.avgMonth")}: ${avgMonth.toFixed(1)}/10. ${t("mood.trend.sameVsPrev")}`;
      } else if (diff > 0) {
        trendEl.textContent = `${t("mood.trend.avgMonth")}: ${avgMonth.toFixed(1)}/10. ${t("mood.trend.betterVsPrev")}: +${abs.toFixed(1)}`;
      } else {
        trendEl.textContent = `${t("mood.trend.avgMonth")}: ${avgMonth.toFixed(1)}/10. ${t("mood.trend.worseVsPrev")}: -${abs.toFixed(1)}`;
      }
    }
  }
}

function lastNDays(n) {
  const out = [];
  const d = new Date();
  for (let i = n - 1; i >= 0; i--) {
    const x = new Date(d);
    x.setDate(d.getDate() - i);
    out.push(x.toISOString().slice(0, 10));
  }
  return out;
}

function ymKeyFromDate(d) {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`;
}
function addMonths(ymKey, delta) {
  const [y, m] = ymKey.split("-").map((x) => Number(x));
  const d = new Date(y, m - 1 + delta, 1);
  return ymKeyFromDate(d);
}
function daysInMonth(ymKey) {
  const [y, m] = ymKey.split("-").map((x) => Number(x));
  return new Date(y, m, 0).getDate();
}
function monthDays(ymKey) {
  const [y, m] = ymKey.split("-").map((x) => Number(x));
  const total = daysInMonth(ymKey);
  const out = [];
  for (let day = 1; day <= total; day++) {
    const d = new Date(Date.UTC(y, m - 1, day));
    out.push(d.toISOString().slice(0, 10));
  }
  return out;
}
function monthLabel(ymKey) {
  const [y, m] = ymKey.split("-").map((x) => Number(x));
  const d = new Date(y, m - 1, 1);
  const locale = currentLang === "en" ? "en-US" : "ru-RU";
  const label = d.toLocaleString(locale, { month: "long", year: "numeric" });
  return label.charAt(0).toUpperCase() + label.slice(1);
}

function defaultMoodMonth() {
  const now = new Date();
  return monthKey(HISTORY_YEAR, now.getMonth());
}

let selectedMoodMonth = defaultMoodMonth();
let moodView = localStorage.getItem(MOOD_VIEW_KEY) || "month"; // "month" | "year"
if (!["month", "year"].includes(moodView)) moodView = "month";
function getLast12Months() {
  // Always show the fixed history range (start 2026-01-01, end 2026-12-31).
  const out = [];
  for (let m = 1; m <= 12; m++) out.push(`${HISTORY_YEAR}-${String(m).padStart(2, "0")}`);
  return out;
}
function syncMoodMonthControls() {
  const select = $("#moodMonthSelect");
  if (!select) return;
  const toggle = $("#moodViewToggle");
  if (toggle) toggle.textContent = moodView === "year" ? t("mood.viewMonth") : t("mood.viewYear");
  const months = getLast12Months();
  if (!months.includes(selectedMoodMonth)) selectedMoodMonth = defaultMoodMonth();
  select.innerHTML = months
    .map((k) => `<option value="${k}"${k === selectedMoodMonth ? " selected" : ""}>${escapeHtml(monthLabel(k))}</option>`)
    .join("");
  const disableNav = moodView === "year";
  $("#moodMonthPrev")?.toggleAttribute("disabled", disableNav || selectedMoodMonth === months[0]);
  $("#moodMonthNext")?.toggleAttribute("disabled", disableNav || selectedMoodMonth === months[months.length - 1]);
  select.toggleAttribute("disabled", disableNav);
}
function bindMoodMonthControls() {
  $("#moodViewToggle")?.addEventListener("click", () => {
    moodView = moodView === "year" ? "month" : "year";
    localStorage.setItem(MOOD_VIEW_KEY, moodView);
    syncMoodMonthControls();
    renderMood();
  });
  $("#moodMonthSelect")?.addEventListener("change", (e) => {
    const sel = e.target;
    if (!(sel instanceof HTMLSelectElement)) return;
    selectedMoodMonth = sel.value;
    localStorage.setItem(MOOD_MONTH_KEY, selectedMoodMonth);
    syncMoodMonthControls();
    renderMood();
  });
  $("#moodMonthPrev")?.addEventListener("click", () => {
    const months = getLast12Months();
    const idx = months.indexOf(selectedMoodMonth);
    if (idx <= 0) return;
    selectedMoodMonth = months[idx - 1];
    localStorage.setItem(MOOD_MONTH_KEY, selectedMoodMonth);
    syncMoodMonthControls();
    renderMood();
  });
  $("#moodMonthNext")?.addEventListener("click", () => {
    const months = getLast12Months();
    const idx = months.indexOf(selectedMoodMonth);
    if (idx < 0 || idx >= months.length - 1) return;
    selectedMoodMonth = months[idx + 1];
    localStorage.setItem(MOOD_MONTH_KEY, selectedMoodMonth);
    syncMoodMonthControls();
    renderMood();
  });

  document.addEventListener("click", (e) => {
    const tNode = e.target;
    if (!(tNode instanceof HTMLElement)) return;
    const bar = tNode.closest("[data-mood-month]");
    if (!(bar instanceof HTMLElement)) return;
    const monthKey = bar.getAttribute("data-mood-month");
    if (!monthKey) return;
    moodView = "month";
    localStorage.setItem(MOOD_VIEW_KEY, moodView);
    selectedMoodMonth = monthKey;
    localStorage.setItem(MOOD_MONTH_KEY, selectedMoodMonth);
    syncMoodMonthControls();
    renderMood();
  });
}

function monthKey(year, monthIndex0) {
  return `${year}-${String(monthIndex0 + 1).padStart(2, "0")}`;
}
function yearMonthKeys(year) {
  const out = [];
  for (let m = 0; m < 12; m++) out.push(monthKey(year, m));
  return out;
}

function bindMoodDeletes() {
  document.addEventListener("click", (e) => {
    const t = e.target;
    if (!(t instanceof HTMLElement)) return;
    const id = t.getAttribute("data-del-mood");
    if (!id) return;
    state.moodEntries = state.moodEntries.filter((x) => x.id !== id);
    saveState(state);
    renderAll();
  });
}

function bindJournal() {
  $("#journalPrompt").addEventListener("click", () => {
    const prompts =
      currentLang === "en"
        ? [
            "What exactly happened (facts only)?",
            "What automatic thoughts showed up?",
            "What emotion is strongest and where do you feel it in your body?",
            "What matters most to me in this situation?",
            "What is the smallest step I can take today?",
          ]
        : [
            "Что именно произошло (факты)?",
            "Какие автоматические мысли появились?",
            "Какая эмоция сильнее всего и где в теле?",
            "Что для меня важно в этой ситуации?",
            "Какой самый маленький шаг я сделаю сегодня?",
          ];
    openModal(t("journal.promptTitle"), prompts[Math.floor(Math.random() * prompts.length)]);
  });

  $("#journalForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const text = String($("#journalText").value || "").trim().slice(0, 6000);
    if (!text) return;
    const entry = {
      id: crypto.randomUUID ? crypto.randomUUID() : String(Math.random()).slice(2),
      ownerId: currentOwnerId(),
      createdAt: nowISO(),
      title: String($("#journalTitle").value || "").slice(0, 120),
      text,
      feelings: String($("#journalFeelings").value || "").slice(0, 240),
      needs: String($("#journalNeeds").value || "").slice(0, 240),
    };
    state.journalEntries.unshift(entry);
    state.journalEntries = state.journalEntries.slice(0, 400);
    saveState(state);
    $("#journalTitle").value = "";
    $("#journalText").value = "";
    $("#journalFeelings").value = "";
    $("#journalNeeds").value = "";
    renderAll();
    openModal(t("common.saved"), t("journal.saved"));
  });

  $("#journalSearch").addEventListener("input", renderJournal);

  $("#journalClear").addEventListener("click", () => {
    const ok = window.confirm(t("journal.clear.confirm"));
    if (!ok) return;
    const owner = currentOwnerId();
    state.journalEntries = state.journalEntries.filter((x) => (x.ownerId || "guest") !== owner);
    saveState(state);
    renderAll();
    openModal(t("journal.clear.doneTitle"), t("journal.clear.doneBody"));
  });

  document.addEventListener("click", (e) => {
    const t = e.target;
    if (!(t instanceof HTMLElement)) return;
    const id = t.getAttribute("data-del-journal");
    if (!id) return;
    state.journalEntries = state.journalEntries.filter((x) => x.id !== id);
    saveState(state);
    renderAll();
  });
}

function renderJournal() {
  const q = String($("#journalSearch").value || "").trim().toLowerCase();
  const list = $("#journalList");
  const source = myJournalEntries();
  const entries = q
    ? source.filter((e) => (e.title + "\n" + e.text + "\n" + (e.feelings || "") + "\n" + (e.needs || "")).toLowerCase().includes(q))
    : source;
  const head = entries.slice(0, 40);
  list.innerHTML = head.length ? "" : `<div class="hint">${escapeHtml(t("journal.empty"))}</div>`;
  for (const e of head) {
    const metaBits = [fmtDateTime(e.createdAt)];
    if (e.feelings) metaBits.push(`${t("journal.meta.feelings")}: ${e.feelings}`);
    if (e.needs) metaBits.push(`${t("journal.meta.needs")}: ${e.needs}`);
    const node = document.createElement("div");
    node.className = "item";
    node.innerHTML = `
      <div class="item-head">
        <div>
          <div class="item-title">${escapeHtml(e.title || t("journal.noTitle"))}</div>
          <div class="item-meta">${escapeHtml(metaBits.join(" · "))}</div>
        </div>
        <button class="btn small danger" data-del-journal="${escapeHtml(e.id)}" type="button">${escapeHtml(t("common.delete"))}</button>
      </div>
      <div class="item-body">${escapeHtml(e.text)}</div>
    `;
    list.appendChild(node);
  }
}

const EXERCISES = [
  { id: "box-breathing", title: "Квадратное дыхание (2-4 минуты)", desc: "4x4: вдох-пауза-выдох-пауза.", body: "1) Вдох 4\n2) Пауза 4\n3) Выдох 4\n4) Пауза 4\n\n4-6 циклов." },
  { id: "54321", title: "Заземление 5-4-3-2-1", desc: "Возвращает внимание в здесь и сейчас.", body: "5 вижу\n4 ощущаю\n3 слышу\n2 чувствую запах\n1 вкус\n\nПотом длинный выдох." },
  { id: "cognitive", title: "Мысль -> Проверка", desc: "Отделить факт от интерпретации.", body: "Запишите мысль.\nЧто факт?\nКакие 2 альтернативы?\nЧто бы сказал другу?\nКакой маленький шаг?" },
  { id: "values", title: "Ценности (5 минут)", desc: "Вернуть мотивацию через смысл.", body: "Выберите 1-2 ценности.\nКак проявить их сегодня на 1%?\nШаг <= 15 минут." },
  { id: "pmr", title: "Прогрессивная мышечная релаксация", desc: "Снять телесное напряжение.", body: "По очереди напрягайте и расслабляйте группы мышц 5-7 секунд.\nИдите сверху вниз." },
  { id: "self-support", title: "Фраза поддержки себе", desc: "Снизить самокритику.", body: "Скажите себе: «Сейчас мне сложно. Это человеческий опыт. Я могу поддержать себя шаг за шагом»." },
  { id: "micro-step", title: "Микрошаг 10 минут", desc: "Запуск действия при прокрастинации.", body: "Поставьте таймер на 10 минут.\nСделайте только первый шаг.\nПосле решите, продолжать или нет." },
  { id: "worry-window", title: "Окно для тревоги", desc: "Уменьшить постоянное пережевывание мыслей.", body: "Отложите тревожные мысли до выделенных 15 минут вечером.\nДнем записывайте в заметку и возвращайтесь к делам." },
  { id: "gratitude3", title: "3 благодарности", desc: "Мягкий сдвиг фокуса внимания.", body: "Запишите 3 вещи за день, за которые можно поблагодарить себя, людей или обстоятельства." },
  { id: "digital-pause", title: "Цифровая пауза 20 минут", desc: "Снизить когнитивный шум.", body: "На 20 минут отключите ленту/чаты.\nСделайте короткую прогулку, дыхание или растяжку." },
];

const EXERCISES_EN = {
  "box-breathing": {
    title: "Box breathing (2–4 minutes)",
    desc: "4×4: inhale–hold–exhale–hold.",
    body: "1) Inhale 4\n2) Hold 4\n3) Exhale 4\n4) Hold 4\n\n4–6 cycles.",
  },
  "54321": {
    title: "Grounding 5-4-3-2-1",
    desc: "Brings attention back to the present moment.",
    body: "5 things I see\n4 things I feel\n3 things I hear\n2 things I smell\n1 thing I taste\n\nThen one long exhale.",
  },
  cognitive: {
    title: "Thought → Check",
    desc: "Separate fact from interpretation.",
    body: "Write the thought.\nWhat is the fact?\nWhat are 2 alternatives?\nWhat would I tell a friend?\nWhat is one small next step?",
  },
  values: {
    title: "Values (5 minutes)",
    desc: "Restore motivation through meaning.",
    body: "Pick 1–2 values.\nHow can you show them today by 1%?\nStep <= 15 minutes.",
  },
  pmr: {
    title: "Progressive muscle relaxation",
    desc: "Release bodily tension.",
    body: "Tense and relax muscle groups for 5–7 seconds each.\nMove from top to bottom.",
  },
  "self-support": {
    title: "A supportive phrase for yourself",
    desc: "Reduce self-criticism.",
    body: 'Say to yourself: "This is hard right now. This is a human experience. I can support myself step by step."',
  },
  "micro-step": {
    title: "10-minute micro-step",
    desc: "Start action when procrastinating.",
    body: "Set a timer for 10 minutes.\nDo only the first step.\nThen decide whether to continue.",
  },
  "worry-window": {
    title: "Worry window",
    desc: "Reduce constant mental rumination.",
    body: "Postpone worries to a dedicated 15 minutes in the evening.\nDuring the day, write them down and return to what you're doing.",
  },
  gratitude3: {
    title: "3 gratitudes",
    desc: "A gentle shift of attention.",
    body: "Write 3 things from the day you can feel grateful for — yourself, people, or circumstances.",
  },
  "digital-pause": {
    title: "20-minute digital pause",
    desc: "Reduce cognitive noise.",
    body: "Turn off feed/chats for 20 minutes.\nTake a short walk, breathe, or stretch.",
  },
};

function exerciseView(ex) {
  const tr = currentLang === "en" ? EXERCISES_EN[ex.id] : null;
  return {
    id: ex.id,
    title: tr?.title || ex.title,
    desc: tr?.desc || ex.desc,
    body: tr?.body || ex.body,
  };
}

const ARTICLES = [
  {
    id: "anxiety-basics",
    title: "Как работает тревога и что делать в моменте",
    desc: "Практичные шаги без сложной теории.",
    body:
      "Тревога — это сигнал о возможной угрозе, а не всегда реальная опасность.\n\nЧто помогает в моменте:\n1) Назвать состояние: «Я тревожусь».\n2) Замедлить дыхание (удлинить выдох).\n3) Переключить внимание на тело и окружение (5-4-3-2-1).\n4) Выбрать один маленький шаг, который возвращает контроль.\n\nПосле острого пика полезно записать мысль и проверить ее на факты.",
  },
  {
    id: "burnout",
    title: "Выгорание: ранние признаки и восстановление",
    desc: "Как заметить и не довести до срыва.",
    body:
      "Ранние признаки выгорания: постоянная усталость, цинизм, снижение концентрации, чувство «я не справляюсь».\n\nБазовый план:\n- нормализовать сон и еду\n- снизить необязательные задачи\n- работать короткими циклами 25-45 минут\n- вернуть физическую активность хотя бы 10-15 минут в день\n- просить поддержку у людей, а не тянуть в одиночку.",
  },
  {
    id: "self-esteem",
    title: "Самокритика и самооценка: как говорить с собой мягче",
    desc: "Переход от нападения на себя к поддержке.",
    body:
      "Жесткая самокритика редко мотивирует надолго. Полезнее стиль «требовательной доброжелательности».\n\nФормула:\n1) Признать эмоцию: «Мне сейчас стыдно/страшно».\n2) Отделить личность от действия: «Я ошибся, но я не ошибка».\n3) Спросить: «Что поможет мне стать на 1% лучше сегодня?»",
  },
  {
    id: "motivation",
    title: "Мотивация, когда нет сил",
    desc: "Почему дисциплина начинается с малого.",
    body:
      "Когда энергии мало, работает не «больше давления», а «меньше трения».\n\nСделайте три вещи:\n- уменьшите шаг до 5-15 минут\n- заранее подготовьте среду (документ открыт, телефон в стороне)\n- отметьте завершение, даже если шаг маленький\n\nПовторение маленьких шагов создает импульс лучше, чем редкие рывки.",
  },
  {
    id: "sleep-reset",
    title: "Сон и психика: как мягко восстановить режим",
    desc: "База, которая влияет на тревогу, концентрацию и мотивацию.",
    body:
      "Недосып усиливает тревожность и снижает стрессоустойчивость.\n\nМини-план на 7 дней:\n1) Фиксированное время подъема.\n2) Свет утром 10-20 минут (окно/улица).\n3) Кофеин не позднее чем за 8 часов до сна.\n4) За 1 час до сна — приглушить свет и экраны.\n5) Если не спится 20-30 минут, встать и сделать спокойное действие.\n\nВосстановление идет постепенно, ориентируйтесь на тренд, а не на одну ночь.",
  },
  {
    id: "panic-first-aid",
    title: "Первая помощь при панической атаке",
    desc: "Что делать, когда накрывает очень сильно.",
    body:
      "Паническая атака пугает, но обычно не опасна для жизни.\n\nАлгоритм:\n- Назовите состояние: «Это паника, она пройдет».\n- Сделайте выдох длиннее вдоха (например 4/6).\n- Сфокусируйтесь на опоре стоп и контакте тела с поверхностью.\n- Описывайте вслух 3 предмета вокруг.\n- Уберите катастрофизацию: «Это пик тревоги, не инфаркт».\n\nПосле эпизода: вода, спокойный темп, короткая запись в дневник.",
  },
  {
    id: "boundaries",
    title: "Личные границы без чувства вины",
    desc: "Как говорить «нет» и сохранять отношения.",
    body:
      "Границы — это не эгоизм, а способ сохранять ресурс.\n\nФормула ответа:\n1) Признать запрос: «Понимаю, что это важно».\n2) Обозначить предел: «Сейчас не могу взять это».\n3) По возможности предложить альтернативу: «Смогу завтра после 15:00».\n\nЧем яснее и спокойнее формулировка, тем меньше внутреннего напряжения.",
  },
  {
    id: "procrastination",
    title: "Прокрастинация: не лень, а перегрузка системы",
    desc: "Как запускать задачи без насилия над собой.",
    body:
      "Часто прокрастинация связана с тревогой, неопределенностью или слишком большим объемом.\n\nЧто работает:\n- Разбить задачу до первого видимого шага.\n- Убрать лишние стимулы (уведомления, лишние вкладки).\n- Запустить таймер на 10 минут.\n- После старта оценить: продолжить еще 10 минут или завершить.\n\nГлавное — не «идеально», а «начато и продвинуто».",
  },
  {
    id: "relationships-stress",
    title: "Когда конфликт в отношениях выбивает из колеи",
    desc: "Как снизить накал и не разрушить контакт.",
    body:
      "Во время конфликта мозг часто переключается в режим угрозы.\n\nПауза перед разговором:\n- 5 медленных выдохов\n- назвать свою эмоцию одним словом\n- определить цель разговора («понять», а не «победить»)\n\nФраза для старта диалога:\n«Когда произошло X, я почувствовал(а) Y, мне важно Z. Давай подумаем, как сделать лучше».\n\nТакая структура снижает взаимные обвинения.",
  },
  {
    id: "self-worth-after-failure",
    title: "Как не обесценивать себя после неудачи",
    desc: "Разделять результат и собственную ценность.",
    body:
      "Неудача — это событие, а не определение личности.\n\nТехника «3 колонки»:\n1) Что случилось (факты).\n2) Чему это учит.\n3) Какой корректирующий шаг сделать.\n\nДобавьте фразу:\n«Я могу ошибаться и при этом оставаться ценным человеком».\n\nЭто помогает вернуться к действиям, а не застрять в самокритике.",
  },
  {
    id: "social-anxiety-small-steps",
    title: "Социальная тревога: мягкие шаги к уверенности",
    desc: "Как снижать напряжение в общении без насилия над собой.",
    body:
      "Социальная тревога часто усиливается из-за ожидания идеального выступления.\n\nЧто помогает:\n1) Снизить планку: цель не «идеально», а «достаточно хорошо».\n2) Сделать мини-экспозицию: короткий вопрос, небольшой комментарий, один звонок.\n3) Отслеживать факт результата, а не только уровень тревоги.\n4) После контакта записать: что вышло лучше, чем я ожидал(а).",
  },
  {
    id: "rumination-stop",
    title: "Как остановить мыслительную жвачку",
    desc: "Практика для повторяющихся тревожных мыслей.",
    body:
      "Руминация кажется решением, но чаще только выматывает.\n\nАлгоритм STOP:\n- S: заметить, что мысль пошла по кругу.\n- T: сделать паузу и 3 длинных выдоха.\n- O: переключиться на наблюдение тела и окружения.\n- P: перейти к действию на 5-10 минут.\n\nВажный критерий: действие должно быть конкретным и завершенным.",
  },
  {
    id: "morning-reset",
    title: "Утренний ресет за 10 минут",
    desc: "Простой ритуал, который стабилизирует день.",
    body:
      "Если утро хаотичное, мозг быстрее уходит в стресс.\n\nМини-структура:\n1) Вода и 1-2 минуты спокойного дыхания.\n2) Короткая запись: «что важно сегодня?»\n3) Один приоритетный шаг до 15 минут.\n4) Проверка состояния: настроение/энергия по шкале 1-10.\n\nТакой ритуал повышает чувство контроля и снижает тревожность.",
  },
  {
    id: "evening-decompression",
    title: "Вечерняя разгрузка нервной системы",
    desc: "Как завершать день без перегруза в голове.",
    body:
      "Вечером полезно «закрывать день», чтобы не уносить напряжение в сон.\n\nПрактика:\n- Выписать 3 завершенных шага.\n- Отдельно отметить 1 незавершенное дело и следующий шаг к нему.\n- 5 минут растяжки или медленной прогулки.\n- Минимум экрана перед сном.\n\nДаже короткая разгрузка заметно снижает внутренний шум.",
  },
  {
    id: "decision-fatigue",
    title: "Усталость от решений: как упростить выбор",
    desc: "Меньше лишних решений — больше энергии на важное.",
    body:
      "Когда решений слишком много, растет прокрастинация и раздражение.\n\nЧто делать:\n1) Стандартизировать рутину (одежда, время задач, шаблоны действий).\n2) Выносить важные решения на первую половину дня.\n3) Использовать правило двух вариантов вместо десяти.\n4) Ограничивать время на выбор таймером.\n\nСнижение когнитивной нагрузки быстро улучшает продуктивность.",
  },
  {
    id: "self-support-phrases",
    title: "Фразы самоподдержки в сложный день",
    desc: "Готовые формулировки, чтобы снизить самокритику.",
    body:
      "Когда тяжело, внутренний диалог особенно важен.\n\nПримеры:\n- «Сейчас трудно, и это нормально».\n- «Я могу сделать один маленький шаг».\n- «Ошибка не делает меня плохим человеком».\n- «Мне не нужно быть идеальным, чтобы двигаться вперед».\n\nВыберите 1-2 фразы и повторяйте их в стрессовые моменты.",
  },
  {
    id: "focus-after-overload",
    title: "Как вернуть фокус после перегруза",
    desc: "Пошаговый способ снова включиться в дела.",
    body:
      "После перегруза сложно начать, потому что мозг видит задачу слишком большой.\n\nСхема:\n1) Убрать визуальный шум на рабочем месте.\n2) Разбить задачу на первый видимый шаг.\n3) Таймер на 12 минут только на старт.\n4) После цикла сделать паузу 3 минуты и оценить прогресс.\n\nГлавная цель — восстановить ритм, а не выполнить все сразу.",
  },
  {
    id: "emotional-boundaries-family",
    title: "Эмоциональные границы с близкими",
    desc: "Как сохранять контакт и не терять себя.",
    body:
      "Близость не отменяет личные границы.\n\nПолезная формула:\n- «Я тебя слышу» (признание).\n- «Мне важно сохранить спокойный тон» (граница).\n- «Давай обсудим это позже/в другом формате» (альтернатива).\n\nЧем спокойнее и конкретнее формулировка, тем меньше вероятность конфликта.",
  },
  {
    id: "anxiety-body-signals",
    title: "Тревога и тело: как читать сигналы",
    desc: "Понимание телесных реакций снижает страх симптомов.",
    body:
      "Тревога часто проявляется в теле: учащенный пульс, напряжение мышц, дрожь, потливость.\n\nЧто помогает:\n1) Называть симптом и отмечать его интенсивность 1-10.\n2) Переключать внимание на опоры тела.\n3) Делать выдох длиннее вдоха 2-3 минуты.\n4) Наблюдать, как симптом естественно снижается.\n\nОсознание цикла «тревога -> тело -> тревога» помогает разорвать его.",
  },
  {
    id: "mini-habits-consistency",
    title: "Мини-привычки: как держать стабильность",
    desc: "Маленькие действия, которые реально закрепляются.",
    body:
      "Стабильность строится на легком входе, а не на сильной мотивации.\n\nПравила:\n- Шаг должен занимать 2-10 минут.\n- Привяжите его к существующему действию (после кофе, после душа).\n- Ведите трек «день выполнен / день пропущен».\n- После пропуска возвращайтесь сразу, без самонаказания.\n\nВыигрывает не идеальная неделя, а длинная дистанция.",
  },
  {
    id: "stress-work-communication",
    title: "Стресс на работе: как говорить о нагрузке",
    desc: "Конструктивный разговор без обвинений.",
    body:
      "Если молча терпеть перегруз, стресс обычно нарастает.\n\nСтруктура разговора:\n1) Факт: «Сейчас у меня X задач и Y дедлайнов».\n2) Риск: «В таком режиме падает качество/сроки».\n3) Запрос: «Нужна приоритизация: что критично, что можно перенести?»\n4) Подтверждение: «После согласования беру в работу по новому плану».\n\nЧеткость снижает напряжение и помогает договориться.",
  },
  {
    id: "panic-aftercare",
    title: "Что делать после панической атаки",
    desc: "Восстановление после пика тревоги.",
    body:
      "После эпизода важно не требовать от себя мгновенной нормы.\n\nПлан восстановления:\n- Вода и спокойное дыхание 2-3 минуты.\n- Небольшое движение: пройтись, размяться.\n- Короткая запись: «что сработало во время атаки».\n- Мягкий режим задач до конца дня.\n\nТак вы формируете опыт, что состояние проходит и им можно управлять.",
  },
  {
    id: "digital-hygiene-mental-health",
    title: "Цифровая гигиена и психическое состояние",
    desc: "Как снизить тревожность от постоянного потока информации.",
    body:
      "Инфоперегруз повышает утомление и расфокус.\n\nПрактика на каждый день:\n1) Отключить лишние push-уведомления.\n2) Ограничить новостные окна по времени.\n3) Делать 1-2 «тихих» интервала без мессенджеров.\n4) Не начинать и не заканчивать день лентой.\n\nДаже частичное ограничение заметно улучшает самочувствие.",
  },
  {
    id: "grief-self-care-basics",
    title: "Самоподдержка в период потери",
    desc: "Бережные опоры, когда очень больно.",
    body:
      "Горе не проходит по расписанию, и у каждого свой темп.\n\nБазовые опоры:\n- Регулярная еда и сон настолько, насколько возможно.\n- Контакт с людьми, которым вы доверяете.\n- Разрешение на эмоции без самоосуждения.\n- Небольшие ритуалы памяти, если это помогает.\n\nЕсли боль становится невыносимой, важно обратиться за профессиональной поддержкой.",
  },
  {
    id: "exam-stress-plan",
    title: "План против стресса перед экзаменом",
    desc: "Как готовиться без выгорания и паники.",
    body:
      "Экзаменационный стресс снижается, когда есть четкая структура.\n\nПлан:\n1) Разделить материал на короткие блоки.\n2) Учить циклами 25/5 или 40/10.\n3) Каждый день делать мини-повторение пройденного.\n4) За день до экзамена — легкий режим и сон.\n\nЦель — не «знать идеально все», а стабильно держать рабочее состояние.",
  },
  {
    id: "return-after-break",
    title: "Как вернуться в ритм после перерыва",
    desc: "Без чувства вины и рывков «с понедельника».",
    body:
      "Возврат лучше работает через мягкий старт.\n\nСтратегия:\n- День 1: один ключевой шаг.\n- День 2-3: два коротких блока по 15-25 минут.\n- День 4+: постепенное увеличение нагрузки.\n- Фиксируйте факт возвращения, а не идеальное качество.\n\nТак вы снижаете сопротивление и быстрее восстанавливаете устойчивость.",
  },
  {
    id: "perfectionism-traps",
    title: "Перфекционизм: как не застревать в «идеально»",
    desc: "Переход от идеала к устойчивому прогрессу.",
    body:
      "Перфекционизм часто маскирует страх ошибки.\n\nПрактика:\n1) Определите минимально достаточный результат.\n2) Ограничьте время на задачу таймером.\n3) Завершайте черновик до улучшений.\n4) Отмечайте пользу, а не «безупречность».\n\nСтабильный результат почти всегда ценнее идеального, но незавершенного.",
  },
  {
    id: "anger-regulation",
    title: "Управление злостью без подавления",
    desc: "Как выражать границы экологично.",
    body:
      "Злость указывает на нарушенную границу или потребность.\n\nЧто помогает:\n- Пауза 30-90 секунд перед ответом.\n- Формула «факт -> чувство -> запрос».\n- Разгрузка тела: ходьба, дыхание, растяжка.\n- Возврат к разговору после снижения накала.\n\nЦель — не подавить эмоцию, а выразить ее безопасно и понятно.",
  },
  {
    id: "shame-resilience",
    title: "Стыд и восстановление самоопоры",
    desc: "Как выходить из самоуничижения.",
    body:
      "Стыд сужает внимание до мысли «со мной что-то не так».\n\nШаги:\n1) Называйте эмоцию: «сейчас мне стыдно».\n2) Проверяйте факты: что реально произошло?\n3) Делайте корректирующее действие вместо самоатаки.\n4) Разговаривайте с собой как с близким человеком.\n\nЭто снижает внутреннее давление и возвращает способность действовать.",
  },
  {
    id: "energy-management",
    title: "Управление энергией, а не временем",
    desc: "Почему продуктивность зависит от ресурса.",
    body:
      "Одинаковый час дает разный результат при разной энергии.\n\nБаза:\n- Сложные задачи — в пиковые часы бодрости.\n- Простые задачи — в периоды спада.\n- Короткие паузы каждые 60-90 минут.\n- Восстановление: сон, питание, движение, тишина.\n\nПланирование по энергии делает день устойчивее.",
  },
  {
    id: "self-compassion-basics",
    title: "Самосострадание без потери дисциплины",
    desc: "Поддержка себя и движение к целям совместимы.",
    body:
      "Самосострадание — это не поблажки, а бережная честность.\n\nФормула:\n1) Признать сложность момента.\n2) Напомнить себе, что трудности универсальны.\n3) Выбрать полезный следующий шаг.\n\nПоддерживающий тон снижает избегание и помогает держать курс.",
  },
  {
    id: "work-rest-rhythm",
    title: "Ритм работа-отдых: как не срываться",
    desc: "Планирование, которое предотвращает истощение.",
    body:
      "Переработка часто выглядит как эффективность, но снижает качество решений.\n\nПрактика ритма:\n- Запланированные перерывы до усталости.\n- Чередование сложных и легких блоков.\n- Один «тихий» слот без встреч и чатов.\n- Завершение дня коротким обзором.\n\nРегулярный ритм лучше рывков на пределе.",
  },
  {
    id: "relationship-repair",
    title: "Восстановление после ссоры",
    desc: "Как вернуться к диалогу после конфликта.",
    body:
      "После ссоры важно сначала снизить физиологическое напряжение.\n\nДальше:\n1) Признать свою часть ответственности.\n2) Сформулировать, что было больно без обвинений.\n3) Уточнить, что поможет в будущем.\n4) Договориться о конкретном изменении.\n\nФокус на ремонте контакта укрепляет отношения.",
  },
  {
    id: "imposter-syndrome",
    title: "Синдром самозванца: как не обесценивать себя",
    desc: "Рабочие опоры вместо «мне просто повезло».",
    body:
      "Синдром самозванца усиливается при сравнении себя с чужим «витринным» результатом.\n\nОпоры:\n- Вести список реальных достижений и навыков.\n- Переводить «я недостаточно» в конкретный план развития.\n- Собирать обратную связь по фактам.\n- Отмечать прогресс, а не только пробелы.\n\nТак формируется более реалистичная самооценка.",
  },
  {
    id: "high-sensitivity-care",
    title: "Если вы высокочувствительный человек",
    desc: "Как беречь ресурс при сильной восприимчивости.",
    body:
      "Высокая чувствительность — это особенность нервной системы, а не слабость.\n\nЧто помогает:\n- Дозировать стимулы (шум, новости, соцсети).\n- Планировать время на восстановление после общения.\n- Использовать телесные практики заземления.\n- Поддерживать ясные личные границы.\n\nПри бережном режиме чувствительность становится сильной стороной.",
  },
  {
    id: "fear-of-failure",
    title: "Страх неудачи и старт действий",
    desc: "Как начать, когда страшно ошибиться.",
    body:
      "Страх неудачи уменьшается через контакт с реальностью, а не через долгие раздумья.\n\nАлгоритм:\n1) Определить худший реалистичный исход.\n2) Подготовить план B.\n3) Сделать пробный шаг маленького масштаба.\n4) Собирать данные и корректировать.\n\nДействие превращает страх из «монстра» в управляемую задачу.",
  },
  {
    id: "attention-fragmentation",
    title: "Фрагментация внимания: как собрать фокус",
    desc: "Метод против постоянных переключений.",
    body:
      "Частые переключения съедают ментальную энергию.\n\nСистема:\n- Работать в одном окне задачи.\n- Проверять сообщения по расписанию, а не постоянно.\n- Использовать список «позже», чтобы не терять идеи.\n- Завершать блок коротким итогом «что сделано / что дальше».\n\nФокус растет от структуры, а не от силы воли.",
  },
  {
    id: "anxiety-before-sleep",
    title: "Тревога перед сном: вечерний протокол",
    desc: "Как уменьшить ночные прокрутки мыслей.",
    body:
      "Перед сном мозг часто возвращается к незавершенным вопросам.\n\nПротокол:\n1) Выписать тревожные мысли на бумагу.\n2) Для каждой — маленький шаг на завтра.\n3) Дыхание с удлиненным выдохом 3-5 минут.\n4) Нейтральный ритуал: теплый душ, спокойное чтение.\n\nЭто снижает активацию и облегчает засыпание.",
  },
  {
    id: "confidence-through-actions",
    title: "Уверенность строится действиями",
    desc: "Почему сначала шаг, потом чувство уверенности.",
    body:
      "Часто мы ждем уверенности, чтобы начать, но она появляется после действий.\n\nПринцип:\n- Сделать маленький рискованный шаг.\n- Зафиксировать результат и урок.\n- Повторить в чуть более сложной ситуации.\n\nТак формируется «доказательная» уверенность, основанная на опыте.",
  },
  {
    id: "support-network",
    title: "Личная сеть поддержки: как собрать",
    desc: "Практичный способ не оставаться одному.",
    body:
      "Поддержка работает лучше, когда она заранее организована.\n\nСоберите карту из 3 уровней:\n1) Близкий круг (к кому обратиться срочно).\n2) Практическая помощь (быт, дела, консультации).\n3) Профессиональная помощь.\n\nХраните список контактов и короткий шаблон сообщения о помощи.",
  },
  {
    id: "micro-recovery-workday",
    title: "Микровосстановление в течение рабочего дня",
    desc: "Небольшие паузы, которые реально помогают.",
    body:
      "Ресурс проседает постепенно, поэтому важно восстанавливаться заранее.\n\nИдеи микропауз:\n- 90 секунд дыхания.\n- 2 минуты движения.\n- Взгляд в даль и расслабление глаз.\n- Стакан воды и 1 минуту тишины.\n\nНесколько коротких пауз часто эффективнее одной длинной в конце дня.",
  },
  {
    id: "goal-review-weekly",
    title: "Еженедельный обзор целей без давления",
    desc: "Как корректировать курс и не выгорать.",
    body:
      "Без обзора цели превращаются в хаотичный список.\n\nРаз в неделю:\n1) Что сработало хорошо?\n2) Где было лишнее напряжение?\n3) Какой один приоритет на следующую неделю?\n4) Какой шаг <= 15 минут начать первым?\n\nТак вы сохраняете направление и снижаете перегруз.",
  },
];

const ARTICLES_EN = {
  "anxiety-basics": {
    title: "How anxiety works and what to do in the moment",
    desc: "Practical steps without heavy theory.",
    body:
      "Anxiety is a signal of possible threat — not always real danger.\n\nWhat helps in the moment:\n1) Name it: “I feel anxious.”\n2) Slow down breathing (lengthen the exhale).\n3) Shift attention to body and surroundings (5-4-3-2-1).\n4) Pick one small step that restores control.\n\nAfter the peak, it helps to write the thought down and check it against facts.",
  },
  burnout: {
    title: "Burnout: early signs and recovery",
    desc: "How to notice it and prevent a crash.",
    body:
      "Early burnout signs: constant fatigue, cynicism, reduced focus, “I can't handle it” feelings.\n\nBasic plan:\n- normalize sleep and food\n- cut non-essential tasks\n- work in short 25–45 minute cycles\n- return light movement 10–15 minutes a day\n- ask for support instead of carrying everything alone",
  },
  "self-esteem": {
    title: "Self-criticism and self-esteem: speak to yourself more gently",
    desc: "From attacking yourself to supporting yourself.",
    body:
      "Harsh self-criticism rarely motivates for long. A better style is “demanding kindness.”\n\nFormula:\n1) Acknowledge emotion: “I'm ashamed/scared.”\n2) Separate person from action: “I made a mistake, but I am not a mistake.”\n3) Ask: “What would help me be 1% better today?”",
  },
  motivation: {
    title: "Motivation when you have no energy",
    desc: "Why discipline starts small.",
    body:
      "When energy is low, “more pressure” works worse than “less friction.”\n\nDo three things:\n- shrink the step to 5–15 minutes\n- prepare the environment (document open, phone away)\n- mark completion even if the step is tiny\n\nSmall repeated steps create momentum better than rare big pushes.",
  },
  "sleep-reset": {
    title: "Sleep & mind: a gentle rhythm reset",
    desc: "A base that affects anxiety, focus, and motivation.",
    body:
      "Sleep loss increases anxiety and reduces stress tolerance.\n\nA 7-day mini plan:\n1) Fixed wake-up time.\n2) Morning light 10–20 minutes.\n3) No caffeine within 8 hours of sleep.\n4) 1 hour before bed: dim lights and screens.\n5) If you can't sleep after 20–30 minutes, get up and do a calm activity.\n\nFocus on the trend, not one night.",
  },
  "panic-first-aid": {
    title: "First aid for a panic attack",
    desc: "What to do when it hits hard.",
    body:
      "A panic attack is scary, but usually not life-threatening.\n\nAlgorithm:\n- Name it: “This is panic; it will pass.”\n- Make exhale longer than inhale (e.g. 4/6).\n- Feel your feet and body support.\n- Name 3 objects around you out loud.\n- Drop catastrophizing: “This is a peak of anxiety.”\n\nAfter: water, slow pace, short journal note.",
  },
  boundaries: {
    title: "Personal boundaries without guilt",
    desc: "How to say “no” and keep relationships.",
    body:
      "Boundaries are not selfishness — they protect your energy.\n\nResponse formula:\n1) Acknowledge: “I see this matters.”\n2) Limit: “I can't take this on right now.”\n3) Alternative (if possible): “I can do it tomorrow after 3pm.”\n\nThe clearer and calmer, the less inner tension.",
  },
  procrastination: {
    title: "Procrastination: not laziness, system overload",
    desc: "How to start tasks without self-violence.",
    body:
      "Procrastination is often linked to anxiety, uncertainty, or too much scope.\n\nWhat works:\n- break the task to the first visible step\n- remove extra stimuli (notifications, extra tabs)\n- start a 10-minute timer\n- after starting, decide: continue 10 more minutes or stop\n\nThe goal is “started and moved,” not “perfect.”",
  },
  "relationships-stress": {
    title: "When relationship conflict knocks you off balance",
    desc: "Lower intensity without breaking contact.",
    body:
      "In conflict, the brain often switches into threat mode.\n\nPause before talking:\n- 5 slow exhales\n- name your emotion in one word\n- set the goal (“understand,” not “win”)\n\nStarter phrase:\n“When X happened, I felt Y, and Z matters to me. Let's think how to make it better.”",
  },
  "self-worth-after-failure": {
    title: "How not to devalue yourself after failure",
    desc: "Separate outcome from your worth.",
    body:
      "Failure is an event, not a definition.\n\nTechnique “3 columns”:\n1) What happened (facts).\n2) What it teaches.\n3) One corrective step.\n\nAdd: “I can make mistakes and still be a valuable person.”",
  },
  "social-anxiety-small-steps": {
    title: "Social anxiety: gentle steps to confidence",
    desc: "Reduce tension in communication without forcing yourself.",
    body:
      "Social anxiety often grows from expecting a perfect performance.\n\nWhat helps:\n1) Lower the bar: aim for “good enough.”\n2) Mini exposure: a short question, a small comment, one call.\n3) Track outcomes, not just anxiety level.\n4) After: write what went better than expected.",
  },
  "rumination-stop": {
    title: "How to stop mental rumination",
    desc: "A practice for looping anxious thoughts.",
    body:
      "Rumination feels like solving, but usually just drains you.\n\nSTOP:\n- S: notice the loop.\n- T: pause + 3 long exhales.\n- O: observe body and environment.\n- P: do one concrete 5–10 minute action.\n\nCriterion: the action must be specific and finishable.",
  },
  "morning-reset": {
    title: "10-minute morning reset",
    desc: "A simple ritual that stabilizes your day.",
    body:
      "If mornings are chaotic, stress rises faster.\n\nStructure:\n1) Water + 1–2 minutes calm breathing.\n2) Write: “What matters today?”\n3) One priority step <= 15 minutes.\n4) Quick check-in: mood/energy 1–10.",
  },
  "evening-decompression": {
    title: "Evening nervous system decompression",
    desc: "How to end the day without mental overload.",
    body:
      "Closing the day reduces noise before sleep.\n\nPractice:\n- list 3 completed steps\n- note 1 unfinished item + next step\n- 5 minutes stretching or slow walk\n- reduce screens\n\nEven a short decompression helps.",
  },
  "decision-fatigue": {
    title: "Decision fatigue: simplify choices",
    desc: "Fewer decisions → more energy for what matters.",
    body:
      "Too many choices increase procrastination and irritability.\n\nTry:\n1) standardize routines\n2) make important decisions early\n3) use 2 options instead of 10\n4) limit choice time with a timer",
  },
  "self-support-phrases": {
    title: "Self-support phrases for a hard day",
    desc: "Ready-made lines to reduce self-criticism.",
    body:
      "Your inner voice matters most when it's hard.\n\nExamples:\n- “This is hard, and that's okay.”\n- “I can take one small step.”\n- “A mistake doesn't make me a bad person.”\n- “I don't need to be perfect to move forward.”",
  },
  "focus-after-overload": {
    title: "How to regain focus after overload",
    desc: "A step-by-step way to re-engage.",
    body:
      "Overload makes tasks feel too big.\n\nSteps:\n1) reduce visual clutter\n2) define the first visible step\n3) 12-minute timer just to start\n4) 3-minute break and review progress",
  },
  "emotional-boundaries-family": {
    title: "Emotional boundaries with close people",
    desc: "Keep connection without losing yourself.",
    body:
      "Closeness doesn't cancel boundaries.\n\nFormula:\n- “I hear you” (acknowledge)\n- “I need a calm tone” (boundary)\n- “Let's discuss later / differently” (alternative)",
  },
  "anxiety-body-signals": {
    title: "Anxiety & the body: reading signals",
    desc: "Understanding reactions reduces fear of symptoms.",
    body:
      "Anxiety can show as fast pulse, muscle tension, shaking, sweating.\n\nHelpful steps:\n1) name the symptom and rate 1–10\n2) feel body support points\n3) longer exhales for 2–3 minutes\n4) observe how it naturally decreases",
  },
  "mini-habits-consistency": {
    title: "Mini habits: building consistency",
    desc: "Small actions that actually stick.",
    body:
      "Consistency comes from easy entry, not strong motivation.\n\nRules:\n- 2–10 minutes\n- attach to an existing habit\n- track done/missed\n- after a miss, return immediately without punishment",
  },
  "stress-work-communication": {
    title: "Work stress: how to talk about load",
    desc: "A constructive conversation without blame.",
    body:
      "Silent overload usually grows.\n\nStructure:\n1) fact: tasks and deadlines\n2) risk: quality/timeline impact\n3) request: prioritize what is critical\n4) confirm: act on the new plan",
  },
  "panic-aftercare": {
    title: "What to do after a panic attack",
    desc: "Recovery after the anxiety peak.",
    body:
      "After an episode, don't demand instant normal.\n\nPlan:\n- water + calm breathing\n- gentle movement\n- note what helped\n- softer task load for the day",
  },
  "digital-hygiene-mental-health": {
    title: "Digital hygiene & mental state",
    desc: "Reduce anxiety from constant information flow.",
    body:
      "Info overload increases fatigue and scattered attention.\n\nTry:\n1) turn off extra push notifications\n2) time-box news\n3) 1–2 quiet intervals without messengers\n4) avoid starting/ending the day with feeds",
  },
  "grief-self-care-basics": {
    title: "Self-support during loss",
    desc: "Gentle anchors when it hurts deeply.",
    body:
      "Grief doesn't follow a schedule.\n\nAnchors:\n- regular food and sleep as possible\n- contact with trusted people\n- permission for emotions\n- small remembrance rituals if helpful\n\nIf pain becomes unbearable, seek professional support.",
  },
  "exam-stress-plan": {
    title: "An anti-stress plan before an exam",
    desc: "Prepare without burnout or panic.",
    body:
      "Stress drops when structure is clear.\n\nPlan:\n1) split material into small blocks\n2) study in 25/5 or 40/10 cycles\n3) daily mini review\n4) day before: light mode + sleep",
  },
  "return-after-break": {
    title: "How to return to rhythm after a break",
    desc: "Without guilt and extreme “fresh start” pushes.",
    body:
      "A gentle start works best.\n\nStrategy:\n- Day 1: one key step\n- Days 2–3: two short 15–25 min blocks\n- Day 4+: gradually increase load\n- track return, not perfection",
  },
  "perfectionism-traps": {
    title: "Perfectionism: getting unstuck from “perfect”",
    desc: "From ideal to sustainable progress.",
    body:
      "Perfectionism often hides fear of mistakes.\n\nTry:\n1) define “good enough”\n2) time-box work\n3) finish a draft before polishing\n4) track usefulness, not flawless-ness",
  },
  "anger-regulation": {
    title: "Managing anger without suppression",
    desc: "Express boundaries in a healthy way.",
    body:
      "Anger points to a boundary or a need.\n\nHelpful:\n- pause 30–90 seconds\n- “fact → feeling → request”\n- discharge: walk, breathe, stretch\n- return to talk after intensity drops",
  },
  "shame-resilience": {
    title: "Shame and rebuilding inner support",
    desc: "Exiting self-humiliation.",
    body:
      "Shame narrows focus to “something is wrong with me.”\n\nSteps:\n1) name it\n2) check facts\n3) take a corrective action\n4) speak to yourself like to a close friend",
  },
  "energy-management": {
    title: "Manage energy, not time",
    desc: "Productivity depends on your resource.",
    body:
      "The same hour yields different results at different energy levels.\n\nBasics:\n- hard tasks in peak hours\n- easy tasks in low hours\n- short breaks every 60–90 minutes\n- recovery: sleep, food, movement, quiet",
  },
  "self-compassion-basics": {
    title: "Self-compassion without losing discipline",
    desc: "Support and goals can coexist.",
    body:
      "Self-compassion is not indulgence — it's honest kindness.\n\nFormula:\n1) acknowledge difficulty\n2) remember it's human\n3) pick a helpful next step",
  },
  "work-rest-rhythm": {
    title: "Work-rest rhythm: avoid crashing",
    desc: "Planning that prevents exhaustion.",
    body:
      "Overwork looks like efficiency but worsens decisions.\n\nTry:\n- breaks before you’re exhausted\n- alternate hard/easy blocks\n- one quiet slot without meetings/chats\n- short end-of-day review",
  },
  "relationship-repair": {
    title: "Repair after an argument",
    desc: "How to return to dialogue after conflict.",
    body:
      "First reduce physiological arousal.\n\nThen:\n1) own your part\n2) say what hurt without blame\n3) clarify what helps next time\n4) agree on one concrete change",
  },
  "imposter-syndrome": {
    title: "Imposter syndrome: stop discounting yourself",
    desc: "Practical anchors beyond “I just got lucky.”",
    body:
      "It grows with comparison to others' highlight reels.\n\nAnchors:\n- keep a list of real wins and skills\n- turn “not enough” into a concrete learning plan\n- collect factual feedback\n- track progress, not only gaps",
  },
  "high-sensitivity-care": {
    title: "If you're a highly sensitive person",
    desc: "Protect your resource with high sensitivity.",
    body:
      "High sensitivity is a nervous system trait, not weakness.\n\nHelpful:\n- dose stimuli (noise, news, social media)\n- plan recovery after social time\n- grounding body practices\n- clear boundaries",
  },
  "fear-of-failure": {
    title: "Fear of failure and starting action",
    desc: "How to begin when mistakes feel scary.",
    body:
      "Fear shrinks through contact with reality, not overthinking.\n\nSteps:\n1) define the worst realistic outcome\n2) prepare plan B\n3) make a tiny test step\n4) collect data and adjust",
  },
  "attention-fragmentation": {
    title: "Attention fragmentation: gather your focus",
    desc: "A method against constant switching.",
    body:
      "Switching drains mental energy.\n\nSystem:\n- one task window\n- check messages on schedule\n- keep a “later” list\n- end blocks with “done / next”",
  },
  "anxiety-before-sleep": {
    title: "Bedtime anxiety: an evening protocol",
    desc: "Reduce late-night thought loops.",
    body:
      "Before sleep, the brain returns to unfinished issues.\n\nProtocol:\n1) write worries down\n2) add one next step for tomorrow\n3) longer exhales 3–5 minutes\n4) neutral ritual: warm shower, calm reading",
  },
  "confidence-through-actions": {
    title: "Confidence is built through actions",
    desc: "Step first, confidence second.",
    body:
      "We often wait for confidence to start, but it comes after acting.\n\nPrinciple:\n- take a small risky step\n- capture result and lesson\n- repeat in a slightly harder situation",
  },
  "support-network": {
    title: "Your support network: how to build it",
    desc: "A practical way not to be alone.",
    body:
      "Support works better when it's organized ahead.\n\nMake a 3-level map:\n1) close circle (urgent)\n2) practical help (life/admin)\n3) professional help\n\nKeep contacts and a short help message template.",
  },
  "micro-recovery-workday": {
    title: "Micro-recovery during the workday",
    desc: "Small breaks that actually help.",
    body:
      "Resource drops gradually — restore early.\n\nIdeas:\n- 90 seconds breathing\n- 2 minutes movement\n- look far + relax eyes\n- water + 1 minute silence",
  },
  "goal-review-weekly": {
    title: "Weekly goal review without pressure",
    desc: "Adjust course without burning out.",
    body:
      "Without review, goals become a chaotic list.\n\nWeekly:\n1) what worked well?\n2) where was extra strain?\n3) one priority for next week\n4) one step <= 15 minutes to start",
  },
};

function articleView(a) {
  const tr = currentLang === "en" ? ARTICLES_EN[a.id] : null;
  return {
    id: a.id,
    title: tr?.title || a.title,
    desc: tr?.desc || a.desc,
    body: tr?.body || a.body,
  };
}

function renderExercises() {
  const wrap = $("#exerciseCards");
  wrap.innerHTML = "";
  for (const ex of EXERCISES) {
    const view = exerciseView(ex);
    const card = document.createElement("article");
    card.className = "card";
    card.innerHTML = `
      <h2 class="h3">${escapeHtml(view.title)}</h2>
      <p class="muted">${escapeHtml(view.desc)}</p>
      <button class="btn small" data-open-exercise="${escapeHtml(ex.id)}" type="button">${escapeHtml(t("common.open"))}</button>
    `;
    wrap.appendChild(card);
  }
}

let exercisesBound = false;
function bindExercises() {
  if (exercisesBound) return;
  exercisesBound = true;
  document.addEventListener("click", (e) => {
    const t = e.target;
    if (!(t instanceof HTMLElement)) return;
    const id = t.getAttribute("data-open-exercise");
    if (!id) return;
    const ex = EXERCISES.find((x) => x.id === id);
    if (ex) {
      const view = exerciseView(ex);
      openModal(view.title, view.body);
    }
  });
}

function renderArticles() {
  const wrap = $("#articlesList");
  wrap.innerHTML = "";
  for (const a of ARTICLES) {
    const view = articleView(a);
    const card = document.createElement("article");
    card.className = "card article-card";
    card.innerHTML = `
      <button class="article-toggle" type="button" data-article-toggle="${escapeHtml(a.id)}" aria-expanded="false">
        <span>
          <h2 class="article-title">${escapeHtml(view.title)}</h2>
          <p class="muted">${escapeHtml(view.desc)}</p>
        </span>
        <span class="article-caret">▾</span>
      </button>
      <div class="article-body" data-article-body="${escapeHtml(a.id)}">${escapeHtml(view.body)}</div>
    `;
    wrap.appendChild(card);
  }
}

function testView(tst) {
  const isEn = currentLang === "en";
  return {
    id: tst.id,
    title: isEn ? tst.titleEn : tst.titleRu,
    desc: isEn ? tst.descEn : tst.descRu,
    url: tst.url,
  };
}

function renderTests() {
  const wrap = $("#testsList");
  if (!wrap) return;
  wrap.innerHTML = "";
  for (const tst of TESTS) {
    const view = testView(tst);
    const card = document.createElement("article");
    card.className = "card test-card";
    card.innerHTML = `
      <h2 class="test-title">${escapeHtml(view.title)}</h2>
      <p class="muted">${escapeHtml(view.desc)}</p>
      <button class="test-link" type="button" data-open-test="${escapeHtml(view.id)}">${escapeHtml(t("tests.take"))}</button>
    `;
    wrap.appendChild(card);
  }
}

let testsBound = false;
function bindTests() {
  if (testsBound) return;
  testsBound = true;
  document.addEventListener("click", (e) => {
    const target = e.target;
    if (!(target instanceof HTMLElement)) return;
    const id = target.getAttribute("data-open-test");
    if (!id) return;
    const tst = TESTS.find((x) => x.id === id);
    if (!tst) return;
    const runner = renderBuiltinTestRunner(id);
    if (runner) {
      openModalNode(runner.title, runner.node);
      return;
    }

    const view = testView(tst);
    const title = view.title;
    const body =
      currentLang === "en"
        ? `This test is not available in the built-in format yet.\n\nRead more here:\n${view.url}`
        : `Этот тест пока не доступен во встроенном формате.\n\nПодробнее здесь:\n${view.url}`;
    openModal(title, body);
  });
}

function bindArticlesAccordion() {
  document.addEventListener("click", (e) => {
    const t = e.target;
    if (!(t instanceof HTMLElement)) return;
    const btn = t.closest("[data-article-toggle]");
    if (!(btn instanceof HTMLElement)) return;
    const id = btn.getAttribute("data-article-toggle");
    if (!id) return;
    const wasOpen = btn.getAttribute("aria-expanded") === "true";

    const allButtons = $all("[data-article-toggle]");
    const allBodies = $all("[data-article-body]");

    for (const b of allButtons) b.setAttribute("aria-expanded", "false");
    for (const body of allBodies) body.classList.remove("open");

    if (wasOpen) return;
    btn.setAttribute("aria-expanded", "true");
    const body = $(`[data-article-body="${id}"]`);
    if (body) body.classList.add("open");
  });
}

function bindGoals() {
  $("#goalForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const title = String($("#goalTitle").value || "").trim().slice(0, 160);
    if (!title) return;
    const goal = {
      id: crypto.randomUUID ? crypto.randomUUID() : String(Math.random()).slice(2),
      ownerId: currentOwnerId(),
      createdAt: nowISO(),
      title,
      why: String($("#goalWhy").value || "").trim().slice(0, 240),
      next: String($("#goalNext").value || "").trim().slice(0, 240),
      obstacle: String($("#goalObstacle").value || "").trim().slice(0, 240),
      done: false,
    };
    state.goals.unshift(goal);
    state.goals = state.goals.slice(0, 140);
    saveState(state);
    $("#goalTitle").value = "";
    $("#goalWhy").value = "";
    $("#goalNext").value = "";
    $("#goalObstacle").value = "";
    renderAll();
  });

  document.addEventListener("click", (e) => {
    const t = e.target;
    if (!(t instanceof HTMLElement)) return;
    const toggleId = t.getAttribute("data-toggle-goal");
    if (toggleId) {
      const g = state.goals.find((x) => x.id === toggleId);
      if (g) g.done = !g.done;
      saveState(state);
      renderAll();
      return;
    }
    const delId = t.getAttribute("data-del-goal");
    if (!delId) return;
    state.goals = state.goals.filter((x) => x.id !== delId);
    saveState(state);
    renderAll();
  });
}

function renderGoals() {
  const list = $("#goalsList");
  const goals = myGoals();
  list.innerHTML = goals.length ? "" : `<div class="hint">${escapeHtml(t("goals.empty"))}</div>`;
  for (const g of goals) {
    const node = document.createElement("div");
    node.className = "item";
    node.innerHTML = `
      <div class="item-head">
        <div>
          <div class="item-title">${g.done ? "✅ " : ""}${escapeHtml(g.title)}</div>
          <div class="item-meta">${escapeHtml(fmtDateTime(g.createdAt))}${g.why ? ` · ${escapeHtml(t("goals.value"))}: ${escapeHtml(g.why)}` : ""}</div>
        </div>
        <div class="item-actions">
          <button class="btn small" data-toggle-goal="${escapeHtml(g.id)}" type="button">${g.done ? escapeHtml(t("goals.restore")) : escapeHtml(t("goals.done"))}</button>
          <button class="btn small danger" data-del-goal="${escapeHtml(g.id)}" type="button">${escapeHtml(t("common.delete"))}</button>
        </div>
      </div>
      ${g.next ? `<div class="item-body"><b>${escapeHtml(t("goals.nextStep"))}:</b> ${escapeHtml(g.next)}</div>` : ""}
      ${g.obstacle ? `<div class="item-body"><b>${escapeHtml(t("goals.obstacle"))}:</b> ${escapeHtml(g.obstacle)}</div>` : ""}
    `;
    list.appendChild(node);
  }
}

function bindAuth() {
  const registerForm = $("#registerForm");
  const loginForm = $("#loginForm");
  const logoutBtn = $("#logoutBtn");
  if (!registerForm || !loginForm || !logoutBtn) {
    console.error("Auth form elements not found");
    return;
  }

  registerForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const name = String($("#registerName").value || "").trim().slice(0, 80);
    const email = String($("#registerEmail").value || "").trim().toLowerCase();
    const password = String($("#registerPassword").value || "");
    if (name.length < 2) return openModal(t("common.error"), t("auth.err.name"));
    if (!email.includes("@") || email.length < 5) return openModal(t("common.error"), t("auth.err.email"));
    if (password.length < 6) return openModal(t("common.error"), t("auth.err.password"));
    if (!sb || shouldUseLocalAuthOnly()) {
      const local = await localRegister({ name, email, password });
      if (local.error) return openModal(t("common.error"), local.error.message);
      state.session.userId = local.data.user.id;
      state.session.userName = local.data.user.name;
      state.session.userEmail = local.data.user.email;
      state.session.userPhone = "";
      saveState(state);
      refreshAuthUi();
      renderAll();
      $("#registerForm").reset();
      routeTo("home");
      return openModal(t("common.done"), `${t("auth.created")} (локальный режим).`);
    }

    let { data, error } = await authSignUp({
      email,
      password,
      options: {
        data: { display_name: name },
      },
    });
    if (error && /lock/i.test(String(error.message || ""))) {
      await new Promise((resolve) => setTimeout(resolve, 250));
      const retry = await authSignUp({
        email,
        password,
        options: {
          data: { display_name: name },
        },
      });
      data = retry.data;
      error = retry.error;
    }
    if (error) {
      if (/rate limit|network|fetch|failed/i.test(String(error.message || ""))) {
        const local = await localRegister({ name, email, password });
        if (local.error) return openModal(t("common.error"), local.error.message);
        state.session.userId = local.data.user.id;
        state.session.userName = local.data.user.name;
        state.session.userEmail = local.data.user.email;
        state.session.userPhone = "";
        saveState(state);
        refreshAuthUi();
        renderAll();
        $("#registerForm").reset();
        routeTo("home");
        return openModal(t("common.done"), "Аккаунт создан в локальном режиме. Можно пользоваться входом.");
      }
      const msg = /already registered|User already registered/i.test(error.message) ? t("auth.err.exists") : error.message;
      return openModal(t("common.error"), msg);
    }

    await upsertLocalUser({ name, email, password });
    const userId = data?.user?.id || null;
    state.session.userId = userId;
    state.session.userName = name;
    state.session.userEmail = email;
    state.session.userPhone = "";
    saveState(state);
    refreshAuthUi();
    renderAll();
    $("#registerForm").reset();
    routeTo("home");

    if (!data?.session) {
      openModal(t("common.done"), "Аккаунт создан. Подтвердите email (если включено подтверждение), затем войдите.");
    } else {
      await ensureConnectionForCurrentUser();
      openModal(t("common.done"), t("auth.created"));
    }
  });

  let isLoginInFlight = false;
  const performLogin = async () => {
    if (isLoginInFlight) return;
    isLoginInFlight = true;
    try {
      const email = String($("#loginEmail").value || "").trim().toLowerCase();
      const password = String($("#loginPassword").value || "");
      if (!sb || shouldUseLocalAuthOnly()) {
        const local = await localLogin({ email, password });
        if (local.error) return openModal(t("common.error"), local.error.message);
        state.session.userId = local.data.user.id;
        state.session.userName = local.data.user.name;
        state.session.userEmail = local.data.user.email;
        state.session.userPhone = "";
        saveState(state);
        refreshAuthUi();
        renderAll();
        $("#loginForm").reset();
        routeTo("home");
        return openModal(t("common.success"), `${t("auth.welcome")}, ${state.session.userName}.`);
      }

      let { data, error } = await authSignInWithPassword({ email, password });
      if (error && /lock/i.test(String(error.message || ""))) {
        await new Promise((resolve) => setTimeout(resolve, 250));
        const retry = await authSignInWithPassword({ email, password });
        data = retry.data;
        error = retry.error;
      }
      if (error) {
        if (/rate limit|network|fetch|failed/i.test(String(error.message || ""))) {
          const local = await localLogin({ email, password });
          if (local.error) return openModal(t("common.error"), local.error.message);
          state.session.userId = local.data.user.id;
          state.session.userName = local.data.user.name;
          state.session.userEmail = local.data.user.email;
          state.session.userPhone = "";
          saveState(state);
          refreshAuthUi();
          renderAll();
          $("#loginForm").reset();
          routeTo("home");
          return openModal(t("common.success"), `${t("auth.welcome")}, ${state.session.userName}.`);
        }
        if (/Invalid login credentials/i.test(String(error.message || ""))) {
          const local = await localLogin({ email, password });
          if (!local.error) {
            state.session.userId = local.data.user.id;
            state.session.userName = local.data.user.name;
            state.session.userEmail = local.data.user.email;
            state.session.userPhone = "";
            saveState(state);
            refreshAuthUi();
            renderAll();
            $("#loginForm").reset();
            routeTo("home");
            return openModal(t("common.success"), `${t("auth.welcome")}, ${state.session.userName}.`);
          }
        }
        const msg =
          /Invalid login credentials/i.test(error.message) ? t("auth.err.wrongPassword") : error.message;
        return openModal(t("common.error"), msg);
      }

      await upsertLocalUser({
        name: data?.user?.user_metadata?.display_name || email,
        email: data?.user?.email || email,
        password,
      });
      state.session.userId = data?.user?.id || null;
      state.session.userName = data?.user?.user_metadata?.display_name || email;
      state.session.userEmail = data?.user?.email || email;
      state.session.userPhone = data?.user?.phone || data?.user?.user_metadata?.phone || "";
      saveState(state);
      refreshAuthUi();
      renderAll();
      $("#loginForm").reset();
      routeTo("home");
      await ensureConnectionForCurrentUser();
      openModal(t("common.success"), `${t("auth.welcome")}, ${state.session.userName}.`);
    } catch (e) {
      openModal(t("common.error"), e?.message ?? String(e));
    } finally {
      isLoginInFlight = false;
    }
  };

  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    await performLogin();
  });

  logoutBtn.addEventListener("click", async () => {
    // Always complete local logout immediately for reliable UX.
    state.session.userId = null;
    state.session.userName = null;
    state.session.userEmail = null;
    state.session.userPhone = null;
    saveState(state);
    refreshAuthUi();
    renderAll();
    openModal(t("auth.logoutTitle"), t("auth.logoutDone"));

    // Best-effort Supabase logout in background; do not use queue.
    if (sb) {
      sb.auth.signOut({ scope: "local" }).catch(() => {});
    }
  });
}

function bindSettings() {
  $("#exportData").addEventListener("click", () => {
    const blob = new Blob([JSON.stringify(state, null, 2)], { type: "application/json" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `selfhelp-backup-${todayISO()}.json`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(a.href);
  });

  $("#importFile").addEventListener("change", async (e) => {
    const input = e.target;
    if (!(input instanceof HTMLInputElement)) return;
    const file = input.files && input.files[0];
    if (!file) return;
    const text = await file.text();
    const parsed = safeJsonParse(text, null);
    if (!parsed) {
      openModal(t("common.error"), t("settings.importErr"));
      input.value = "";
      return;
    }
    state = normalizeState(parsed);
    saveState(state);
    input.value = "";
    refreshAuthUi();
    renderAll();
    openModal(t("settings.importDoneTitle"), t("settings.importDoneBody"));
  });

  $("#wipeData").addEventListener("click", () => {
    openModal(t("settings.wipeTitle"), t("settings.wipeBody"));
    const ok = confirm(t("settings.wipeConfirm"));
    if (!ok) return;
    localStorage.removeItem(STORAGE_KEY);
    state = loadState();
    refreshAuthUi();
    renderAll();
    openModal(t("common.done"), t("settings.wipeDone"));
  });
}

function renderAll() {
  refreshAuthUi();
  renderHome();
  renderMood();
  renderJournal();
  renderExercises();
  renderGoals();
  renderArticles();
  renderTests();
}

function safeInitStep(fn) {
  try {
    fn();
  } catch (e) {
    console.error("Init step failed:", e);
  }
}

function init() {
  // Keep auth working even if another section fails to initialize.
  safeInitStep(bindAuth);
  safeInitStep(bindRouting);
  safeInitStep(bindMood);
  safeInitStep(bindMoodMonthControls);
  safeInitStep(bindMoodDeletes);
  safeInitStep(bindJournal);
  safeInitStep(bindExercises);
  safeInitStep(bindTests);
  safeInitStep(bindGoals);
  safeInitStep(bindArticlesAccordion);
  safeInitStep(bindFooterInfo);
  safeInitStep(bindModalDismiss);
  safeInitStep(bindSettings);
  if (sb && !shouldUseLocalAuthOnly()) {
    sb.auth.onAuthStateChange(async (event, session) => {
      if (event === "SIGNED_OUT") {
        state.session.userId = null;
        state.session.userName = null;
        state.session.userEmail = null;
        state.session.userPhone = null;
        saveState(state);
        refreshAuthUi();
        return;
      }

      const u = session?.user || null;
      if (u) {
        state.session.userId = u.id;
        state.session.userName = u.user_metadata?.display_name || u.email || "User";
        state.session.userEmail = u.email || "";
        state.session.userPhone = u.phone || u.user_metadata?.phone || "";
        saveState(state);
        refreshAuthUi();
        return;
      }

      await syncAuthFromSupabase({ clearOnMissing: false });
      const contactEl = $("#appointmentContact");
      if (contactEl) contactEl.value = getSessionContact();
    });
    safeInitStep(() => {
      syncAuthFromSupabase({ clearOnMissing: false });
    });
  }
  $("#langToggle")?.addEventListener("click", () => setLanguage(currentLang === "ru" ? "en" : "ru"));
  safeInitStep(applyI18n);
  safeInitStep(renderAll);
  safeInitStep(() => routeTo((location.hash || "#home").slice(1)));
}

document.addEventListener("DOMContentLoaded", init);
