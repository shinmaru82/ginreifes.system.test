document.addEventListener("DOMContentLoaded", function () {
    if (sessionStorage.getItem("loggedIn") !== "true") {
        window.location.href = "login.html"; // 未ログインならログインページへ
    }
});
