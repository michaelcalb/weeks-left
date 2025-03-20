const weeksInfo = document.getElementById('weeks-info')
const weeksTable = document.getElementById('weeks-table')
const weeksLived = document.getElementById('weeks-lived')
const lifePercentage = document.getElementById('life-percentage')
const lifeBarProgress = document.getElementById('life-bar-progress')
const totalWeeks = 3810 // reality check

function calcWeeks(currentTime, birthdateTime) { 
    const ageSeconds = currentTime - birthdateTime
    const ageDays = Math.floor(ageSeconds / 86400000)
    const ageWeeks = Math.floor(ageDays / 7)
    const agePercentage = Math.round(ageWeeks / totalWeeks * 100)
    
    weeksLived.textContent = ageWeeks
    weeksInfo.style.display = 'flex'
    lifePercentage.textContent = `${agePercentage}%`
    lifeBarProgress.style.width = `${agePercentage}%`
    
    let i = 0
    weeksTable.innerHTML = ''
    for (i; i < ageWeeks; i++) {
        weeksTable.textContent += '☑️'
    }
    for (i; i < totalWeeks; i++) {
        weeksTable.textContent += '⬜'
    }
}

const calcWeeksBtn = document.getElementById('calc-weeks-btn')
const birthdateInput = document.getElementById('birthdate-input')

calcWeeksBtn.addEventListener('click', () => {
    const birthdateValue = birthdateInput.value
    const birthdateTime = new Date(birthdateValue).getTime()
    const currentTime = new Date().getTime()

    if (isNaN(birthdateTime) || currentTime < birthdateTime) {
        alert('Invalid date!')
        birthdateInput.focus()
        return
    } else {
        calcWeeks(currentTime, birthdateTime)
    }
})

// making this since im not using forms
document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        calcWeeksBtn.click()
    }
})