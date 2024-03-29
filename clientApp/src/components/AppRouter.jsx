import React, { Component } from 'react'

import { Routes, Route } from "react-router-dom";

import NavbarComponent from './layout/navbar/navbar.component';
import FooterComponent from './layout/footer/footer.component';

// pages
import HomePage from '../pages/home/home.page';
import FlowerDetailPage from '../pages/flower/flower.detail.page';
import CartPage from '../pages/cart/cart.page';
import FlowerListPage from '../pages/flower/flower.list.page';
import OrderPage from '../pages/orders/order.page'
import FlowerManagementListPage from '../pages/management/flowerManagement.list.page.jsx';
import FlowerManagementDetailPage from '../pages/management/flowerManagement.detail.page';
import FlowerManagementAddPage from '../pages/management/flowerManagement.add.page';

export class AppRouter extends Component {
    render() {
        return (
            <>
                <NavbarComponent />
                <div className="wrapper">
                    <div className="container-fluid">
                        <Routes>
                            <Route path='/' element={
                                <HomePage />
                            }></Route>
                            <Route path='/flower/detail/:id' element={
                                <FlowerDetailPage />
                            }></Route>
                            <Route path='/cart' element={
                                <CartPage />
                            }></Route>
                            <Route path='/flower/:type' element={
                                <FlowerListPage />
                            }></Route>
                            <Route path='/orders' element={
                                <OrderPage />
                            }></Route>
                            <Route path='/management' element={
                                <FlowerManagementListPage />
                            }></Route>
                            <Route path='/management/:id' element={
                                <FlowerManagementDetailPage />
                            }></Route>
                            <Route path='/management/add' element={
                                <FlowerManagementAddPage />
                            }></Route>
                        </Routes>
                    </div>
                </div>
                <FooterComponent />
            </>
        )
    }
}

export default AppRouter