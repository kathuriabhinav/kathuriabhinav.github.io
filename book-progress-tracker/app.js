// ========================
// CONFIG: BOOKS + VOLUMES
// ========================

const booksConfig = [
  {
    seriesId: "ddia",
    seriesTitle: "Designing Data-Intensive Applications",
    author: "Martin Kleppmann",
    coverUrl: "https://dataintensive.net/images/book-cover.png",
    volumes: [
      {
        volumeId: "ddia-v1",
        label: "Main",
        chapters: [
          { id: "ddia-v1-ch1", title: "1. Reliable, Scalable, and Maintainable Applications" },
          { id: "ddia-v1-ch2", title: "2. Data Models and Query Languages" },
          { id: "ddia-v1-ch3", title: "3. Storage and Retrieval" },
          { id: "ddia-v1-ch4", title: "4. Encoding and Evolution" },
          { id: "ddia-v1-ch5", title: "5. Replication" },
          { id: "ddia-v1-ch6", title: "6. Partitioning" },
          { id: "ddia-v1-ch7", title: "7. Transactions" },
          { id: "ddia-v1-ch8", title: "8. The Trouble with Distributed Systems" },
          { id: "ddia-v1-ch9", title: "9. Consistency and Consensus" },
          { id: "ddia-v1-ch10", title: "10. Batch Processing" },
          { id: "ddia-v1-ch11", title: "11. Stream Processing" },
          { id: "ddia-v1-ch12", title: "12. The Future of Data Systems" }
        ]
      }
    ]
  },
  {
    seriesId: "clean-code",
    seriesTitle: "Clean Code",
    author: "Robert C. Martin",
    coverUrl: "https://www.oreilly.com/covers/urn:orm:book:9780136083238/400w/",
    volumes: [
      {
        volumeId: "clean-v1",
        label: "Main",
        chapters: [
          { id: "clean-v1-ch1", title: "1. Clean Code" },
          { id: "clean-v1-ch2", title: "2. Meaningful Names" },
          { id: "clean-v1-ch3", title: "3. Functions" },
          { id: "clean-v1-ch4", title: "4. Comments" },
          { id: "clean-v1-ch5", title: "5. Formatting" },
          { id: "clean-v1-ch6", title: "6. Objects and Data Structures" },
          { id: "clean-v1-ch7", title: "7. Error Handling" },
          { id: "clean-v1-ch8", title: "8. Boundaries" },
          { id: "clean-v1-ch9", title: "9. Unit Tests" },
          { id: "clean-v1-ch10", title: "10. Classes" },
          { id: "clean-v1-ch11", title: "11. Systems" },
          { id: "clean-v1-ch12", title: "12. Emergence" },
          { id: "clean-v1-ch13", title: "13. Concurrency" },
          { id: "clean-v1-ch14", title: "14. Successive Refinement" },
          { id: "clean-v1-ch15", title: "15. JUnit Internals" },
          { id: "clean-v1-ch16", title: "16. Refactoring SerialDate" },
          { id: "clean-v1-ch17", title: "17. Smells and Heuristics" }
        ]
      }
    ]
  },
  {
    seriesId: "hfdp",
    seriesTitle: "Head First Design Patterns",
    author: "Eric Freeman, Elisabeth Robson, with Bert Bates and Kathy Sierra",
    coverUrl: "https://www.pdfiles.net/storage/91358586089519.jpg",
    volumes: [
      {
        volumeId: "hfdp-v1",
        label: "Main",
        chapters: [
          { id: "hfdp-v1-ch1", title: "1. Intro to Design Patterns" },
          { id: "hfdp-v1-ch2", title: "2. The Observer Pattern" },
          { id: "hfdp-v1-ch3", title: "3. The Decorator Pattern" },
          { id: "hfdp-v1-ch4", title: "4. The Factory Pattern" },
          { id: "hfdp-v1-ch5", title: "5. The Singleton Pattern" },
          { id: "hfdp-v1-ch6", title: "6. The Command Pattern" },
          { id: "hfdp-v1-ch7", title: "7. Adapter and Facade Patterns" },
          { id: "hfdp-v1-ch8", title: "8. The Template Method Pattern" },
          { id: "hfdp-v1-ch9", title: "9. Iterator and Composite Patterns" },
          { id: "hfdp-v1-ch10", title: "10. The State Pattern" },
          { id: "hfdp-v1-ch11", title: "11. The Proxy Pattern" },
          { id: "hfdp-v1-ch12", title: "12. Compound Patterns" },
          { id: "hfdp-v1-ch13", title: "13. Patterns in the Real World" },
          { id: "hfdp-v1-ch14", title: "14. Leftover Patterns" }
        ]
      }
    ]
  },
  {
    seriesId: "sdi",
    seriesTitle: "System Design Interview (Volumes 1 & 2)",
    author: "Alex Xu and Sahn Lam",
    coverUrl:
      "https://blogger.googleusercontent.com/img/a/AVvXsEhpPxe0UgJxrnOoyiftAKC7_krCLydkF2B63hUdBhlteHQEM7ef9XT_d2SDZ5rZxfcRHYL-VwGyaYrHtu4DNVyeyD-rcd_ZSpzgMmUhPo2y6hGHjOvGyq05apDxjRq-NkiAlXAs3KvKV0xUwcDim9t9n53VJ4P5gg0K-My6Lv-Tmz1o3EdTMySfKda7b44=w460-h338",
    volumes: [
      {
        volumeId: "sdi-v1",
        label: "Volume 1",
        coverUrl: "https://m.media-amazon.com/images/I/4102DJpVqDL._SY445_SX342_ControlCacheEqualizer_.jpg",
        chapters: [
          { id: "sdi-v1-ch1", title: "1. Scale From Zero to Millions of Users" },
          { id: "sdi-v1-ch2", title: "2. Back-of-the-Envelope Estimation" },
          { id: "sdi-v1-ch3", title: "3. A Framework for System Design Interviews" },
          { id: "sdi-v1-ch4", title: "4. Design a Rate Limiter" },
          { id: "sdi-v1-ch5", title: "5. Design Consistent Hashing" },
          { id: "sdi-v1-ch6", title: "6. Design a Key-Value Store" },
          { id: "sdi-v1-ch7", title: "7. Design a Unique ID Generator in Distributed Systems" },
          { id: "sdi-v1-ch8", title: "8. Design a URL Shortener" },
          { id: "sdi-v1-ch9", title: "9. Design a Web Crawler" },
          { id: "sdi-v1-ch10", title: "10. Design a Notification System" },
          { id: "sdi-v1-ch11", title: "11. Design a News Feed System" },
          { id: "sdi-v1-ch12", title: "12. Design a Chat System" },
          { id: "sdi-v1-ch13", title: "13. Design a Search Autocomplete System" },
          { id: "sdi-v1-ch14", title: "14. Design YouTube" },
          { id: "sdi-v1-ch15", title: "15. Design Google Drive" },
          { id: "sdi-v1-ch16", title: "16. The Learning Continues" }
        ]
      },
      {
        volumeId: "sdi-v2",
        label: "Volume 2",
        coverUrl: "https://m.media-amazon.com/images/I/61kK5V7-4RL.jpg",
        chapters: [
          { id: "sdi-v2-ch1", title: "1. Proximity Service" },
          { id: "sdi-v2-ch2", title: "2. Nearby Friends" },
          { id: "sdi-v2-ch3", title: "3. Google Maps" },
          { id: "sdi-v2-ch4", title: "4. Distributed Message Queue" },
          { id: "sdi-v2-ch5", title: "5. Metrics Monitoring and Alerting System" },
          { id: "sdi-v2-ch6", title: "6. Ad Click Event Aggregation" },
          { id: "sdi-v2-ch7", title: "7. Hotel Reservation System" },
          { id: "sdi-v2-ch8", title: "8. Distributed Email Service" },
          { id: "sdi-v2-ch9", title: "9. S3-like Object Storage" },
          { id: "sdi-v2-ch10", title: "10. Real-time Gaming Leaderboard" },
          { id: "sdi-v2-ch11", title: "11. Payment System" },
          { id: "sdi-v2-ch12", title: "12. Digital Wallet" },
          { id: "sdi-v2-ch13", title: "13. Stock Exchange" }
        ]
      }
    ]
  }
];

