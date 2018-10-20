import React, {Component} from 'react';

import CheckoutComponent from './CartComponent';

class Checkout extends Component {
    constructor (props) {
        super (props);
    }

    render () {
        return (
            <CheckoutComponent
                goBack = {() => this.props.navigation.goBack()} />
        )
    }
}

export default Checkout;