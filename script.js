const mario = document.querySelector(".mario")
const pipe = document.querySelector(".pipe")

const jump = () => {
    mario.classList.add("jump")

    setTimeout(() => {

        mario.classList.remove("jump")

    }, 500);
}

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft
    const marioPosition = +window.getComputedStyle(mario).bottom.replace("px", "")

    if (pipePosition <= 160 && marioPosition < 25 && pipePosition > 0) {

        pipe.style.animation = "none"
        pipe.style.left = `${pipePosition}px`

        mario.style.animation = "none"
        mario.style.bottom = `${marioPosition}px`

        mario.src = "https://cdn.streamelements.com/uploads/3a66481b-e161-40ce-8e3c-8bb0f42145b4.png"
        mario.style.width = "6rem"
        mario.style.bottom = "0px"
        mario.style.marginLeft = "60px"

        clearInterval(loop)
    }   
}, 10);

document.addEventListener("keydown", jump)
document.addEventListener("keydown", jump)
