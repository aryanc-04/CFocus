
function createToggleRow(labelText, initialState, onToggleCallback) {
    
    // build the elements
    const row = document.createElement("div");
    row.className = "toggle-row";

    const label_span = document.createElement("span");
    label_span.className = "toggle-label";
    label_span.textContent = labelText;

    const toggle_div = document.createElement("div");
    toggle_div.className = "toggle-button";


    // set the initial state
    if (initialState === true) {
        toggle_div.classList.add("on");
    }
    else {
        label_span.classList.add("dimmed");
    }


    row.appendChild(label_span);
    row.appendChild(toggle_div);


    // attach the event listener for interaction
    let currentState = initialState;
    row.addEventListener("click", () => {
        currentState = !currentState; 

        toggle_div.classList.toggle("on", currentState);
        label_span.classList.toggle("dimmed", !currentState);

        onToggleCallback(currentState);
    });

    return row;
}