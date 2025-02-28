const qrText = document.getElementById("qr_text");
const Sizes = document.getElementById("sizes");
const generatebtn = document.getElementById("generatebtn");
const downloadbtn = document.getElementById("downloadbtn");
const qrcontainer = document.querySelector(".qr_body");

generatebtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (qrText.value.length > 0) {
    generateQRcode();
  } else {
    alert("Enter the text or URL TO GENERATE YOUR QR CODE");
  }
});
Sizes.addEventListener("change", (e) => {
  if (qrText.value.length > 0) {
    generateQRcode();
  }
});
downloadbtn.addEventListener("click", () => {
  let img = document.querySelector(".qr_body img");
  if (img !== null) {
    let imgAtrr = img.getAttribute("src");
    downloadbtn.setAttribute("href", imgAtrr);
  } else {
    downloadbtn.setAttribute(
      "href",
      `{document.queryseletor('canvas').toDataURL()}`
    );
  }
});

function generateQRcode() {
  let size = Sizes.value; // Get the selected size

  // Clear previous QR code before generating a new one
  qrcontainer.innerHTML = "";

  new QRCode(qrcontainer, {
    text: qrText.value,
    width: size,
    height: size,
    colorDark: "#000",
    colorLight: "#fff",
  });
}
