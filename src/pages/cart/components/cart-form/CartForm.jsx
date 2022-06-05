import CartFormHead from "./cart-form-head/CartFormHead";
import CartFormProductTable from "./cart-form-product-table/CartFormProductTable";
import styles from "./cart-form.module";

function CartForm({ className }) {
  return (
    <div className={className}>
      <CartFormHead className={styles.head} />
      <CartFormProductTable />
    </div>
  );
}

export default CartForm;
