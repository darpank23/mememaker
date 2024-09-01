document.addEventListener('DOMContentLoaded', function () {
    // Get references to HTML elements
    var pictureFrame = document.getElementById('pictureFrame');
    var topText = document.getElementById('topText');
    var bottomText = document.getElementById('bottomText');
    var pictureList = document.getElementById('pictureList');
    var uploadInput = document.getElementById('upload');
    var topTextBox = document.getElementById('topTextBox');
    var topColor = document.getElementById('topColor');
    var topFont = document.getElementById('topFont');
    var bottomTextBox = document.getElementById('bottomTextBox');
    var bottomColor = document.getElementById('bottomColor');
    var bottomFont = document.getElementById('bottomFont');
    var memeGenerateButton = document.getElementById('meme-generate');
  
    // Set default image on page load
    pictureFrame.style.backgroundImage = 'url("1.jpg")';
    pictureFrame.style.backgroundImage = 'url("3.jpg")';
    pictureFrame.style.backgroundImage = 'url("2.jpg")';
  
    // Event listener for pictureList change
    pictureList.addEventListener('change', function () {
      var selectedImage = pictureList.value;
      pictureFrame.style.backgroundImage = 'url("' + selectedImage + '")';
    });
  
    // Event listener for upload input change
    uploadInput.addEventListener('change', function (e) {
      var uploadedImage = e.target.files[0];
      var imageUrl = URL.createObjectURL(uploadedImage);
      pictureFrame.style.backgroundImage = 'url("' + imageUrl + '")';
    });
  
    // Event listener for Generate Meme button
    memeGenerateButton.addEventListener('click', function () {
      topText.textContent = topTextBox.value;
      topText.style.color = topColor.value;
      topText.style.fontSize = topFont.value + 'px';
  
      bottomText.textContent = bottomTextBox.value;
      bottomText.style.color = bottomColor.value;
      bottomText.style.fontSize = bottomFont.value + 'px';
    });
  
    memeGenerateButton.addEventListener('click', function () {
      // Get the context of the canvas
      var canvas = document.createElement('canvas');
      var ctx = canvas.getContext('2d');
  
      // Set canvas dimensions to match the image dimensions
      canvas.width = pictureFrame.offsetWidth;
      canvas.height = pictureFrame.offsetHeight;
  
      // Draw the background image on the canvas
      var backgroundImage = new Image();
      backgroundImage.src = pictureFrame.style.backgroundImage.slice(4, -1).replace(/"/g, '');
      ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
  
      // Draw the top text
      ctx.fillStyle = topColor.value;
      ctx.font = topFont.value + 'px ' + 'Impact, Haettenschweiler, Arial Narrow Bold, sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'top';
      ctx.fillText(topTextBox.value, canvas.width / 2, 10);
  
      // Draw the bottom text
      ctx.fillStyle = bottomColor.value;
      ctx.font = bottomFont.value + 'px ' + 'Impact, Haettenschweiler, Arial Narrow Bold, sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'bottom';
      ctx.fillText(bottomTextBox.value, canvas.width / 2, canvas.height - 10);
  
      // Convert the canvas content to data URL
      var dataURL = canvas.toDataURL('image/png');
  
      // Create a download link
      var downloadLink = document.createElement('a');
      downloadLink.href = dataURL;
      downloadLink.download = 'meme.png';
      downloadLink.click();
    });
    function updateMeme() {
      // Top text
      topText.textContent = topTextBox.value;
      topText.style.color = topColor.value;
      topText.style.fontSize = topFont.value + 'px';
      topText.style.textAlign = 'center'; // Center horizontally
      topText.style.textBaseline = 'middle'; // Center vertically
  
      // Bottom text
      bottomText.textContent = bottomTextBox.value;
      bottomText.style.color = bottomColor.value;
      bottomText.style.fontSize = bottomFont.value + 'px';
      bottomText.style.textAlign = 'center'; // Center horizontally
      bottomText.style.textBaseline = 'middle'; // Center vertically
    }
  
    // Event listeners for text input fields
    topTextBox.addEventListener('input', updateMeme);
    bottomTextBox.addEventListener('input', updateMeme);
  
    // Event listeners for text size input fields
    topFont.addEventListener('input', updateMeme);
    bottomFont.addEventListener('input', updateMeme);
  
    // Event listeners for text color input fields
    topColor.addEventListener('input', updateMeme);
    bottomColor.addEventListener('input', updateMeme);
  
    // Event listener for Generate Meme button
    memeGenerateButton.addEventListener('click', function () {
      updateMeme();
    });
  });
  