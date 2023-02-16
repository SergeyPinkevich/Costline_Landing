const splide = new Splide( '#screenshot-carousel', {
  type: 'loop',
  perPage: 3,
  focus: 'center',
  speed: 800,
  classes: {
    page  : 'splide__pagination__page screenshot-bullet-progress',
  }
});

splide.mount()