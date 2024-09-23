//MODEL
    let advice = ['I think you might be on to something',
        'Wait for the fullmoon and ask again',
        'You should probably ask someone else',
        'Dude that is a terrible idea dont do that',
        'Quite possibly',
        'I have literally no idea of what youre saying',
        'Oh hell yeah!',
        'Lol Im a ball not a miracle worker',
        'I mean yeah, if you like disappointment',
        'Id wager the outcome would be less than favourable']

    let givenAdvice = '<div style="font-size: xx-large;">8</div>';


//VIEW

updateView()

function updateView(){
    document.getElementById('app').innerHTML = /*HTML*/`
    <div class="mainBall">
    <div class="displayScreen">${givenAdvice}</div>
    </div>
    <button onclick="getAdvice()">Get Advice</button>
    `
}

//CONTROLLER

//Denne finner et tilfeldig råd (Math.random).
function getRandomAdvice(){
    return Math.floor(Math.random() * advice.length); 
}

//Denne gir variabelen givenAdvice, verdien av advice(arrayet) sin tilfeldige index som vi fant over, og sender det til viewet.
function getAdvice(){
    givenAdvice = advice[getRandomAdvice()];
    updateView()
}