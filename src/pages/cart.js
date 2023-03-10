
import React from 'react';
import { useProduct } from '../component/context/ProuctProvider';
import ProductCard from '../component/ProductCard';

const Cart = () => {

    const {
        state: { cart, loading, error },
      } = useProduct();
    //   console.log(cart);
    
      let content;
      if (loading) {
        content = <p>Loading...</p>;
      }
    
      if (error) {
        content = <p>something went wrong</p>;
      }
      if (!loading && !error && cart.length) {
        content = cart.map((singleProduct) => (
          <ProductCard key={singleProduct._id} product={singleProduct} />
        ));
      }
      if (!loading && !error && cart.length ===0) {
        content = <p className='text-center'>cart is empty</p>
      }


      return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10">
          {content}
        </div>
      );
};

export default Cart;