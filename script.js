(function () {
  const welcomeScreen = document.getElementById("welcome");
  const dashboardScreen = document.getElementById("dashboard");
  const dashTitle = document.getElementById("dash-title");
  const dashEyebrow = document.getElementById("dash-eyebrow");
  const todoGridEl = document.getElementById("todo-grid");
  const futureGridEl = document.getElementById("future-grid");
  const backBtn = document.getElementById("back-btn");

  const BATCH_LABEL = { batch1: "BSIT 3A1", batch2: "BSIT 3A2" };
  const WEEKDAY_OFFSET = { Tuesday: 1, Wednesday: 2, Thursday: 3, Friday: 4, Saturday: 5 };

  let currentBatch = null;

  // ---- date helpers ----
  // Always resolves to "next week" (the week starting the Monday after this one),
  // matching the "everything below starts next week" framing.
  function getNextWeekMonday() {
    const d = new Date();
    const day = d.getDay(); // 0 = Sun ... 6 = Sat
    const daysUntilNextMonday = ((8 - day) % 7) || 7;
    d.setDate(d.getDate() + daysUntilNextMonday);
    d.setHours(0, 0, 0, 0);
    return d;
  }

  function formatNextClassDate(dayName) {
    const monday = getNextWeekMonday();
    const target = new Date(monday);
    target.setDate(target.getDate() + (WEEKDAY_OFFSET[dayName] || 0));
    return target.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" });
  }

  // ---- drive dropdown ----
  function setupDriveDropdown(containerId) {
    const container = document.getElementById(containerId);
    const btn = container.querySelector(".gdrive-pill");
    const menu = container.querySelector(".drive-menu");

    menu.innerHTML = DRIVE_LINKS.map(
      (link) => `<a href="${link.url}" target="_blank" rel="noopener" role="menuitem">${link.label}</a>`
    ).join("");

    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const isOpen = container.classList.toggle("open");
      btn.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
  }

  document.addEventListener("click", () => {
    document.querySelectorAll(".drive-dropdown.open").forEach((el) => {
      el.classList.remove("open");
      el.querySelector(".gdrive-pill").setAttribute("aria-expanded", "false");
    });
  });

  setupDriveDropdown("drive-dropdown-welcome");
  setupDriveDropdown("drive-dropdown-dash");

  // ---- batch selection ----
  document.querySelectorAll(".batch-card").forEach((card) => {
    card.addEventListener("click", () => openBatch(card.dataset.batch));
  });

  backBtn.addEventListener("click", () => {
    dashboardScreen.classList.remove("active");
    welcomeScreen.classList.add("active");
  });

  function openBatch(batch) {
    currentBatch = batch;
    dashTitle.textContent = BATCH_LABEL[batch];
    dashEyebrow.textContent = batch === "batch1" ? "Batch 1" : "Batch 2";

    renderTodos(batch);
    renderFutureEvents(batch);

    welcomeScreen.classList.remove("active");
    dashboardScreen.classList.add("active");
    dashboardScreen.scrollTop = 0;
    window.scrollTo(0, 0);
  }

  // ---- view tabs (Pending Tasks / Future Events) ----
  document.querySelectorAll(".tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      document.querySelectorAll(".tab").forEach((t) => {
        t.classList.remove("active");
        t.setAttribute("aria-selected", "false");
      });
      tab.classList.add("active");
      tab.setAttribute("aria-selected", "true");

      document.querySelectorAll(".view").forEach((v) => v.classList.remove("active"));
      document.getElementById("view-" + tab.dataset.view).classList.add("active");
    });
  });

  // ---- card builder shared by both views ----
  function buildSubjectCard(code, items, showDate) {
    const subject = SUBJECTS[code];
    const card = document.createElement("div");
    card.className = `todo-card subj-${subject.color}`;

    const dateHtml =
      showDate && NEXT_CLASS_DAY[currentBatch][code]
        ? `<span class="next-date">Next: ${formatNextClassDate(NEXT_CLASS_DAY[currentBatch][code])}</span>`
        : "";

    const list = items
      .map((item) => `<li><span class="todo-dot" aria-hidden="true"></span><span>${item}</span></li>`)
      .join("");

    card.innerHTML = `
      <div class="card-top">
        <div class="class-code">${code}</div>
        ${dateHtml}
      </div>
      <h3>${subject.short}</h3>
      <ul>${list}</ul>
    `;
    return card;
  }

  // ---- pending tasks rendering ----
  function renderTodos(batch) {
    todoGridEl.innerHTML = "";
    const todos = TODOS[batch];
    Object.keys(todos).forEach((code) => {
      todoGridEl.appendChild(buildSubjectCard(code, todos[code], true));
    });
  }

  // ---- future events rendering ----
  function renderFutureEvents(batch) {
    futureGridEl.innerHTML = "";
    const events = FUTURE_EVENTS[batch] || {};
    const codes = Object.keys(events);

    if (codes.length === 0) {
      futureGridEl.innerHTML = `<div class="no-class">Nothing on the horizon yet.</div>`;
      return;
    }

    codes.forEach((code) => {
      futureGridEl.appendChild(buildSubjectCard(code, events[code], false));
    });
  }
})();
