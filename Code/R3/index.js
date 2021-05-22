const videoModal = document.querySelector(".video");
const btnPlay = document.querySelector(".play-button")

//Mostar modal de reproducción - ocultar el btn de reproducción
const modal = () => {
    videoModal.classList.remove("display-none")
    btnPlay.classList.add("display-none")
}

//Ocultar modal de reproducción
const hideModal = () => {
    videoModal.classList.add("display-none")
    btnPlay.classList.remove("display-none")


}

