const term = document.getElementById("terminal");
const dynamic = document.getElementById("dynamic");
const input = document.getElementById("cmd-input");

const history = [];
let idx = -1;

function scroll() {
    term.scrollTop = term.scrollHeight;
}

function line(html) {
    const el = document.createElement("div");
    el.className = "line";
    el.innerHTML = html;
    dynamic.appendChild(el);
}

function block(text) {
    const el = document.createElement("div");
    el.className = "block";
    el.textContent = text;
    dynamic.appendChild(el);
}

function divider() {
    const el = document.createElement("div");
    el.className = "divider";
    el.textContent = "──────────────────────────────────────────────";
    dynamic.appendChild(el);
}

function outCommand(raw) {
    line(`<span class="prompt">$</span><span class="cmd">${raw}</span>`);
}

function run(raw) {
    const cmd = raw.trim().toLowerCase();
    if (!cmd) return;

    outCommand(raw);
    history.push(raw);
    idx = -1;

    if (cmd === "help") {
        block(
`Available commands:

whoami      Shows the name
title       Displays the current professional title
about       Provides a short background summary
experience  Lists previous roles with timelines
education   Shows the most recent academic degree
contact     Provides email and profile links
clear       Clears the terminal output
help        Displays this help menu`
        );
        divider();
        return scroll();
    }

    if (cmd === "clear") {
        dynamic.innerHTML = "";
        return;
    }

    if (cmd === "whoami") {
        block(
`Kathuri Abhinav`
        );
        divider();
        return scroll();
    }

    if (cmd === "title") {
        block(
`Software Engineer 2 at Alteryx | IIITA'23`
        );
        divider();
        return scroll();
    }

    if (cmd === "about") {
        block(
`Passionate about leveraging technology to solve complex problems.
Enthusiastic about continuous learning and improvement.
Focused on building clean, efficient and meaningful solutions.`
        );
        divider();
        return scroll();
    }

    if (cmd === "experience") {
        block(
`Alteryx
    • Software Engineer 2          Mar 2025 - Present
    • Software Engineer 1          Jul 2023 - Mar 2025
    • Software Engineering Intern  Jan 2023 - Jun 2023`
        );
        divider();
        return scroll();
    }

    if (cmd === "education") {
        block(
`IIIT Allahabad - B.Tech - Information Technology (2019-2023)`
        );
        divider();
        return scroll();
    }

    if (cmd === "contact") {
        const el = document.createElement("div");
        el.className = "block";
        el.style.whiteSpace = "pre";

        el.innerHTML =
    `• Email: <a href="mailto:kathuriabhinav@gmail.com">kathuriabhinav@gmail.com</a>
• <a href="https://github.com/kathuriabhinav" target="_blank">GitHub</a>
• <a href="https://linkedin.com/in/kathuriabhinav" target="_blank">LinkedIn</a>`;

        dynamic.appendChild(el);
        divider();
        scroll();
        return;
    }

    block(
`Unknown command: ${cmd}
Try 'help'`
    );
    divider();
    scroll();
}

input.addEventListener("keydown", e => {
    if (e.key === "Enter") {
        run(input.value);
        input.value = "";
    }

    if (e.key === "ArrowUp") {
        if (!history.length) return;
        if (idx === -1) idx = history.length - 1;
        else if (idx > 0) idx--;
        input.value = history[idx];
        e.preventDefault();
    }

    if (e.key === "ArrowDown") {
        if (!history.length) return;
        if (idx < history.length - 1) idx++;
        else idx = -1;
        input.value = idx === -1 ? "" : history[idx];
        e.preventDefault();
    }
});

window.onload = () => {
    document.querySelector(".fade").classList.add("loaded");
    block(`Type 'help' to see available commands.`);
    divider();
    scroll();
    input.focus();
};

document.getElementById("backBtn").onclick = () => {
    window.location.href = "/";
};
