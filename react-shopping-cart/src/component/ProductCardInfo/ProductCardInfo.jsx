import styled, { css } from "styled-components";
import ProductName from "../@shared/ProductName/ProductName";
import ProductPrice from "../@shared/ProductPrice/ProductPrice";
import { ReactComponent as Cart } from "../../assets/cart.svg";
import useClickCartButton from "../../hooks/useClickCartButton";

const StyledCart = styled(Cart)`
  width: 20px;
  height: 20px;

  ${({ $isincart }) =>
    $isincart
      ? css`
      & path {
        fill: ${({ theme }) => theme.colors["red_03"]}
      }
      :hover {
        & path {
          fill: ${({ theme }) => theme.colors.cyon};
        }
    `
      : css`
          & path {
            fill: black;
          }

          :hover {
            & path {
              fill: ${({ theme }) => theme.colors.cyon};
            }
          }
        `}
`;

const ProductCardInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  :hover {
    text-decoration: underline;
  }
`;

const ProductCardInfoContainer = styled.div`
  display: flex;
  cursor: pointer;
  justify-content: space-between;
  align-items: center;
  width: 188px;
`;

function ProductCardInfo({ name, price, id, thumbnail, $isincart }) {
  const { handleAddProduct, handleDeleteProduct } = useClickCartButton();

  return (
    <ProductCardInfoContainer>
      <ProductCardInfoBox>
        <ProductName type="card">{name}</ProductName>
        <ProductPrice type="card">{price}원</ProductPrice>
      </ProductCardInfoBox>

      <div
        onClick={
          $isincart
            ? (e) => handleDeleteProduct(e, id)
            : (e) => handleAddProduct(e, { name, price, id, thumbnail })
        }
      >
        <StyledCart $isincart={$isincart} />
      </div>
    </ProductCardInfoContainer>
  );
}

export default ProductCardInfo;
