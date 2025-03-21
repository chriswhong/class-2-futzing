

// create a JSON object for the album data
const albumData = {
    thirdEyeBlind: {
        imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f6/Out_of_the_Vein.jpg/220px-Out_of_the_Vein.jpg",
        alt: "Third Eye Blind"
    },
    sublime: {
        imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/9/94/Sublime_Self-Titled.jpg/220px-Sublime_Self-Titled.jpg",
        alt: "Sublime"
    },
    greenDay: {
        imageUrl: "https://upload.wikimedia.org/wikipedia/en/4/4b/Green_Day_-_Dookie_cover.jpg",
        alt: "Green Day"
    }
}
    






function injectImage(button) {
    // get the data-artist attribute from the button that was clicked
    const artist = button.dataset.artist

    // look up the matching artist key in the albumData object
    const artistData = albumData[artist]  

    // Create an image element
    const img = document.createElement("img")

    // Set the image source and alt text
    img.src = artistData.imageUrl
    img.alt = artistData.alt

    // Find the target div and add the image to it
    const container = document.getElementById("right-panel")

    container.innerHTML = '';
    container.appendChild(img)
}
