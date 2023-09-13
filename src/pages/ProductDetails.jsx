import { useParams } from "react-router-dom"; //useParams ist ein hook

export function ProductDetails() {
  const { productId } = useParams();
  if (productId >= 1000) {
    return (
      <>
        <h2>Product Details</h2>
        <p>Oh no! Dieses Produkt gibt es gar nicht!</p>
      </>
    );
  }
  return (
    <>
      <h2>Product Details</h2>
      <p>Product: {productId}</p>
    </>
  );
}