// ==============
// STATE / STORAGE
// ==============

const STORAGE_KEY = "readingTrackerState_v1";

let state = null;
let activeSeriesId = null;
// which volume is open per series; null => none; undefined => not decided yet
let activeVolumeBySeries = {};

function createInitialState() {
  const nowIso = new Date().toISOString();
  return {
    books: {},
    weekly: {
      weekNumber: 1,
      startDate: nowIso,
      tasks: [] // [{ seriesId, chapterId }]
    },
    weeklyHistory: [] // [{ weekNumber, startDate, endDate, tasks[], completedCount, totalCount }]
  };
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return createInitialState();
    const parsed = JSON.parse(raw);
    const fallback = createInitialState();
    return {
      books: parsed.books || fallback.books,
      weekly: parsed.weekly || fallback.weekly,
      weeklyHistory: parsed.weeklyHistory || fallback.weeklyHistory
    };
  } catch (e) {
    console.error("Failed to parse saved state, resetting.", e);
    return createInitialState();
  }
}

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (e) {
    console.error("Failed to save state", e);
  }
}

// ==========
// HELPERS
// ==========

function getSeriesById(seriesId) {
  return booksConfig.find(b => b.seriesId === seriesId);
}

function getAllChapters(series) {
  const chapters = [];
  series.volumes.forEach(vol => {
    vol.chapters.forEach(ch => chapters.push(ch));
  });
  return chapters;
}

