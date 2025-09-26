var isNewGame;
// Togloomiin buh hesegt ashiglagdah global huvisagch
var activePlayer, scores, roundScore, diceDom;

// Program ehlehed beltgey
initGame()

function initGame(){
    // Initialize dice DOM element

    isNewGame = true
    diceDom = document.querySelector('.dice')
    
    document.getElementById('current-0').textContent='0'
    document.getElementById('current-1').textContent='0'
    document.getElementById('score-0').textContent='0'
    document.getElementById('score-1').textContent='0'

    activePlayer = 0;
    scores = [0,0]
    roundScore = 0;

    diceDom.style.display='none'
    
    // Reset player panels
    document.querySelector('.player-0-panel').classList.remove('winner')
    document.querySelector('.player-1-panel').classList.remove('winner')
    document.querySelector('.player-0-panel').classList.remove('active')
    document.querySelector('.player-1-panel').classList.remove('active')
    document.querySelector('.player-0-panel').classList.add('active')
    
    // Reset player names
    document.getElementById('name-0').textContent = 'Player 1'
    document.getElementById('name-1').textContent = 'Player 2'
}

// Shoog shideh addEventlistener ashiglan   
document.querySelector('.btn-roll').addEventListener('click',function shooShid(){
    if(isNewGame){
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
        switchNextPlayer()

        // Shoog tur alga bolgono 
        diceDom.style.display='none'
    }
    } else {
        alert('Togloom duussan baina. New Game tovchiig darj shineer ehluulne uu?')
    }
})  

document.querySelector('.btn-hold').addEventListener('click', function(){
    if(isNewGame){
            // Ug toglogchiin tsugluulsan onoog global huvisagch deer nemj ugnu.
    scores[activePlayer] = scores[activePlayer] + roundScore

    // Delgets deer onoog uurchilnu.
    document.getElementById('score-' + activePlayer).textContent = scores[activePlayer]

    if(scores[activePlayer] >= 100){
        
        isNewGame = false;
        document.getElementById('name-'+ activePlayer).textContent = 'WINNER!!!'
        document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner')
        document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active')
        
        // Disable further gameplay
        diceDom.style.display='none'
    } else {
        // Eeljiin onoog ni 0 bolgono. 
        roundScore = 0
        // Toglogchiin eeljiig solino.
        switchNextPlayer()
    }
    } else{
        alert('Togloom duussan baina. New Game tovchiig darj shineer ehluulne uu?')
    }
})

function switchNextPlayer(){
    document.getElementById('current-' + activePlayer).textContent = 0
    
    // Toglogchiin eeljiig solino
    activePlayer = activePlayer === 0 ? 1 : 0;
    
    // ulaan tsegiig shiljuuleh code:
    document.querySelector('.player-0-panel').classList.toggle('active')
    document.querySelector('.player-1-panel').classList.toggle('active')
}

// shine togloom ehluuleh function 
document.querySelector('.btn-new').addEventListener('click', initGame)





