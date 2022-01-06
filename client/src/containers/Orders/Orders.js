import React, { useEffect } from 'react';

import Order from '../../components/Order/Order';
import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as actions from '../../store/actions/index';
import { connect } from 'react-redux';
import Spinner from '../../components/UI/Spinner/Spinner';


const orders  = props =>   {
    const { onFetchOrders } = props;
    useEffect( () => {
        onFetchOrders(props.userId);
    }, [onFetchOrders]);
    

        let orders = <Spinner />;
        if(!props.loading) {
           orders = ( 
                props.orders.map(order => (
                <Order 
                    key={order.id}
                    ingredients={order.ingredients}
                    price={order.price} />
            ))
           );
        };
        return (
            <div>
               { orders }
            </div>
        );
    }    

const mapStateToProps = state => {
    return {
        orders: state.order.orders,
        loading: state.order.loading,
        userId: state.auth.userId
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchOrders: (userId) => dispatch(actions.fetchOrders(userId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (withErrorHandler(orders, axios));