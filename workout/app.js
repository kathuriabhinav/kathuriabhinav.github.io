const STORAGE_KEY = "workoutProgress_dark_v1";

const dayTabsEl = document.getElementById("day-tabs");
const cardsContainer = document.getElementById("exercise-cards");
const progressDayLabel = document.getElementById("progress-day-label");
const progressText = document.getElementById("progress-text");
const progressFill = document.getElementById("progress-fill");

const resetDayBtn = document.getElementById("reset-day-btn");
const resetWeekBtn = document.getElementById("reset-week-btn");

/* ---------------- WORKOUT DATA (embedded) ---------------- */

const workoutData = {
  "Day 1 - Push": [
    {
      name: "Dumbbell Bench Press",
      sets: "4 × 10",
      img: "https://training.fit/wp-content/uploads/2019/07/bankdruecken-kurzhantel-flachbank-800x448.png",
      targetMuscles: "Chest (pectoralis major), anterior delts, triceps",
    },
    {
      name: "Incline Chest Press",
      sets: "3 × 8",
      img: "https://dutch4health.nl/wp-content/uploads/2017/08/machine-chest-press.jpg",
      targetMuscles:
        "Upper chest (clavicular head), anterior delts, triceps",
    },
    {
      name: "Lying Dumbbell Extension",
      sets: "3 × 10",
      img: "https://liftmanual.com/wp-content/uploads/2023/04/dumbbell-lying-single-extension.jpg",
      targetMuscles: "Triceps (long head emphasis, all heads involved)",
    },
    {
      name: "Overhead Shoulder Press",
      sets: "3 × 8",
      img: "https://fitnessvolt.com/wp-content/uploads/2021/05/shoulder-press-machine-v2.png.webp",
      targetMuscles:
        "Anterior and middle delts, triceps, upper traps (stabilizer)",
    },
    {
      name: "Lateral Raise",
      sets: "3 × 12",
      img: "https://training.fit/wp-content/uploads/2020/03/seitenheben-kurzhanteln-800x448.png",
      targetMuscles:
        "Middle delts (side shoulders), upper traps (assist)",
    },
    {
      name: "Tricep Pushdown",
      sets: "3 × 12",
      img: "https://trainingstation.co.uk/cdn/shop/articles/Tricep-pushdown-movement_ddb8dbd8-566d-4f55-99e0-36c35790234a_1400x.png?v=1739005533",
      targetMuscles: "Triceps (all heads, emphasis on lateral head)",
    },
  ],

  "Day 2 - Pull": [
    {
      name: "Lat Pulldown",
      sets: "4 × 10",
      img: "https://training.fit/wp-content/uploads/2020/02/latzug.png",
      targetMuscles: "Lats (primary), mid-back, biceps",
    },
    {
      name: "Bent-over Barbell Row",
      sets: "3 × 8",
      img: "https://liftmanual.com/wp-content/uploads/2023/04/barbell-bent-over-wide-grip-row.jpg",
      targetMuscles:
        "Mid-back (rhomboids, traps), lats, rear delts, biceps",
    },
    {
      name: "Dumbbell Bicep Curl",
      sets: "3 × 10",
      img: "https://training.fit/wp-content/uploads/2018/12/bizepscurls.png",
      targetMuscles: "Biceps brachii, brachialis",
    },
    {
      name: "Hammer Curl",
      sets: "2 × 10",
      img: "https://training.fit/wp-content/uploads/2020/02/bizeps-hammercurls-800x448.png",
      targetMuscles: "Brachialis, brachioradialis, biceps",
    },
    {
      name: "Rear Delt Fly",
      sets: "3 × 12",
      img: "https://anabolicaliens.com/cdn/shop/articles/5f9892a2b0625c92c74ee6b8_rear-delt-fly-machine-picture.png?v=1641754148",
      targetMuscles:
        "Rear delts (primary), upper back (rhomboids, traps)",
    },
    {
      name: "Face Pull",
      sets: "3 × 12",
      img: "https://liftmanual.com/wp-content/uploads/2023/04/cable-standing-face-pull.jpg",
      targetMuscles:
        "Rear delts, external rotators, mid and lower traps, rhomboids",
    },
  ],

  "Day 3 - Legs": [
    {
      name: "Standing Calf Raise",
      sets: "3 × 12",
      img: "https://liftmanual.com/wp-content/uploads/2023/04/dumbbell-standing-calf-raise.jpg",
      targetMuscles: "Calves (gastrocnemius-dominant, some soleus)",
    },
    {
      name: "Leg Press",
      sets: "3 × 10",
      img: "https://fitnessvolt.com/wp-content/uploads/2018/04/Anatomy-of-Incline-Leg-Press-750x305.jpg",
      targetMuscles: "Quads (primary), glutes, some hamstrings",
    },
    {
      name: "Barbell Squat",
      sets: "4 × 8",
      img: "https://training.fit/wp-content/uploads/2020/03/kniebeugen-langhantel.png",
      targetMuscles:
        "Quads (primary), glutes, adductors, core (stabilizers)",
    },
    {
      name: "Romanian Deadlift",
      sets: "3 × 8",
      img: "https://training.fit/wp-content/uploads/2020/03/kreuzheben-gestreckte-beine.png",
      targetMuscles: "Hamstrings, glutes, lower back (isometric)",
    },
    {
      name: "Leg Extension",
      sets: "2 × 12",
      img: "https://liftmanual.com/wp-content/uploads/2023/04/lever-leg-extension.jpg",
      targetMuscles:
        "Quads (rectus femoris, vastus lateralis/medialis/intermedius)",
    },
    {
      name: "Lying Leg Curl",
      sets: "3 × 12",
      img: "https://training.fit/wp-content/uploads/2020/03/beinbeugen-liegend-geraet.png",
      targetMuscles: "Hamstrings",
    },
    {
      name: "Walking Lunges",
      sets: "2 × 10 each leg",
      img: "https://trainingstation.co.uk/cdn/shop/articles/Lunges-movment_d958998d-2a9f-430e-bdea-06f1e2bcc835_900x.webp?v=1741687877",
      targetMuscles: "Quads, glutes, hamstrings, hip stabilizers",
    },
  ],

  "Day 4 - Upper Body": [
    {
      name: "Close-Grip Lat Pulldown",
      sets: "3 × 10",
      img: "https://www.burnthefatinnercircle.com/members/images/1708.jpg?cb=20250701051148",
      targetMuscles: "Lats (primary), mid-back, biceps",
    }, 
    {
      name: "Dumbbell Bench Press",
      sets: "3 × 8",
      img: "https://training.fit/wp-content/uploads/2019/07/bankdruecken-kurzhantel-flachbank-800x448.png",
      targetMuscles: "Chest, anterior delts, triceps",
    },
    {
      name: "Chest-Supported Row",
      sets: "3 × 10",
      img: "https://cdn.shopify.com/s/files/1/0449/8453/3153/files/chest_supported_row_muscles_worked_600x600.png?v=1716192902",
      targetMuscles: "Mid-back (rhomboids, traps), lats, rear delts",
    },
    {
      name: "Overhead Shoulder Press",
      sets: "2 × 8",
      img: "https://fitnessvolt.com/wp-content/uploads/2021/05/shoulder-press-machine-v2.png.webp",
      targetMuscles:
        "Anterior and middle delts, triceps, upper traps (stabilizer)",
    },
    {
      name: "Dumbbell Bicep Curl",
      sets: "2 × 10",
      img: "https://training.fit/wp-content/uploads/2018/12/bizepscurls.png",
      targetMuscles: "Biceps brachii, brachialis",
    },
    {
      name: "Cable Lateral Raise",
      sets: "2 × 12",
      img: "https://liftmanual.com/wp-content/uploads/2023/04/cable-one-arm-lateral-raise.jpg",
      targetMuscles:
        "Middle delts (side shoulders), upper traps (assist)",
    },
    {
      name: "Rope Tricep Extension",
      sets: "2 × 12",
      img: "https://www.hevyapp.com/wp-content/uploads/02001101-Cable-Pushdown-with-rope-attachment_Upper-Arms_small.jpg",
      targetMuscles: "Triceps (all heads, with long head emphasis)",
    },
  ],

  "Day 5 - Lower Body": [
    {
      name: "Standing Calf Raise",
      sets: "3 × 12",
      img: "https://liftmanual.com/wp-content/uploads/2023/04/dumbbell-standing-calf-raise.jpg",
      targetMuscles: "Calves (gastrocnemius-dominant, some soleus)",
    },
    {
      name: "Dumbbell Goblet Squat",
      sets: "3 × 12",
      img: "https://anabolicaliens.com/cdn/shop/articles/5fbc1c1889a1d8fc84f5808b_dumbbell-goblet-squat.png?v=1641750308",
      targetMuscles: "Quads (primary), glutes, core (stabilizers)",
    },
    {
      name: "Dumbbell Split Squat",
      sets: "2 × 10 each leg",
      img: "https://liftmanual.com/wp-content/uploads/2023/04/dumbbell-split-squat.jpg",
      targetMuscles: "Quads, glutes, hip stabilizers",
    },
    {
      name: "Hip Thrust",
      sets: "3 × 10",
      img: "https://liftmanual.com/wp-content/uploads/2023/04/dumbbell-hip-thrust.jpg",
      targetMuscles: "Glutes (primary), hamstrings",
    },
    {
      name: "Lying Leg Curl",
      sets: "3 × 12",
      img: "https://training.fit/wp-content/uploads/2020/03/beinbeugen-liegend-geraet.png",
      targetMuscles: "Hamstrings",
    },
    {
      name: "Plank",
      sets: "3 × 45s",
      img: "https://liftmanual.com/wp-content/uploads/2023/04/plank-on-hands.jpg",
      targetMuscles:
        "Core (rectus abdominis, obliques, transverse abdominis, spinal stabilizers)",
    },
  ],
};

