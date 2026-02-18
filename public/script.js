let dlmode = document.getElementById('modechanger');
let sidebarid = document.getElementById('sideid');
let editorid = document.getElementById('edid');

let darkMode = localStorage.getItem("theme") === "dark";

/* Moon SVG */
const moonIcon = `
<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
viewBox="0 0 16 16">
<path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278"/>
</svg>`;

/* Sun SVG */
const sunIcon = `
<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
viewBox="0 0 16 16">
<path d="M8 4.5a3.5 3.5 0 1 0 0 7a3.5 3.5 0 0 0 0-7M8 1v2M8 13v2M1 8h2M13 8h2M3.22 3.22l1.42 1.42M11.36 11.36l1.42 1.42M12.78 3.22l-1.42 1.42M4.64 11.36l-1.42 1.42"/>
</svg>`;

function applyTheme() {
    let container = document.querySelector(".modechange");

    if (darkMode) {
        sidebarid.style.background = 'black';
        editorid.style.background = '#111';
        sidebarid.style.borderRightColor = 'black';
        sidebarid.style.color = 'grey';

        container.style.background = "#d9d9d9"; // light button
        dlmode.innerHTML = moonIcon;
    } else {
        sidebarid.style.background = '#ffeada';
        editorid.style.background = '#ffdeb7';
        sidebarid.style.borderRightColor = 'grey';
        sidebarid.style.color = 'grey';

        container.style.background = "#333"; // dark button
        dlmode.innerHTML = sunIcon;

        setTimeout(() => {
            dlmode.querySelector("svg").classList.add("sun");
        }, 10);
    }
}

/* Load theme */
applyTheme();

dlmode.addEventListener('click', () => {
    darkMode = !darkMode;
    localStorage.setItem("theme", darkMode ? "dark" : "light");

    applyTheme();

    let svg = dlmode.querySelector("svg");
    svg.classList.add("rotate");

    setTimeout(() => svg.classList.remove("rotate"), 600);
});
hehev