const activityBox = document.getElementById('activity-box');
document.getElementById('clear-history-btn')
    .addEventListener('click', function () {
        activityBox.innerHTML = '';
    });