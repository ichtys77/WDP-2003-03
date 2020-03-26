/* selectors */
export const getAllSlides = ({ slides }) => slides;
export const getCountSlides = ({ slides }) => slides.length;

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}
