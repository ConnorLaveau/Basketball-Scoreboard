let home = document.getElementById("homeScore")
let away = document.getElementById("awayScore")
let homeCount = 0
let awayCount = 0

function addOneHome(){
    homeCount++
    home.textContent = homeCount
}

function addTwoHome(){
    homeCount += 2
    home.textContent = homeCount
}

function addThreeHome(){
    homeCount += 3
    home.textContent = homeCount
}

function addOneAway(){
    awayCount++
    away.textContent = awayCount
}

function addTwoAway(){
    awayCount += 2
    away.textContent = awayCount
}

function addThreeAway(){
    awayCount += 3
    away.textContent = awayCount
}

function reset(){
    homeCount = 0
    awayCount = 0
    away.textContent = awayCount
    home.textContent = homeCount
}