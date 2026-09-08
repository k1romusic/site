# K1RO — MASTER PROJECT INSTRUCTION

## 0. ТВОЯ РОЛЬ

Ты — senior creative developer, frontend architect, UI/UX designer, motion designer и technical lead.

Твоя задача — создать production-quality сайт личного бренда K1RO.

Это НЕ должен быть шаблонный сайт-портфолио.

Сайт должен выглядеть как дорогой современный digital-production / creative-tech бренд: уровень хороших современных агентств, музыкальных продюсеров, audio-plugin компаний и качественных сайтов, сделанных на Tilda/Webflow/Framer, но реализованный кодом с полноценной архитектурой для дальнейшего масштабирования.

Главный приоритет:

**визуальное качество + мобильный UX + производительность + простота дальнейшего редактирования.**

Не начинай сразу писать много кода.

Сначала:

1. Проанализируй это ТЗ.
2. Проанализируй существующее окружение.
3. Проверь доступные MCP servers / skills / tools.
4. Проверь актуальную документацию выбранных библиотек.
5. Определи архитектуру.
6. Создай минимальный рабочий foundation.
7. Только после этого начинай реализацию интерфейса.
8. После каждого крупного этапа проверяй сайт в браузере.

---

# 1. КОНТЕКСТ ПРОЕКТА

Бренд:

**K1RO**

Основная деятельность:

- music production;
- sound production;
- mixing;
- mastering;
- sound design;
- AI-assisted music production;
- development of audio plugins;
- собственные аудиоинструменты для музыкантов и продюсеров.

Сайт должен одновременно продавать:

1. самого K1RO как специалиста;
2. услуги;
3. музыкальные работы;
4. собственные аудиоплагины.

Главная задача сайта:

**человек должен очень быстро понять, кто такой K1RO, чем он занимается и что он может получить от взаимодействия с K1RO.**

---

# 2. ОСНОВНАЯ ИДЕЯ

Сайт должен восприниматься не как обычное:

> "Привет, я звукорежиссёр, вот моё портфолио."

А как полноценный персональный creative/audio brand.

Образ:

**MUSIC + SOUND + TECHNOLOGY**

K1RO должен восприниматься как человек, который не просто оказывает услуги, а создаёт собственную музыкальную и технологическую экосистему.

---

# 3. ЦЕЛЕВАЯ АУДИТОРИЯ

Основные группы:

### A. Музыканты / артисты

Им нужны:

- production;
- arrangement;
- mixing;
- mastering;
- sound;
- AI production.

### B. Продюсеры / звукорежиссёры

Им интересны:

- plugins;
- audio tools;
- production techniques;
- sound design.

### C. Клиенты

Им нужны:

- услуги;
- сотрудничество;
- коммерческие проекты.

### D. Люди, которые просто пришли посмотреть работы

Им нужно быстро показать:

- уровень;
- стиль;
- достижения;
- проекты;
- визуальную идентичность.

---

# 4. MOBILE-FIRST

Это КРИТИЧЕСКИ ВАЖНО.

Сайт в первую очередь проектируется для смартфонов.

Основной viewport:

390–430 px.

Сначала идеально:

- iPhone;
- Android;
- touch interaction;
- вертикальный scroll.

Только потом:

- tablet;
- laptop;
- desktop;
- ultra-wide.

НЕ делать desktop-сайт, который потом просто уменьшается под мобильный.

Mobile должен быть полноценной самостоятельной UX-концепцией.

---

# 5. ВИЗУАЛЬНЫЙ УРОВЕНЬ

Сайт должен выглядеть дорого.

Не использовать:

- стандартные Bootstrap-like карточки;
- дешёвые градиенты;
- случайные glow effects;
- excessive glassmorphism;
- типовые hero sections;
- шаблонные stock photos;
- чрезмерные rounded cards;
- стандартные AI-generated landing-page patterns.

Нужна визуальная культура.

Ориентир:

- premium creative agency;
- premium audio software company;
- modern music producer;
- experimental editorial design;
- high-end portfolio;
- contemporary fashion / technology websites.

