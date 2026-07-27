const inputSlider = document.getElementById("inputSlider");
const sliderValue = document.getElementById("sliderValue");
const passBox = document.getElementById("passBox");

const lowercase = document.getElementById("lowercase");
const uppercase = document.getElementById("uppercase");
const numbers = document.getElementById("numbers");
const symbols = document.getElementById("symbols");

const genBtn = document.getElementById("genBtn");
const copyIcon = document.getElementById("copyIcon");

sliderValue.textContent = inputSlider.value;

inputSlider.addEventListener("input", () => {
    sliderValue.textContent = inputSlider.value;
});

const lowerChars = "abcdefghijklmnopqrstuvwxyz";
const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numberChars = "0123456789";
const symbolChars = "!@#$%^&*()_+-=";

function generatePassword() {

    let allChars = "";

    if (lowercase.checked) allChars += lowerChars;
    if (uppercase.checked) allChars += upperChars;
    if (numbers.checked) allChars += numberChars;
    if (symbols.checked) allChars += symbolChars;

    if (allChars === "") {
        alert("Select at least one option");
        return "";
    }

    let password = "";

    for (let i = 0; i < inputSlider.value; i++) {
        const randomIndex =
            Math.floor(Math.random() * allChars.length);

        password += allChars[randomIndex];
    }

    return password;
}

genBtn.addEventListener("click", () => {
    passBox.value = generatePassword();
});

copyIcon.addEventListener("click", () => {

    if (passBox.value.length > 0) {

        navigator.clipboard.writeText(passBox.value);

        copyIcon.innerText = "check";

        setTimeout(() => {
            copyIcon.innerText = "content_copy";
        }, 2000);
    }
});