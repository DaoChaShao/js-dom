export const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
export const randomFloat = (min, max) => Math.random() * (max - min) + min;
export const randomOption = (arr) => arr[Math.floor(Math.random() * arr.length)];

export function additionOld(a, b) {
    return a + b;
}

export const additionNew = (a, b) => a + b;

export const welcomeLink = () => alert("Link: Hello, World!");
export const welcomeButton = () => alert("Button: Hello, World!");

export function inserter(list, text) {
    const oNode = document.createTextNode(text.value)
    const oItem = document.createElement("li")

    oItem.appendChild(oNode)
    // Add the node to the top of the list
    list.insertBefore(oItem, list.firstElementChild)
    // Add the node to the bottom of the list
    // list.appendChild(oItem)
    text.value = ""
}

export function removeFirst(list) {
    // remove the first item
    list.removeChild(list.firstElementChild)
}

export function removeLast(list) {
    // remove the last item
    list.removeChild(list.lastElementChild)
}

export function copy(lists, list) {
    // copy the list
    // deep copy
    lists.appendChild(list.cloneNode(true))
}

export function replace(label, input, length) {
    label.textContent = input.value
    input.value = ""
    // recalculate the length
    getLength(length, input);
}

export function getLength(length, input) {
    length.textContent = input.value.length.toString()
}

export function randomColour(category = "rgb") {
    switch (category) {
        case "rgb":
            const r = Math.floor(Math.random() * 256);
            const g = Math.floor(Math.random() * 256);
            const b = Math.floor(Math.random() * 256);
            return `rgb(${r}, ${g}, ${b})`;
        case "hex":
            const hex = Math.floor(Math.random() * 16777215).toString(16);
            return `#${hex}`;
        default:
            return `${category} is not supported.`;
    }
}

export function colourChange(box, colour, width, height) {
    // oColourBox.style.backgroundColor = "#174689"
    box.style.cssText = `background-color: ${colour}; width: ${width}px; height: ${height}px;`
}

export function moveIn(box, colour) {
    box.style.backgroundColor = colour
}

export function moveOut(box, colour) {
    box.style.backgroundColor = colour
}

export function pressedKey(e, keyShow) {
    if (e.keyCode === 38 || e.keyCode === 87) {
        keyShow.innerText = "Up";
    } else if (e.keyCode === 39 || e.keyCode === 68) {
        keyShow.innerText = "Right";
    } else if (e.keyCode === 40 || e.keyCode === 83) {
        keyShow.innerText = "Down";
    } else if (e.keyCode === 37 || e.keyCode === 65) {
        keyShow.innerText = "Left";
    } else {
        keyShow.innerText = `KeyCode: ${e.keyCode}`;
    }
}

export function imageChanger(images) {
    const index = Math.floor(Math.random() * images.length);
    const path = images[index];
    const alt = path.split("/").pop().split("-")[1].split(".")[0];
    return {index, path, alt};
}

export function timeShow(now) {
    const hour = now.getHours();
    const minute = now.getMinutes();
    const second = now.getSeconds();
    return `${hour}:${minute}:${second}`;
}

export function nameSelector(names) {
    const randIndex = Math.floor(Math.random() * names.length);
    const randName = names[randIndex];
    return {randIndex, randName};
}

const Gender = Object.freeze({
    MALE: "Male",
    FEMALE: "Female",
});

const GENDERS = ["Male", "Female"]

export function commentItemCreator({avatar, name, gender, age, level, email, city, phone, comment, time}) {
    const oObjGroup = document.querySelector("#comment-item")
    const oBasic = document.createElement("div")
    const oContact = document.createElement("div")
    const oCaption = document.createElement("div")

    const oAvatar = document.createElement("img");
    oAvatar.src = avatar;
    oAvatar.alt = name;
    oAvatar.className = "avatar";
    oBasic.appendChild(oAvatar);

    const oName = document.createElement("h3");
    oName.textContent = name;
    oBasic.appendChild(oName);

    const oGender = document.createElement("p");
    oGender.textContent = gender;
    oBasic.appendChild(oGender);

    const oAge = document.createElement("p");
    oAge.textContent = `Age: ${age}`;
    oBasic.appendChild(oAge);

    const oLevel = document.createElement("p");
    oLevel.textContent = `Level: ${level}`;
    oBasic.appendChild(oLevel);

    const oEmail = document.createElement("p");
    oEmail.textContent = `Email: ${email}`;
    oContact.appendChild(oEmail);

    const oCity = document.createElement("p");
    oCity.textContent = `City: ${city}`;
    oContact.appendChild(oCity);

    const oPhone = document.createElement("p");
    oPhone.textContent = `Phone: ${phone}`;
    oContact.appendChild(oPhone);

    const oComment = document.createElement("p");
    oComment.textContent = `Comment: ${comment}`;
    oCaption.appendChild(oComment);

    const oTime = document.createElement("p");
    oTime.textContent = `Time: ${time}`;
    oCaption.appendChild(oTime);

    oObjGroup.appendChild(oBasic);
    oObjGroup.appendChild(oContact);
    oObjGroup.appendChild(oCaption);

    return oObjGroup;
}