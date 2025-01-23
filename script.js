document.addEventListener("DOMContentLoaded", () => {
    const dateDisplay = document.getElementById('currentDate');
    const today = new Date();
    const formattedDate = today.toLocaleDateString('en-US', {
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
    });
    dateDisplay.textContent = formattedDate;
});

function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
}

function showCalendar() {
    const content = document.getElementById('content');
    const daysInMonth = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).getDate();
    let calendarHTML = '<div class="calendar">';
    for (let day = 1; day <= daysInMonth; day++) {
        calendarHTML += `<div class="day" onclick="showDream(${day})">${day}</div>`;
    }
    calendarHTML += '</div>';
    content.innerHTML = calendarHTML;
}

function showProfile() {
    const content = document.getElementById('content');
    content.innerHTML = `
        <div class="profile">
            <h2>Profile</h2>
            <input type="text" placeholder="Nickname">
            <input type="text" placeholder="Gender">
            <textarea placeholder="Favorite dreams"></textarea>
            <textarea placeholder="Nightmares"></textarea>
        </div>
    `;
}

function showDream(day) {
    const content = document.getElementById('content');
    content.innerHTML = `<h2>Dream from Day ${day}</h2><p>No dream logged for this day yet.</p>`;
}

