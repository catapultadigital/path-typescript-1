import Product from "./product";

export default (): JSX.Element => {
  return (
    <section>
      <h1>Shopping page</h1>
      <p>Page made using Compound Component Pattern</p>
      <hr />
      <Product product={{id: 1, title: 'steam deck', body: 'lorem ipsum dolor'}} />
    </section>
  )
};