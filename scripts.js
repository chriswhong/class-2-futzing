

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

// strings

const firstName = "Chris"
const lastName = "Whong"

const fullName = firstName + " " + lastName

console.log('fullName', fullName)

// use template literal notation

const fullNameAsTemplateLiteral = `${firstName} ${lastName} is a pretty ok professor`

console.log('fullNameAsTemplateLiteral', fullNameAsTemplateLiteral)

// numbers

const age = 44

const ageInTenYears = age + 10

console.log('ageInTenYears', ageInTenYears)

console.log('ageAsString', age.toString())

console.log('parse Integer from string 44.5', parseInt("44.5"))

// booleans

const chrisIsCool = true

console.log('the opposite of is chris cool', !chrisIsCool)

if (chrisIsCool) {
    console.log('chris is cool')
} else {
    console.log('chris is not cool')
}


// arrays

const favoriteAlbums = ["Third Eye Blind", "Sublime", "Green Day"]

console.log('get the 2nd item in the array --->', favoriteAlbums[1])

favoriteAlbums.forEach((album) => {
    console.log('album in forEach Loop', album)
})


// array of object

[
    {
        name: "Chris",
        age: 44
    },
    {
        name: "John",
        age: 22
    }
]




// objects

    






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
