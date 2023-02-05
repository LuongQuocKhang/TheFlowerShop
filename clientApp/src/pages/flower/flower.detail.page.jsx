import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './flower.detail.page.css'

export class FlowerDetailPage extends Component {
    render() {
        return (
            <>
                <div className="row">
                    <div className="col-sm-12">
                        <div className="page-title-box">
                            <div className="btn-group float-right">
                                <ol className="breadcrumb hide-phone p-0 m-0">
                                    <li className="breadcrumb-item"><a href="#">Homepage</a></li>
                                    <li className="breadcrumb-item"><a href="#">Flower</a></li>
                                    <li className="breadcrumb-item active">Detail</li>
                                </ol>
                            </div>
                            <h4 className="page-title">Flower Detail</h4>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-12">
                        <div className="card-box task-detail">
                            <div className='row'>
                                <div className='col-md-4' style={{overflow: "hidden"}}>
                                    <img className='img-flower-detail'
                                        src="/assets/images/flowers/gio-hoa-hong-vang.jpg" alt="" />
                                </div>
                                <div className='col-md-6'>
                                    <div className="r_item">
                                        <h2>
                                            Hộp hoa tươi - Sắc Hồng Xinh - 5424</h2>
                                        <div className="single-price">
                                            <span className="old-price">727.000 đ</span>
                                            <span className="price">700.000 đ</span></div>
                                        <p className="vat">Giá đã bao gồm 8% VAT</p>
                                        <div className="pd_summary">
                                            Hộp hoa với tone màu hồng pastel chủ đạo đã làm say đắm bao cô nàng đáng yêu. Hộp hoa này chắc chắn sẽ là món quà tuyệt vời dành tặng cho các fangirl có sự yêu thích đặc biệt dành cho màu hồng.
                                        </div>
                                        <h4>Sản phẩm bao gồm:</h4>
                                        <ul className="material">
                                            <li>Cẩm chướng chùm hồng nhạt : 5</li>
                                            <li>Cẩm chướng đơn viền tím : 6</li>
                                            <li>Cúc ping pong hồng: 8</li>
                                            <li>Hồng sen mới: 18</li>
                                            <li>Lá nho: 1</li>
                                        </ul>
                                        <p>
                                            <i>Sản phẩm thực nhận có thể khác với hình đại diện trên website (đặc điểm thủ công và tính chất tự nhiên của hàng nông nghiệp)</i>
                                        </p>

                                        <div className="area_order">
                                            <Link to="javascript:void(0);" className="add-cart hplAddCart" 
                                            >Thêm vào giỏ</Link>
                                            <Link to="" className="buy-now hplBuyNow">Mua ngay</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>





                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default FlowerDetailPage