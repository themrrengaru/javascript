//blank space

/*let playGame = confirm("Shall we play rock, paper, scissors?");
if (playGame) {
  while (playGame) {
    const playerChoice = prompt("Please enter rock, paper or scissors");
    if (playerChoice || playerChoice === "") {
      const playerOne = playerChoice.trim().toLowerCase();
      if (
        playerOne === "rock" ||
        playerOne === "paper" ||
        playerOne === "scissors"
      ) {
        const computerChoice = Math.floor(Math.random() * 3);
        const rpsArray = ["rock", "paper", "scissors"];
        const computer = rpsArray[computerChoice];

        const result =
          playerOne === computer
            ? "Tie game!"
            : playerOne === "paper" && computer === "rock"
            ? `playerOne: ${playerOne}\nComputer: ${computer}\nplayerOne wins!`
            : playerOne === "rock" && computer === "scissors"
            ? `playerOne: ${playerOne}\nComputer: ${computer}\nplayerOne wins!`
            : playerOne === "scissors" && computer === "paper"
            ? `playerOne: ${playerOne}\nComputer: ${computer}\nplayerOne wins!`
            : `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`;
        alert(result);
        playGame = confirm("Play again?");
        if (!playGame) alert("Thanks for the game!");
        continue;
      } else {
        alert("You didn't enter correct data");
        continue;
      }
    } else {
      alert("I guess you changed your mind, maybe next time");
      break;
    }
  }
} else {
  alert("Maybe next time");
}*/

//Loops

/*let name = "Piotr";
for (let i = 0; i < 5; i++) {
  console.log(name.charAt(i));
}*/

/*function getUserNameFromEmail(email) {
  return email.slice(0, email.indexOf("@"));
}
console.log(getUserNameFromEmail("mattyjasik@gmail.com"));*/

/*const toProperCase = (name) => {
  return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
};
console.log(toProperCase("wErOnIkA"));*/

//arrays

/*myArray.push("school");
myArray.unshift(42);
const lastItem = myArray.pop();*/

/*console.log(myArray);
console.log(lastItem);
console.log(myArray.length);
console.log(myArray[myArray.length - 1]);
console.log(myArray[1]);*/

/*myArray.splice(1, 1);
console.log(myArray);*/

/*myArray.splice(1, 0, 454);
console.log(myArray);*/

//objects

/*const myObj = { name: "Piotr" };
const anotherObj = {
  alive: true,
  answer: 42,
  hobbies: ["Eat", "Sleep", "Code"],
  beverage: {
    morning: "Coffee",
    afternoon: "Iced Tea",
  },
  action: function () {
    return `Time for ${this.beverage.morning}`;
  },
};
console.log(anotherObj.action());*/

/*const vehicle = {
  wheels: 4,
  engine: function () {
    return "wrum!";
  },
};

const car = Object.create(vehicle);
car.doors = 4;
car.engine = function () {
  return "whuuuu";
};

console.log(car.engine());
console.log(car.wheels);*/

/*const band = {
  vocals: "Robert Plant",
  guitar: "Paweł Matyjasik",
  bass: "Piotr Matyjasik",
  drums: "John Bonham",
};

console.log(band.hasOwnProperty("drums"));
console.log(Object.keys(band));
console.log(Object.values(band));

for (let job in band) {
  console.log(`On ${job}, it's ${band[job]}!`);
}

const { vocals, guitar, bass, drums } = band;
console.log(guitar);
console.log(bass);

function sings({ vocals }) {
  return `${vocals} sings!`;
}

console.log(sings(band));*/

//classes

/*class Pizza {
  constructor(pizzaSize) {
    this.size = pizzaSize;
    this.crust = "original";
  }
  getCrust() {
    return this.crust;
  }
  setCrust(pizzaCrust) {
    this.crust = pizzaCrust;
  }
}*/

/*
//child class
class SpecialtyPizza extends Pizza {
  constructor(pizzaSize) {
    super(pizzaSize);
    this.type = "the Works";
  }
  slice() {
    console.log(`Our ${this.type} ${this.size} pizza has 8 slices`);
  }
}

const mySpecialty = new SpecialtyPizza("medium");
mySpecialty.slice();*/