Можно использовать:

- крупную типографику;
- очень большие изображения;
- cinematic transitions;
- мягкий motion;
- asymmetric layouts;
- negative space;
- full-screen sections;
- subtle grain;
- subtle blur;
- masks;
- image reveals;
- horizontal movement;
- parallax;
- text reveals;
- magnetic interactions;
- cursor interactions на desktop;
- touch-friendly equivalents на mobile.

Но всё должно быть умеренным.

Правило:

**animation should create perception of quality, not demonstrate that animations exist.**

---

# 6. ЦВЕТОВАЯ СИСТЕМА

Создай полноценную design system.

Базовое направление:

- dark / near-black background;
- off-white typography;
- restrained secondary gray;
- один характерный accent color.

Не привязывайся навсегда к конкретному accent color.

Создай его как design token.

Например:

```text
--background
--foreground
--muted
--surface
--border
--accent
--accent-foreground
```

Все цвета должны быть централизованы.

---

# 7. ТИПОГРАФИКА

Типографика — один из главных элементов дизайна.

Используй современные variable fonts.

Нужно подобрать:

### Display font

Для:

- HERO;
- крупных заголовков;
- product titles;
- section titles.

### Text/UI font

Для:

- descriptions;
- buttons;
- navigation;
- metadata.

Можно использовать современные open-source fonts через локальное подключение или Google Fonts, но предпочтение отдавать хорошему variable font и минимальному количеству font families.

Не использовать больше 2 основных семейств без веской причины.

Typography должна иметь:

- огромные display sizes;
- fluid typography;
- `clamp()`;
- правильный letter-spacing;
- optical hierarchy;
- хорошие line-height.

---

# 8. ТЕХНИЧЕСКИЙ STACK

Предпочтительный foundation:

```text
React
TypeScript
Vite
Tailwind CSS v4
shadcn/ui
Motion
Lenis
Lucide
```

Используй актуальные версии библиотек на момент разработки.

Не фиксируй старые версии только потому, что они были популярны раньше.

Перед установкой зависимостей проверь актуальную официальную документацию.

---

# 9. REACT

Используй React как основной UI framework.

Компоненты должны быть:

- reusable;
- composable;
- typed;
- небольшими;
- логически разделёнными.

Не создавать один огромный `App.tsx`.

---

# 10. TYPESCRIPT

Использовать TypeScript.

Не использовать:

```text
any
```

без крайней необходимости.

Все основные data models должны иметь типы.

---

# 11. VITE

Использовать Vite как быстрый frontend build tool, если анализ проекта не выявит более подходящего требования.

Сайт должен оставаться простым для деплоя на Cloudflare.

---

# 12. TAILWIND CSS

Использовать Tailwind CSS v4 для layout/design utilities.

Но:

НЕ превращать весь проект в нечитаемые длинные className.

Повторяющиеся визуальные паттерны должны быть компонентами.

Создать design tokens.

---

# 13. SHADCN/UI

Использовать shadcn/ui только там, где он реально помогает:

- buttons;
- dialogs;
- sheets;
- navigation;
- dropdowns;
- tabs;
- forms;
- accordions;
- accessibility primitives.

Не превращать сайт в типовой shadcn dashboard.

Основной визуальный дизайн должен быть кастомным.

shadcn — это foundation для UI primitives, а не готовый visual identity.

---

# 14. MOTION

Используй Motion for React как основной animation framework.

Он должен отвечать за:

- page entrance;
- section reveals;
- staggered text;
- image reveal;
- hover;
- tap;
- buttons;
- layout transitions;
- menu animation;
- modal animation;
- scroll-triggered animation;
- subtle parallax;
- page transitions.

Используй:

```text
motion
AnimatePresence
whileHover
whileTap
whileInView
useScroll
useTransform
layout
```

где это действительно уместно.

Не анимируй всё подряд.

---

# 15. LENIS

Использовать Lenis для premium smooth scrolling, если тестирование показывает, что это улучшает UX.

Особенно использовать для:

