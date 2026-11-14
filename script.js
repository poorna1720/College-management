
document.write("Welcome to Online Examination System");
function login() {
    let name = document.getElementById("name").value;
    document.getElementById("msg").innerHTML = "Welcome " + name;
}