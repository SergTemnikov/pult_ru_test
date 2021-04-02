window.addEventListener('DOMContentLoaded', () => {
  'use strict'

// Slider one

  const slidesOne = document.querySelectorAll('.slider__one-item')
  const dotsOneWrapper = document.querySelector('.slider__one-dots')
  const indicatorsOne = document.createElement('div')
  
  indicatorsOne.classList.add('slider__one-dots-inner')

  const dotsOne = []

  dotsOneWrapper.append(indicatorsOne)

  for (let i = 0; i < slidesOne.length; i++) {
    const dot = document.createElement('div')
    dot.classList.add('dot')
    indicatorsOne.append(dot)
    dotsOne.push(dot)
  }

  let slideIndexOne = 0
  dotsOne[0].classList.add('active')

  const activeSlide = (n, arr) => {
    arr.forEach(item => {
      item.classList.remove('active')
    })
    arr[n].classList.add('active')
  }

  const activeDot = (n, arr) => {
    arr.forEach(item => {
      item.classList.remove('active')
    })
    arr[n].classList.add('active')
  }

  const currentSlide = (n, slideArr, dotArr) => {
    activeSlide(n, slideArr)
    activeDot(n, dotArr)
  }

  const nextSlideOne = () => {
    if (slideIndexOne == slidesOne.length - 1) {
      slideIndexOne = 0
      currentSlide(slideIndexOne, slidesOne, dotsOne)
    } else {
      slideIndexOne++
      currentSlide(slideIndexOne, slidesOne, dotsOne)
    }
  }

  dotsOne.forEach((dot, dotIndex) => {
    dot.addEventListener('click', () => {
      slideIndexOne = dotIndex
      currentSlide(slideIndexOne, slidesOne, dotsOne)
    })
  })

  setInterval(nextSlideOne, 3800)
// Slider one, changing styles on mouse events

  const sliderOneItem =document.querySelectorAll('.slider__one-item')
  const sliderOneImage = document.querySelectorAll('.slider__one-image')
  const sliderOneInfo = document.querySelectorAll('.slider__one-info')

  sliderOneItem.forEach(slide => {

    slide.addEventListener('mouseover', () => {
      sliderOneImage.forEach(image => {
        image.style = `
        -moz-transition: all .3s ease-out;
        -o-transition: all .3s ease-out;
        -webkit-transition: all .3s ease-out;
        width: 100%;
        cursor: pointer;
        -webkit-transform: scale(1.01);
        -moz-transform: scale(1.01);
        -o-transform: scale(1.01);
        `
      })
  
      sliderOneInfo.forEach(info => {
        info.style = `background-color: #60b3da;`
      })
    })
  })

  sliderOneItem.forEach(slide => {
    
    slide.addEventListener('mouseout', () => {

      sliderOneImage.forEach(image => {
        image.style = `
        -moz-transition: all .3s ease-out;
        -o-transition: all .3s ease-out;
        -webkit-transition: all .3s ease-out;
        width: 100%;
        cursor: pointer;
        `
      })
  
      sliderOneInfo.forEach(info => {
        info.style = `background-color: #1d9cd8;`
      })
    })

  })

// Slider two

  const slidesTwo = document.querySelectorAll('.slider__two-item')
  const dotsTwoWrapper = document.querySelector('.slider__two-dots')
  const sliderTwoItem =document.querySelectorAll('.slider__two-item')
  const sliderTwoImage = document.querySelectorAll('.slider__two-image')
  const sliderTwoInfo = document.querySelectorAll('.slider__two-info')

  const indicatorsTwo = document.createElement('div')
  indicatorsTwo.classList.add('slider__two-dots-inner')

  const dotsTwo = []

  dotsTwoWrapper.append(indicatorsTwo)

  for (let i = 0; i < slidesTwo.length; i++) {
    const dot = document.createElement('div')
    dot.classList.add('dot')
    indicatorsTwo.append(dot)
    dotsTwo.push(dot)
  }

  let slideIndexTwo = 0
  dotsTwo[slideIndexTwo].classList.add('active')

  const nextSlideTwo = () => {
    if (slideIndexTwo == slidesTwo.length - 1) {
      slideIndexTwo = 0
      currentSlide(slideIndexTwo, slidesTwo, dotsTwo)
    } else {
      slideIndexTwo++
      currentSlide(slideIndexTwo, slidesTwo, dotsTwo)
    }
  }

  dotsTwo.forEach((dot, dotIndex) => {
    dot.addEventListener('click', () => {
      slideIndexTwo = dotIndex
      currentSlide(slideIndexTwo, slidesTwo, dotsTwo)
    })
  }) 

  setInterval(nextSlideTwo ,4000)

  sliderTwoItem.forEach(slide => {

    slide.addEventListener('mouseover', () => {
      sliderTwoImage.forEach(image => {
        image.style = `
        -moz-transition: all .3s ease-out;
        -o-transition: all .3s ease-out;
        -webkit-transition: all .3s ease-out;
        width: 100%;
        cursor: pointer;
        -webkit-transform: scale(1.01);
        -moz-transform: scale(1.01);
        -o-transform: scale(1.01);
        `
      })
  
      sliderTwoInfo.forEach(info => {
        info.style = `background-color: #60b3da;`
      })
    })
  })

  sliderTwoItem.forEach(slide => {
    
    slide.addEventListener('mouseout', () => {

      sliderTwoImage.forEach(image => {
        image.style = `
        -moz-transition: all .3s ease-out;
        -o-transition: all .3s ease-out;
        -webkit-transition: all .3s ease-out;
        width: 100%;
        cursor: pointer;
        `
      })
  
      sliderTwoInfo.forEach(info => {
        info.style = `background-color: #1d9cd8;`
      })
    })

  })


// List

 const listItem = document.querySelectorAll('.list__item')
 const listImage = document.querySelectorAll('.list__image')
 const listItemLink = document.querySelectorAll('.list__item-link')

 let listItemIndex = 0

 listImage[0].classList.add('active')

 const activeImage = n => {
  listImage.forEach(item => {
    item.classList.remove('active')
  })
  listImage[n].classList.add('active')
}

  const activeItem = n => {
    listItemLink.forEach((item, itemIndex) => {
      item.classList.remove('active')
    })
    listItemLink[n].classList.add('active')
  }
  


  listItem.forEach((item, itemIndex) => {
    item.addEventListener('mouseover', () => {
      listItemIndex = itemIndex
      activeImage(listItemIndex)
      activeItem(listItemIndex)
    })
  })

// Footer 

  const footerPhoneTitle = document.querySelector('.footer__phone-title')
  const phoneLine = document.querySelector('.phone__line')

  footerPhoneTitle.addEventListener('mouseover', () => {
    phoneLine.classList.add('active')
  })

  footerPhoneTitle.addEventListener('mouseout', () => {
    phoneLine.classList.remove('active')
  })

})