// ページが読み込まれたら実行される
document.addEventListener("DOMContentLoaded", function () {
    // 「新規登録はこちら」のボタンを見つける
    const signupButton = document.querySelector(".signup");
    signupButton.addEventListener("click", function (event) {
        event.preventDefault();
        alert("テストサイトなので、新規登録はできないよ。残念！");
    });

    // Twitterボタンにマウスを乗せたときに色を変える
    const twitterButton = document.querySelector(".twitter");

    twitterButton.addEventListener("mouseenter", function () {
        twitterButton.style.backgroundColor = "#1DA1F2"; // 明るめの青
    });

    twitterButton.addEventListener("mouseleave", function () {
        twitterButton.style.backgroundColor = "#55acee"; // 元の色に戻す
    });
});
