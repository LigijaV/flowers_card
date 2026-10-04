document.addEventListener("DOMContentLoaded", () => {
    const music = document.getElementById("birthdayMusic");
    const button = document.getElementById("musicToggle");

    if (!music || !button) return;

    function musicOn() {
        button.classList.remove("muted");
        button.setAttribute("aria-label", "Turn music off");
    }

    function musicOff() {
        button.classList.add("muted");
        button.setAttribute("aria-label", "Turn music on");
    }

    // Try unmuted autoplay first (in case browser allows it)
    music.play().then(musicOn).catch(() => {
        musicOff();
        // Fallback: Start audio on the very first tap/click anywhere
        const startAudioOnInteraction = () => {
            music.play().then(() => {
                musicOn();
                removeInteractionListeners();
            });
        };

        function removeInteractionListeners() {
            document.removeEventListener("click", startAudioOnInteraction);
            document.removeEventListener("touchstart", startAudioOnInteraction);
            document.removeEventListener("keydown", startAudioOnInteraction);
        }

        document.addEventListener("click", startAudioOnInteraction);
        document.addEventListener("touchstart", startAudioOnInteraction);
        document.addEventListener("keydown", startAudioOnInteraction);
    });

    // Toggle button behavior
    button.addEventListener("click", (e) => {
        e.stopPropagation();
        if (music.paused) {
            music.play().then(musicOn);
        } else {
            music.pause();
            musicOff();
        }
    });
});
