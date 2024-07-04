import Slider from './slider.js'

export default class MainSlider extends Slider {
  constructor(page, btns) {
    super(page, btns)
  }

  showSlides(n) {
    if (n > this.slides.length) this.slideIndex = 1
    if (n < 1) this.slideIndex = this.slides.length

    this.slides.forEach(slide => (slide.style.display = 'none'))
    this.slides[this.slideIndex - 1].style.display = 'block'

    console.log(' this.hanson: ', this.hanson)
    try {
      this.hanson.style.opacity = '0'
      if (n === 3) {
        setTimeout(() => {
          this.hanson.style.opacity = '1'
          this.hanson.classList.add('slideInUp')
        }, 3000)
      } else {
        this.hanson.classList.remove('slideInUp')
      }
    } catch (e) {}
  }

  plusSlides(n) {
    this.showSlides((this.slideIndex += n))
  }

  render() {
    this.hanson = this.page.querySelector('.hanson')

    this.btns.forEach(btn => {
      btn.addEventListener('click', btn => {
        this.plusSlides(1)
      })
      btn.parentNode.previousElementSibling.addEventListener('click', e => {
        e.preventDefault()
        this.slideIndex = 1
        this.showSlides(this.slideIndex)
      })
    })

    this.showSlides(this.slideIndex)
  }
}
