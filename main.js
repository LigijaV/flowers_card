document.addEventListener("DOMContentLoaded", () => {
    const music = document.getElementById("birthdayMusic");
    const button = document.getElementById("musicToggle");

    if (!music || !button) {
        return;
    }

    button.addEventListener("click", async () => {
        if (music.paused) {
            try {
                await music.play();
                button.textContent = "♫";
                button.classList.add("playing");
            } catch (error) {
                console.error("Could not play music:", error);
            }
        } else {
            music.pause();
            button.textContent = "♪";
            button.classList.remove("playing");
        }
    });
});
