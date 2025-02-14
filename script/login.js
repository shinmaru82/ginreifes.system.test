document.addEventListener("DOMContentLoaded", function () {
    const correctPassword = "@Ginreifes58";

    const loginBtn = document.querySelector(".login-btn");
    const passwordInput = document.getElementById("password");

    function handleLogin() {
        const inputPassword = passwordInput.value;

        let errorMessage = document.querySelector(".error-message");
        if (!errorMessage) {
            errorMessage = document.createElement("p");
            errorMessage.classList.add("error-message");
            errorMessage.style.color = "red";
            errorMessage.style.textAlign = "center";
            errorMessage.style.marginTop = "16px";
            document.querySelector(".login-wrap").appendChild(errorMessage);
        }

        if (inputPassword === correctPassword) {
            sessionStorage.setItem("loggedIn", "true"); // セッション記録
            errorMessage.textContent = "";
            window.location.href = "index.html";
        } else {
            errorMessage.textContent = "パスワードが間違っています。";
        }
    }

    // ログインボタンのクリック処理
    loginBtn.addEventListener("click", function (event) {
        event.preventDefault();
        handleLogin();
    });

    // Enterキー対応
    passwordInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            handleLogin();
        }
    });
});
