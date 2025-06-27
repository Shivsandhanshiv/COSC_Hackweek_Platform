let html5QrcodeScanner;
const resultDiv = document.getElementById("result");

function startScanner() {
  html5QrcodeScanner = new Html5Qrcode("reader");
  html5QrcodeScanner.start(
    { facingMode: "environment" },
    {
      fps: 10,
      qrbox: { width: 250, height: 250 }
    },
    qrCodeMessage => {
      resultDiv.innerText = `Scanned Result: ${qrCodeMessage}`;
      stopScanner();
    },
    errorMessage => {}
  );
}

function stopScanner() {
  if (html5QrcodeScanner) {
    html5QrcodeScanner.stop().then(() => {
      html5QrcodeScanner.clear();
    }).catch(err => console.error(err));
  }
}

function scanFromFile(input) {
  if (input.files.length === 0) return;

  const file = input.files[0];
  const html5QrCode = new Html5Qrcode("reader");

  html5QrCode.scanFile(file, true)
    .then(qrCodeMessage => {
      resultDiv.innerText = `Scanned Result: ${qrCodeMessage}`;
    })
    .catch(err => {
      resultDiv.innerText = `Failed to scan: ${err}`;
    });
}
