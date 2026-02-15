const STORAGE_KEY = "workoutProgress_simple";

const dayTabsEl = document.getElementById("day-tabs");
const exerciseList = document.getElementById("exercise-list");
const progressText = document.getElementById("progress-text");
const progressFill = document.getElementById("progress-fill");
const resetDayBtn = document.getElementById("reset-day-btn");
const resetWeekBtn = document.getElementById("reset-week-btn");

/* ---------------- WORKOUT DATA ---------------- */

const workoutData = {
  "Day 1 - Push": [
    {
      name: "Dumbbell Bench Press",
      sets: "4 × 6-8",
      img: "https://training.fit/wp-content/uploads/2019/07/bankdruecken-kurzhantel-flachbank-800x448.png",
    },
    {
      name: "Overhead Shoulder Press",
      sets: "4 × 6-8",
      img: "https://fitnessvolt.com/wp-content/uploads/2021/05/shoulder-press-machine-v2.png.webp",
    },
    {
      name: "Incline Chest Press",
      sets: "3 × 8",
      img: "https://dutch4health.nl/wp-content/uploads/2017/08/machine-chest-press.jpg",
    },
    {
      name: "Lateral Raise",
      sets: "3 × 10-12",
      img: "https://training.fit/wp-content/uploads/2020/03/seitenheben-kurzhanteln-800x448.png",
    },
    {
      name: "Lying Dumbbell Extension",
      sets: "3 × 8-10",
      img: "https://liftmanual.com/wp-content/uploads/2023/04/dumbbell-lying-single-extension.jpg",
    },
    {
      name: "Tricep Pushdown",
      sets: "3 × 10-12",
      img: "https://trainingstation.co.uk/cdn/shop/articles/Tricep-pushdown-movement_ddb8dbd8-566d-4f55-99e0-36c35790234a_1400x.png?v=1739005533",
    },
  ],

  "Day 2 - Pull": [
    {
      name: "Bent-over Barbell Row",
      sets: "4 × 5-6",
      img: "https://liftmanual.com/wp-content/uploads/2023/04/barbell-bent-over-wide-grip-row.jpg",
    },
    {
      name: "Lat Pulldown",
      sets: "4 × 6-8",
      img: "https://training.fit/wp-content/uploads/2020/02/latzug.png",
    },
    {
      name: "Face Pull",
      sets: "3 × 10-12",
      img: "https://liftmanual.com/wp-content/uploads/2023/04/cable-standing-face-pull.jpg",
    },
    {
      name: "Rear Delt Fly",
      sets: "3 × 10-12",
      img: "https://anabolicaliens.com/cdn/shop/articles/5f9892a2b0625c92c74ee6b8_rear-delt-fly-machine-picture.png?v=1641754148",
    },
    {
      name: "Dumbbell Bicep Curl",
      sets: "3 × 8-10",
      img: "https://training.fit/wp-content/uploads/2018/12/bizepscurls.png",
    },
    {
      name: "Hammer Curl",
      sets: "2 × 8-10",
      img: "https://training.fit/wp-content/uploads/2020/02/bizeps-hammercurls-800x448.png",
    },
  ],

  "Day 3 - Legs": [
    {
      name: "Barbell Squat",
      sets: "5 × 5",
      img: "https://training.fit/wp-content/uploads/2020/03/kniebeugen-langhantel.png",
    },
    {
      name: "Romanian Deadlift",
      sets: "4 × 6",
      img: "https://training.fit/wp-content/uploads/2020/03/kreuzheben-gestreckte-beine.png",
    },
    {
      name: "Leg Press",
      sets: "3 × 8",
      img: "https://fitnessvolt.com/wp-content/uploads/2018/04/Anatomy-of-Incline-Leg-Press-750x305.jpg",
    },
    {
      name: "Walking Lunges",
      sets: "3 × 8 each leg",
      img: "https://trainingstation.co.uk/cdn/shop/articles/Lunges-movment_d958998d-2a9f-430e-bdea-06f1e2bcc835_900x.webp?v=1741687877",
    },
    {
      name: "Leg Extension",
      sets: "3 × 10",
      img: "https://liftmanual.com/wp-content/uploads/2023/04/lever-leg-extension.jpg",
    },
    {
      name: "Lying Leg Curl",
      sets: "3 × 10",
      img: "https://training.fit/wp-content/uploads/2020/03/beinbeugen-liegend-geraet.png",
    },
    {
      name: "Standing Calf Raise",
      sets: "4 × 10-12",
      img: "https://liftmanual.com/wp-content/uploads/2023/04/dumbbell-standing-calf-raise.jpg",
    },
  ],
};

