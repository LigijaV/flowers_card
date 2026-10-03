document.addEventListener("DOMContentLoaded", () => {
    const music = document.getElementById("birthdayMusic");
    const button = document.getElementById("musicToggle");

    if (!music || !button) {
        console.error("Music elements not found.");
        return;
    }

    button.addEventListener("click", () => {
        if (music.paused) {
            music.play()
                .then(() => {
                    button.classList.add("playing");
                })
                .catch((error) => {
                    console.error("Music could not play:", error);
                });
        } else {
            music.pause();
            button.classList.remove("playing");
        }
    });
});
