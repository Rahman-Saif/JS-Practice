let id = (id) => document.getElementById(id);

let classes = (classes) => document.getElementsByClassName(classes);

let username = id("username"),
    form = id("form"),
    email = id("email"),
    password = id("password"),
    errorMsg = classes("error"),
    successIcon = classes("success-icon"),
    failureIcon = classes("failure-icon");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    engine(username, 0, "Username can't be blank");
    engine(email, 1, "Email can't be blank");
    engine(password, 2, "Password can't be blank");
});

let engine = (nam, i, msg) => {
    if (nam.value.trim() === "") {
        errorMsg[i].innerHTML = msg;
        nam.style.border = "2px solid red";

        successIcon[i].style.opacity = "0";
        failureIcon[i].style.opacity = "1";
    } else {
        errorMsg[i].innerHTML = "";
        nam.style.border = "2px solid green";
        successIcon[i].style.opacity = "1";
        failureIcon[i].style.opacity = "0";
    }
};
