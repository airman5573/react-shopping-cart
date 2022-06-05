import { useSelector } from "react-redux";
import CartItem from "./cart-item/CartItem";
import styles from "./cart-form-product-table.module";

function CartFormProductTable({ className }) {
  const cart = useSelector((state) => state.cart);
  const productIdsInCart = Object.keys(cart);

  return (
    <div className={className}>
      <div className="mb-16">{`상품 리스트 (${productIdsInCart.length}개)`}</div>
      <table className={styles.table}>
        <tbody>
          {productIdsInCart.map((id) => {
            return (
              <tr key={id}>
                <td>
                  <CartItem id={id} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default CartFormProductTable;
