document.addEventListener("DOMContentLoaded", () => {
    const music = document.getElementById("birthdayMusic");
    const button = document.getElementById("musicToggle");

    if (!music || !button) {
        return;
    }

    let musicStarted = false;

    function startMusic() {
        if (!music.paused) {
            musicStarted = true;
            button.classList.remove("muted");
            return;
        }
    }

    // Try to start automatically when the page opens.
    startMusic();

    // If autoplay was blocked, start music on the first interaction.
    const startOnInteraction = () => {
        if (!musicStarted) {
            startMusic();
        }

        if (musicStarted) {
            document.removeEventListener("pointerdown", startOnInteraction);
            document.removeEventListener("touchstart", startOnInteraction);
            document.removeEventListener("keydown", startOnInteraction);
        }
    };

    document.addEventListener("pointerdown", startOnInteraction);
    document.addEventListener("touchstart", startOnInteraction);
    document.addEventListener("keydown", startOnInteraction);

    // Music button
    button.addEventListener("click", (event) => {
        event.stopPropagation();

        if (music.paused) {
            music.play()
                .then(() => {
                    musicStarted = true;
                    button.classList.remove("muted");
                })
                .catch((error) => {
                    console.error("Music could not play:", error);
                });
        } else {
            music.pause();
            button.classList.add("muted");
        }
    });
});
