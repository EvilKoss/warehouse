import React from 'react';
import { connect } from "react-redux";
import Warehouse from './Warehouse';
import {AddNewCreator} from './Reducer';

let mapStateToProps = (state) => {
    return {
		products: state.Page.Products
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		addProducts: (pictUser,priceUser,desUser,quanUser) => {
            dispatch(AddNewCreator(pictUser,priceUser,desUser,quanUser));
        }
    }
}

const WarehouseContainer = connect(mapStateToProps, mapDispatchToProps)(Warehouse);

export default WarehouseContainer;
