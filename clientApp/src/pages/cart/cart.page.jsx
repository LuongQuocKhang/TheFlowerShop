import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class CartPage extends Component {
    render() {
        return (
            <>
                <div className="row">
                    <div className="col-sm-12">
                        <div className="page-title-box">
                            <div className="btn-group float-right">
                                <ol className="breadcrumb hide-phone p-0 m-0">
                                    <li className="breadcrumb-item"><Link to="">Homepage</Link></li>
                                    <li className="breadcrumb-item"><Link href="#">Cart</Link></li>
                                    <li className="breadcrumb-item active">Detail</li>
                                </ol>
                            </div>
                            <h4 className="page-title">Thông tin giỏ hàng</h4>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <div className="card-box">
                            <div className="clearfix">
                                <div className="float-left">
                                    <h4 className="m-0 d-print-none">Hóa đơn</h4>
                                </div>
                            </div>


                            <div className="row">
                                <div className="col-6">
                                    <div className="float-left mt-3">
                                        <p><b>Hello</b></p>
                                        <p className="text-muted">Thanks a lot because you keep purchasing our products. Our company
                                            promises to provide high quality products for you as well as outstanding
                                            customer service for every transaction. </p>
                                    </div>

                                </div>
                                <div className="col-4 offset-2">
                                    <div className="mt-3 float-right">
                                        <p className="m-b-10"><strong>Ngày đặt hàng: </strong> Jan 17, 2016</p>
                                        <p className="m-b-10"><strong>Tình trạng thanh toán: </strong> <span className="badge badge-danger">Not Paid</span></p>
                                        <p className="m-b-10"><strong>Mã đơn hàng: </strong> #123456</p>
                                    </div>
                                </div>
                            </div>


                            <div className="row">
                                <div className="col-12">
                                    <div className="card-box">
                                        <h4 className="m-t-0 header-title">Thông tin đặt hàng</h4>

                                        <div className="row">
                                            <div className="col-12">
                                                <div className="p-20">
                                                    <form className="form-horizontal">
                                                        <div className="form-group row">
                                                            <label className="col-2 col-form-label">Họ và Tên</label>
                                                            <div className="col-10">
                                                                <input type="text" className="form-control" />
                                                            </div>
                                                        </div>
                                                        <div className="form-group row">
                                                            <label className="col-2 col-form-label" for="example-email">Email</label>
                                                            <div className="col-10">
                                                                <input type="email" id="example-email" name="example-email" className="form-control" placeholder="" />
                                                            </div>
                                                        </div>
                                                        <div className="form-group row">
                                                            <label className="col-2 col-form-label">Hình thức nhận hàng</label>
                                                            <div className="col-10">
                                                            <div className="custom-control custom-radio">
                                                                    <input type="radio" id="customRadio2" name="customRadio" className="custom-control-input" />
                                                                    <label className="custom-control-label" for="customRadio2"> Nhận Hàng tại Shop</label>
                                                                </div>
                                                                <div className="custom-control custom-radio">
                                                                    <input type="radio" id="customRadio1" name="customRadio" className="custom-control-input" />
                                                                    <label className="custom-control-label" for="customRadio1">Giao Hàng</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="form-group row">
                                                            <label className="col-2 col-form-label">Địa chỉ giao hàng</label>
                                                            <div className="col-10">
                                                                <input type="text" className="form-control" />
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-12">
                                    <div className="table-responsive">
                                        <table className="table mt-4">
                                            <thead>
                                                <tr><th>#</th>
                                                    <th>Item</th>
                                                    <th>Quantity</th>
                                                    <th>Unit Cost</th>
                                                    <th className="text-right">Total</th>
                                                </tr></thead>
                                            <tbody>
                                                <tr>
                                                    <td>1</td>
                                                    <td>
                                                        <b>Laptop</b> <br />
                                                        Brand Model VGN-TXN27N/B
                                                        11.1" Notebook PC
                                                    </td>
                                                    <td>1</td>
                                                    <td>$1799</td>
                                                    <td className="text-right">$1799</td>
                                                </tr>
                                                <tr>
                                                    <td>2</td>
                                                    <td>
                                                        <b>Warranty</b> <br />
                                                        Two Year Extended Warranty -
                                                        Parts and Labor
                                                    </td>
                                                    <td>3</td>
                                                    <td>$499</td>
                                                    <td className="text-right">$1497</td>
                                                </tr>
                                                <tr>
                                                    <td>3</td>
                                                    <td>
                                                        <b>LED</b> <br />
                                                        80cm (32) HD Ready LED TV
                                                    </td>
                                                    <td>2</td>
                                                    <td>$412</td>
                                                    <td className="text-right">$824</td>
                                                </tr>

                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6">
                                    <div className="clearfix pt-5">
                                        <h6 className="text-muted">Notes:</h6>

                                        <small>
                                            All accounts are to be paid within 7 days from receipt of
                                            invoice. To be paid by cheque or credit card or direct payment
                                            online. If account is not paid within 7 days the credits details
                                            supplied as confirmation of work undertaken will be charged the
                                            agreed quoted fee noted above.
                                        </small>
                                    </div>

                                </div>
                                <div className="col-6">
                                    <div className="float-right">
                                        <p><b>Sub-total:</b> $4120.00</p>
                                        <p><b>VAT (12.5):</b> $515</p>
                                        <h3>$4635.00 USD</h3>
                                    </div>
                                    <div className="clearfix"></div>
                                </div>
                            </div>

                            <div className="hidden-print mt-4 mb-4">
                                <div className="text-right">
                                    <Link href="" className="btn btn-primary waves-effect waves-light"><i className="fa fa-print m-r-5"></i> Xuất hóa đơn</Link>
                                    <Link href="#" className="btn btn-danger waves-effect waves-light" style={{MarginLeft: 10}}>Thanh Toán</Link>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </>
        )
    }
}

export default CartPage