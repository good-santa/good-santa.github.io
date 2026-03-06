const translations = {
  uk: {
    meta_title: "good santa | Moonlit Fullstack",
    meta_description: "Lo-fi портфоліо нічного fullstack розробника good santa",
    nav_about: "Про мене",
    nav_stack: "Стек",
    nav_now: "Зараз",
    nav_projects: "Проєкти",
    nav_collab: "Колаб",
    nav_contact: "Контакти",
    hero_kicker: "нічний fullstack log",
    hero_title: "good santa: У моєму мішку лише валідний код та швидкі запити.",
    hero_subtitle: "Тихий ритм, сильний фокус, продуманий фулстек.",
    hero_btn_projects: "Проєкти",
    hero_btn_contact: "Контакти",
    about_title: "Про мене",
    about_text:
      "Я <strong>good santa</strong>, студент і QA-тестувальник, який також розвивається у fullstack-напрямі. Моя ключова сила - перевірка якості, стабільності та логіки продукту, а fullstack-частину поступово прокачую (поки 50/50).",
    stack_title: "Технологічний стек",
    stack_chip_main: "Fullstack / QA",
    stack_hint: "Секцію стеку підготую та заповню пізніше.",
    now_title: "Зараз",
    now_text:
      "Зараз фокус на швидких fullstack MVP, чистих API і нормальній продуктивності без зайвого шуму.",
    goals_title: "Цілі 2026",
    goal_1: "Запустити 3 проєкти в продакшн.",
    goal_2: "Прокачати тестування: unit + e2e.",
    goal_3: "Робити open-source contribution щомісяця.",
    projects_title: "Вибрані проєкти",
    project1_title: "Bingo Project",
    project1_desc: "Сайт, над яким я працював: сторінка About / RU.",
    project2_title: "SEN Project",
    project2_desc: "Вебпроєкт, над яким я працював: англомовна версія.",
    project_open: "Відкрити проєкт",
    project3_title: "Contacts Project",
    project3_desc: "Контактний вебпроєкт, над яким я працював.",
    contact_title: "Контакти",
    contact_steam: "Профіль Steam",
    collab_title: "Співпраця",
    collab_text:
      "Відкритий до співпраці як QA-тестувальник: ручне тестування, перевірка логіки, баг-репорти, smoke/regression і підтримка релізів."
  },
  en: {
    meta_title: "good santa | Moonlit Fullstack",
    meta_description: "Lo-fi portfolio of good santa, a night fullstack developer",
    nav_about: "About",
    nav_stack: "Stack",
    nav_now: "Now",
    nav_projects: "Projects",
    nav_collab: "Collab",
    nav_contact: "Contact",
    hero_kicker: "fullstack night log",
    hero_title: "good santa: In my bag, only valid code and fast queries.",
    hero_subtitle: "Quiet rhythm, deep focus, thoughtful fullstack.",
    hero_btn_projects: "Projects",
    hero_btn_contact: "Contact",
    about_title: "About",
    about_text:
      "I'm <strong>good santa</strong>, a student and QA tester who is also growing in fullstack development. My core strength is ensuring product quality, stability, and logic, while my fullstack level is still evolving (currently around 50/50).",
    stack_title: "Tech Stack",
    stack_chip_main: "Fullstack / QA",
    stack_hint: "I will prepare and fill this stack section later.",
    now_title: "Now",
    now_text:
      "Current focus: fast fullstack MVPs, clean APIs, and real performance without extra noise.",
    goals_title: "Goals 2026",
    goal_1: "Ship 3 production-ready projects.",
    goal_2: "Level up testing: unit + e2e.",
    goal_3: "Make one open-source contribution every month.",
    projects_title: "Featured Projects",
    project1_title: "Bingo Project",
    project1_desc: "A website I worked on: About page / RU.",
    project2_title: "SEN Project",
    project2_desc: "A web project I worked on: English version.",
    project_open: "Open project",
    project3_title: "Contacts Project",
    project3_desc: "A contacts web project I worked on.",
    contact_title: "Contact",
    contact_steam: "Steam Profile",
    collab_title: "Collab",
    collab_text:
      "Open for collaboration as a QA tester: manual testing, logic validation, bug reporting, smoke/regression checks, and release support."
  }
};

function applyLanguage(lang) {
  const locale = translations[lang] ? lang : "uk";
  const dict = translations[locale];

  document.documentElement.lang = locale;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    if (!dict[key]) return;
    if (el.tagName === "P" && key === "about_text") {
      el.innerHTML = dict[key];
      return;
    }
    el.textContent = dict[key];
  });

  document.querySelectorAll("[data-i18n-attr]").forEach((el) => {
    const [attr, key] = el.dataset.i18nAttr.split(":");
    if (!attr || !key || !dict[key]) return;
    el.setAttribute(attr, dict[key]);
  });

  document.querySelectorAll("[data-lang-btn]").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.langBtn === locale);
  });

  if (window.lucide && typeof window.lucide.createIcons === "function") {
    window.lucide.createIcons();
  }

  localStorage.setItem("preferred_lang", locale);
}

document.querySelectorAll("[data-lang-btn]").forEach((btn) => {
  btn.addEventListener("click", () => applyLanguage(btn.dataset.langBtn));
});

applyLanguage(localStorage.getItem("preferred_lang") || "uk");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.16 }
);

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

const canUseCursorGlow = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

if (canUseCursorGlow) {
  const root = document.documentElement;
  const body = document.body;
  let rafId = null;
  let nextX = window.innerWidth / 2;
  let nextY = window.innerHeight / 2;

  const paintCursorGlow = () => {
    root.style.setProperty("--cursor-x", `${nextX}px`);
    root.style.setProperty("--cursor-y", `${nextY}px`);
    rafId = null;
  };

  const queuePaint = () => {
    if (rafId !== null) return;
    rafId = window.requestAnimationFrame(paintCursorGlow);
  };

  window.addEventListener("mousemove", (event) => {
    nextX = event.clientX;
    nextY = event.clientY;
    body.classList.add("cursor-glow-active");
    queuePaint();
  });

  window.addEventListener("mouseenter", () => {
    body.classList.add("cursor-glow-active");
  });

  window.addEventListener("mouseleave", () => {
    body.classList.remove("cursor-glow-active");
  });
}
