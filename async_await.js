
async function getNumberFact(number){
    try {
    let Factdata = await axios.get(`http://numbersapi.com/${number}/trivia?json`)
    const pEl = document.querySelector('p');
    pEl.append(Factdata.data.text);
    }
    catch(e) {
        console.log('No Fact was found!', e);
    }
}
getNumberFact(12);

async function getFactsOfMultipleNumbers(){
    let factsData = await axios.get('http://numbersapi.com/2..6/trivia?json');
   
    const entries = Object.entries(factsData.data);

    for (let [key, value] of entries) {
            const li = document.createElement('li');
            li.append(value);
            const ulEl = document.querySelector('ul');
            ulEl.append(li)
    }
}
 getFactsOfMultipleNumbers();


async function fourFactsFavNum(num){
    let fourFactsOfFavNum = [];

    for(let i = 1; i<5; i++){
    fourFactsOfFavNum.push(
        axios.get(`http://numbersapi.com/${num}/trivia?json`)
    );
    }

    let facts = await Promise.all(fourFactsOfFavNum)
    
    const olEl = document.querySelector('ol');      
    for(let i =0; i < facts.length; i++){
        const li= document.createElement('li');
        li.append(facts[i].data.text)
        olEl.append(li);
    }  
}
fourFactsFavNum(12);

async function drawACard(){
    let res = await axios.get("https://deckofcardsapi.com/api/deck/new/draw/?count=1")
    console.log(`${res.data.cards[0].value} of ${res.data.cards[0].suit}`)
}
drawACard();
    
   
    
async function draw2CardsFrmSameDeck(){
    let drawnCards=[];
    let resp1 = await axios.get("https://deckofcardsapi.com/api/deck/new/draw/?count=1")
    let deckId = resp1.data.deck_id;
    drawnCards.push(resp1);
    let resp2 = await axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
 
    drawnCards.push(resp2)
    for(let i =0; i < drawnCards.length; i++){
        console.log(`${drawnCards[i].data.cards[0].value} of ${drawnCards[i].data.cards[0].suit}`)            
    } 
}
draw2CardsFrmSameDeck();
    
    
    

    
    
       
   



