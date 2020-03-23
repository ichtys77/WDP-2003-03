/* selectors */
export const getAllFeedback = ({ feedback }) => feedback;
export const getCountFeedback = ({ feedback }) => feedback.length;

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}
