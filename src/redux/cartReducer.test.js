import {
  INITIAL_STATE,
  ADD_PRODUCT,
  REMOVE_PRODUCT,
  REMOVE_PRODUCTS,
  addProduct,
  removeProduct,
  removeProducts,
  cartReducer,
} from './cartReducer';

const mockState = {
  1: {
    id: '1',
    name: 'PET보틀-정사각(420ml)',
    price: '43400',
    img: '/mockImages/img1.png',
    quantity: 1,
    isSelected: true,
  },
};

const mockProduct = {
  id: '1',
  name: 'PET보틀-정사각(420ml)',
  price: '43400',
  img: '/mockImages/img1.png',
};

const mockId = '1';

describe('cartReducer 테스트', () => {
  it('addProduct 함수는 ADD_PRODUCT 타입의 액션을 생성한다.', () => {
    expect(addProduct(mockProduct)).toEqual({
      type: ADD_PRODUCT,
      payload: mockProduct,
    });
  });

  it('ADD_PRODUCT 액션을 받을 경우, cartReducer는 해당 PRODUCT를 추가한 state를 반환한다.', () => {
    expect(cartReducer(INITIAL_STATE, addProduct(mockProduct))).toEqual(mockState);
  });

  it('removeProduct 함수는 REMOVE_PRODUCT 타입의 액션을 생성한다.', () => {
    expect(removeProduct(mockId)).toEqual({
      type: REMOVE_PRODUCT,
      payload: mockId,
    });
  });

  it('REMOVE_PRODUCT 액션을 받을 경우, cartReducer는 해당 PRODUCT를 제거한 state를 반환한다.', () => {
    expect(cartReducer(mockState, removeProduct(mockId))).toEqual(INITIAL_STATE);
  });

  it('removeProducts 함수는 REMOVE_PRODUCT 타입의 액션을 생성한다.', () => {
    expect(removeProducts([mockId])).toEqual({
      type: REMOVE_PRODUCTS,
      payload: [mockId],
    });
  });

  it('REMOVE_PRODUCTS 액션을 받을 경우, cartReducer는 해당 PRODUCT 들을 제거한 state를 반환한다.', () => {
    expect(cartReducer(mockState, removeProducts([mockId]))).toEqual(INITIAL_STATE);
  });
});
