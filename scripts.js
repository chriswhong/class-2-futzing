function injectImage(button) {
    // get the data-artist attribute from the button
    const artist = button.dataset.artist


    let imageUrl
    let alt

    // compare the data-artist attribute to the different artists and choose an album art URL
    if (artist === 'thirdEyeBlind') {
        imageUrl = "https://upload.wikimedia.org/wikipedia/en/thumb/f/f6/Out_of_the_Vein.jpg/220px-Out_of_the_Vein.jpg"

        alt = "Third Eye Blind"
    }

    if (artist === 'sublime') {
        imageUrl = "https://upload.wikimedia.org/wikipedia/en/thumb/9/94/Sublime_Self-Titled.jpg/220px-Sublime_Self-Titled.jpg"

        alt = "Sublime"
    }

    if (artist === 'greenDay') {
        imageUrl = "https://upload.wikimedia.org/wikipedia/en/4/4b/Green_Day_-_Dookie_cover.jpg"

        alt = "Green Day"
    }

    // Create an image element
    const img = document.createElement("img")

    // Set the image source and alt text
    img.src = imageUrl
    img.alt = alt

    // Find the target div and add the image to it
    const container = document.getElementById("right-panel")

    container.innerHTML = '';
    container.appendChild(img)
}