- smooth page scroll;
- scroll-linked effects;
- subtle parallax;
- synchronization with motion.

Но:

### МОБИЛЬНЫЙ UX ПРИОРИТЕТНЕЕ

Если smooth scrolling ухудшает:

- touch;
- battery;
- performance;
- accessibility;
- browser behavior;

на мобильных устройствах — отключить или облегчить эффект.

---

# 16. GSAP

GSAP НЕ устанавливать автоматически.

Сначала использовать Motion.

Если позже потребуется:

- сложный timeline;
- pinning;
- scrub;
- сложные scroll scenes;
- SVG timeline;
- сложные cinematic sequences;

тогда можно точечно добавить GSAP + ScrollTrigger.

Не использовать две animation systems для одной и той же задачи без необходимости.

---

# 17. 3D / WEBGL

Не добавлять Three.js / React Three Fiber просто ради "вау".

3D разрешено только если оно:

- действительно усиливает бренд;
- не убивает мобильную производительность;
- имеет смысл для audio/plugin identity.

Сначала сделать качественный 2D/motion сайт.

---

# 18. MCP / AGENT TOOLS

Перед разработкой проверь, какие MCP servers и skills доступны в Google Antigravity.

Приоритет:

### 1. Documentation MCP

Если доступен Context7 или аналогичный documentation MCP — подключить его.

Использовать его для актуальной документации:

- React;
- Vite;
- Tailwind;
- Motion;
- Lenis;
- shadcn/ui;
- Cloudflare.

Не полагаться на устаревшие знания модели, если официальная документация доступна.

### 2. Browser / Playwright MCP

Если доступен browser automation MCP:

использовать его для:

- открытия сайта;
- проверки мобильного viewport;
- проверки desktop;
- кликов;
- проверки navigation;
- проверки animations;
- проверки responsive behavior.

### 3. Screenshot / visual inspection tools

Если доступны:

использовать их для визуальной проверки.

После крупных этапов делать visual QA.

### 4. Git / GitHub tools

Если доступны:

использовать для:

- commits;
- branches;
- inspection;
- version control.

Не делать destructive git operations без необходимости.

---

# 19. MCP RULE

НЕ устанавливай десятки MCP servers просто потому, что они существуют.

Принцип:

> минимум инструментов — максимум полезности.

Если нужный MCP недоступен:

1. сообщи об этом;
2. используй альтернативу;
3. не блокируй разработку.

---

# 20. АРХИТЕКТУРА САЙТА

Предусмотреть следующие routes:

```text
/
 /works
 /works/:slug

 /services

 /plugins
 /plugins/:slug

 /downloads

 /about

 /contact

 /privacy
 /terms
 /refund
```

Для RU/EN предусмотреть локализацию.

Предпочтительно:

```text
/ru/...
/en/...
```

либо архитектура, которую агент сочтёт более удобной для выбранного routing solution.

Главное:

**не создавать два отдельных приложения.**

Один codebase.

---

# 21. ДОМЕНЫ

В будущем:

```text
k1ro.ru
k1ro.com
```

Оба домена должны обслуживать один проект.

Не создавать две версии сайта.

---

# 22. LANGUAGE SWITCHER

Обязательно:

```text
RU | EN
```

Переключение языка должно быть быстрым и естественным.

Не должно быть полной перезагрузки приложения без необходимости.

Все пользовательские тексты должны быть готовы к локализации.

Не хардкодить русский текст непосредственно внутри компонентов.

---

# 23. DATA-DRIVEN CONTENT

Это ОЧЕНЬ ВАЖНО.

Сайт должен быть подготовлен к росту количества:

- plugins;
- works;
- services;
- downloads.

Например:

```text
src/data/
    plugins/
    works/
    services/
    downloads/
```

Каждый plugin должен быть описан данными.

Например концептуально:

```text
id
slug
name
nameRu
nameEn
description
descriptionRu
descriptionEn
price
currency
cover
gallery
features
formats
systems
downloadUrl
buyUrl
version
releaseDate
featured
```

Не создавать уникальную страницу вручную для каждого плагина.

