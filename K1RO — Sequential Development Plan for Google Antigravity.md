# K1RO — SEQUENTIAL DEVELOPMENT PLAN

## ГЛАВНЫЙ ПРИНЦИП

Не пытайся создать весь сайт за один шаг.

Проект должен разрабатываться последовательно.

Каждый этап должен:

1. выполнить поставленную задачу;
2. проверить результат;
3. исправить найденные проблемы;
4. показать краткий отчёт;
5. только после этого переходить к следующему этапу.

Не задавай пользователю множество мелких вопросов.

Если решение не влияет критически на архитектуру или бизнес-логику — принимай профессиональное решение самостоятельно.

---

# ЭТАП 1 — RESEARCH & FOUNDATION

## Цель

Подготовить техническое и визуальное основание проекта.

### 1.1. Изучи референсы

Проанализируй:

- https://podlesnytwins.com/
- https://slimzplugins.com/products

Изучи не копируя:

- visual hierarchy;
- typography;
- spacing;
- animation;
- navigation;
- mobile presentation;
- product presentation;
- CTA;
- image usage;
- page transitions.

Также изучи современные premium creative / audio / technology websites.

Не копируй конкретный дизайн.

Нужно определить визуальные принципы, которые сделают K1RO самостоятельным брендом.

---

## 1.2. Проверь окружение

Проверь:

- Node.js;
- npm/pnpm;
- Git;
- GitHub integration;
- browser tooling;
- доступные MCP;
- доступные skills;
- screenshot tools.

Если есть documentation MCP, например Context7 или аналогичный инструмент, используй его для проверки актуальной документации.

Если есть browser/Playwright MCP — используй его для visual QA.

Не устанавливай ненужные MCP.

---

## 1.3. Определи технический stack

Предпочтительный stack:

- React;
- TypeScript;
- Vite;
- Tailwind CSS v4;
- shadcn/ui;
- Motion;
- Lenis;
- Lucide.

GSAP не добавлять без необходимости.

Three.js / React Three Fiber не добавлять без необходимости.

---

## 1.4. Создай foundation

Создай проект и базовую структуру.

Предварительно предложенная структура:

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

Структуру можно изменить, если есть объективно более качественное решение.

---

## 1.5. Результат этапа

Перед переходом к Этапу 2 должен существовать:

- запускаемый проект;
- TypeScript;
- выбранные зависимости;
- базовая routing architecture;
- Git repository;
- README;
- отсутствие критических ошибок.

### Отчёт

Покажи:

- выбранный stack;
- установленные зависимости;
- архитектуру;
- MCP/skills;
- что было принято как техническое решение.

---

# ЭТАП 2 — DESIGN SYSTEM

## Цель

Создать визуальный язык K1RO до разработки большого количества страниц.

---

## 2.1. Typography

Выбери максимум:

- 1 display font;
- 1 text/UI font.

Предпочтительно variable fonts.

Используй:

- fluid typography;
- `clamp()`;
- правильный tracking;
- optical hierarchy.

Typography должна быть одним из главных визуальных элементов сайта.

---

## 2.2. Colors

Создай design tokens:

```text
background
foreground
muted
surface
border
accent
accent-foreground
```

Основное направление:

- near-black;
- off-white;
- restrained gray;
- один controlled accent.

---

## 2.3. Spacing

Создай единообразную spacing system.

Не задавай случайные значения в каждом компоненте.

---

## 2.4. Components

Создай базовые reusable components:

- Button;
- Link;
- Container;
- Section;
- Heading;
- Image;
- Badge;
- Navigation;
- Menu.

shadcn/ui использовать как primitive foundation, но visual identity должна быть кастомной.

---

## 2.5. Motion tokens

Создай:

```text
--duration-fast
--duration-normal
--duration-slow
--ease-premium
```

Определи общую motion language.

---

## 2.6. Результат

Должна существовать цельная design system, на которой можно строить весь сайт.

Проверь её на мобильном viewport.

Только после этого переходи к Этапу 3.

---

# ЭТАП 3 — HOME: HERO

## Цель

Создать первый экран.

Это самый важный этап.

---

## 3.1. Announcement Bar

Верхняя строка:

```text
NEW PLUGIN
NEW RELEASE
AVAILABLE NOW
```

Контент должен быть вынесен в data/config.

---

## 3.2. Header

Mobile:

```text
K1RO                         MENU
```

Desktop:

navigation + language switcher.

Menu должно иметь качественную Motion-анимацию.

---

## 3.3. Hero

Основное позиционирование:

**MUSIC + SOUND + TECHNOLOGY**

