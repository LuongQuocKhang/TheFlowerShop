import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { FlowerCardComponent} from '../../components/flowerCard/flowerCard.component'

import "./flower.list.component.css"

export class FlowerListPage extends Component {
    render() {

        let flowerList = "";

        let flowers = [
            {
                id: 1,
                title: "new energy",
                img: "/assets/images/flowers/306089100_486173836851826_6750157363461441274_n.jpg",
                price: "200.000",
                isSale: true
            },
            {
                id: 2,
                title: "Giỏ hoa hồng vàng",
                img: "/assets/images/flowers/gio-hoa-hong-vang.jpg",
                price: "200.000",
                isSale: false
            },
            {
                id: 3,
                title: "Mix Hoa hồng trắng và hồng",
                img: "/assets/images/flowers/hoa-hong-hong-trang.jpg",
                price: "250.000",
                isSale: false
            },
            {
                id: 4,
                title: "Hoa mẫu đơn",
                img: "/assets/images/flowers/hoa-mau-don.jpg",
                price: "250.000",
                isSale: false
            },
            {
                id: 5,
                title: "Hoa hướng dương",
                img: "/assets/images/flowers/hoa-huong-duong.jpg",
                price: "250.000",
                isSale: false
            },
            {
                id: 6,
                title: "Hộp hoa hổng đỏ",
                img: "/assets/images/flowers/hop-hoa-hong-do.jpg",
                price: "250.000",
                isSale: false
            },
            {
                id: 1,
                title: "new energy",
                img: "/assets/images/flowers/306089100_486173836851826_6750157363461441274_n.jpg",
                price: "200.000",
                isSale: true
            },
            {
                id: 2,
                title: "Giỏ hoa hồng vàng",
                img: "/assets/images/flowers/gio-hoa-hong-vang.jpg",
                price: "200.000",
                isSale: false
            },
            {
                id: 3,
                title: "Mix Hoa hồng trắng và hồng",
                img: "/assets/images/flowers/hoa-hong-hong-trang.jpg",
                price: "250.000",
                isSale: false
            },
            {
                id: 4,
                title: "Hoa mẫu đơn",
                img: "/assets/images/flowers/hoa-mau-don.jpg",
                price: "250.000",
                isSale: false
            },
            {
                id: 5,
                title: "Hoa hướng dương",
                img: "/assets/images/flowers/hoa-huong-duong.jpg",
                price: "250.000",
                isSale: false
            },
            {
                id: 6,
                title: "Hộp hoa hổng đỏ",
                img: "/assets/images/flowers/hop-hoa-hong-do.jpg",
                price: "250.000",
                isSale: false
            },
            {
                id: 1,
                title: "new energy",
                img: "/assets/images/flowers/306089100_486173836851826_6750157363461441274_n.jpg",
                price: "200.000",
                isSale: true
            },
            {
                id: 2,
                title: "Giỏ hoa hồng vàng",
                img: "/assets/images/flowers/gio-hoa-hong-vang.jpg",
                price: "200.000",
                isSale: false
            },
            {
                id: 3,
                title: "Mix Hoa hồng trắng và hồng",
                img: "/assets/images/flowers/hoa-hong-hong-trang.jpg",
                price: "250.000",
                isSale: false
            },
            {
                id: 4,
                title: "Hoa mẫu đơn",
                img: "/assets/images/flowers/hoa-mau-don.jpg",
                price: "250.000",
                isSale: false
            },
            {
                id: 5,
                title: "Hoa hướng dương",
                img: "/assets/images/flowers/hoa-huong-duong.jpg",
                price: "250.000",
                isSale: false
            },
            {
                id: 6,
                title: "Hộp hoa hổng đỏ",
                img: "/assets/images/flowers/hop-hoa-hong-do.jpg",
                price: "250.000",
                isSale: false
            },
            {
                id: 1,
                title: "new energy",
                img: "/assets/images/flowers/306089100_486173836851826_6750157363461441274_n.jpg",
                price: "200.000",
                isSale: true
            },
            {
                id: 2,
                title: "Giỏ hoa hồng vàng",
                img: "/assets/images/flowers/gio-hoa-hong-vang.jpg",
                price: "200.000",
                isSale: false
            },
            {
                id: 3,
                title: "Mix Hoa hồng trắng và hồng",
                img: "/assets/images/flowers/hoa-hong-hong-trang.jpg",
                price: "250.000",
                isSale: false
            },
            {
                id: 4,
                title: "Hoa mẫu đơn",
                img: "/assets/images/flowers/hoa-mau-don.jpg",
                price: "250.000",
                isSale: false
            },
            {
                id: 5,
                title: "Hoa hướng dương",
                img: "/assets/images/flowers/hoa-huong-duong.jpg",
                price: "250.000",
                isSale: false
            },
            {
                id: 6,
                title: "Hộp hoa hổng đỏ",
                img: "/assets/images/flowers/hop-hoa-hong-do.jpg",
                price: "250.000",
                isSale: false
            },
            {
                id: 1,
                title: "new energy",
                img: "/assets/images/flowers/306089100_486173836851826_6750157363461441274_n.jpg",
                price: "200.000",
                isSale: true
            },
            {
                id: 2,
                title: "Giỏ hoa hồng vàng",
                img: "/assets/images/flowers/gio-hoa-hong-vang.jpg",
                price: "200.000",
                isSale: false
            },
            {
                id: 3,
                title: "Mix Hoa hồng trắng và hồng",
                img: "/assets/images/flowers/hoa-hong-hong-trang.jpg",
                price: "250.000",
                isSale: false
            },
            {
                id: 4,
                title: "Hoa mẫu đơn",
                img: "/assets/images/flowers/hoa-mau-don.jpg",
                price: "250.000",
                isSale: false
            },
            {
                id: 5,
                title: "Hoa hướng dương",
                img: "/assets/images/flowers/hoa-huong-duong.jpg",
                price: "250.000",
                isSale: false
            },
            {
                id: 6,
                title: "Hộp hoa hổng đỏ",
                img: "/assets/images/flowers/hop-hoa-hong-do.jpg",
                price: "250.000",
                isSale: false
            },
            {
                id: 1,
                title: "new energy",
                img: "/assets/images/flowers/306089100_486173836851826_6750157363461441274_n.jpg",
                price: "200.000",
                isSale: true
            },
            {
                id: 2,
                title: "Giỏ hoa hồng vàng",
                img: "/assets/images/flowers/gio-hoa-hong-vang.jpg",
                price: "200.000",
                isSale: false
            },
            {
                id: 3,
                title: "Mix Hoa hồng trắng và hồng",
                img: "/assets/images/flowers/hoa-hong-hong-trang.jpg",
                price: "250.000",
                isSale: false
            },
            {
                id: 4,
                title: "Hoa mẫu đơn",
                img: "/assets/images/flowers/hoa-mau-don.jpg",
                price: "250.000",
                isSale: false
            },
            {
                id: 5,
                title: "Hoa hướng dương",
                img: "/assets/images/flowers/hoa-huong-duong.jpg",
                price: "250.000",
                isSale: false
            },
            {
                id: 6,
                title: "Hộp hoa hổng đỏ",
                img: "/assets/images/flowers/hop-hoa-hong-do.jpg",
                price: "250.000",
                isSale: false
            }
        ];

        if (flowers.length > 0) {
            flowerList = flowers.map((item) => {
                let detailLink = '/flower/' + item.id;
                return (
                        <>
                            <div className="col-md-3 col-lg-3">
                                <a href={detailLink}>
                                    <FlowerCardComponent key={"flower_deal_" + item.id}
                                        flower={item} />
                                </a>
                            </div>
                        </>
                    )
                }
            );
        }
        return (
            <>
                <div className="row">
                    <div className="col-sm-12">
                        <div className="page-title-box">
                            <div className="btn-group float-right">
                                <ol className="breadcrumb hide-phone p-0 m-0">
                                    <li className="breadcrumb-item"><a href="#">Homepage</a></li>
                                    <li className="breadcrumb-item"><a href="#">Flower</a></li>
                                    <li className="breadcrumb-item active">List</li>
                                </ol>
                            </div>
                            <h4 className="page-title">Flower List</h4>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className='col-md-12'>
                        <div className="card-box task-detail">
                            <div className='row'>
                                {flowerList}
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default FlowerListPage