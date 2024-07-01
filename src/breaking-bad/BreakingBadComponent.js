const fetchQuote = async () => {
    const url = 'https://api.breakingbadquotes.xyz/v1/quotes';

    const res = await fetch(url);
    const data = await res.json();
    return data[0]
}


/**
 * 
 * @param {HTMLDivElement} element 
 */
export const BreakingBadComponent = async (element) => {

    const title = document.querySelector('#app-title').innerText = 'Breaking Bad App';

    const quoteLabel = document.createElement('blockquote');
    const authorLabel = document.createElement('h3');
    const nextQuoteButton = document.createElement('button');
    nextQuoteButton.innerText = 'Next Quote';

    const renderQuote = (data) => {
        quoteLabel.innerText = data.quote;
        authorLabel.innerText = data.author;
        element.replaceChildren(quoteLabel, authorLabel, nextQuoteButton);
    }

    nextQuoteButton.addEventListener('click', async () => {
        element.innerHTML = 'Loading...'
        renderQuote( await fetchQuote() )
    }) 

    fetchQuote().then(renderQuote);

}