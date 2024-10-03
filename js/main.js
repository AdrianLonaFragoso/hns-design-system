function downloadImage(button, imageUrl, fileName) {
  // Crear un enlace temporal
  const downloadLink = document.createElement("a");
  downloadLink.href = imageUrl;
  downloadLink.download = fileName;

  // Simular un clic en el enlace
  downloadLink.click();
}
