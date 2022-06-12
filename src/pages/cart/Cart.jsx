import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import productListEquality from "@redux/equalities/productListEquality";
import useApiQuery from "@hooks/useApiQuery";
import createAction from "@redux/createAction";
import ACTION_TYPE from "@redux/actions";
import Alert from "@shared/alert/Alert";
import cn from "classnames";
import PageTitle from "@shared/page-title/PageTitle";
import styles from "@cart/cart.module";
import CartForm from "./components/cart-form/CartForm";
import CartTotal from "./components/cart-total/CartTotal";

function Cart() {
  const dispatch = useDispatch();
  const { isLoding, error, query } = useApiQuery({
    // eslint-disable-next-line no-undef
    queryFn: () => fetch(`${API_URL}/products`),
    onSuccess: (productList) => {
      dispatch(createAction(ACTION_TYPE.UPDATE_PRODUCT_LIST, productList));
    },
  });
  const productList = useSelector(
    ({ productList }) => productList,
    productListEquality("thumbnail_image")
  );

  useEffect(() => {
    productList.length === 0 && query();
  }, []);

  if (isLoding) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;
  if (productList.length === 0)
    return <Alert variant="danger">상품이 비어있습니다</Alert>;

  return (
    <div className="wrapper">
      <div className={cn(styles.cart)}>
        <PageTitle className="mb-50">장바구니</PageTitle>
        <div className={styles.container}>
          <CartForm className={styles.cartForm} />
          <CartTotal className={styles.cartTotal} />
        </div>
      </div>
    </div>
  );
}

export default Cart;
