import React, { Component } from 'react'

import { Routes, Route } from "react-router-dom";
import DashboardComponent from './dashboard/dashboard.component';
import SwapComponent from './swap/swap.component';
import TokensComponent from './tokens/tokens.component';
import WalletComponent from './wallet/wallet.component';
import TradeComponent from './trade/trade.component';
import TokensDetailComponent from './tokens/tokensDetail.component';
import SignalComponent from './signals/signal.component';
import BacktestingComponent from './backtesting/backtesting.component';
import StrategiesComponent from './strategies/strategies.component';
import StrategiesNewComponent from './strategies/strategies.new.component';
import StrategiesEditComponent from './strategies/strategies.edit.component';
import LoginComponent from './login/login.component';

import NavbarComponent from './layout/navbar/navbar.component';
import FooterComponent from './layout/footer/footer.component';

export class AppRouter extends Component {
    render() {
        return (
            <>
                <NavbarComponent />
                <div className="wrapper">
                    <div className="container-fluid">
                        <Routes>
                            
                        </Routes>
                    </div>
                </div>
                <FooterComponent />
            </>


        )
    }
}

export default AppRouter