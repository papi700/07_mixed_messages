const jokes = ["Why did the two Java methods get a divorce? Because they had constant arguments!", 
"Why did the edge server go bankrupt? It couldn't handle all the requests!", 
"How many developers does it take to change a lightbulb? None, it's a hardware problem!",
"Why do programmers always mix up Christmas and Halloween? Because Oct 31 == Dec 25!",
"Why do programmers prefer iOS development over Android development? Because on iOS, there are no Java exceptions in the wild!",
"I would tell you a UDP joke, but you might not get it.",
"Why do programmers never tell their secrets? Because they always want to keep their private methods private!",
"How do you comfort a JavaScript bug? You console it!",
"Why don't programmers like nature? It has too many bugs!",
"Why did the programmer go broke? Because he used up all his cache!"]

const logRandom = array => {
    const randomIndex = Math.floor(Math.random() * (array.length - 0 + 1) + 0)

    console.log(array[randomIndex])
}

logRandom(jokes)