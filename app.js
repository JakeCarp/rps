
let selection = {
    'rock': ['paper']
    ,
    'paper': ['scissors']
    ,
    'scissors': ['rock']

}

let cpuOptions = ['rock', 'paper', 'scissors']

function thing(str) {
    let choice = selection[str]
    play(choice)
}

function play(choice) {
    document.getElementById('cpuChoice').innerHTML = ``
    let rand = Math.floor(Math.random() * 3)
    let cpuChoice = cpuOptions[rand]
    document.getElementById('cpuChoice').innerHTML = `${cpuChoice.toUpperCase()}`

    if (!selection[choice].includes(cpuChoice)) {
        return window.alert('You Lose')
    }
    return window.alert('You Win')
}

