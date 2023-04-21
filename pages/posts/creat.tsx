import axios from "axios";
import Link from "next/link";

import React, { FunctionComponent } from "react";

interface Props {
  products: [{ id: string; name: string }];
}
const Creat: FunctionComponent<Props> = ({ products }) => {
  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <Link href={`${product.id}`}>
            <h1>{product.name}</h1>
          </Link>
        </div>
      ))}
    </div>
  );
};
export default Creat;
export async function getStaticProps() {
  // Lấy danh sách sản phẩm từ API
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );

  const products = response.data;

  return { props: { products } };
}
