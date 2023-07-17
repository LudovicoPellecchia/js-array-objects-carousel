const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

//Recupero i container dell'html al cui interno stamperò gli elementi creati in js
const mainImgBanner = document.querySelector(".main-img-preview")
const mainImgPreview = document.querySelector(".main-img-container")


for (let i = 0; i < images.length; i++){
    
    const currentPreview = images[i]
    console.log(currentPreview.title);
    const currentImag = images[i].image

    let mainImgContainer = document.createElement("div")
    mainImgContainer.classList.add("main-img-container")
    mainImgBanner.append(mainImgContainer)

    let mainImg = document.createElement("img")
    mainImg.src = currentImag

    mainImgContainer.append(mainImg)
    mainImg.classList.add("img-main-preview-text")
    mainImg.classList.add("text-white")
}