Должен существовать reusable Product Page.

---

# 24. DOWNLOAD ARCHITECTURE

Предусмотреть отдельный Downloads system.

Он должен поддерживать:

```text
Product
Version
OS
Architecture
Download URL
Release date
Changelog
```

Например:

```text
K1RO EQ

Latest version
1.2.4

Windows
DOWNLOAD

macOS
DOWNLOAD
```

Также:

```text
Previous versions
```

Но старые версии не должны визуально конкурировать с последней.

---

# 25. ПЛАГИНЫ

На сайте plugin download НЕ означает покупку.

Это принципиально.

Пользователь может скачать полноценный plugin installer бесплатно.

Активация уже происходит внутри самого plugin.

Не реализовывать на сайте:

- license key;
- account dashboard;
- plugin activation;
- hardware binding;
- Magic Link.

Это уже существует внутри продукта.

Сайт только:

```text
DOWNLOAD
BUY
```

---

# 26. BUY FLOW

Кнопка BUY должна быть подготовлена для будущей интеграции с Robokassa.

Пока не создавать сложный checkout внутри сайта.

Архитектура:

```text
BUY
 ↓
Robokassa
 ↓
payment
 ↓
Firebase/license backend
```

Сайт не должен превращаться в полноценный ecommerce backend.

---

# 27. ПОСЛЕ ПОКУПКИ

Планируем:

```text
Robokassa
    ↓
successful payment
    ↓
license activation
    ↓
email
    ↓
download link
```

Email может содержать:

- thank you;
- product name;
- confirmation;
- download button;
- support/contact.

Чек может приходить отдельно через payment provider.

Не строить собственную email infrastructure без необходимости.

---

# 28. HOME PAGE

Главная страница должна иметь следующую структуру.

## A. ANNOUNCEMENT BAR

Самый верх.

Например:

```text
NEW PLUGIN — K1RO XXX
```

или:

```text
NEW RELEASE
```

или:

```text
AVAILABLE NOW
```

Bar должен быть кликабельным.

В будущем его контент должен легко изменяться через data/config.

---

# 29. HERO

Это самый важный блок.

На первом экране человек должен мгновенно понять:

**K1RO = music + sound + technology**

Пример направления:

```text
MUSIC.
SOUND.
TECHNOLOGY.
```

или более сильный вариант, который будет найден в процессе дизайна.

Под ним:

краткое позиционирование.

Например:

```text
Music production, sound engineering
and audio technology.
```

Но тексты НЕ копировать буквально.

Создай сильный copywriting.

---

# 30. HERO CTA

Основные CTA:

```text
VIEW WORKS
EXPLORE PLUGINS
```

или другой вариант, который окажется сильнее.

Главное:

не перегружать.

2 главные CTA максимум.

---

# 31. HERO VISUAL

Нужен сильный визуальный элемент.

Возможные варианты:

- portrait;
- abstract audio visual;
- plugin interface;
- cinematic video;
- waveform;
- studio;
- moving typography;
- hybrid combination.

Не использовать случайную stock photo.

Если реальные assets пока отсутствуют:

создать аккуратные placeholders с правильной структурой, чтобы потом заменить их без переделки layout.

---

# 32. SERVICES SECTION

Заголовок:

```text
WHAT I DO
```

Карточки:

```text
MUSIC PRODUCTION
MIXING
MASTERING
SOUND DESIGN
AI MUSIC
AUDIO PLUGINS
```

На мобильном — вертикальный/горизонтальный scroll, если это улучшает UX.

Не делать 6 одинаковых скучных карточек.

Использовать motion и editorial layout.

---

# 33. SELECTED WORKS

Показать 3–6 лучших проектов.

Каждый:

- artwork;
- title;
- category;
- short description;
- hover/touch interaction.

Кнопка:

```text
VIEW ALL WORKS
```

---

# 34. PLUGINS FEATURED

Это коммерчески важный блок.

Заголовок:

```text
TOOLS I BUILT
```

Покажи featured plugins.

Каждый:

