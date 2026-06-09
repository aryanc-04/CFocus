


// grab the container for the toggle buttons
const container = document.getElementById("settings-container");

const on_cf = true;

if (on_cf) {
    console.log("On codeforces, showing toggles...");
    const row1 = createToggleRow("Hide sidepanel", false, (newState) => {
        
    });
    container.appendChild(row1);
}
else {
    container.innerHTML = "";
}

const content_area = document.querySelector(".footer-container");
const footer = createFooter(() => {
    console.log("Reset button was clicked!");
});

content_area.appendChild(footer);