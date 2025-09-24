// Toglogchiin eeljiig hadgalah huvisagch, negdugeer toglogchiig 0, hoyrdugaar toglogchiig neg gej temdegley
var activePlayer = 1;

// Toglogchdiin tsugluulsan onoog hadgalah huvisagch

var scores =[0,0]

// Toglogchiin eeljindee tsugluulj baigaa onoog hadgalah huvisagch

var roundScore = 0;

//Shoonii ali talaaraa buusniig hadgalah huvisagch heregtei, 1-6 gesen utgiig ene huvisagchid sanamsarguigeer uusgej  ugnu.

var diceNumber = Math.floor(Math.random()*6)+1;

// Program ehlehed beltgey
document.getElementById('score-0').textContent='0'
document.getElementById('score-1').textContent='0'

var diceDom = document.querySelector('.dice')

diceDom.style.display='none'
document.getElementById('current-0').textContent='0'
document.getElementById('current-1').textContent='0'

document.querySelector('.btn-roll').addEventListener('click',function shooShid(){
    var diceNumber = Math.floor(Math.random()*6)+1;
    diceDom.style.display='block'
    diceDom.src = 'dice-' + diceNumber + '.png'
})