- UI screenshot;
- product name;
- short description;
- version;
- format;
- CTA.

Основная кнопка:

```text
TRY FREE
```

Вторая:

```text
BUY
```

---

# 35. ABOUT / CREDIBILITY

Показать:

- фотографию;
- короткое описание;
- achievements;
- numbers;
- projects;
- collaborations.

Не делать длинную биографию.

Главное:

**credibility.**

---

# 36. CTA

Перед footer:

```text
HAVE A PROJECT?

LET'S CREATE SOMETHING
WORTH HEARING.
```

или более сильный copywriter-generated вариант.

CTA:

```text
GET IN TOUCH
```

---

# 37. FOOTER

Минимальный.

Содержит:

```text
K1RO

Works
Services
Plugins
Downloads
About
Contact

RU | EN

Social links

Terms
Privacy
Refund

© K1RO
```

---

# 38. NAVIGATION

Desktop:

sticky / fixed navigation.

Mobile:

compact header.

Например:

```text
K1RO          MENU
```

Menu opens smoothly.

Не делать стандартный hamburger без анимации.

Menu должен ощущаться как часть бренда.

---

# 39. MICROINTERACTIONS

Добавить качественные:

- button hover;
- button press;
- image hover;
- magnetic-ish CTA;
- underline animation;
- menu transition;
- active navigation;
- image reveal;
- text reveal;
- subtle cursor interaction desktop.

Но:

на touch устройствах hover-dependent UX запрещён.

---

# 40. PAGE TRANSITIONS

Добавить мягкие переходы между страницами.

Не делать длинные cinematic transitions, которые раздражают.

Ориентир:

200–500ms для UI transitions.

Более длинные transitions допустимы только для hero/large visual transitions.

---

# 41. SCROLL ANIMATIONS

Использовать:

- fade;
- translate;
- scale;
- clip reveal;
- stagger;
- parallax.

Не использовать постоянное движение.

Каждая секция должна иметь собственную visual rhythm.

---

# 42. REDUCED MOTION

Обязательно поддержать:

```text
prefers-reduced-motion
```

Пользователь с reduced motion должен получить полноценный функциональный сайт без тяжёлых animations.

---

# 43. PERFORMANCE

Критически важно.

Сайт должен быть красивым, но быстрым.

Следить за:

- image sizes;
- lazy loading;
- responsive images;
- WebP/AVIF;
- font loading;
- bundle size;
- animation performance;
- layout shifts;
- unnecessary JS.

Не загружать тяжёлые библиотеки ради одного эффекта.

---

# 44. IMAGES

Все изображения должны иметь:

- responsive dimensions;
- lazy loading where appropriate;
- alt;
- aspect ratio;
- optimized format.

Hero image/video должен быть оптимизирован отдельно.

---

# 45. VIDEO

Если используется видео:

- autoplay muted;
- poster;
- mobile fallback;
- compressed source;
- no unnecessary full-resolution video.

Нельзя делать сайт, который грузит 50 MB видео на мобильном.

---

# 46. ACCESSIBILITY

Обязательно:

- semantic HTML;
- keyboard navigation;
- focus states;
- aria labels;
- sufficient contrast;
- touch targets;
- reduced motion;
- alt text.

---

# 47. SEO

Подготовить:

- title;
- meta description;
- Open Graph;
- Twitter/X card;
- canonical;
- sitemap;
- robots;
- semantic headings.

Для plugin pages SEO metadata должна генерироваться из product data.

---

# 48. ANALYTICS

Не добавлять analytics автоматически, пока я отдельно не дам provider/config.

Архитектура должна позволять добавить его позже.

---

# 49. PRIVACY

Сайт должен быть способен работать с минимальным сбором персональных данных.

Не добавлять:

- newsletter;
- tracking;
- unnecessary forms;
- account system;

без отдельного требования.

Позже будут страницы:

```text
Privacy
Terms
Refund
```

---

# 50. CLOUD / DEPLOYMENT

Целевой deployment:

**Cloudflare**

Repository:

**GitHub**

Архитектура:

