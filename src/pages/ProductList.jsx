import { Link } from "react-router-dom";

export function ProductList() {
  return (
    <>
      <h2>Produktliste</h2>
      <ul>
        <li>
          <Link to="/products/1">Produkt 1</Link>
        </li>
        <li>
          <Link to="/products/2">Produkt 2</Link>
        </li>
        <li>
          <Link to="/products/3">Produkt 3</Link>
        </li>
      </ul>
    </>
  );
}
