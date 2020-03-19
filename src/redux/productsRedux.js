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
const ADD_FAV = createActionName('ADD_FAV');
const ADD_RATING = createActionName('ADD_RATING');

// action creators
export const changeCompare = payload => ({ payload, type: CHANGE_COMPARE });
export const addFavorite = payload => ({ payload, type: ADD_FAV });
export const addRating = payload => ({ payload, type: ADD_RATING });

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
    case ADD_FAV: {
      let products = statePart.map(item => {
        if (item.id === action.payload) {
          item.favorite = !item.favorite;
        }
        return item;
      });
      return [...statePart, products];
    }

    case ADD_RATING: {
      
      return [...statePart, products];
    }

    default:
      return statePart;
  }


}