function isChapterCompleted(seriesId, chapterId) {
  const seriesState = state.books[seriesId];
  if (!seriesState || !seriesState.completedChapters) return false;
  return !!seriesState.completedChapters[chapterId];
}

function toggleChapterCompletion(seriesId, chapterId) {
  if (!state.books[seriesId]) {
    state.books[seriesId] = { completedChapters: {} };
  }
  const completed = state.books[seriesId].completedChapters || {};
  if (completed[chapterId]) {
    delete completed[chapterId];
  } else {
    completed[chapterId] = true;
  }
  state.books[seriesId].completedChapters = completed;
  saveState();
  renderAll();
}

function getWeeklyDerived() {
  const tasks = state.weekly.tasks || [];
  let completedCount = 0;
  tasks.forEach(t => {
    if (isChapterCompleted(t.seriesId, t.chapterId)) completedCount++;
  });
  return { tasks, completedCount, totalCount: tasks.length };
}

function findInProgressVolume(series) {
  for (const vol of series.volumes) {
    const hasPending = vol.chapters.some(
      ch => !isChapterCompleted(series.seriesId, ch.id)
    );
    if (hasPending) return vol;
  }
  return series.volumes[0];
}

// =====================
// WEEKLY CARD RENDERING
// =====================

function renderWeeklyCard() {
  const week = state.weekly;
  const subtitleEl = document.getElementById("weekly-subtitle");
  const countsEl = document.getElementById("weekly-counts");
  const ratioEl = document.getElementById("weekly-ratio");
  const barEl = document.getElementById("weekly-progress-bar");
  const historyContainer = document.getElementById("weekly-history");

  const startDate = week.startDate ? new Date(week.startDate) : null;
  const niceDate = startDate ? startDate.toLocaleDateString() : "unknown";
  subtitleEl.textContent = `Week ${week.weekNumber} · started on ${niceDate}`;

  const { tasks, completedCount, totalCount } = getWeeklyDerived();
  const percent = totalCount === 0 ? 0 : Math.round((completedCount * 100) / totalCount);
  countsEl.textContent = `${completedCount}/${totalCount || 0} chapters done`;
  ratioEl.textContent = totalCount ? `${percent}% complete` : "No chapters planned";
  barEl.style.width = percent + "%";

  // Build selects
  const bookSelect = document.getElementById("weekly-book-select");
  const chapterSelect = document.getElementById("weekly-chapter-select");

  const previousBookId = bookSelect.value;
  const previousChapterId = chapterSelect.value;

  bookSelect.innerHTML = "";
  booksConfig.forEach(series => {
    const opt = document.createElement("option");
    opt.value = series.seriesId;
    opt.textContent = series.seriesTitle;
    bookSelect.appendChild(opt);
  });

  if (previousBookId && booksConfig.some(b => b.seriesId === previousBookId)) {
    bookSelect.value = previousBookId;
  }

  function populateChapterSelect() {
    const selectedSeriesId = bookSelect.value;
    const series = getSeriesById(selectedSeriesId);
    chapterSelect.innerHTML = "";
    if (!series) return;
    const chapters = getAllChapters(series);
    chapters.forEach(ch => {
      const opt = document.createElement("option");
      opt.value = ch.id;
      opt.textContent = ch.title;
      chapterSelect.appendChild(opt);
    });
    if (previousChapterId && chapters.some(c => c.id === previousChapterId)) {
      chapterSelect.value = previousChapterId;
    }
  }

  populateChapterSelect();
  bookSelect.onchange = populateChapterSelect;

  // Weekly tasks (with drag and drop)
  const tasksContainer = document.getElementById("weekly-tasks");
  tasksContainer.innerHTML = "";

  if (!tasks.length) {
    const p = document.createElement("p");
    p.className = "empty-text";
    p.textContent = "No chapters planned for this week yet.";
    tasksContainer.appendChild(p);
  } else {
    tasks.forEach((task, index) => {
      const series = getSeriesById(task.seriesId);
      if (!series) return;
      const allChapters = getAllChapters(series);
      const chapter = allChapters.find(c => c.id === task.chapterId);
      if (!chapter) return;

      const item = document.createElement("div");
      item.className = "weekly-task";
      item.dataset.index = String(index);
      item.setAttribute("draggable", "true");

      // Drag handlers
      item.addEventListener("dragstart", e => {
        e.dataTransfer.effectAllowed = "move";
        e.dataTransfer.setData("text/plain", String(index));
        item.classList.add("dragging");
      });

      item.addEventListener("dragend", () => {
        item.classList.remove("dragging");
      });

      item.addEventListener("dragover", e => {
        e.preventDefault();
        e.dataTransfer.dropEffect = "move";
        item.classList.add("drag-over");
      });

      item.addEventListener("dragleave", () => {
        item.classList.remove("drag-over");
      });

      item.addEventListener("drop", e => {
        e.preventDefault();
        item.classList.remove("drag-over");
        const fromIdx = parseInt(e.dataTransfer.getData("text/plain"), 10);
        const toIdx = index;
        if (Number.isNaN(fromIdx) || fromIdx === toIdx) return;

        const updated = [...(state.weekly.tasks || [])];
        const [moved] = updated.splice(fromIdx, 1);
        updated.splice(toIdx, 0, moved);
        state.weekly.tasks = updated;
        saveState();
        renderAll();
      });

      const gripMainWrapper = document.createElement("div");
      gripMainWrapper.className = "weekly-task-main-wrapper";

      const grip = document.createElement("div");
      grip.className = "weekly-task-grip";
      grip.textContent = "≡";

      const main = document.createElement("div");
      main.className = "weekly-task-main";

      const title = document.createElement("div");
      title.className = "weekly-task-title";
      title.textContent = chapter.title;

      const meta = document.createElement("div");
      meta.className = "weekly-task-meta";
      meta.textContent = series.seriesTitle;

      main.appendChild(title);
      main.appendChild(meta);

      gripMainWrapper.appendChild(grip);
      gripMainWrapper.appendChild(main);

      const right = document.createElement("div");
      right.className = "weekly-task-right";

      const done = isChapterCompleted(task.seriesId, task.chapterId);
      const status = document.createElement("div");
      status.className = "badge-status " + (done ? "done" : "pending");
      const dot = document.createElement("span");
      dot.className = "badge-status-dot";
      const text = document.createElement("span");
      text.textContent = done ? "Done" : "Pending";
      status.appendChild(dot);
      status.appendChild(text);

      const toggle = document.createElement("button");
      toggle.type = "button";
      toggle.className = "weekly-task-toggle" + (done ? " done" : "");
      const inner = document.createElement("span");
      inner.className = "weekly-task-toggle-inner";
      toggle.appendChild(inner);

      toggle.addEventListener("click", ev => {
        ev.stopPropagation();
        toggleChapterCompletion(task.seriesId, task.chapterId);
      });

      const remove = document.createElement("button");
      remove.type = "button";
      remove.className = "weekly-task-remove";
      const minus = document.createElement("span");
      remove.appendChild(minus);
      remove.addEventListener("click", ev => {
        ev.stopPropagation();
        const updated = [...(state.weekly.tasks || [])];
        updated.splice(index, 1);
        state.weekly.tasks = updated;
        saveState();
        renderAll();
      });

      right.appendChild(status);
      right.appendChild(toggle);
      right.appendChild(remove);

      item.appendChild(gripMainWrapper);
      item.appendChild(right);

      tasksContainer.appendChild(item);
    });
  }

  // Weekly history
  renderWeeklyHistory(historyContainer);

  // Button handlers
  document.getElementById("add-chapter-btn").onclick = () => {
    const seriesId = bookSelect.value;
    const chapterId = chapterSelect.value;
    if (!seriesId || !chapterId) return;
    const weekTasks = state.weekly.tasks || [];
    const exists = weekTasks.some(
      t => t.seriesId === seriesId && t.chapterId === chapterId
    );
    if (exists) {
      alert("This chapter is already in this week's plan.");
      return;
    }
    weekTasks.push({ seriesId, chapterId });
    state.weekly.tasks = weekTasks;
    saveState();
    renderAll();
  };

  document.getElementById("add-from-each-btn").onclick = () => {
    addFirstPendingFromEachBook();
  };

  document.getElementById("complete-week-btn").onclick = () => {
    completeCurrentWeek();
  };

  document.getElementById("toggle-history-btn").onclick = () => {
    const hidden = historyContainer.hasAttribute("hidden");
    if (hidden) {
      historyContainer.removeAttribute("hidden");
    } else {
      historyContainer.setAttribute("hidden", "");
    }
  };
}

