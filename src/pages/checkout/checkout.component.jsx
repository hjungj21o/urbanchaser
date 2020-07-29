import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckOutButton from '../../components/stripe/stripe-button.component';

import { CheckOutPageContainer, CheckoutHeader, HeaderBlock, Total, TestWarning } from './checkout.styles';
// import './checkout.styles.scss';

const CheckOutPage = ({cartItems, total}) => (
    <CheckOutPageContainer>
        <CheckoutHeader>
            <HeaderBlock>
                <span>Product</span>
            </HeaderBlock>
            <HeaderBlock>
                <span>Description</span>
            </HeaderBlock>
            <HeaderBlock>
                <span>Quantity</span>
            </HeaderBlock>
            <HeaderBlock>
                <span>Price</span>
            </HeaderBlock>
            <HeaderBlock>
                <span>Remove</span>
            </HeaderBlock>
        </CheckoutHeader>
        {
            cartItems.map(cartItem => 
                <CheckoutItem key={cartItem.id} cartItem={cartItem} />
            )
        }
        <Total>
            <span>TOTAL: ${total}</span>
        </Total>
        <TestWarning>
            *Please use the following test credit card for payments*
            <br />
            4242 4242 4242 4242 - Exp: 01/25 - CW: 123
        </TestWarning>
        <StripeCheckOutButton price={total} />
    </CheckOutPageContainer>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
});

export default connect(mapStateToProps)(CheckOutPage);