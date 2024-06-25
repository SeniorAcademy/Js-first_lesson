////GET
fetch("https://reqres.in/api/users?page=1")
  .then((response) => response.json()) // link response beraber olur
  .then((jsonData) => {
    const info = jsonData.data.map((item) => {
      return `
        <li class="card-container">
            <div class="image-container">
              <img class="imgs" src="${item.avatar}">

            </div>
             <div class="name-container">
                 <span class="firstName">${item.first_name}</span>
                 <span class="lastName">${item.last_name}</span>

             </div>
             <p class="email">${item.email}</p>
            </li>
        `;
    });
    document.querySelector(".list-container").innerHTML = info.join(""); //arrayleri join edir
  });


  

