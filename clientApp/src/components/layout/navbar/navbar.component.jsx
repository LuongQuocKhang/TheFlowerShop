import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import AuthService from '../../../services/auth.service'

export class NavbarComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isMenuOpen: false
        }
    }

    openMenuForSmallScreen() {
        this.setState({
            isMenuOpen: !this.state.isMenuOpen
        });    
    }

    closeMenuAfterClicked() {
        this.setState({
            isMenuOpen: false
        });    
    }

    render() {

        const logout = async () => {
            AuthService.logout();
            this.props.setToken(null);
            window.location.to = "/login";
        }

       

        return (
            <>
                <header id="topnav">
                    <div className="topbar-main">
                        <div className="container-fluid">
                            <div className="logo">
                                <Link to="/" className="logo">
                                    <img src="/assets/images/logo_sm.png" alt="" height="26" className="logo-small" />
                                    <img src="/assets/images/logo.png" alt="" height="22" className="logo-large" />
                                </Link>
                            </div>
                            <div className="menu-extras topbar-custom">
                                <ul className="list-unstyled topbar-right-menu float-right mb-0">

                                    <li className="menu-item">
                                        <Link className="navbar-toggle nav-link" to='#'
                                        onClick={() => this.openMenuForSmallScreen()}>
                                            <div className="lines">
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                            </div>
                                        </Link>
                                    </li>
                                    <li className="dropdown notification-list hide-phone">
                                        <Link className="nav-link dropdown-toggle waves-effect nav-user" data-toggle="dropdown" to="#" role="button"
                                            aria-haspopup="false" aria-expanded="false">
                                            <i className="mdi mdi-earth"></i> English  <i className="mdi mdi-chevron-down"></i>
                                        </Link>
                                        <div className="dropdown-menu dropdown-menu-right dropdown-menu-animated">
                                            <Link to="#" className="dropdown-item">
                                                Spanish
                                            </Link>
                                            <Link to="#" className="dropdown-item">
                                                Italian
                                            </Link>
                                            <Link to="#" className="dropdown-item">
                                                French
                                            </Link>
                                            <Link to="#" className="dropdown-item">
                                                Russian
                                            </Link>

                                        </div>
                                    </li>
               
                                    <li className="dropdown notification-list">
                                        <Link className="nav-link dropdown-toggle arrow-none waves-effect" data-toggle="dropdown" role="button"
                                            to='/cart'
                                            aria-haspopup="false" aria-expanded="false">
                                            <i className=" mdi mdi-cart-outline noti-icon"></i>
                                            <span className="badge badge-danger badge-pill noti-icon-badge">6</span>
                                        </Link>
                                    </li>

                                    <li className="dropdown notification-list">
                                        <Link className="nav-link dropdown-toggle waves-effect nav-user" data-toggle="dropdown" to="#" role="button"
                                            aria-haspopup="false" aria-expanded="false">
                                            <img src="/assets/images/users/avatar-1.jpg" alt="user" className="rounded-circle" /> <span className="ml-1 pro-user-name">Maxine K <i className="mdi mdi-chevron-down"></i> </span>
                                        </Link>
                                        <div className="dropdown-menu dropdown-menu-right dropdown-menu-animated profile-dropdown">
                                            <div className="dropdown-item noti-title">
                                                <h6 className="text-overflow m-0">Welcome !</h6>
                                            </div>
                                            <Link to="#" className="dropdown-item notify-item">
                                                <i className="fi-head"></i> <span>My Account</span>
                                            </Link>
                                            <Link to='/orders' className="dropdown-item notify-item">
                                                <i className="fi-cog"></i> <span>Orders</span>
                                            </Link>
                                            <Link to='/wallet' className="dropdown-item notify-item">
                                                <i className="fi-help"></i> <span>Wallet</span>
                                            </Link>
                                            <Link to="#" className="dropdown-item notify-item">
                                                <i className="fi-lock"></i> <span>Lock Screen</span>
                                            </Link>
                                            <Link to="#" className="dropdown-item notify-item"
                                                onClick={() => logout()}>
                                                <i className="fi-power"></i> <span>Logout</span>
                                            </Link>

                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="clearfix"></div>
                        </div>
                    </div>

                    <div className="navbar-custom">
                        <div className="container-fluid">
                            <div id="navigation" style={{display: this.state.isMenuOpen ? "block": "none"}}>
                                <ul className="navigation-menu">
                                    <li className="has-submenu">
                                        <Link to="/" onClick={() => this.closeMenuAfterClicked()}>
                                        <i className="icon-speedometer"></i>Trang chủ</Link>
                                    </li>
                                    <li className="has-submenu">
                                        <Link to="/flower/FreshFlow"
                                        onClick={() => this.closeMenuAfterClicked()}>Hoa Tươi</Link>
                                        <ul className="submenu">
                                            <li><Link to="apps-calendar.html" onClick={() => this.closeMenuAfterClicked()}>Bó</Link></li>
                                            <li><Link to="apps-tickets.html" onClick={() => this.closeMenuAfterClicked()}>Giỏ</Link></li>
                                            <li><Link to="apps-taskboard.html" onClick={() => this.closeMenuAfterClicked()}>Hộp</Link></li>
                                            <li><Link to="apps-task-detail.html" onClick={() => this.closeMenuAfterClicked()}>Kệ Khai Trương</Link></li>
                                            <li><Link to="apps-contacts.html" onClick={() => this.closeMenuAfterClicked()}>Kệ Chia Buồn</Link></li>
                                        </ul>
                                    </li>
                                    <li className="has-submenu">
                                        <Link to="#" onClick={() => this.closeMenuAfterClicked()}>Hoa Cưới</Link>
                                    </li>
                                    <li className="has-submenu">
                                        <Link to="#" onClick={() => this.closeMenuAfterClicked()}>Hoa giấy</Link>     
                                        <ul className="submenu">
                                            <li><Link to="apps-calendar.html" onClick={() => this.closeMenuAfterClicked()}>Bó</Link></li>
                                            <li><Link to="apps-tickets.html" onClick={() => this.closeMenuAfterClicked()}>Giỏ</Link></li>
                                            <li><Link to="apps-taskboard.html" onClick={() => this.closeMenuAfterClicked()}>Hộp</Link></li>
                                        </ul>        
                                    </li>
                                    <li className="has-submenu">
                                        <Link to="#" onClick={() => this.closeMenuAfterClicked()}>Hoa Sáp</Link>
                                        <ul className="submenu">
                                            <li><Link to="apps-calendar.html" onClick={() => this.closeMenuAfterClicked()}>Bó</Link></li>
                                            <li><Link to="apps-tickets.html" onClick={() => this.closeMenuAfterClicked()}>Giỏ</Link></li>
                                            <li><Link to="apps-taskboard.html" onClick={() => this.closeMenuAfterClicked()}>Hộp</Link></li>
                                        </ul>   
                                    </li>
                                    <li className="has-submenu">
                                        <Link to="#" onClick={() => this.closeMenuAfterClicked()}>Hoa Gấu Bông/Gấu Bông</Link>             
                                    </li>
                                    <li className="has-submenu" onClick={() => this.closeMenuAfterClicked()}>
                                        <Link to="#">Giỏ Hoa Trái Cây</Link>             
                                    </li>
                                    <li className="has-submenu">
                                        <Link to="#" onClick={() => this.closeMenuAfterClicked()}>Tráp Cưới</Link>
                                    </li>
                                    <li className="has-submenu">
                                        <Link to="#" onClick={() => this.closeMenuAfterClicked()}>Thiệp Cưới</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </header>
            </>
        )
    }
}

export default NavbarComponent