document.addEventListener('DOMContentLoaded', function () {
  sliderOne()
  sliderTwo()
})

function sliderOne() {
  let one = new Splide('.splide', {
    type: 'loop',
    padding: {
      right: '5rem',
      left: '5rem',
    },
    autoWidth: true,
    focus: 'center',
  }).mount()
}

function sliderTwo() {
  let second = new Splide('#splide', {
    type: 'loop',
    autoWidth: true,
    focus: 'center',
  }).mount()
}
