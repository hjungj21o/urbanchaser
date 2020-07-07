import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import Thunder from '../../assets/thunder.png'

const StripeCheckOutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishablekey = 'pk_test_51H0qPKIFYtjBMtMR7r0BfJb5m1FlhXs5lTrCJjFfnDH0rPVz2xJICGzSFHgOTDMMSjIeLudjL5nzXLOUrWR8OfDp0026iDIDNU'

    const onToken = token => {
        alert('Payment Successful!');
    }

    return (
        <StripeCheckout
            label="Pay Now"
            name="Urban Chaser Ltd."
            description={`Your total is $${price}`}
            image={Thunder}
            ComponentClass="div"
            amount={priceForStripe}
            currency="USD"
            stripeKey={publishablekey}
            billingAddress
            shippingAddress
            panelLabel="Pay Now"
            token={onToken}
        />
    );
};

export default StripeCheckOutButton;