```text
Antigravity
    ↓
GitHub
    ↓
Cloudflare
    ↓
k1ro.ru
k1ro.com
```

Cloudflare должен быть готов к Git-based deployment и preview deployments.

Не использовать архитектуру, которая требует дорогого постоянного server runtime, если это не необходимо.

---

# 51. SECURITY

Никогда не хранить:

- Robokassa secret;
- Firebase Admin credentials;
- private API keys;

в frontend.

Любые secrets — только environment variables / backend.

---

# 52. CODE QUALITY

Создать понятную структуру:

```text
src/
  components/
  components/ui/
  sections/
  pages/
  layouts/
  data/
  hooks/
  lib/
  assets/
  styles/
  i18n/
```

Если другая структура объективно лучше — можешь изменить.

Главное:

**архитектура должна оставаться понятной человеку, который не является senior developer.**

---

# 53. DOCUMENTATION

Создай:

```text
README.md
```

В нём объясни:

- как запустить проект;
- как установить зависимости;
- как добавить plugin;
- как добавить work;
- как изменить текст;
- как изменить language;
- как добавить download;
- как изменить CTA;
- как запустить production build;
- как деплоить.

---

# 54. CONTENT MANAGEMENT

На первом этапе НЕ подключать CMS.

Контент должен находиться в typed data files.

Это проще и дешевле.

Позже при необходимости можно перейти на CMS.

---

# 55. DESIGN SYSTEM

Создай tokens:

```text
colors
spacing
radius
typography
shadows
motion
breakpoints
container widths
```

Особенно:

```text
--ease-premium
--duration-fast
--duration-normal
--duration-slow
```

Animation timing должен быть единообразным.

---

# 56. RESPONSIVE BREAKPOINTS

Не проектировать под конкретные устройства только через:

```text
iPhone
iPad
Desktop
```

Использовать fluid responsive system.

Особое внимание:

```text
320px
375px
390px
430px
768px
1024px
1280px
1440px
1920px+
```

---

# 57. DESKTOP

Desktop должен не просто быть увеличенной mobile version.

Использовать desktop-преимущества:

- asymmetric grids;
- large typography;
- hover;
- cursor effects;
- wide imagery;
- horizontal sections;
- richer transitions.

---

# 58. MOBILE

Mobile:

- no hover dependency;
- easy thumb interaction;
- large buttons;
- readable typography;
- minimal navigation;
- no horizontal overflow;
- no tiny text;
- no giant loading sequences.

---

# 59. ДОБАВЛЕНИЕ НОВОГО ПЛАГИНА

Архитектура должна позволять мне в будущем сказать:

> "Добавь новый плагин K1RO XXX."

И агент должен:

1. создать product data;
2. добавить изображения;
3. добавить download data;
4. добавить product page;
5. добавить карточку;
6. добавить SEO;
7. добавить RU/EN;
8. не копировать существующий page component.

---

# 60. ДОБАВЛЕНИЕ НОВОЙ РАБОТЫ

То же самое для Works.

Добавление нового проекта не должно требовать переписывания layout.

---

# 61. НЕ СОЗДАВАТЬ СЕЙЧАС

Пока НЕ создавать:

- Firebase integration;
- Robokassa integration;
- authentication;
- Magic Link;
- license API;
- hardware binding;
- admin panel;
- customer dashboard;
- ecommerce cart;
- newsletter;
- CRM;
- database backend.

Эти системы будут подключаться отдельными этапами.

Сейчас создаётся:

**premium frontend foundation + content architecture.**

---

# 62. ПРИОРИТЕТЫ

При конфликте требований используй такой порядок:

1. UX
2. visual quality
3. mobile experience
4. performance
5. accessibility
6. maintainability
7. feature count

Не добавляй feature просто потому, что можешь.

---

# 63. DESIGN PHILOSOPHY

Очень важно:

Не делай сайт "AI-looking".

Не нужно:

- purple neon everywhere;
- random gradients;
- glowing text;
- excessive glassmorphism;
- floating blobs;
- generic 3D objects;
- random particles.

