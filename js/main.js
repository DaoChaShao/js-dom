import {
    additionOld,
    colourChange,
    commentItemCreator,
    copy,
    getLength,
    imageChanger,
    inserter,
    moveIn,
    moveOut,
    nameSelector,
    pressedKey,
    randomColour,
    randomFloat,
    randomInt,
    removeFirst,
    removeLast,
    replace,
    startCountdown,
    timeShow,
    welcomeButton,
    welcomeLink,
} from "./utils.js";
import {faker, fakerZH_CN} from "https://esm.sh/@faker-js/faker"

const DRINK = ["assets/drink/beverage-cola.png", "assets/drink/beverage-grape.png", "assets/drink/beverage-orange.png", "assets/drink/beverage-soda.png"]
const FOOD = ["assets/food/icecream-grape.png", "assets/food/icecream-mint.png", "assets/food/icecream-soda.png", "assets/food/icecream-strawberry.png"]
const PLANT = ["assets/plant/tree-darkgreen.png", "assets/plant/tree-lightgreen.png", "assets/plant/tree-red.png", "assets/plant/tree-yellow.png"]

function main() {
    const a = parseFloat(randomFloat(1, 10).toFixed(2));
    const b = parseFloat(randomFloat(1, 10).toFixed(2));
    const result = parseFloat(additionOld(a, b).toFixed(2));
    const oAddition = document.getElementById("addition");
    oAddition.innerHTML = `${a} + ${b} = ${result}`;

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
        const {path, alt} = imageChanger(DRINK);
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
    const {index, path, alt} = imageChanger(DRINK);
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

    let countdown;
    const oTimeCountdown = document.querySelector("#time-countdown");
    const oTimeMinute = document.createElement("input");
    oTimeMinute.type = "number";
    oTimeMinute.min = "0";
    oTimeMinute.max = "59";
    oTimeMinute.value = "0";
    oTimeCountdown.appendChild(oTimeMinute);
    const oTimeSecond = document.createElement("input");
    oTimeSecond.type = "number";
    oTimeSecond.min = "0";
    oTimeSecond.max = "59";
    oTimeSecond.value = "10";
    oTimeCountdown.appendChild(oTimeSecond);
    const oCountMinute = document.createElement("label");
    oTimeCountdown.appendChild(oCountMinute);
    const oCountSecond = document.createElement("label");
    oTimeCountdown.appendChild(oCountSecond);
    const oTimeButton = document.createElement("button");
    oTimeButton.type = "button";
    oTimeButton.textContent = "Countdown";
    oTimeCountdown.appendChild(oTimeButton);
    oTimeButton.addEventListener("click", _ => {
        const targetTime = new Date();
        targetTime.setMinutes(targetTime.getMinutes() + parseInt(oTimeMinute.value));
        targetTime.setSeconds(targetTime.getSeconds() + parseInt(oTimeSecond.value));

        oTimeButton.disabled = true;
        startCountdown(countdown, targetTime, oCountMinute, oCountSecond, oTimeButton);
    });

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
        s = (s + 1) % DRINK.length;
        if (s === DRINK.length) {
            s = 0;
        }
        // console.log(s);
        const {path, alt} = imageChanger(DRINK);
        const oItem = document.querySelector(`.slider-time-list li:nth-child(${s + 1})`);
        oTimeImageDiv.src = path;
        oTimeImageDiv.alt = alt;
        oTimeImageDiv.title = `This is a ${alt}`;
        oTimeContent.textContent = alt;
        // console.log(oItem)
        const oItemActive = document.querySelector(".slider-time-list .time-active");
        oItemActive.classList.remove("time-active");
        oItem.classList.add("time-active");
    }, 1000);

    const oFaker = document.querySelector("#faker");
    const oFakerStart = document.createElement("button");
    oFakerStart.type = "button";
    oFakerStart.textContent = "Start";
    oFaker.appendChild(oFakerStart);
    const oFakerStop = document.createElement("button");
    oFakerStop.type = "button";
    oFakerStop.textContent = "Stop";
    oFaker.appendChild(oFakerStop);
    const oFakerLabel = document.createElement("label");
    oFaker.appendChild(oFakerLabel);
    const NAMES = [];
    for (let i = 0; i < 3; i++) {
        // NAMES.push(faker.person.firstName());
        NAMES.push(fakerZH_CN.person.fullName());
    }
    console.log(NAMES);
    let timerFaker;
    let randIndex;
    oFakerStart.addEventListener("click", _ => {
        timerFaker = setInterval(_ => {
            const result = nameSelector(NAMES);
            randIndex = result.randIndex;
            oFakerLabel.textContent = result.randName;
        }, 100);

        if (NAMES.length === 1) {
            // oFakerStart.disabled = true;
            // oFakerStop.disabled = true;
            oFakerStart.disabled = oFakerStop.disabled = true;
        }
    }, false);
    oFakerStop.onclick = _ => {
        clearInterval(timerFaker);
        NAMES.splice(randIndex, 1);
        console.log(NAMES.length);
    }

    const oCommentShow = document.querySelector("#event-key-show");
    const oCommentInput = document.querySelector("#event-key-input");
    const oCommentButton = document.querySelector("#event-key-button");
    const oCommentLabel = document.querySelector("#event-key-label");
    oCommentButton.addEventListener("click", _ => {
        const oComment = document.createElement("label");
        oCommentShow.appendChild(oComment);
        if (oCommentInput.value.trim() === "") {
            oComment.textContent = "Please enter valid comment!";
        } else {
            oComment.textContent = oCommentLabel.textContent = oCommentInput.value.trim();
        }
        oCommentInput.value = "";
    });
    oCommentInput.addEventListener("keyup", (e) => {
        if (e.key === "Enter") {
            oCommentLabel.textContent = oCommentInput.value.trim();
            oCommentInput.value = "";
        }
    })

    const oCommentZone = document.querySelector("#comment-item");
    const oZoneCreateButton = document.createElement("button");
    oZoneCreateButton.type = "button";
    oZoneCreateButton.textContent = "Comment";
    oCommentZone.appendChild(oZoneCreateButton);
    oZoneCreateButton.addEventListener("click", _ => {
        const data = {
            // https://fakerjs.dev/api/
            avatar: faker.image.avatarGitHub(),
            name: faker.person.fullName(),
            gender: faker.person.sex(),
            age: faker.number.bigInt({min: 18, max: 65}),
            level: faker.number.bigInt({min: 1, max: 12}),
            email: faker.internet.email(),
            city: faker.location.city(),
            phone: faker.phone.number({style: 'national'}),
            comment: faker.lorem.paragraphs(),
            time: faker.date.between({from: "2000-01-01", to: Date.now()}),
        };
        commentItemCreator(data);
    })

    const oTabList = document.querySelectorAll("#tab-list li");
    for (let i = 0; i < oTabList.length; i++) {
        oTabList[i].addEventListener("mouseenter", _ => {
            oTabList.forEach(item => {
                item.classList.remove("tab-list-active");
            })
            oTabList[i].classList.add("tab-list-active");

            const oTabShow = document.querySelectorAll("#tab-show li img");
            if (oTabList[i].textContent === "Drink") {
                oTabShow.forEach((image, index) => {
                    image.src = DRINK[index]
                    image.alt = DRINK[index].split("/").pop().split("-")[1].split(".")[0];
                });
            } else if (oTabList[i].textContent === "Food") {
                oTabShow.forEach((image, index) => {
                    image.src = FOOD[index]
                    image.alt = FOOD[index].split("/").pop().split("-")[1].split(".")[0];
                });
            } else if (oTabList[i].textContent === "Plant") {
                oTabShow.forEach((image, index) => {
                    image.src = PLANT[index]
                    image.alt = PLANT[index].split("/").pop().split("-")[1].split(".")[0];
                });
            }
        });
    }

    const oMain = document.querySelector("#main");
    const oTopButton = document.querySelector("#top");
    const oHeader = document.querySelector("#header");
    // CSS variable getter
    const oRoot = document.documentElement;
    const headerHeight = getComputedStyle(oRoot).getPropertyValue("--header-height").trim();
    // console.log(headerHeight);
    oMain.addEventListener("scroll", e => {
        // console.log(e.target.scrollTop);
        if (e.target.scrollTop > 100) {
            oTopButton.style.display = "block";
            oTopButton.addEventListener("click", _ => {
                oMain.scrollTo({top: 0, behavior: "smooth"});
            });
            oHeader.style.top = "0";
        } else {
            oTopButton.style.display = "none";
            oHeader.style.top = headerHeight;
        }
    });
}

main()