const weeksInfo = document.getElementById('weeks-info')
const weeksTable = document.getElementById('weeks-table')
const weeksLived = document.getElementById('weeks-lived')
const weeksTotal = document.getElementById('weeks-total')
const weeksLeft = document.getElementById('weeks-left')
const lifePercentage = document.getElementById('life-percentage')
const lifeBarProgress = document.getElementById('life-bar-progress')
const avgWeeks = 3806 // reality check

function calcWeeks(currentTime, birthdateTime) { 
    const ageSeconds = currentTime - birthdateTime
    const ageDays = Math.floor(ageSeconds / 86400000)
    const ageWeeks = Math.floor(ageDays / 7)
    const agePercentage = Math.round(ageWeeks / avgWeeks * 100)
    
    weeksLived.textContent = ageWeeks
    weeksTotal.textContent = avgWeeks
    weeksLeft.textContent = avgWeeks - ageWeeks
    weeksInfo.style.display = 'flex'
    weeksTable.style.display = 'block'
    lifePercentage.textContent = `${agePercentage}%`
    lifeBarProgress.style.width = `${agePercentage}%`
    
    let i = 0
    weeksTable.innerHTML = ''
    for (i; i < ageWeeks; i++) {
        weeksTable.textContent += '☑️'
    }
    for (i; i < avgWeeks; i++) {
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