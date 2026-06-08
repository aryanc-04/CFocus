


// grab the container for the toggle buttons
const container = document.getElementById("settings-container");


// build component for testing
const row1 = createToggleRow("Hide Sidebar", false, (newState) => {
    console.log("Sidebar is now : ", newState);
});
const row2 = createToggleRow("Hide Tags", false, (newState) => {
    console.log("Tags are now : ", newState);
});


// inject the toggle
container.appendChild(row1);
container.appendChild(row2);