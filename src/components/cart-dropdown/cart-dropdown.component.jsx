import React from 'react';
import { connect } from 'react-redux';
import CustomButton from '../custom-button/custom-button.component';
// import './cart-dropdown.styles.scss';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { withRouter } from 'react-router-dom';
import { CartDropDownButton, CartDropDownContainer, EmptyMessage, CartItems } from './cart-dropdown.styles'

const CartDropdown = ({ cartItems, history, dispatch }) => (
    <CartDropDownContainer>
        <CartItems>
            {
                cartItems.length ? 
                cartItems.map(cartItem => (
                    <CartItem key={cartItem.id} item={cartItem} />
                ))
                :
                    <EmptyMessage>Your Cart is Empty</EmptyMessage>
            }
        </CartItems>
        <CartDropDownButton onClick={() => {
            history.push('/checkout');
            dispatch(toggleCartHidden());
        }}>
            GO TO CHECKOUT
        </CartDropDownButton>
    </CartDropDownContainer>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));