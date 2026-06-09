

function createFooter(onResetCallback) {
    const footer_div = document.createElement("div");
    footer_div.className = "footer";

    const reset_button = document.createElement("button");
    reset_button.className = "reset-button";
    reset_button.textContent = "Reset Page";

    reset_button.addEventListener("click", () => {
        onResetCallback();
    });

    footer_div.appendChild(reset_button);
    return footer_div;
}