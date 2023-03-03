import { useProduct } from "../component/context/ProuctProvider";
import ProductCard from "../component/ProductCard";

const Home = () => {
  const {
    state: { product, loading, error },
  } = useProduct();
//   console.log(product);
  let content;
  if (loading) {
    content = <p>Loading...</p>;
  }

  if (error) {
    content = <p>something went wrong</p>;
  }
  if (!loading && !error && product.length) {
    content = product.map((singleProduct) => (
      <ProductCard key={singleProduct._id} product={singleProduct} />
    ));
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-4 mx-auto my-10">
      {content}
    </div>
  );
};

export default Home;
