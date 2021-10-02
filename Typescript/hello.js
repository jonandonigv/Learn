console.log("hello world");
function greet(person, date) {
    console.log("Hello " + person + ", today is " + date + "!");
}
greet("Brendan", new Date());
function greet2(person, date) {
    console.log("Hello " + person + ", today is " + date.toDateString() + "!");
}
greet2("Maddison", new Date());
