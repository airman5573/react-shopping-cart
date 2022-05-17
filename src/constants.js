export const CART_SIZE = {
  SMALL: {
    WIDTH: '30',
    HEIGHT: '26',
  },
  LARGE: {
    WIDTH: '51',
    HEIGHT: '44',
  },
};

export const COLOR = {
  WHITE: 'white',
  BLACK: 'black',
  PRIMARY: '#2AC1BC',
};

export const SERVER_URL = 'https://hui-shopping-cart.herokuapp.com';

export const PATH = {
  ROOT: '/',
  PRODUCTS: '/products',
  CARTS: '/carts',
  ORDERLIST: '/orderlist',
};

export const ERROR_MESSAGE = {
  LOAD_PRODUCTS: '서버에서 상품을 불러오지 못했습니다. 다시 시도해주세요.',
  LOAD_CARTS:
    '서버에서 장바구니 리스트를 불러오지 못했습니다. 다시 시도해주세요.',
  ADD_CART: '장바구니 추가에 실패했습니다. 다시 시도해주세요.',
  DELETE_CART: '장바구니에서 제품을 제거하지 못했습니다. 다시 시도해주세요.',
};
