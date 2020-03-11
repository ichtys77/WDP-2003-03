/* selectors */
export const getAll = ({ products }) => products;
export const getCount = ({ products }) => products.length;

export const getNew = ({ products }) =>
  products.filter(item => item.newFurniture === true);

/* action name creator */
const reducerName = 'products';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const ADD_FAV = createActionName('ADD_FAV');

/* action creators */
export const addFavorite = payload => ({ payload, type: ADD_FAV });

/* reducer */
export default function reducer(statePart = [], action = {}) {
  {
    console.log(statePart);
  }
  switch (action.type) {
    case ADD_FAV: {
      return {
        ...statePart,
        products: statePart.map((product, i) =>
          i + 1 === action.payload ? { ...product, favorite: false } : product
        ),
      };
    }
    default:
      return statePart;
  }
}
