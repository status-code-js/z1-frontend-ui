
window.addEventListener('scroll', animItems)

function animItems () {
    const anim = document.querySelectorAll('.animate')

    for (let i = 0; i < anim.length; i++) {

        const windowHeight = window.innerHeight
        const showTop = anim[i].getBoundingClientRect().top
        const animPoint = 1

        if(showTop < windowHeight - animPoint) {
            anim[i].classList.add('active')
        } else {
            if(!anim.classList.contains('no-hide'))
            anim[i].classList.remove('active')
        }

    }
}