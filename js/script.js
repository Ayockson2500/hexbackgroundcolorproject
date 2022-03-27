const display = document.querySelector('.display-div');
const container = document.querySelector('.container');

const myHexColors = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];

setInterval(myHexRandColors, 1000)
function myHexRandColors() {
    const colorOneIndx = myHexColors[Math.floor(Math.random() * myHexColors.length)];
    const colorTwoIndx = myHexColors[Math.floor(Math.random() * myHexColors.length)] ;
    const colorThreeIndx = myHexColors[Math.floor(Math.random() * myHexColors.length)] ;
    const colorFourIndx = myHexColors[Math.floor(Math.random() * myHexColors.length)] ;
    const colorFiveIndx = myHexColors[Math.floor(Math.random() * myHexColors.length)] ;
    const colorSixIndx = myHexColors[Math.floor(Math.random() * myHexColors.length)] ;

    const myColorRand = colorOneIndx + colorTwoIndx + colorThreeIndx + colorFourIndx + colorFiveIndx + colorSixIndx;
    const hexColor = "#" + myColorRand;

    const newDisplayDiv = document.createElement('div');
    const newH1 = document.createElement('h1')
    newDisplayDiv.classList.add('display-div');
    newDisplayDiv.innerText = hexColor
    newDisplayDiv.style.background = hexColor;
    container.appendChild(newDisplayDiv);

}
myHexRandColors();

