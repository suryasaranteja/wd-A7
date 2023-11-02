$(document).ready(function () {
    let intervalId;
    let running = false;
    let seconds = 0;

    function formatTime() {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const sec = seconds % 60;
        return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;
    }

    $('#start').click(function () {
        if (!running) {
            intervalId = setInterval(function () {
                seconds++;
                $('#time-display').text(formatTime());
            }, 1000);
            running = true;
        }
    });

    $('#stop').click(function () {
        if (running) {
            clearInterval(intervalId);
            running = false;
        }
    });

    $('#reset').click(function () {
        clearInterval(intervalId);
        running = false;
        seconds = 0;
        $('#time-display').text(formatTime());
    });
});
