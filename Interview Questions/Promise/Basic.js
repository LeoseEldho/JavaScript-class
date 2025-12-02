const GitHub = "https://api.github.com/users/akshaymarch7";
const user = fetch(GitHub);
console.log(user);
console.log(user);

user.then((data) => console.log(data));