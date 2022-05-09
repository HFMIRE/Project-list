const listOfColor = ['Blue', 'Green', 'Purple', 'Orange', 'Yellow', 'Brown', 'Cyan', 'White','Pink' ]
const btnChange = document.querySelector('.btn-change')
const colourName = document.querySelector('.colourName')
function changeColor () {
    const randomColor = Math.floor(Math.random() * listOfColor.length)
    document.body.style.backgroundColor = listOfColor[randomColor]
    colourName.innerHTML = listOfColor[randomColor]
}

btnChange.addEventListener("click", changeColor)