//// GET
async function getUsers() {
    try {
      const response = await fetch("https://reqres.in/api/users?page=1");
      const jsonData = await response.json();
      console.log(jsonData.data);
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
      document.querySelector(".list-container").innerHTML = info.join("");
    } catch (error) {
      console.error(error);
    }
  }
  getUsers();

