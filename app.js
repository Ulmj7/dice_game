// Toglogchiin eeljiig hadgalah huvisagch, negdugeer toglogchiig 0, hoyrdugaar toglogchiig neg gej temdegley
var activePlayer = 0;

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
 
// Shoog shideh addEventlistener ashiglan   
document.querySelector('.btn-roll').addEventListener('click',function shooShid(){
        // 1-6 dotorh neg sanamsargui toog gargaj avna
    var diceNumber = Math.floor(Math.random()*6)+1;
    // shoonii zurgiig web deer gargaj irne
    diceDom.style.display='block'
    // buusan sanamsargui toond shoonii zurgiig web deer gargaj irne
    diceDom.src = 'dice-' + diceNumber + '.png'
    // Buusan too 1-ees ylgaatai bol idevhtei toglogchiin eeljiin onoog uurchilj nemegduulne.
    if(diceNumber !== 1){
        // 1s ylgaatai too buulaa. Buusan toog toglogchid nemj ugnu,
        roundScore = roundScore + diceNumber;
        document.getElementById('current-' + activePlayer).textContent = roundScore
    } else {
        // Ene toglogchiin eeljindee tsugluulsan onoog 0 bolgono.
        roundScore=0
        document.getElementById('current-' + activePlayer).textContent = 0
        // Toglogchiin eeljiig nuguu toglogch ruu shiljuulne ee.
        // 1 buusan tul toglogchiin eeljiig ene hesegt solij ugnu.
        // herev idevhtei toglogch ni 0 baival idevhtei toglogchiig 1 bolgo.
        // ugui bol idevhtei toglogchiig 0 bolgo.
        activePlayer === 0 ? (activePlayer = 1):(activePlayer = 0)
        
        // ulaan tsegiig shiljuuleh code:

        document.querySelector('.player-0-panel').classList.toggle('active')
        document.querySelector('.player-1-panel').classList.toggle('active')

        // Shoog tur alga bolgono 

        diceDom.style.display='none'
    }

})


