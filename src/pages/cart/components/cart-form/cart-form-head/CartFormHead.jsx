import createAction from "@redux/createAction";
import ACTION_TYPE from "@redux/actions";
import LabeledCheckbox from "@shared/checkbox/labeled-checkbox/LabeledCheckbox";
import getSelectedProductIds from "@cart/utils/getSelectedProductIds";
import { useDispatch, useSelector } from "react-redux";
import Button from "@shared/button/Button";
import { useCallback } from "react";

function CartFormHead({ className }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const productIdsInCart = Object.keys(cart);
  const selectedProductIds = getSelectedProductIds(cart);
  const isAllSelected =
    selectedProductIds.length > 0 &&
    selectedProductIds.length === productIdsInCart.length;

  const handleAllSelectToggle = useCallback(() => {
    if (isAllSelected) {
      dispatch(createAction(ACTION_TYPE.DESELECT_ALL_PRODUCTS_IN_CART));
      return;
    }
    dispatch(createAction(ACTION_TYPE.SELECT_ALL_PRODUCTS_IN_CART));
  }, [isAllSelected, dispatch]);

  const handleDeleteSelectedProducts = useCallback(() => {
    dispatch(
      createAction(
        ACTION_TYPE.DELETE_MULTIPLE_PRODUCTS_IN_CART,
        selectedProductIds
      )
    );
  }, [dispatch, selectedProductIds]);

  return (
    <div className={className}>
      <LabeledCheckbox
        id="all-select"
        label={isAllSelected ? "선택해제" : "전체선택"}
        onChange={handleAllSelectToggle}
        checked={isAllSelected}
      />
      <Button onClick={handleDeleteSelectedProducts}>상품삭제</Button>
    </div>
  );
}

export default CartFormHead;
