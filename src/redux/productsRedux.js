/* selectors */
export const getAll = ({ products }) => products;
export const getCount = ({ products }) => products.length;

export const getNew = ({ products }) =>
  products.filter(item => item.newFurniture === true);

// action name creator
const reducerName = 'products';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const CHANGE_COMPARE = createActionName('CHANGE_COMPARE');

// action creators
export const changeCompare = payload => ({ payload, type: CHANGE_COMPARE });

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case CHANGE_COMPARE: {
      let products = statePart.map(item => {
        if (item.id === action.payload) {
          item.compare = !item.compare;
        }
        return item;
      });
      return products;
    }
    default:
      return statePart;
  }
}
