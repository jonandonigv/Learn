console.log("hello world");

function hello(person: string, date: Date) {
    console.log(`Hello ${person}, today is ${date}!`);
}

hello("Brendan", new Date());

function hello2(person, date) {
    console.log("Hello " + person + ", today is " + date.toDateString() + "!");
}

hello2("Maddison", new Date());