function renderWeeklyHistory(container) {
  const history = state.weeklyHistory || [];
  container.innerHTML = "";

  if (!history.length) {
    const p = document.createElement("p");
    p.className = "history-empty";
    p.textContent = "No previous weeks yet.";
    container.appendChild(p);
    return;
  }

  history
    .slice()
    .reverse()
    .forEach(week => {
      const wrapper = document.createElement("div");
      wrapper.className = "history-week";

      const header = document.createElement("div");
      header.className = "history-week-header";

      const title = document.createElement("div");
      title.className = "history-week-title";

      const label = document.createElement("span");
      label.textContent = `Week ${week.weekNumber}`;

      const dates = document.createElement("span");
      const start = week.startDate ? new Date(week.startDate) : null;
      const end = week.endDate ? new Date(week.endDate) : null;
      const startStr = start ? start.toLocaleDateString() : "unknown";
      const endStr = end ? end.toLocaleDateString() : "unknown";
      dates.textContent = `${startStr} → ${endStr}`;

      title.appendChild(label);
      title.appendChild(dates);

      const metrics = document.createElement("div");
      metrics.className = "history-week-metrics";
      metrics.textContent = `${week.completedCount}/${week.totalCount} chapters`;

      header.appendChild(title);
      header.appendChild(metrics);

      const body = document.createElement("div");
      body.className = "history-week-body";

      (week.tasks || []).forEach(task => {
        const series = getSeriesById(task.seriesId);
        if (!series) return;
        const allChapters = getAllChapters(series);
        const chapter = allChapters.find(c => c.id === task.chapterId);
        if (!chapter) return;

        const row = document.createElement("div");
        row.className = "history-task";

        const left = document.createElement("span");
        left.textContent = `${series.seriesTitle}\n${chapter.title}`;

        const right = document.createElement("span");
        const done = !!task.completed;
        right.textContent = done ? "Done" : "Pending";

        row.appendChild(left);
        row.appendChild(right);
        body.appendChild(row);
      });

      header.addEventListener("click", () => {
        wrapper.classList.toggle("open");
      });

      wrapper.appendChild(header);
      wrapper.appendChild(body);
      container.appendChild(wrapper);
    });
}

