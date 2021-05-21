const videoModal = document.querySelector(".video");
const btnPlay = document.querySelector(".play-button")


const modal = () => {
    videoModal.classList.remove("display-none")
    btnPlay.classList.add("display-none")
}

const hideModal = () => {
    videoModal.classList.add("display-none")
    btnPlay.classList.remove("display-none")


}

