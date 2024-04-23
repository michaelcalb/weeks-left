function show_weeks() {
    let weekstable = document.getElementById("weeks-table")
    let weeksinfo = document.getElementById("weeks-info")

    weekstable.innerHTML = ''
    weeksinfo.style.display = 'block'
    
    let weeks_user_input = document.getElementById("weeks-input-date")

    let weeks_user = weeks_user_input.value

    let weeks = new Date(weeks_user).getTime()
    let currentweek = new Date().getTime()

    let ageseconds = currentweek - weeks
    let agedays = Math.floor(ageseconds/86400000)
    let ageweeks = Math.floor(agedays/7)

    if (isNaN(weeks) || currentweek < weeks) {
        alert("Invalid date entered!")
        return
    }

    weeksinfo.innerHTML = `<p weeksinfonote>Weeks lived: <strong>${ageweeks}</strong> of 3810*</p>`
    weeksinfo.innerHTML += `<p id="weeksinfonote">*Based on the world's average <abbr title="around 73 years">life expectancy</abbr>.</p>`

    let i = 0

    for (i; i < ageweeks; i++) {
        let weekscheckbox = document.createElement("input");
        weekscheckbox.setAttribute("type", "checkbox");
        weekscheckbox.setAttribute("class", "week");
        weekscheckbox.checked = true;
        weekstable.appendChild(weekscheckbox);
    }

    for (i; i < 3810; i++) {
        let weekscheckbox = document.createElement("input");
        weekscheckbox.setAttribute("type", "checkbox");
        weekscheckbox.setAttribute("class", "week");
        weekscheckbox.setAttribute("disabled", "true");
        weekscheckbox.checked = false;
        weekstable.appendChild(weekscheckbox);
    }
}

// Probably screwed up the math rounding the date values, but it should just have lost a day or so in the math