function addFirstPendingFromEachBook() {
  let added = 0;
  const weekTasks = state.weekly.tasks || [];

  booksConfig.forEach(series => {
    const allChapters = getAllChapters(series);
    const firstPending = allChapters.find(
      ch => !isChapterCompleted(series.seriesId, ch.id)
    );
    if (!firstPending) return;
    const exists = weekTasks.some(
      t => t.seriesId === series.seriesId && t.chapterId === firstPending.id
    );
    if (exists) return;
    weekTasks.push({ seriesId: series.seriesId, chapterId: firstPending.id });
    added++;
  });

  state.weekly.tasks = weekTasks;
  saveState();
  renderAll();

  if (added === 0) {
    alert("No pending chapters found to add from each book.");
  }
}

function completeCurrentWeek() {
  const week = state.weekly;
  const { tasks, completedCount, totalCount } = getWeeklyDerived();
  const nowIso = new Date().toISOString();

  const historyEntry = {
    weekNumber: week.weekNumber,
    startDate: week.startDate,
    endDate: nowIso,
    tasks: tasks.map(t => ({
      ...t,
      completed: isChapterCompleted(t.seriesId, t.chapterId)
    })),
    completedCount,
    totalCount
  };

  state.weeklyHistory.push(historyEntry);

  const carried = tasks.filter(
    t => !isChapterCompleted(t.seriesId, t.chapterId)
  );
  state.weekly = {
    weekNumber: week.weekNumber + 1,
    startDate: nowIso,
    tasks: carried
  };

  saveState();
  renderAll();
}