/* ---------------- PROGRESS STORAGE ---------------- */
let dayNames = Object.keys(workoutData);
let activeDay = dayNames[0];

let progress = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");

function saveProgress() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

/* ---------------- BUILD DAY TABS ---------------- */

function buildDayTabs() {
  dayTabsEl.innerHTML = "";
  dayNames.forEach((day) => {
    const chip = document.createElement("button");
    chip.className = "day-chip" + (day === activeDay ? " active" : "");
    chip.textContent = day;

    chip.onclick = () => {
      activeDay = day;
      renderDay(day);
      updateProgress(day);

      document.querySelectorAll(".day-chip").forEach((c) =>
        c.classList.remove("active")
      );
      chip.classList.add("active");
    };

    dayTabsEl.appendChild(chip);
  });
}

/* ---------------- RENDER DAY ---------------- */

let lastCardObserver = null;

function renderDay(day) {
  const exercises = workoutData[day];
  cardsContainer.innerHTML = "";

  exercises.forEach((ex) => {
    const card = document.createElement("div");
    card.className = "exercise-card";

    const isCompleted = isDone(day, ex.name);
    if (isCompleted) card.classList.add("done");

    /* Build card content */
    card.innerHTML = `
      <div class="exercise-main">

        <div class="exercise-thumb">
          <img src="${ex.img}" alt="${ex.name}">
        </div>

        <div class="exercise-title">${ex.name}</div>

        <div class="exercise-meta">
          <span class="sets-pill">${ex.sets}</span>
          <span class="day-tag">Day ${day.split(" ")[1]}</span>
        </div>

        <div class="pill-row">

          <div class="done-pill ${isCompleted ? "done" : ""}">
            ${isCompleted ? "✓ Completed" : "Mark done"}
          </div>

          <div class="details-chevron">
            ▼
          </div>

        </div>

      </div>

      <div class="exercise-extra">
        <p>${ex.targetMuscles}</p>
      </div>
    `;

    /* Clicking card toggles details (but not clicking done pill or chevron) */
    card.addEventListener("click", (e) => {
      const isDonePill = e.target.closest(".done-pill");
      const isChevron = e.target.closest(".details-chevron");

      // do not toggle expand if clicking done pill or chevron
      if (isDonePill || isChevron) return;

      const expanded = card.classList.toggle("expanded");
    });

    /* Done pill handler */
    const donePill = card.querySelector(".done-pill");
    donePill.addEventListener("click", () => {
      const newState = !isDone(day, ex.name);
      setDone(day, ex.name, newState);

      donePill.classList.toggle("done", newState);
      donePill.textContent = newState ? "✓ Completed" : "Mark done";
      card.classList.toggle("done", newState);
    });

    /* Chevron toggle handler */
    const chevron = card.querySelector(".details-chevron");

    /* Chevron toggles card expansion */
    chevron.addEventListener("click", (e) => {
      e.stopPropagation();
      card.classList.toggle("expanded");
    });

    cardsContainer.appendChild(card);
  });

  /* FOOTER EXPANDS ONLY WHEN LAST CARD FULLY VISIBLE */
  const cards = document.querySelectorAll(".exercise-card");
  const last = cards[cards.length - 1];

  if (lastCardObserver) lastCardObserver.disconnect();

  lastCardObserver = new IntersectionObserver(
    (entries) => {
      document.body.classList.toggle(
        "footer-expanded",
        entries[0].isIntersecting
      );
    },
    { threshold: 1.0 }
  );

  lastCardObserver.observe(last);

  progressDayLabel.textContent = day;
}

/* ---------------- PROGRESS ---------------- */

function isDone(day, ex) {
  return progress[day] && progress[day][ex];
}

function setDone(day, ex, val) {
  if (!progress[day]) progress[day] = {};
  progress[day][ex] = val;
  saveProgress();
  updateProgress(day);
}

function updateProgress(day) {
  const total = workoutData[day].length;
  const completed = Object.values(progress[day] || {}).filter(Boolean).length;

  progressText.textContent = `${completed} of ${total} completed`;
  progressFill.style.width = `${(completed / total) * 100}%`;
}

/* ---------------- RESET BUTTONS ---------------- */

resetDayBtn.onclick = () => {
  if (confirm(`Reset progress for ${activeDay}?`)) {
    delete progress[activeDay];
    saveProgress();
    renderDay(activeDay);
    updateProgress(activeDay);
  }
};

resetWeekBtn.onclick = () => {
  if (confirm("Reset progress for all days?")) {
    progress = {};
    saveProgress();
    renderDay(activeDay);
    updateProgress(activeDay);
  }
};

/* INIT */
buildDayTabs();
renderDay(activeDay);
updateProgress(activeDay);
