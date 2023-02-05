import React, { Component } from 'react'
import './home.page.css'
import AdvertisementComponent from '../../components/advertisement/advertisement.component';
import FlowerCardComponent from '../../components/flowerCard/flowerCard.component';

import { Link } from 'react-router-dom';


export class HomePage extends Component {

    render() {
        let hotDealList = "", newFlowerList = "";

        let hotDeals = [
            {
                id: 1,
                title: "new energy",
                img: "assets/images/flowers/306089100_486173836851826_6750157363461441274_n.jpg",
                price: "200.000",
                isSale: true
            },
            {
                id: 2,
                title: "Giỏ hoa hồng vàng",
                img: "assets/images/flowers/gio-hoa-hong-vang.jpg",
                price: "200.000",
                isSale: false
            },
            {
                id: 3,
                title: "Mix Hoa hồng trắng và hồng",
                img: "assets/images/flowers/hoa-hong-hong-trang.jpg",
                price: "250.000",
                isSale: false
            },
            {
                id: 4,
                title: "Hoa mẫu đơn",
                img: "assets/images/flowers/hoa-mau-don.jpg",
                price: "250.000",
                isSale: false
            },
            {
                id: 5,
                title: "Hoa hướng dương",
                img: "assets/images/flowers/hoa-huong-duong.jpg",
                price: "250.000",
                isSale: false
            },
            {
                id: 6,
                title: "Hộp hoa hổng đỏ",
                img: "assets/images/flowers/hop-hoa-hong-do.jpg",
                price: "250.000",
                isSale: false
            }
        ];

        if (hotDeals.length > 0) {
            hotDealList = hotDeals.map((item) => {
                let detailLink = '/flower/detail/' + item.id;
                return (
                        <>
                            <div className="col-md-6 col-lg-2">
                                <Link to={detailLink}>
                                    <FlowerCardComponent key={"flower_deal_" + item.id}
                                        flower={item} />
                                </Link>
                            </div>
                        </>
                    )
                }
            );

            newFlowerList = hotDealList;
        }

        return (
            <>
                <div className="row">
                    <div className="col-sm-12">
                        <div className="page-title-box">
                            <div className="btn-group float-right">
                                <ol className="breadcrumb hide-phone p-0 m-0">
                                    <li className="breadcrumb-item"><Link to="#">Homepage</Link></li>
                                </ol>
                            </div>
                            <h4 className="page-title">Homepage</h4>
                        </div>
                    </div>
                </div>

                {/* run advertisement */}
                <div className='card-box'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <AdvertisementComponent />
                        </div>
                    </div>
                </div>
                {/* Hot Deal */}
                <div className="card-box ribbon-box">
                    <div className="ribbon ribbon-purple">Hot Deal</div>
                    <div className="row">
                        {hotDealList}
                    </div>
                    <div className='row'>
                        <div className='col-md-12 text-center'>
                            <button type="button" class="btn btn-outline-info btn-rounded waves-light waves-effect view-more">View more</button>
                        </div>
                    </div>
                </div>
                
                {/*  New Flowers*/}
                <div className="card-box ribbon-box">
                    <div className="ribbon ribbon-info">Khuyến mãi</div>
                    <div className="row">
                        {newFlowerList}
                    </div>
                    <div className='row'>
                        <div className='col-md-12 text-center'>
                            <button type="button" class="btn btn-outline-info btn-rounded waves-light waves-effect view-more">View more</button>
                        </div>
                    </div>
                </div>

                {/*  New Flowers*/}
                <div className="card-box ribbon-box">
                    <div className="ribbon ribbon-success">New Flower</div>
                    <div className="row">
                        {newFlowerList}
                    </div>
                    <div className='row'>
                        <div className='col-md-12 text-center'>
                            <button type="button" class="btn btn-outline-info btn-rounded waves-light waves-effect view-more">View more</button>
                        </div>
                    </div>
                </div>
                
            </>
        )
    }
}

export default HomePage