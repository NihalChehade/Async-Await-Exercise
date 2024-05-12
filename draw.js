
let DeckId;

window.onload = async (event) => {
  
    let newDeck = await axios.get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
    
    DeckId = newDeck.data.deck_id;
    const drawCardBtn = document.createElement("button");
    drawCardBtn.className="btn btn-lg btn-success mt-3";
    drawCardBtn.innerText="Draw A Card";
    drawCardBtn.addEventListener('click', onClickHandler);
    const topDiv = document.querySelector('#top');
    topDiv.append(drawCardBtn);
};



async function onClickHandler(){
    let drawnCardResp = await axios.get(`https://deckofcardsapi.com/api/deck/${DeckId}/draw/?count=1`);
    if(drawnCardResp.data.remaining === 0){
        const btn =document.querySelector('.btn');
        btn.removeEventListener('click', onClickHandler);
    }
    let zIndexCounter = 1;
    const mainDiv =document.querySelector('#main');
    const cardDiv = document.createElement('div');
    cardDiv.style.zIndex =zIndexCounter++;
    cardDiv.style.transform = `translateY(-${20 * (zIndexCounter - 1)}px) rotate(${Math.random() * 50 - 25}deg)`;
    cardDiv.classList.add('cardDiv');
    const img = document.createElement('img');
    img.src =drawnCardResp.data.cards[0].image;
    cardDiv.append(img);
    mainDiv.append(cardDiv);            
}

