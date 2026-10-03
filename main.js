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
                button.classList.remove("muted");
                button.setAttribute("aria-label", "Turn sound off");
            } catch (error) {
                console.error("Could not play music:", error);
            }
        } else {
            music.pause();
            button.classList.add("muted");
            button.setAttribute("aria-label", "Turn sound on");
        }
    });
});