Создай сильный headline.

Не использовать банальные:

> Hello, I'm K1RO.

Hero должен мгновенно отвечать:

- кто такой K1RO;
- чем занимается;
- почему это интересно.

---

## 3.4. CTA

Не более двух главных CTA.

Направления:

```text
VIEW WORKS
EXPLORE PLUGINS
```

или более сильные варианты.

---

## 3.5. Hero Visual

Создай premium visual treatment.

Можно использовать:

- portrait;
- audio visual;
- plugin interface;
- cinematic media;
- typography;
- hybrid visual.

Не использовать случайный stock.

Если assets отсутствуют — использовать временный placeholder.

---

## 3.6. Mobile QA

Проверить минимум:

- 320px;
- 375px;
- 390px;
- 430px.

Hero должен выглядеть намеренно созданным для телефона.

---

# ЭТАП 4 — HOME: CONTENT SECTIONS

После утверждения foundation Hero продолжить Home.

Создать:

1. Services
2. Selected Works
3. Featured Plugins
4. About / Credibility
5. Final CTA
6. Footer

---

## Services

Показать:

- Music Production;
- Mixing;
- Mastering;
- Sound Design;
- AI Music;
- Audio Plugins.

Не делать шесть одинаковых скучных карточек.

---

## Selected Works

Показать 3–6 сильнейших работ.

Каждая работа:

- artwork;
- title;
- category;
- short description;
- interaction.

CTA:

```text
VIEW ALL WORKS
```

---

## Featured Plugins

Показать featured products.

Каждый:

- plugin UI;
- name;
- description;
- formats;
- version;
- TRY FREE;
- BUY.

---

## About

Показать:

- portrait;
- краткое описание;
- achievements;
- numbers;
- collaborations.

Не писать огромную биографию.

---

## Final CTA

Создать сильный финальный призыв к сотрудничеству.

Направление:

```text
HAVE A PROJECT?
```

↓

```text
GET IN TOUCH
```

---

## Footer

Ссылки:

```text
Works
Services
Plugins
Downloads
About
Contact

RU | EN

Socials

Privacy
Terms
Refund
```

---

# ЭТАП 5 — MOTION & PREMIUM POLISH

## Цель

После того как структура Home работает, сделать визуальную доводку.

Использовать Motion для:

- page entrance;
- section reveal;
- stagger;
- image reveal;
- hover;
- tap;
- menu;
- page transitions;
- scroll animations.

Использовать Lenis только если он реально улучшает ощущение сайта.

---

## Scroll animation

Использовать умеренно:

- fade;
- translate;
- scale;
- clip reveal;
- stagger;
- subtle parallax.

Не превращать страницу в аттракцион.

---

## Desktop

Можно добавить:

- cursor interactions;
- magnetic buttons;
- hover effects.

---

## Mobile

Не использовать desktop-only interactions.

Touch UX должен оставаться очевидным.

---

## Reduced motion

Обязательно:

```text
prefers-reduced-motion
```

---

## QA

Проверить:

- mobile;
- tablet;
- desktop;
- reduced motion;
- performance;
- console.

---

# ЭТАП 6 — WORKS

## Цель

Создать полноценное портфолио.

Routes:

```text
/works
/works/:slug
```

Создать data-driven architecture.

Например:

```text
src/data/works/
```

Каждая работа содержит:

- id;
- slug;
- title;
- category;
- description;
- image;
- gallery;
- credits;
- year;
- featured.

---

## Works page

Сделать premium editorial grid.

Не обычный ecommerce grid.

---

## Project page

Каждый проект должен использовать один reusable layout.

Новый проект добавляется через data, а не копированием React page.

---

# ЭТАП 7 — PLUGINS

## Цель

Создать полноценный plugin catalogue.

Routes:

```text
/plugins
/plugins/:slug
```

---

## Plugin architecture

Создать typed product data.

Концептуально:

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

---

## Plugin catalogue

Карточки должны содержать:

- visual;
- name;
- description;
- formats;
- TRY FREE;
- BUY.

---

## Product page

Структура:

1. Hero
2. Plugin visual
3. Description
4. Features
5. Screenshots
6. Compatibility
7. Version
8. TRY FREE
9. BUY

---

## ВАЖНО

Не создавать на сайте:

- Magic Link;
- license key;
- hardware activation;
- user account;
- customer dashboard.

Это уже реализовано внутри плагина.

Сайт только предоставляет:

```text
DOWNLOAD / TRY FREE
BUY FULL VERSION
```

---

# ЭТАП 8 — DOWNLOADS

## Цель

Создать единый центр загрузок.

