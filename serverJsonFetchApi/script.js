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


const editBtn = document.getElementById("editBtn");
const formEdit = { title: "Cenub", body: "Masally" };
const updatePost = (id, form) => {
  return fetch(baseUrl + "/posts/" + id, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(form),
  })
    .then(response => response.json())
    .then(data => {
      console.log("data", data);
      return data;
    })
    .catch(err => {
      console.log("err", err);
    });
};

editBtn.addEventListener("click",()=> updatePost(2, formEdit));


const deleteBtn = document.getElementById("deleteBtn");
const removePost = (id) => {
  return fetch(baseUrl + "/posts/" + id, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "DELETE",
  })
    .then(response => response.json())
    .then(data => {
      console.log("data", data);
      return data;
    })
    .catch(err => {
      console.log("err", err);
    });
};

deleteBtn.addEventListener("click",() => removePost(2));


// const getBtn = document.getElementById("getBtn");
// const getPosts = async () => {
//   try {
//     const response = await fetch(baseUrl + "/posts", {
//       headers: {
//         "Content-Type": "application/json",
//       },
//       method: "GET",
//     });

//     const data = await response.json();
//     console.log(data);
//     return data;
//   } catch (err) {
//     console.log("err", err);
//   }
// };
// const res = getBtn.addEventListener("click", getPosts());
// console.log(res)


// const addBtn = document.getElementById("addBtn");
// const form = { title: "CORAT", body: "SUMGAIT" };
// const addPost = async (form) => {
//   try {
//     const response = await fetch(baseUrl + "/posts", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(form),
//     });

//     const data = await response.json();
//     return data;
//   } catch (err) {
//     console.log("err", err);
//   }
// };
// addBtn.addEventListener("click", () => addPost(form));




// const editBtn = document.getElementById("editBtn");
// const formEdit = { title: "Cenub", body: "Masally" };
// const updatePost = async (id, form) => {
//   try {
//     const response = await fetch(baseUrl + "/posts/" + id, {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(form),
//     });

//     const data = await response.json();
//     console.log("data", data);
//     return data;
//   } catch (err) {
//     console.log("err", err);
//   }
// };

// editBtn.addEventListener("click",()=> updatePost(2, formEdit));



// const deleteBtn = document.getElementById("deleteBtn");
// const removePost = async (id) => {
//   try {
//     const response = await fetch(baseUrl + "/posts/" + id, {
//       headers: {
//         "Content-Type": "application/json",
//       },
//       method: "DELETE",
//     });

//     const data = await response.json();

//     console.log("data", data);

//     return data;
//   } catch (err) {
//     console.log("err", err);
//   }
// };

// deleteBtn.addEventListener("click",() => removePost(2));

