document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('submit-btn').addEventListener('click', function () {
        const time = document.getElementById('time-input').value;
        const description = document.getElementById('description-input').value;

        if (time.trim() === '' || description.trim() === '') {
            alert("Please fill in both fields");
            return;
        }

        // Validasi format time xx:xx (24 jam)
        const timePattern = /^([01]\d|2[0-3]):([0-5]\d)$/;
        if (!timePattern.test(time)) {
            alert("Please enter the time in the format HH:MM (24-hour format)");
            return;
        }

        const dateDiv = document.querySelector('.date-div');
        const timeDiv = document.querySelector('.time-div');
        const activityDiv = document.querySelector('.activity-div');

        const newDate = document.createElement('div');
        newDate.className = 'date';
        newDate.textContent = '20/04/2025';

        const newTime = document.createElement('div');
        newTime.className = 'time';
        newTime.textContent = time;

        const newActivity = document.createElement('div');
        newActivity.className = 'activity';
        newActivity.textContent = description;

        dateDiv.appendChild(newDate);
        timeDiv.appendChild(newTime);
        activityDiv.appendChild(newActivity);

        document.getElementById('time-input').value = '';
        document.getElementById('description-input').value = '';
    });
});

document.querySelector('.back').addEventListener("click", () => {
  window.location.href = "../SereneRemindersMain/index.html"
})

document.querySelector('#submit-btn').addEventListener("click", () => {
  window.location.href = "../SereneRemindersMain/index.html"
})