/*
//factory function for object 
function pizzaFactory(pizzaSize) {
  const crust = "original";
  const size = pizzaSize;
  return {
    bake: () => console.log(`Baking a ${size} ${crust} crust pizza.`),
  };
}

const myPizza = pizzaFactory("small");
myPizza.bake();*/

//JSON - JS Object Notation

/*const myObj = {
  name: "Piotr",
  hobbies: ["play", "learn", "watch movies"],
  hello: function () {
    console.log("Hello!");
  },
};

console.log(myObj);
console.log(myObj.name);
myObj.hello();
console.log(typeof myObj);

const sendJSON = JSON.stringify(myObj);
console.log(sendJSON);
console.log(typeof sendJSON);
console.log(sendJSON);

const receiveJSON = JSON.parse(sendJSON);
console.log(receiveJSON);*/

/*const makeError = () => {
  let i = 1;
  while (i <= 5) {
    try {
      if (i % 2 !== 0) {
        throw new Error("Odd number");
      }
      console.log("Even number");
    } catch (err) {
      console.error(err.stack);
    } finally {
      console.log("...finally");
      i++;
    }
  }
};
makeError();*/

//Document Object Model
/*
const view1 = document.getElementById("view1");
console.log(view1);
const view2 = document.querySelector("#view2");
console.log(view2);

view1.style.display = "flex";
view2.style.display = "flex";

const views = document.getElementsByClassName("view");
console.log(views);

const sameViews = document.querySelectorAll(`.view`);
console.log(sameViews);

const divs = view1.querySelectorAll("div");
console.log(divs);
const sameDivs = view1.getElementsByTagName("div");
console.log(sameDivs);
const evenDivs = view1.querySelectorAll("div:nth-of-type(2n)");
console.log(evenDivs);

for (let i = 0; i < evenDivs.length; i++) {
  evenDivs[i].style.backgroundColor = "darkblue";
  evenDivs[i].style.width = "200px";
  evenDivs[i].style.height = "150px";
}

const navText = document.querySelector("nav h1");
console.log(navText);
navText.textContent = "Hello World!";
const navbar = document.querySelector("nav");
navbar.innerHTML = `<h1>Hello!</h1> <p> This should aling right.`;
console.log(navbar);
navbar.style.justifyContent = "flex-between";

console.log(evenDivs[0]);
console.log(evenDivs[0].parentElement);
console.log(evenDivs[0].parentElement.children);
console.log(evenDivs[0].parentElement.childNodes);
console.log(evenDivs[0].parentElement.hasChildNodes());
console.log(evenDivs[0].parentElement.lastChild);
console.log(evenDivs[0].parentElement.lastElementChild);
console.log(evenDivs[0].parentElement.firstChild);
console.log(evenDivs[0].parentElement.firstElementChild);
console.log(evenDivs[0].nextSibling);
console.log(evenDivs[0].nextElementSibling);
console.log(evenDivs[0].previousSibling);
console.log(evenDivs[0].previousElementSibling);

view1.style.display = "flex";
view2.style.display = "flex";
view2.style.flexDirection = "row";
view2.style.flexWrap = "wrap";
view2.style.margin = "10px";

while (view2.lastChild) {
  view2.lastChild.remove();
}
const createDivs = (parent, iter) => {
  const newDiv = document.createElement("div");
  newDiv.textContent = iter;
  newDiv.style.backgroundColor = "#000";
  newDiv.style.width = "100px";
  newDiv.style.height = "100px";
  newDiv.style.margin = "10px";
  newDiv.style.display = "flex";
  newDiv.style.justifyContent = "center";
  newDiv.style.alignItems = "center";
  parent.append(newDiv);
}*/
/*createDivs(view2, 10);*/
/*
for (let i = 1; i <= 12; i++) {
  createDivs(view2, i);
}*/

//Web Storage API

/*
const myArray = ["eat", "sleep", "code"];
const myObj = {
  name: "Piotr",
  hobbies: ["eat", "sleep", "code"],
  logName: function () {
    console.log(this.name);
  },
};

localStorage.setItem("mylocalStore", JSON.stringify(myArray));
localStorage.removeItem("mylocalStore")
localStorage.clear()
const key = localStorage.key(0);
const storeLength = localStorage.length;

const mylocalData = JSON.parse(localStorage.getItem("mylocalStore"));

console.log(mylocalData);
console.log(key);
console.log(storeLength);*/

