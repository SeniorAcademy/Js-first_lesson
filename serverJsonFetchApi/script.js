//? API - Application Programing Interface

//? CRUD

//? CREATE - POST
//? READ - GET
//? UPDATE - PUT
//? DELETE - DELETE

const baseUrl = "http://localhost:3000";

const getBtn = document.getElementById("getBtn");
const getPosts = () => {
  return fetch(baseUrl + "/posts", {
    headers: {
      "Content-Type": "application/json",
    },
    method: "GET",
  })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      return data;
    })
    .catch(err => {
      console.log("err", err);
    });
};

const res = getBtn.addEventListener("click", getPosts());
console.log(res)


const addBtn = document.getElementById("addBtn");
const form = { title: "CORAT", body: "SUMGAIT" };
const addPost = (form) => {
  return fetch(baseUrl + "/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(form),
  })
    .then(response => response.json())
    .catch(err => {
      console.log("err", err);
    });
};

addBtn.addEventListener("click", () => addPost(form));



