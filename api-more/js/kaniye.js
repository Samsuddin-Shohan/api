const loadQuote = () =>{
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(data => displayQuote(data))
}


const displayQuote = (quote) =>{
    const quoteSection = document.getElementById('quotes');
    quoteSection.innerHTML = `
    <h1>${quote.quote}</h1>
    `
}

