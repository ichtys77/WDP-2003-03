/* selectors */
export const getView = ({ viewport }) => viewport;

/* action name creator */
const reducerName = 'viewport';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const ADD_VIEWPORT = createActionName('ADD_VIEWPORT');

/* action creators */
export const addViewport = payload => ({ payload, type: ADD_VIEWPORT });

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case ADD_VIEWPORT: {
      if (action.payload.width >= 1280) {
        return {
          mode: 'desktop',
        };
      } else if (action.payload.width >= 768) {
        return {
          mode: 'tablet',
        };
      } else {
        return {
          mode: 'mobile',
        };
      }
    }
    default:
      return statePart;
  }
}