/* ---------------- STATE ---------------- */

const dayNames = Object.keys(workoutData);
let activeDay = dayNames[0];
let progress = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");

function saveProgress() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

/* ---------------- BUILD DAY TABS ---------------- */

function buildDayTabs() {
  dayTabsEl.innerHTML = "";
  dayNames.forEach((day) => {
    const tab = document.createElement("button");
    tab.className = "day-tab" + (day === activeDay ? " active" : "");
    tab.textContent = day;

    tab.onclick = () => {
      activeDay = day;
      document.querySelectorAll(".day-tab").forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");
      renderExercises();
      updateProgress();
    };

    dayTabsEl.appendChild(tab);
  });
}

/* ---------------- RENDER EXERCISES ---------------- */

function renderExercises() {
  const exercises = workoutData[activeDay];
  exerciseList.innerHTML = "";

  exercises.forEach((ex) => {
    const isCompleted = isDone(activeDay, ex.name);

    const item = document.createElement("div");
    item.className = "exercise-item" + (isCompleted ? " completed" : "");

    item.innerHTML = `
      <div class="exercise-img">
        <img src="${ex.img}" alt="${ex.name}">
      </div>
      <div class="exercise-row">
        <div class="exercise-checkbox">
          <input type="checkbox" id="${ex.name}" ${isCompleted ? "checked" : ""}>
          <span class="checkmark"></span>
        </div>
        <div class="exercise-info">
          <span class="exercise-name">${ex.name}</span>
          <span class="exercise-sets">${ex.sets}</span>
        </div>
      </div>
    `;

    const checkbox = item.querySelector("input");
    checkbox.addEventListener("change", () => {
      setDone(activeDay, ex.name, checkbox.checked);
      item.classList.toggle("completed", checkbox.checked);
    });

    // Click anywhere on item to toggle
    item.addEventListener("click", (e) => {
      if (e.target.tagName !== "INPUT") {
        checkbox.checked = !checkbox.checked;
        checkbox.dispatchEvent(new Event("change"));
      }
    });

    exerciseList.appendChild(item);
  });
}

/* ---------------- PROGRESS HELPERS ---------------- */

function isDone(day, exercise) {
  return progress[day]?.[exercise] || false;
}

function setDone(day, exercise, value) {
  if (!progress[day]) progress[day] = {};
  progress[day][exercise] = value;
  saveProgress();
  updateProgress();
}

function updateProgress() {
  const total = workoutData[activeDay].length;
  const completed = Object.values(progress[activeDay] || {}).filter(Boolean).length;

  progressText.textContent = `${completed} / ${total} completed`;
  progressFill.style.width = `${(completed / total) * 100}%`;
}

/* ---------------- RESET BUTTONS ---------------- */

resetDayBtn.onclick = () => {
  if (confirm(`Reset progress for ${activeDay}?`)) {
    delete progress[activeDay];
    saveProgress();
    renderExercises();
    updateProgress();
  }
};

resetWeekBtn.onclick = () => {
  if (confirm("Reset progress for the entire week?")) {
    progress = {};
    saveProgress();
    renderExercises();
    updateProgress();
  }
};

/* ---------------- INIT ---------------- */

buildDayTabs();
renderExercises();
updateProgress();
