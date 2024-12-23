document.getElementById('draw-cards').addEventListener('click', function() {
    const cards = ['The Fool', 'The Magician', 'The High Priestess', 'The Empress', 'The Emperor', 'The Hierophant', 'The Lovers', 'The Chariot', 'Strength', 'The Hermit', 'Wheel of Fortune', 'Justice', 'The Hanged Man', 'Death', 'Temperance', 'The Devil', 'The Tower', 'The Star', 'The Moon', 'The Sun', 'Judgement', 'The World'];
    
    function drawCard() {
        return cards[Math.floor(Math.random() * cards.length)];
    }

    document.getElementById('card1').innerText = drawCard();
    document.getElementById('card2').innerText = drawCard();
    document.getElementById('card3').innerText = drawCard();
});