//Modules

/*
import playGuitar from "./guitars.js";
console.log(playGuitar());
import { plucking as pluck, shredding as shred } from "./guitars.js";
console.log(pluck());
console.log(shred());
console.log(`My brother likes to ${pluck()} and ${shred()}`);*/

//Modules
/*import * as Guitars from "./guitars.js";
import User from "./user.js";
const me = new User("email@email.com", "Piotr");
console.log(Guitars.playGuitar());
console.log(me);
console.log(me.greeting());*/

//Higher order functions - takes one or more functions as an argument or returns a func as the result
/*
import { posts } from "./posts.js";

//forEach
posts.forEach((post) => {
  console.log(post);
});
console.clear();

const filteredPosts = posts.filter((post) => {
  return post.userId === 9;
});
console.log(filteredPosts);

const mappedPosts = filteredPosts.map((post) => {
  return post.id * 100;
});
console.log(mappedPosts);

const reducedPostsValue = mappedPosts.reduce((sum, post) => {
  return sum + post;
});
console.log(reducedPostsValue);
*/

//FETCH API - Callbacks, Promises, Thenables and Async/Await

// Callbacks and "callback hell"

/*function firstFunc(parameters, Callback) {
  //do stuff
  Callback()
}

firstFunc(para, function() {
  secondFunc(para, function() {
    thirdFunc(para, function() {
      
    })
  })
})*/

//Promises
//3 states: Pending, fulfilled, rejected

/*const myPromise = new Promise((resolve, reject) => {
  const error = false;
  if (!error) {
    resolve("Yes, resolved the promise!");
  } else {
    reject("No! Rejected the promise");
  }
});

myPromise
  .then((value) => {
    return value + 1;
  })
  .then((newValue) => {
    console.log(newValue);
  })
  .catch((err) => {
    console.error(err);
  });

const myNextPromise = new Promise((resolve, reject) => {
  setTimeout(function () {
    resolve("myNextPromise resolved!");
  }, 3000);
});

myNextPromise.then((value) => {
  console.log(value);
});
myPromise.then((value) => {
  console.log(value);
});*/

//Pending promise

/*const users = fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    data.forEach((user) => {
      console.log(user);
    });
  });

console.log(users);*/

//Async and await

/*const myUsers = {
  userList: [],
};

const myCoolFunction = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const jsonUserData = await response.json();
  return jsonUserData;
};

myCoolFunction();

const anotherFunct = async () => {
  const data = await myCoolFunction();
  console.log(data);
};

anotherFunct();*/

//DadJoke
/*const getDadJoke = async () => {
  const response = await fetch("https://icanhazdadjoke.com/", {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  });
  const jsonJokeData = await response.json();

  console.log(jsonJokeData);
};

getDadJoke();*/

//Post the data

/*const jokeObj = {
  id: "ykb2TSKRSnb",
  joke: "Why are giraffes so slow to apologize? Because it takes them a long time to swallow their pride.",
};

const postData = async (jokeObj) => {
  const response = await fetch("https://httpbin.org/post", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(jokeObj),
  });
  const jsonResponse = await response.json();

  console.log(jsonResponse);
};

postData(jokeObj);*/

//REGEX - ale to nie zadziała, bo mam inny HTML

/*document.getElementById("phoneNum").addEventListener("input", (event) => {
  const REGEX = /^\(?(\d{3})\)?[-. ]?(\d{3})\)[-. ]?(\d{3})$/g;
  const input = document.getElementById("phoneNum");
  const format = document.querySelector(".phoneFormat");
  const phone = input.value;
  const found = regex.test(phone);
  if (!found && phone.length) {
    input.classList.add("invalid");
    format.classList.add("block");
  } else {
    input.classList.remove("invalid");
    format.classList.remove("block");
  }
});

document.getElementById("phoneForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const input = document.getElementById("phoneNum");
  const regex = /[()-. ]/g;
  const savedPhoneNum = input.value.replaceAll(regex, "");
  console.log(savedPhoneNum);
});*/
