import * as React from 'react';

import ShippingForm from './ShippingForm.js';

export default function ProductPage({ productId, referrerId, theme }) {
  const postres = React.useRef(null);
  const [res, setRes]= React.useState('');
  const [count, setCount] = React.useState(0);
  //
  // handleSubmit function is cached
  const handleSubmit = React.useCallback((orderDetails) => {
    const url = 'POST /product/' + productId + '/buy ';
  
    post(url, {
      referrerId,
      orderDetails,
    });

    setCount(count+1);

    postres.current.innerHTML=url;
    setRes(url);
  }, [productId, referrerId]);

  return (
    <>
    <div className={theme}>
      <ShippingForm onSubmit={handleSubmit} />
    </div>
    <br/>
    <span ref={postres}> </span>
    <br/>
    {count} clicks
    </>
  );
}

function post(url, data) {
  // Imagine this sends a request...
  console.log('POST /' + url);
  console.log(data);
}
