function main() {
    const oAutoCloseShow = document.querySelector("#auto-close-show");
    let autoSeconds = 5

    const timer = setInterval(_ => {
        autoSeconds--;
        oAutoCloseShow.textContent = `This page will close in ${autoSeconds} seconds`;

        if (autoSeconds < 0) {
            clearInterval(timer);
            location.href = "../index.html"
        }
    }, 1000);
}

main();