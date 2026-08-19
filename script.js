(function () {
  const welcomeScreen = document.getElementById("welcome");
  const dashboardScreen = document.getElementById("dashboard");
  const dashTitle = document.getElementById("dash-title");
  const dashEyebrow = document.getElementById("dash-eyebrow");
  const todoGridEl = document.getElementById("todo-grid");
  const backBtn = document.getElementById("back-btn");

  const BATCH_LABEL = { batch1: "BSIT 3A1", batch2: "BSIT 3A2" };

  let currentBatch = null;

  // wire the Google Drive links
  document.getElementById("gdrive-link-welcome").href = GDRIVE_LINK;
  document.getElementById("gdrive-link-dash").href = GDRIVE_LINK;

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

    welcomeScreen.classList.remove("active");
    dashboardScreen.classList.add("active");
    dashboardScreen.scrollTop = 0;
    window.scrollTo(0, 0);
  }

  // ---- todos rendering ----
  function renderTodos(batch) {
    todoGridEl.innerHTML = "";
    const todos = TODOS[batch];

    Object.keys(todos).forEach((code) => {
      const subject = SUBJECTS[code];
      const card = document.createElement("div");
      card.className = `todo-card subj-${subject.color}`;

      const list = todos[code]
        .map((item) => `<li><span class="todo-dot" aria-hidden="true"></span><span>${item}</span></li>`)
        .join("");

      card.innerHTML = `
        <div class="class-code">${code}</div>
        <h3>${subject.short}</h3>
        <ul>${list}</ul>
      `;

      todoGridEl.appendChild(card);
    });
  }
})();
