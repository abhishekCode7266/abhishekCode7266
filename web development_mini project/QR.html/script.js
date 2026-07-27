const qrText = document.getElementById("qr-text");
const sizes = document.getElementById("sizes");
const generateBtn = document.getElementById("generateBtn");
const downloadBtn = document.getElementById("downloadBtn");

const qrContainer = document.querySelector(".qr-body");

let size = sizes.value;

generateBtn.addEventListener("click", (e) => {
    e.preventDefault();
    isEmptyInput();
});

downloadBtn.addEventListener("click", () => {
    let img = document.querySelector(".qr-body img");

    if (img !== null) {
        let imgAttr = img.getAttribute("src");
        downloadBtn.setAttribute("href", imgAttr);
    } else {
        let canvas = document.querySelector(".qr-body canvas");

        if (canvas) {
            downloadBtn.setAttribute(
                "href",
                canvas.toDataURL("image/png")
            );
        }
    }
});

sizes.addEventListener("change", (e) => {
    size = e.target.value;

    if (qrText.value.length > 0) {
        generateQRCode();
    }
});

function isEmptyInput() {
    qrText.value.length > 0
        ? generateQRCode()
        : alert("Enter the text or URL to generate your QR Code");
}

function generateQRCode() {
    qrContainer.innerHTML = "";

    new QRCode(qrContainer, {
        text: qrText.value,
        width: Number(size),
        height: Number(size),
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    });
}                             