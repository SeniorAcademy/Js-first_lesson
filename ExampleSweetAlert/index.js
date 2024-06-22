const submitButton = document.querySelector(".button");
submitButton.onclick = (event) => {
 event.preventDefault();

  const firstName = document.getElementById("fname").value;
  const lastName = document.getElementById("lname").value;
  const email = document.getElementById("email").value;
  const passWord = document.getElementById("pass").value;
  const confirmPassWord = document.getElementById("cpass").value;

  localStorage.setItem("FirstName", firstName);
  localStorage.setItem("LastName", lastName);
  localStorage.setItem("Email", email);
  localStorage.setItem("Password", passWord);
  localStorage.setItem("Cpassword", confirmPassWord);

  if (firstName == "" && lastName == "" && email == "" && passWord == "" && confirmPassWord == "") {
    Swal.fire({
      title: 'Bos Buraxmaq Olmaz',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    })
  } 
  
  else {
    if (passWord.length >= 5 && passWord.length <= 25) {
      if (passWord !== confirmPassWord) {
        Swal.fire({
          title: 'Uygunsuzluq var',
          icon: 'question',
          iconHtml: '؟',
          showCancelButton: true,
          showCloseButton: true
        })
      } 
      else {
        Swal.fire({
          title: 'Tebrikler',
          width: 600,
          padding: '3em',
          color: '#716add',
          background: '#fff url(/images/trees.png)',
          backdrop: `
            rgba(0,0,123,0.4)
            url("/images/nyan-cat.gif")
            left top
            no-repeat
          `
        })
        setTimeout(() => {
          location.href = "login.html";
        }, 3000); //qeydiyyatdan 3s sonra login htmle-ye gonderecek
      }

    } else {
      Swal.fire({
      title: 'Sehvlik Var',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    })
    }
  }
};




// LOGIN
const login = document.querySelector('.login');
login.onclick = (event) => {
    event.preventDefault();
    const emailAddress = document.getElementById("emailAddress").value;
    const passWord = document.getElementById("passWord").value;

    //set  elediyimizi data-lari burda GET edirik
    const emailLogin = localStorage.getItem("Email");
    const passWordLogin = localStorage.getItem("Password");

    if( emailAddress == "" && passWord == ""){
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Bos olmaz',
            showConfirmButton: false,
            timer: 1500
          })
    }
    else
    {
        if(emailAddress == emailLogin && passWord == passWordLogin){
            Swal.fire(
                'Good job!',
                'login successful!',
                'success'
            );
            setTimeout(()=>{
                location.href='https://senior.az/';
                },2000)
        }else
        {
            Swal.fire(
                'Opps..!',
                'Something is wrong!',
                'error'
            );
        }
    };


};
