interface Props {
  product: Product,
};

interface Product {
  id: number,
  title: string,
  body: string,
};

export const ProductTitle = ({ title }: { title: string }) => <h2>{title}</h2>;

export const ProductBody = ({ body }: { body: string }) => <p>{body}</p>;

export default ({ product }: Props): JSX.Element => {
  return (
    <section>
      <ProductTitle title={product.title} />
      <ProductBody body={product.body} />
    </section>
  );
};