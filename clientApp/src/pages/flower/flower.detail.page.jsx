import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button, Modal } from 'react-bootstrap';

import './flower.detail.page.css'

export class FlowerDetailPage extends Component {

    constructor() {
        super();
        this.state = {
            showModal: false
        };
    }

    openImage() {
        this.setState({ showModal: true });
    }

    close() {
        this.setState({ showModal: false });
    }

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
                                <div className='col-md-12' style={{ textAlign: "center" }}>


                                    <div className="portfolioContainer">
                                        <div className="col-sm-6 col-md-4 webdesign illustrator">
                                            <Link to="#" className="image-popup" onClick={() => this.openImage()}>
                                                <div className="portfolio-masonry-box">
                                                    <div className="portfolio-masonry-img">
                                                        <img src="/assets/images/flowers/gio-hoa-hong-vang.jpg" className="thumb-img img-fluid" alt="work-thumbnail" />
                                                    </div>
                                                    <div className="portfolio-masonry-detail">
                                                        <h4 className="font-18">Street Photography</h4>
                                                        <p>Graphic Design</p>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-12' style={{marginTop: 10}}>
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
                                            <button type="button" className="btn btn-outline-primary btn-rounded waves-light waves-effect">Thêm vào giỏ</button>
                                            <button type="button" className="btn btn-danger btn-rounded waves-light waves-effect"
                                            style={{marginLeft: 10,
                                            backgroundColor: "#f26c24"}}>Mua Ngay</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Modal show={this.state.showModal} onHide={() => this.close()}
                    dialogClassName='modal-lg'
                >
                    <Modal.Header closeButton>
                    </Modal.Header>
                    <Modal.Body>
                        <img src="/assets/images/flowers/gio-hoa-hong-vang.jpg" className="thumb-img img-fluid" alt="work-thumbnail" />
                    </Modal.Body>
                </Modal>
            </>
        )
    }
}

export default FlowerDetailPage