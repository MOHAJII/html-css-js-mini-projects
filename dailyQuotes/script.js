let quoteBox = document.getElementById('quote');
let authorBox = document.getElementById('author');

const url = "https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en";

const getQuotesFrmUrl = async (url) => {
    const response = await fetch(url);
    const data = await response.json();

    quoteBox.innerHTML = data["quoteText"];
    authorBox.innerHTML = data["quoteAuthor"];
}

const tweet = () => {
    const tweetText = `"${quoteBox.innerText}" -by: ${authorBox.innerText}-`;
    const tweetUrl = `https://x.com/intent/post?url=${tweetText}`;
    window.open(tweetUrl, "Tweet Window", "width: 600, height: 300");
}

getQuotesFrmUrl(url);

