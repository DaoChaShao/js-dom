import {
    randomInt, randomFloat, randomOption,
    additionOld, additionNew,
    welcomeLink, welcomeButton,
    inserter, removeFirst, removeLast,
    copy,
    replace, getLength,
    randomColour, colourChange, moveIn, moveOut,
    pressedKey,
} from "./utilis.js";

function main() {
    const a = parseFloat(randomFloat(1, 10).toFixed(2));
    const b = parseFloat(randomFloat(1, 10).toFixed(2));
    const result = parseFloat(additionOld(a, b).toFixed(2));
    const oMain = document.getElementById("addition");
    oMain.innerHTML = `${a} + ${b} = ${result}`;

    const oWelcomeLink = document.querySelector("#welcome-link");
    oWelcomeLink.addEventListener("click", welcomeLink);

    const oWelcomeButton = document.querySelector("#welcome-button");
    oWelcomeButton.addEventListener("click", welcomeButton);

    const oTextDiv = document.querySelector("#text");
    const oStrong = document.createElement("strong");
    const oText = document.createTextNode("Hello, World!");
    oStrong.appendChild(oText);
    oTextDiv.appendChild(oStrong);

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
}

main()