import cn from "classnames";
import { useDispatch, useSelector } from "react-redux";
import ProductItem from "@home/components/product-item/ProductItem";
import styles from "@home/components/product-list/product-list.module";
import Alert from "@shared/alert/Alert";
import productListEquality from "@redux/equalities/productListEquality";
import useApiQuery from "@hooks/useApiQuery";
import createAction from "@redux/createAction";
import ACTION_TYPE from "@redux/actions";

function ProductList({ className }) {
  const dispatch = useDispatch();
  const { isLoding, error } = useApiQuery({
    // eslint-disable-next-line no-undef
    queryFn: () => fetch(`${API_URL}/products`),
    queryOnMount: true,
    onSuccess: (productList) => {
      dispatch(createAction(ACTION_TYPE.UPDATE_PRODUCT_LIST, productList));
    },
  });
  const productList = useSelector(
    ({ productList }) => productList,
    productListEquality("thumbnail_image")
  );

  if (isLoding) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;
  if (productList.length === 0)
    return <Alert variant="danger">상품이 비어있습니다</Alert>;

  return (
    <div className={cn(styles.productList, className)}>
      {productList.map((item) => (
        <ProductItem key={item.sku} {...item} />
      ))}
    </div>
  );
}

export default ProductList;
