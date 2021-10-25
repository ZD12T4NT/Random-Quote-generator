const quotes = ["“We become what we think about” – Earl Nightingale", 
"“Optimism is the one quality more associated with success and happiness than any other.”- Brian Tracy", 
"“Happiness is not something readymade. It comes from your own actions.”-Dalai Lama", 
"“All our dreams can come true if we have the courage to pursue them.”- Walt Disney", 
"“Success is not final, failure is not fatal: it is the courage to continue that counts.” Winston Churchill", 
"“Believe you can and you’re halfway there.” Theodore Roosevelt", 
"“I can’t change the direction of the wind, but I can adjust my sails to always reach my destination.” – Jimmy Dean", 
"“Move out of your comfort zone. You can only grow if you are willing to feel awkward and uncomfortable when you try something new.”- Brian Tracy",
" “You are never too old to set another goal or to dream a new dream.” – C.S. Lewis",
" “Everything you’ve ever wanted is on the other side of fear.”- George Addair",
"“Be the change that you wish to see in the world.”- Mahatma Ghandi",
"“If I cannot do great things, I can do small things in a great way.” – Martin Luther King Jr.",
"“We generate fears while we sit. We overcome them by action.” –  Dr. Henry Link"]//this is an array of possible quotes to be generated


const getRandomNumber = (max) => Math.floor(Math.random() * max);


const getRandomName = () => `${quotes[getRandomNumber(quotes.length)]}`;

const setRandomName = () => {
    document.getElementById('random-quotes').innerText = getRandomName();//this targets the id where the quotes will appear
}

document.getElementById('generate')//this targets the button and on a click will produce a quote
.addEventListener('click', setRandomName);



setRandomName();





