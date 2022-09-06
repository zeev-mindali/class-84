const students = ["zeev", "amital", "Shmor", "zeev", "Zchor", "zeev"];

//map -> iterate on entire collection
students.map((item) => console.log(item));
//"zeev", "amita", "Shmor", "zeev", "Zchor", "zeev"

//filter -> get only what we need חתך
let filtteredUsers = students.filter(
  (item) => item === "zeev" || item === "amital"
);
console.log(filtteredUsers[0]);
//"zeev"
filtteredUsers.map((item) => console.log(item));
//"zeev","amital","zeev","zeev"
