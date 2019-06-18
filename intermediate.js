var button = document.querySelector('.get-quote');
var quote = document.querySelector('.quote');
var clearBtn = document.querySelector('.clear')

var quotes = [
  "'It’s Not Whether You Get Knocked Down, It’s Whether You Get Up.' -Vince Lombardi",
  "'Don’t Let Yesterday Take Up Too Much Of Today.' – Will Roger",
  "'Great minds discuss ideas, average minds discuss events, small minds discuss people.' -Eleanor Roosevelt",
  "'Let us pick up our books and our pens. They are our most powerful weapons. One child, one teacher, one book, and one pen can change the world.' –Malala Yousafzai",
  "'The way to get started is to quit talking and begin doing.' - Walt Disney",
  "'The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty.' - Winston Churchhill"
]

button.addEventListener("click", function() {
  console.log("hi")
  newDecimal = Math.random(quotes.length - 1) * 6
  newNum = Math.floor(newDecimal)
  quote.textContent = quotes[newNum]
})

clearBtn.addEventListener("click", function() {
  quote.textContent = ""
})
