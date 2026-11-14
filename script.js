
document.write("Welcome to Online Examination System");
function login() {
    let name = document.getElementById("name").value;
    document.getElementById("msg").innerHTML = "Welcome " + name;
    function result() {
    let a = document.querySelector('input[name="q1"]:checked');
    let b = document.querySelector('input[name="q2"]:checked');
    if (a && b) {
        let score = Number(a.value) + Number(b.value);
        document.getElementById("msg").innerHTML =
            "Score: " + score + "/2";
    }
}
}