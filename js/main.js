import {
    additionOld,
    colourChange,
    copy,
    getLength,
    imageChanger,
    inserter,
    moveIn,
    moveOut,
    pressedKey,
    randomColour,
    randomFloat,
    randomInt,
    removeFirst,
    removeLast,
    replace,
    timeShow,
    welcomeButton,
    welcomeLink,
} from "./utils.js";
import {faker} from "https://esm.sh/@faker-js/faker"

const IMAGES = ["assets/img-cola.png", "assets/img-grape.png", "assets/img-orange.png", "assets/img-soda.png"]

function main() {
    const a = parseFloat(randomFloat(1, 10).toFixed(2));
    const b = parseFloat(randomFloat(1, 10).toFixed(2));
    const result = parseFloat(additionOld(a, b).toFixed(2));
    const oMain = document.getElementById("addition");
    oMain.innerHTML = `${a} + ${b} = ${result}`;

    const oBox = document.querySelector("#box");
    oBox.innerText = "Container";

    const oWelcomeLink = document.querySelector("#welcome-link");
    oWelcomeLink.addEventListener("click", welcomeLink);

    const oWelcomeButton = document.querySelector("#welcome-button");
    oWelcomeButton.addEventListener("click", welcomeButton);

    const oTextDiv = document.querySelector("#text");
    const oStrong = document.createElement("strong");
    const oText = document.createTextNode("Hello, World!");
    oStrong.appendChild(oText);
    oTextDiv.appendChild(oStrong);
    console.log(oTextDiv);

    const oList = document.querySelector("#list");
    const oInput = document.querySelector("#add-input");
    const oButton = document.querySelector("#add-add");
    oButton.addEventListener("click", _ => {
        inserter(oList, oInput)
    });
    const oRemoveFirst = document.querySelector("#remove-first");
    oRemoveFirst.addEventListener("click", _ => {
        removeFirst(oList);
    });
    const oRemoveLast = document.querySelector("#remove-last");
    oRemoveLast.addEventListener("click", _ => {
        removeLast(oList)
    });

    const oLists = document.querySelector("#lists");
    const oCopy = document.querySelector("#copy-list");
    oCopy.addEventListener("click", _ => {
        copy(oLists, oList)
    });

    const oReplaceLabel = document.querySelector("#replace-label");
    const oReplaceInput = document.querySelector("#replace-input");
    const oReplaceButton = document.querySelector("#replace-button");
    const oReplace = document.querySelector("#replace");
    const oReplaceLength = document.createElement("span");
    oReplaceLength.id = "input-length";
    oReplaceLength.textContent = "0";
    oReplace.appendChild(oReplaceLength);
    oReplaceButton.addEventListener("click", _ => {
        replace(oReplaceLabel, oReplaceInput, oReplaceLength)
    });
    oReplaceInput.addEventListener("keyup", _ => {
        getLength(oReplaceLength, oReplaceInput)
    });

    const oColourBox = document.querySelector("#colour-box");
    const oColour = document.querySelector("#colour");
    const oColourLabel = document.createElement("label");
    oColour.appendChild(oColourLabel);
    const oColourButton = document.querySelector("#change");
    oColourButton.addEventListener("click", _ => {
        const colour = randomColour("hex");
        const width = randomInt(50, 200);
        const height = randomInt(50, 200);
        oColourLabel.textContent = colour;
        colourChange(oColourBox, colour, width, height)
    })
    oColourBox.addEventListener("mouseover", () => {
        const colour = randomColour("hex");
        moveIn(oColourBox, colour);
    });
    oColourBox.addEventListener("mouseout", () => {
        const colour = randomColour("hex");
        moveOut(oColourBox, colour);
    })

    const oEvent = document.getElementById("event");
    const oEventLabel = document.createElement("label");
    oEventLabel.textContent = "You pressed the key: ";
    oEvent.appendChild(oEventLabel);
    const oKeyShow = document.createElement("span");
    const oKeyStrong = document.createElement("strong");
    oKeyShow.id = "e-result";
    oKeyShow.innerText = "None";
    oKeyStrong.appendChild(oKeyShow)
    oEvent.appendChild(oKeyStrong);
    window.addEventListener(
        "keydown",
        (e) => {
            pressedKey(e, oKeyShow)
        },
        false
    );

    const oUser = document.querySelector("#user");
    const oUserLabel = document.createElement("label");
    oUser.appendChild(oUserLabel);
    oUserLabel.textContent = "User Agent: ";
    const oAgentShow = document.createElement("span");
    oUser.appendChild(oAgentShow);
    oAgentShow.textContent = navigator.userAgent;


    const oDivImg = document.querySelector("#image");
    const oImgButton = document.createElement("button");
    oImgButton.type = "button";
    oImgButton.textContent = "Change Image";
    oDivImg.appendChild(oImgButton);
    const oImg = document.createElement("img");
    oDivImg.appendChild(oImg);
    oImgButton.addEventListener("click", _ => {
        const {path, alt} = imageChanger(IMAGES);
        oImg.src = path;
        oImg.alt = alt;
        oImg.title = `This is a ${alt}`;
    })

    const oClassButton = document.querySelector("#class-name-button");
    const oClassShow = document.querySelector("#class-name-show");
    oClassButton.addEventListener("click", _ => {
        // oClassShow.className = "class-box";
        oClassShow.classList.add("class-box");
    })
    const oClassDiv = document.querySelector("#class-name");
    const oClassRemove = document.createElement("button")
    oClassRemove.type = "button";
    oClassRemove.textContent = "Remove Class";
    oClassDiv.appendChild(oClassRemove);
    oClassRemove.addEventListener("click", _ => {
        oClassShow.classList.remove("class-box");
    })
    const oClassToggle = document.createElement("button");
    oClassToggle.type = "button";
    oClassToggle.textContent = "Toggle Class";
    oClassDiv.appendChild(oClassToggle);
    oClassToggle.addEventListener("click", _ => {
        oClassShow.classList.toggle("class-box");
    })

    const oSliderImage = document.querySelector("#slider-image");
    const oSliderContent = document.querySelector("#slider-content");
    const {index, path, alt} = imageChanger(IMAGES);
    oSliderImage.src = path;
    oSliderImage.alt = alt;
    oSliderContent.textContent = alt;
    const oItem = document.querySelector(`.slider-list li:nth-child(${index + 1})`);
    console.log(oItem);
    oItem.classList.add("active");

    const oHideInput = document.querySelector("#hide-input");
    const oHideButton = document.querySelector("#hide-button");
    oHideButton.addEventListener("click", _ => {
        oHideInput.type = oHideInput.type === "password" ? "text" : "password";
    })

    const oCheckAll = document.querySelector("#check-all");
    const oChecks = document.querySelectorAll("input[name='number']");
    oCheckAll.addEventListener("change", () => {
        oChecks.forEach(checkbox => {
            checkbox.checked = oCheckAll.checked;
        });
    });

    const oClickAll = document.querySelector("#click-all");
    const oClicks = document.querySelectorAll("button[name='clicks']");
    oClickAll.addEventListener("click", () => {
        const isClicked = oClicks[0].disabled;
        oClicks.forEach(button => {
            button.disabled = !isClicked;
        });
    });

    const oCusDataDivs = document.querySelectorAll("#cus-data div");
    oCusDataDivs.forEach(div => {
        console.log(div.dataset.id);
    });

    const oTimeDiv = document.querySelector("#time-now");
    let timer = setInterval(function () {
        const now = new Date();
        oTimeDiv.textContent = timeShow(now);
    }, 1000);
    console.log(timer);

    const oCountdownButton = document.querySelector("#countdown");
    let seconds = 5;
    timer = setInterval(function () {
        seconds--;
        oCountdownButton.textContent = `I am reading the agreement (${seconds})`;
        if (seconds === 0) {
            clearInterval(timer);
            oCountdownButton.disabled = false;
            oCountdownButton.textContent = "Agree";
        }
    }, 1000);

    const oTimeImageDiv = document.querySelector("#slider-time-image");
    const oTimeContent = document.querySelector("#slider-time-content");
    let s = 0;
    setInterval(function () {
        s = (s + 1) % IMAGES.length;
        if (s === IMAGES.length) {
            s = 0;
        }
        console.log(s);
        const {path, alt} = imageChanger(IMAGES);
        const oItem = document.querySelector(`.slider-time-list li:nth-child(${s + 1})`);
        oTimeImageDiv.src = path;
        oTimeImageDiv.alt = alt;
        oTimeImageDiv.title = `This is a ${alt}`;
        oTimeContent.textContent = alt;
        console.log(oItem)
        const oItemActive = document.querySelector(".slider-time-list .time-active");
        oItemActive.classList.remove("time-active");
        oItem.classList.add("time-active");
    }, 1000);

    const oFaker = document.querySelector("#faker");
    const oLabel = document.createElement("label");
    oFaker.appendChild(oLabel);
    const randomName = faker.person.fullName();
    oLabel.textContent = `Random Name: ${randomName}`;
}

main()