Route:

```text
/downloads
```

---

## Latest version

Показывать максимально просто:

```text
K1RO XXX

Latest version 1.2.4

Windows
DOWNLOAD

macOS
DOWNLOAD
```

---

## Version selector

Сделать:

```text
Other versions
```

Внутри:

- version;
- release date;
- OS;
- changelog;
- download.

Последняя версия должна быть визуально главной.

---

## Архитектура

Download data должна быть отделена от UI.

Концептуально:

```text
product
version
os
architecture
downloadUrl
releaseDate
changelog
```

---

# ЭТАП 9 — LOCALIZATION / SEO / LEGAL FOUNDATION

## RU / EN

Создать полноценную локализацию.

Один codebase.

Не дублировать приложение.

Предпочтительно:

```text
/ru/...
/en/...
```

---

## SEO

Добавить:

- title;
- description;
- Open Graph;
- canonical;
- sitemap;
- robots;
- semantic headings.

Для plugins metadata должна генерироваться из product data.

---

## Legal pages

Создать foundation для:

```text
Privacy
Terms
Refund
```

Не писать юридические утверждения самостоятельно, если они требуют проверки закона.

---

# ЭТАП 10 — PAYMENT / LICENSING / DEPLOYMENT

Этот этап начинается только после завершения frontend.

---

# 10.1. GitHub

Подключить проект к GitHub.

Использовать Git для:

- commits;
- history;
- rollback;
- development workflow.

---

# 10.2. Cloudflare

Подготовить deployment на Cloudflare Pages.

Будущая схема:

```text
GitHub
   ↓
Cloudflare Pages
   ↓
k1ro.ru
k1ro.com
```

---

# 10.3. Robokassa

BUY:

```text
BUY
 ↓
Robokassa
 ↓
email + payment
```

Не создавать собственный checkout.

---

# 10.4. Firebase

После подтверждённого успешного платежа:

```text
Robokassa
 ↓
verified payment
 ↓
backend
 ↓
Firebase
 ↓
license active
```

Не доверять frontend redirect как доказательству оплаты.

Использовать подтверждение платежа/backend webhook.

---

# 10.5. Email

После покупки пользователь должен получить удобное сообщение.

Оно может содержать:

```text
Thank you for your purchase.

Your license has been activated.

DOWNLOAD PLUGIN
```

Ссылка должна вести на Downloads.

Не нужно создавать сложную email delivery system, если Robokassa или выбранный backend уже позволяют реализовать это необходимым способом.

---

# 10.6. Plugin

Плагин уже самостоятельно выполняет:

```text
Email
 ↓
Magic Link
 ↓
authentication
 ↓
hardware binding
 ↓
Firebase
 ↓
license status
 ↓
FULL
```

Сайт не должен дублировать эту систему.

---

# ЭТАП 11 — FINAL QA

Перед production launch проверить весь проект.

## Mobile

Проверить:

- 320px;
- 375px;
- 390px;
- 430px.

## Desktop

Проверить:

- 1024px;
- 1280px;
- 1440px;
- 1920px.

---

## Functional QA

Проверить:

- navigation;
- language switcher;
- works;
- plugins;
- downloads;
- buttons;
- external links;
- BUY links;
- DOWNLOAD links.

---

## Visual QA

Проверить:

- typography;
- spacing;
- alignment;
- animation;
- transitions;
- images;
- mobile menu;
- footer.

---

## Technical QA

Проверить:

- TypeScript;
- production build;
- console errors;
- broken links;
- accessibility;
- SEO;
- performance;
- horizontal overflow;
- image optimization.

---

# ФИНАЛЬНОЕ ПРАВИЛО

Не пытайся максимизировать количество функций.

Нужно максимизировать:

**PERCEPTION OF QUALITY.**

Сайт должен ощущаться как:

**premium audio / music / technology brand.**

Главная формула:

```text
HIGH-END VISUALS
+
SIMPLE UX
+
FAST MOBILE EXPERIENCE
+
STRONG BRANDING
+
CLEAN ARCHITECTURE
```

А не:

```text
LOTS OF FEATURES
+
LOTS OF ANIMATIONS
+
LOTS OF TECHNOLOGY
```

Если сомневаешься между сложным и простым решением:

**выбирай простое, если пользователь не получает от сложного решения явной пользы.**

После завершения каждого этапа делай короткий отчёт:

```text
COMPLETED
CHANGED
TESTED
ISSUES FOUND
ISSUES FIXED
NEXT STEP
```

Не переходи к следующему крупному этапу, пока текущий не проходит visual и technical QA.