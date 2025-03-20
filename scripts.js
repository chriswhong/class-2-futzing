function injectImage() {
    // Create an image element
    const img = document.createElement("img")
  
    // Set the image source and alt text
    img.src =
      "https://upload.wikimedia.org/wikipedia/en/thumb/f/f6/Out_of_the_Vein.jpg/220px-Out_of_the_Vein.jpg"
    img.alt = "Sample Image"
  
    // Find the target div and add the image to it
    const container = document.getElementById("right-panel")
    
    container.innerHTML = '';
    container.appendChild(img)
  }
  
  function injectImage2() {
    // Create an image element
    const img = document.createElement("img")
  
    // Set the image source and alt text
    img.src =
      "https://upload.wikimedia.org/wikipedia/en/thumb/9/94/Sublime_Self-Titled.jpg/220px-Sublime_Self-Titled.jpg"
    img.alt = "Sample Image"
  
    // Find the target div and add the image to it
    const container = document.getElementById("right-panel")
    
    container.innerHTML = '';
    container.appendChild(img)
  }
  
  function injectImage3() {
  console.log('2')
    // Create an image element
    const img3 = document.createElement("img")
  
    // Set the image source and alt text
    img3.src =
      "https://upload.wikimedia.org/wikipedia/en/4/4b/Green_Day_-_Dookie_cover.jpg"
    img3.alt = "Sample Image"
  
    // Find the target div and add the image to it
    const container = document.getElementById("right-panel")
    
    container.innerHTML = '';
    container.appendChild(img3)
  }
  