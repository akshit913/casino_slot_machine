let value1 = document.getElementById('value1')
let value2 = document.getElementById('value2')
let value3 = document.getElementById('value3')
let inpS = document.getElementById('inpS')
let start = document.getElementById('run')
value1.classList.toggle('value')
value2.classList.toggle('value')
value3.classList.toggle('value')
inpS.value = 10

let values = [
    '😀', '😍', '🤩','😰','🤑','😈'
]
function getRandomValue() {
    return values[Math.floor(Math.random() * 6)]
}
//deletes the old animation and starts a new one when the speed changes
let animationId;
let isWin = false;
let win;
function updateAnimation (newSpeed) {
    if(animationId) clearInterval(animationId);
    animationId = setInterval(() => {
        value1.innerText = getRandomValue()
        value2.innerText = getRandomValue()
        value3.innerText = getRandomValue()
        if(value1.innerText == value2.innerText && value2.innerText == value3.innerText) {
            isWin = true;
            win = value1.innerText
        }
        if(isWin) {
            if(inpS.value != 0){
                let cur = inpS.value
                inpS.value = cur - 1
                document.documentElement.style.setProperty('--speed', inpS.value)
                updateAnimation(inpS.valueS)
            }else {
                value1.classList.toggle('value')
                value2.classList.toggle('value')
                value3.classList.toggle('value')
                value1.innerText = win
                value2.innerText = win
                value3.innerText = win
                clearInterval(animationId)
            }
        }
    }, 1000/newSpeed)
}
start.onclick = function () {
    value1.classList.toggle('value')
    value2.classList.toggle('value')
    value3.classList.toggle('value')
    inpS.value = 10
    value1.value = getRandomValue()
    value2.value = getRandomValue()
    value3.value = getRandomValue()
    document.documentElement.style.setProperty('--speed', '10')
    updateAnimation(10)
}
// inpS.oninput = function(ev) {
//     console.log('inside')
//     //document.documentElement is the root of css
//     document.documentElement.style.setProperty('--speed', ev.target.value)
//     console.log(ev.target.value)
//     updateAnimation(ev.target.value)
// }
// console.log('reachable')
// updateAnimation(inpS.value)

// console.log('unreachable')
// value1.onchange = function (ev) {
//     console.log('inside')
//     let win;
//     if(value1.innerText == value2.innerText == value3.innerText) {
//         win = value1.innerText
//         for(let i = 10;i > 0;i--) {
//             document.documentElement.style.setProperty('--speed', i)
//             updateAnimation(i)
//             inpS.value = i
//         }
//         value1.innerText = win
//         value2.innerText = win
//         value3.innerText = win
//     } else {
//         updateAnimation(inpS.value)
//         console.log(inpS.value)
//     }
// }