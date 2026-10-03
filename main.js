document.addEventListener("DOMContentLoaded", () => {
    const music = document.getElementById("birthdayMusic");
    const button = document.getElementById("musicToggle");

    if (!music || !button) {
        return;
    }

    button.addEventListener("click", async () => {
        try {
            if (music.paused) {
                await music.play();
                button.textContent = "♫";
                button.classList.add("playing");
                button.setAttribute("aria-label", "Pause music");
            } else {
                music.pause();
                button.textContent = "♪";
                button.classList.remove("playing");
                button.setAttribute("aria-label", "Play music");
            }
        } catch (error) {
            console.error("Music playback failed:", error);
        }
    });
});
