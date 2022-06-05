import cn from "classnames";
import priceToDollar from "@utils/priceToDollar";
import Checkbox from "@shared/checkbox/single/Checkbox";
import LoadingThumbnail from "@shared/loading-thumbnail/LoadingThumbnail";
import NumberInput from "@shared/number-input/NumberInput";
import DeleteIcon from "@shared/icons/delete-icon/DeleteIcon";
import { useDispatch, useSelector } from "react-redux";
import createAction from "@redux/createAction";
import ACTION_TYPE from "@redux/actions";
import { useCallback } from "react";
import styles from "./cart-item.module";

function CartItem({ id: productId, className }) {
  const dispatch = useDispatch();
  const {
    name,
    thumbnail_image: { url, alt },
    quantity = 1,
    price,
  } = useSelector((state) => state.productObjs[productId]);
  const isSelected = useSelector((state) => state.cart[productId].selected);

  const handleCheck = (e) => {
    const { checked } = e.target;
    if (checked) {
      dispatch(createAction(ACTION_TYPE.SELECT_PRODUCT_IN_CART, productId));
      return;
    }
    dispatch(createAction(ACTION_TYPE.DESELECT_PRODUCT_IN_CART, productId));
  };
  const handleQuantityChange = useCallback(
    (val) => {
      dispatch(
        createAction(ACTION_TYPE.UPDATE_PRODUCT_QUANTITY_IN_CART, {
          productId,
          quantity: val,
        })
      );
    },
    [dispatch, productId]
  );
  const handleDeleteProduct = () =>
    dispatch(createAction(ACTION_TYPE.DELETE_PRODUCT_IN_CART, productId));

  return (
    <div className={cn(styles.cartItem, className)}>
      <Checkbox
        checked={isSelected}
        onChange={handleCheck}
        className={styles.checkbox}
        id={productId}
      />
      <div className={styles.content}>
        <div className={styles.left}>
          <LoadingThumbnail className={styles.thumbnail} src={url} alt={alt} />
        </div>
        <div className={styles.middle}>
          <div className={styles.productName}>{name}</div>
        </div>
        <div className={styles.right}>
          <DeleteIcon onClick={handleDeleteProduct} />
          <NumberInput onChange={handleQuantityChange} value={quantity} />
          <div className={styles.productPrice}>{priceToDollar(price)}</div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
