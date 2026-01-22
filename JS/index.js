document.addEventListener('DOMContentLoaded', function () {
    // Countdown Timer Logic
    const countdownElement = document.getElementById('countdown');
    if (!countdownElement) return;

    // Set a target time (e.g., 24 hours from now) or a fixed daily end time
    // For demo: reset to 24 hours every reload or just run a decremental timer from 23:16:05

    let hours = 23;
    let minutes = 16;
    let seconds = 5;

    function updateTimer() {
        seconds--;
        if (seconds < 0) {
            seconds = 59;
            minutes--;
            if (minutes < 0) {
                minutes = 59;
                hours--;
                if (hours < 0) {
                    // Reset or stop
                    hours = 23;
                    minutes = 59;
                    seconds = 59;
                }
            }
        }

        // Format
        const h = hours.toString().padStart(2, '0');
        const m = minutes.toString().padStart(2, '0');
        const s = seconds.toString().padStart(2, '0');

        countdownElement.innerHTML = `
            <span class="time-box">${h}</span>:<span class="time-box">${m}</span>:<span class="time-box">${s}</span>
        `;
    }

    // Update every second
    setInterval(updateTimer, 1000);
    // Initial call
    updateTimer();
});
