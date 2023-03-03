import React from 'react';
import { useProduct } from '../component/context/ProuctProvider';
import ProductCard from '../component/ProductCard';

const WhistList = () => {

     const {
        state: { whistlist, loading, error },
      } = useProduct();
      console.log(whistlist);
      let content;
      if (loading) {
        content = <p>Loading...</p>;
      }
    
      if (error) {
        content = <p>something went wrong</p>;
      }
      if (!loading && !error && whistlist.length) {
        content = whistlist.map((singleProduct) => (
          <ProductCard key={singleProduct._id} product={singleProduct} />
        ));
      }
      if (!loading && !error && whistlist.length ===0) {
        content = <p className='text-center'>whistlist  is empty</p>
      }
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10">
          {content}
        </div>
      )
};

export default WhistList;