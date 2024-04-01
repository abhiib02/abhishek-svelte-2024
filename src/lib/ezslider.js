class ezslider {
    constructor(el) {
        this.slider = document.querySelector(el);
        this.slides = this.slider.querySelectorAll('.slide');
        this.currentSlide = 1;
        this.slides[1].classList.add('active');

    }

    resetCurrent() {
        let current = this.slider.querySelector('.active');
        current.classList.remove('active');
    }
    setCurrentSlide(index) {
        let slides = document.querySelectorAll('.slide');
        slides[index].classList.add('active');
    }

    next() {
        this.resetCurrent();
        this.currentSlide++;
        if (this.currentSlide > (this.slides.length - 1)) {
            this.currentSlide = 0;
            this.setCurrentSlide(this.currentSlide);
        }

        this.setCurrentSlide(this.currentSlide);

    }
    previous() {
        this.resetCurrent();
        this.currentSlide--;
        if (this.currentSlide < 0) {
            this.currentSlide = (this.slides.length - 1);
            this.setCurrentSlide(this.currentSlide);
        }

        this.setCurrentSlide(this.currentSlide);

    }

}
export default ezslider;