// ==============
// BOOKS RENDERING
// ==============

function renderBooks() {
  const container = document.getElementById("books-container");
  container.innerHTML = "";

  booksConfig.forEach(series => {
    const card = document.createElement("article");
    card.className = "card book-card";
    card.dataset.seriesId = series.seriesId;
    const isBookExpanded = activeSeriesId === series.seriesId;
    if (isBookExpanded) {
      card.classList.add("expanded");
    }

    const header = document.createElement("div");
    header.className = "book-header";

    const cover = document.createElement("div");
    cover.className = "book-cover";
    const img = document.createElement("img");
    img.src = series.coverUrl || "";
    img.alt = `${series.seriesTitle} cover`;
    img.onerror = function () {
      this.style.visibility = "hidden";
    };
    cover.appendChild(img);

    const main = document.createElement("div");
    main.className = "book-main";

    const title = document.createElement("h3");
    title.textContent = series.seriesTitle;

    const author = document.createElement("p");
    author.className = "book-author";
    author.textContent = series.author || "";

    const allChapters = getAllChapters(series);
    const totalChapters = allChapters.length;
    const completedChapters = allChapters.filter(c =>
      isChapterCompleted(series.seriesId, c.id)
    ).length;
    const percent =
      totalChapters === 0
        ? 0
        : Math.round((completedChapters * 100) / totalChapters);

    const meta = document.createElement("p");
    meta.className = "book-meta";
    meta.textContent = `${series.volumes.length} volume${series.volumes.length > 1 ? "s" : ""
      } · ${completedChapters}/${totalChapters} chapters`;

    const progressLabel = document.createElement("div");
    progressLabel.className = "book-progress-label";
    const left = document.createElement("span");
    left.textContent = "Overall progress";
    const right = document.createElement("span");
    right.textContent = `${percent}%`;
    progressLabel.appendChild(left);
    progressLabel.appendChild(right);

    const progressBar = document.createElement("div");
    progressBar.className = "progress-bar small";
    const progressInner = document.createElement("div");
    progressInner.className = "progress-bar-inner";
    progressInner.style.width = percent + "%";
    progressBar.appendChild(progressInner);

    main.appendChild(title);
    main.appendChild(author);
    main.appendChild(meta);
    main.appendChild(progressLabel);
    main.appendChild(progressBar);

    const toggle = document.createElement("button");
    toggle.type = "button";
    toggle.className = "book-expand-toggle";
    toggle.textContent = isBookExpanded ? "↑" : "↓";

    header.appendChild(cover);
    header.appendChild(main);
    header.appendChild(toggle);

    const body = document.createElement("div");
    body.className = "book-body";

    if (series.volumes.length === 1) {
      // Single-volume book: show chapters directly, no volume container
      const vol = series.volumes[0];
      const list = document.createElement("ul");
      list.className = "chapters-list single-volume";

      vol.chapters.forEach(ch => {
        const li = document.createElement("li");

        const button = document.createElement("button");
        button.type = "button";
        button.className = "chapter-row";
        button.dataset.seriesId = series.seriesId;
        button.dataset.chapterId = ch.id;

        const completed = isChapterCompleted(series.seriesId, ch.id);
        if (completed) button.classList.add("completed");

        const cMain = document.createElement("div");
        cMain.className = "chapter-row-main";

        const cTitle = document.createElement("div");
        cTitle.className = "chapter-row-title";
        cTitle.textContent = ch.title;

        const cMeta = document.createElement("div");
        cMeta.className = "chapter-row-meta";
        cMeta.textContent = completed ? "Completed" : "Tap to mark as done";

        cMain.appendChild(cTitle);
        cMain.appendChild(cMeta);

        const indicator = document.createElement("div");
        indicator.className = "chapter-row-indicator";
        const indicatorInner = document.createElement("div");
        indicatorInner.className = "chapter-row-indicator-inner";
        indicator.appendChild(indicatorInner);

        button.appendChild(cMain);
        button.appendChild(indicator);

        button.addEventListener("click", ev => {
          ev.stopPropagation();
          toggleChapterCompletion(series.seriesId, ch.id);
        });

        li.appendChild(button);
        list.appendChild(li);
      });

      body.appendChild(list);
    } else {
      // Multi-volume books
      const volumesRow = document.createElement("div");
      volumesRow.className = "volumes-row";

      let activeVolId;
      if (Object.prototype.hasOwnProperty.call(activeVolumeBySeries, series.seriesId)) {
        activeVolId = activeVolumeBySeries[series.seriesId];
      } else {
        const inProgressVol = findInProgressVolume(series);
        activeVolId = inProgressVol.volumeId;
        activeVolumeBySeries[series.seriesId] = activeVolId;
      }

      series.volumes.forEach(vol => {
        const volCard = document.createElement("div");
        volCard.className = "volume-card";

        const headerRow = document.createElement("div");
        headerRow.className = "volume-header";

        const coverDiv = document.createElement("div");
        coverDiv.className = "volume-cover";
        const vImg = document.createElement("img");
        vImg.src = vol.coverUrl || series.coverUrl || "";
        vImg.alt = `${series.seriesTitle} ${vol.label || ""} cover`;
        vImg.onerror = function () {
          this.style.visibility = "hidden";
        };
        coverDiv.appendChild(vImg);

        const titleBlock = document.createElement("div");
        titleBlock.className = "volume-title-block";
        const vName = document.createElement("span");
        vName.textContent = vol.label || "Volume";
        const vMeta = document.createElement("span");
        vMeta.textContent = `${vol.chapters.length} chapters`;
        titleBlock.appendChild(vName);
        titleBlock.appendChild(vMeta);

        const chevron = document.createElement("div");
        chevron.className = "volume-chevron";

        headerRow.appendChild(coverDiv);
        headerRow.appendChild(titleBlock);
        headerRow.appendChild(chevron);

        const bodyDiv = document.createElement("div");
        bodyDiv.className = "volume-body";

        const list = document.createElement("ul");
        list.className = "chapters-list";

        vol.chapters.forEach(ch => {
          const li = document.createElement("li");

          const button = document.createElement("button");
          button.type = "button";
          button.className = "chapter-row";
          button.dataset.seriesId = series.seriesId;
          button.dataset.chapterId = ch.id;

          const completed = isChapterCompleted(series.seriesId, ch.id);
          if (completed) button.classList.add("completed");

          const cMain = document.createElement("div");
          cMain.className = "chapter-row-main";

          const cTitle = document.createElement("div");
          cTitle.className = "chapter-row-title";
          cTitle.textContent = ch.title;

          const cMeta = document.createElement("div");
          cMeta.className = "chapter-row-meta";
          cMeta.textContent = completed ? "Completed" : "Tap to mark as done";

          cMain.appendChild(cTitle);
          cMain.appendChild(cMeta);

          const indicator = document.createElement("div");
          indicator.className = "chapter-row-indicator";
          const indicatorInner = document.createElement("div");
          indicatorInner.className = "chapter-row-indicator-inner";
          indicator.appendChild(indicatorInner);

          button.appendChild(cMain);
          button.appendChild(indicator);

          button.addEventListener("click", ev => {
            ev.stopPropagation();
            toggleChapterCompletion(series.seriesId, ch.id);
          });

          li.appendChild(button);
          list.appendChild(li);
        });

        bodyDiv.appendChild(list);
        volCard.appendChild(headerRow);
        volCard.appendChild(bodyDiv);
        volumesRow.appendChild(volCard);

        const isOpen = activeVolId === vol.volumeId;
        if (isOpen) {
          volCard.classList.add("open");
          chevron.textContent = "↑";
          requestAnimationFrame(() => {
            const h = bodyDiv.scrollHeight;
            bodyDiv.style.maxHeight = h + "px";
          });
        } else {
          chevron.textContent = "↓";
          bodyDiv.style.maxHeight = "0px";
        }

        headerRow.addEventListener("click", ev => {
          ev.stopPropagation();
          const current = activeVolumeBySeries[series.seriesId];
          if (current === vol.volumeId) {
            activeVolumeBySeries[series.seriesId] = null;
          } else {
            activeVolumeBySeries[series.seriesId] = vol.volumeId;
          }
          renderBooks();
        });
      });

      body.appendChild(volumesRow);
    }

    card.appendChild(header);
    card.appendChild(body);

    // Book expand / collapse
    header.addEventListener("click", ev => {
      if (ev.target.closest(".chapter-row") || ev.target.closest(".volume-header")) {
        return;
      }
      const id = series.seriesId;
      activeSeriesId = activeSeriesId === id ? null : id;
      renderBooks();
    });

    container.appendChild(card);
  });
}

// =============
// ROOT RENDER
// =============

function renderAll() {
  renderWeeklyCard();
  renderBooks();
}

document.addEventListener("DOMContentLoaded", () => {
  state = loadState();
  renderAll();
});
