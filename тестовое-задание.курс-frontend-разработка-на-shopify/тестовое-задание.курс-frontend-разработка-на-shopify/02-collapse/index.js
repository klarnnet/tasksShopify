const visible = document.querySelector('.collapsible__action--visible'); 
const hidden = document.querySelector('.collapsible__action--hidden'); 


let collapseOpacity = [
    {opacity: '0'},
    {opacity: '1'}
]

let collapseTiming = {
    duration: 100,
    iterations: 1
}

let collapseAnimation = document.querySelector('.collapsible__content').animate(
    collapseOpacity,collapseTiming
)

hidden.style.display ='none'

hidden.onclick = () => {
    hidden.style.display ='none'
    visible.style.display ='block'
    collapseAnimation.play()
    collapseAnimation.pause() 
    collapseAnimation.cancel()
}
visible.onclick = () => {
    visible.style.display ='none'
    hidden.style.display ='block'
    collapseAnimation.play()
    collapseAnimation.pause()
}

