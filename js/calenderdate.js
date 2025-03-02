function updateDateTime() {
    const now = new Date();

    const dateOptions = { weekday: 'long',year: 'numeric', month: 'long', day: 'numeric',};
    const dateString = now.toLocaleDateString(undefined, dateOptions);
    document.getElementById('date-display').textContent = dateString;
    
}

updateDateTime();

