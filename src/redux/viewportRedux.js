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
      return {
        ...statePart,
        mode: action.payload,
      };
    }
    default:
      return statePart;
  }
}
