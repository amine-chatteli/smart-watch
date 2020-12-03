

const SliderImages = ['../images/body.png','../images/body.png'];
let counter = 0;
let sliderImage = document.getElementById('slider-img')
sliderImage.src = SliderImages[counter]
document.getElementById(`loader${counter}`).style.backgroundColor = '#FFB19D'

const slide = (e) => {
    if (e.target.id === "next") {
        if (counter < SliderImages.length - 1) {
            counter++
            console.log(counter);
            sliderImage.src = SliderImages[counter]
            document.getElementById(`loader${counter}`).style.backgroundColor = '#FFB19D'
            document.getElementById(`loader${counter - 1}`).style.backgroundColor = ''
        }
        return
    } else {
        if (counter > 0) {
            counter--
            sliderImage.src = SliderImages[counter]
            document.getElementById(`loader${counter}`).style.backgroundColor = '#FFB19D'
            document.getElementById(`loader${counter + 1}`).style.backgroundColor = ''
        }
        return
    }
}
document.getElementById('next').addEventListener('click', (e) => slide(e))
document.getElementById('prev').addEventListener('click', (e) => slide(e))
document.getElementsByClassName('navbar__togle')[0].addEventListener('click',function(){
   document.getElementsByClassName('mobile__navbar')[0].style.height='100%'
})

document.getElementsByClassName('close__btn')[0].addEventListener('click',function(){
    document.getElementsByClassName('mobile__navbar')[0].style.height='0%'

})