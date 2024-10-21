let data = {};

function showSignIn() {
  document.getElementById("container1").style.display = "none";
  document.getElementById("container2").style.display = "block";
}
function showSignUp() {
  document.getElementById("container2").style.display = "none";
  document.getElementById("container1").style.display = "block";
}

let signup = document
  .getElementById("signupbutton")
  .addEventListener("click", function (e) {
    e.preventDefault();

    let email = document.getElementById("email").value;
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirm").value;

    if (password !== confirmPassword) {
      alert("password do not match");
      return;
    }
    data[username] = {
      email: email,
      password: password
    };
    alert('signup successful')
    console.log("sign up successfull", data);
    
    showSignIn();
  });
  let signin = document.getElementById("signinbutton").addEventListener("click", function (e) {
    e.preventDefault();

    let username = document.getElementById("user").value;
    let password = document.getElementById("pass").value;

    if(data[username]){
        if(data[username].password === password){
            alert("Sign In successfull")
            console.log(data[username]);            
        }
        else{
            alert("incorrect password")
        }
    }
    else{
        alert("user not found")
    }
  })