K1RO должен выглядеть как **реальный creative professional + technology creator**.

Визуальный стиль должен быть уверенным, минималистичным, немного экспериментальным и дорогим.

---

# 64. REFERENCES

Для общего ощущения:

- premium Tilda/Webflow/Framer creative portfolios;
- modern music producer websites;
- premium audio software/plugin websites;
- contemporary digital agencies;
- editorial fashion/technology layouts.

У пользователя есть два конкретных референса:

```text
https://podlesnytwins.com/
https://slimzplugins.com/products
```

Используй их как reference points по:

- presentation;
- visual density;
- product presentation;
- animation;
- premium feeling.

Но НЕ копируй их дизайн, структуру или assets буквально.

Создай самостоятельную K1RO identity.

---

# 65. ВАЖНЫЙ ПРИНЦИП

Сайт должен выглядеть так, будто его делала дорогая digital agency.

Но код должен оставаться простым.

То есть:

**сложный внешний вид + простая внутренняя архитектура.**

Не наоборот.

---

# 66. ПЕРВЫЙ ЭТАП РАБОТЫ

НЕ начинай с реализации всех страниц.

Сначала создай только:

```text
HOME
```

Но foundation должен быть готов к:

```text
WORKS
SERVICES
PLUGINS
DOWNLOADS
ABOUT
CONTACT
```

---

# 67. HOME V1

Реализуй:

1. Announcement bar
2. Header
3. Hero
4. Services
5. Selected Works
6. Featured Plugins
7. About/Credibility
8. CTA
9. Footer

Каждая секция должна быть визуально законченной.

---

# 68. VISUAL QA

После реализации:

1. Запусти dev server.
2. Открой сайт через browser tooling.
3. Проверь mobile 390px.
4. Проверь mobile 430px.
5. Проверь desktop 1440px.
6. Проверь 1920px.
7. Проверь отсутствие horizontal overflow.
8. Проверь navigation.
9. Проверь animations.
10. Проверь reduced motion.
11. Проверь console errors.
12. Проверь build.

Если browser MCP доступен — используй его.

---

# 69. НЕ ПРИНИМАЙ ПЕРВЫЙ ВАРИАНТ КАК ФИНАЛЬНЫЙ

После первой реализации проведи self-review:

### Visual

- выглядит ли это дорого?
- есть ли характер?
- не похоже ли это на шаблон?
- достаточно ли сильный Hero?

### UX

- понятно ли за 5 секунд, кто такой K1RO?
- понятно ли, что можно заказать?
- понятно ли, где plugins?
- понятно ли, где works?

### Mobile

- удобно ли большим пальцем?
- не слишком ли много текста?
- не слишком ли медленные animations?

### Performance

- нет ли тяжёлых assets?
- нет ли unnecessary JS?
- нет ли layout shifts?

После этого улучши результат.

---

# 70. ПЕРЕД НАЧАЛОМ

Сначала покажи мне:

1. proposed stack;
2. proposed folder structure;
3. proposed dependency list;
4. proposed route structure;
5. proposed design system;
6. proposed animation system;
7. список доступных MCP/skills;
8. что из них ты реально будешь использовать;
9. что необходимо установить;
10. какие части пока будут placeholders.

После этого можешь переходить к реализации.

Не задавай мне 30 мелких вопросов.

Если информация не критична — принимай разумное профессиональное решение самостоятельно.

Если необходим реальный asset, которого у тебя нет, используй качественный placeholder и подготовь архитектуру для его простой замены.

---

# 71. ФИНАЛЬНАЯ ЦЕЛЬ

Когда первая версия HOME будет готова, я должен открыть её на телефоне и получить ощущение:

> "Это серьёзный профессиональный бренд."

А не:

> "Это сайт, который AI собрал из шаблона."

Главный критерий успеха:

**K1RO должен выглядеть как самостоятельный premium audio / music / technology brand.**

Начинай с анализа окружения и подготовки foundation. Не приступай к масштабной реализации, пока не проверишь актуальные версии библиотек и доступные MCP/skills.