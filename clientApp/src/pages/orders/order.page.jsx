import React, { Component } from 'react'
import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom'
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import './order.page.css'

export class OrderPage extends Component {

    constructor() {
        super();
        this.state = {
            startDate: '',
            endDate: ''
        }
    }
    handleChange() {

    }
    setStartDate(date) {
        this.setState({
            startDate: date
        })
    }
    setEndDate(date) {
        this.setState({
            endDate: date
        })
    }


    render() {
        const rowDisabledCriteria = row => row.status == "Đã giao hàng";

        const columns = [
            {
                name: 'Sản Phẩm',
                selector: row => row.title,
            },
            {
                name: 'Số Lượng',
                selector: row => row.amount,
            },
            {
                name: 'Khách Hàng',
                selector: row => row.clientName,
            },
            {
                name: 'Tình trạng',
                selector: row => row.status,
            },
            {
                name: 'Giá Tiền',
                selector: row => row.price,
            },
        ];

        const data = [
            {
                id: 1,
                title: 'Giỏ hoa hồng vàng',
                amount: '2',
                price: 400000,
                clientName: "Nguyen Van A",
                status: "Đã giao hàng"
            },
            {
                id: 2,
                title: 'Hoa Mẫu đơn',
                amount: '3',
                price: 600000,
                clientName: "Nguyen Van B",
                status: "Chưa giao hàng"
            },
            {
                id: 3,
                title: 'Hoa Mẫu đơn',
                amount: '3',
                price: 600000,
                clientName: "Nguyen Van B",
                status: "Chưa giao hàng"
            },
            {
                id: 4,
                title: 'Hoa Mẫu đơn',
                amount: '3',
                price: 600000,
                clientName: "Nguyen Van B",
                status: "Chưa giao hàng"
            },
            {
                id: 5,
                title: 'Hoa Mẫu đơn',
                amount: '3',
                price: 600000,
                clientName: "Nguyen Van B",
                status: "Chưa giao hàng"
            },
            {
                id: 6,
                title: 'Hoa Mẫu đơn',
                amount: '3',
                price: 600000,
                clientName: "Nguyen Van B",
                status: "Chưa giao hàng"
            },
            {
                id: 7,
                title: 'Hoa Mẫu đơn',
                amount: '3',
                price: 600000,
                clientName: "Nguyen Van B",
                status: "Chưa giao hàng"
            },
            {
                id: 8,
                title: 'Hoa Mẫu đơn',
                amount: '3',
                price: 600000,
                clientName: "Nguyen Van B",
                status: "Chưa giao hàng"
            },
            {
                id: 9,
                title: 'Hoa Mẫu đơn',
                amount: '3',
                price: 600000,
                clientName: "Nguyen Van B",
                status: "Chưa giao hàng"
            },
            {
                id: 10,
                title: 'Hoa Mẫu đơn',
                amount: '3',
                price: 600000,
                clientName: "Nguyen Van B",
                status: "Chưa giao hàng"
            },
            {
                id: 11,
                title: 'Hoa Mẫu đơn',
                amount: '3',
                price: 600000,
                clientName: "Nguyen Van B",
                status: "Chưa giao hàng"
            },
            {
                id: 12,
                title: 'Hoa Mẫu đơn',
                amount: '3',
                price: 600000,
                clientName: "Nguyen Van B",
                status: "Chưa giao hàng"
            },
            {
                id: 13,
                title: 'Hoa Mẫu đơn',
                amount: '3',
                price: 600000,
                clientName: "Nguyen Van B",
                status: "Chưa giao hàng"
            },
            {
                id: 14,
                title: 'Hoa Mẫu đơn',
                amount: '3',
                price: 600000,
                clientName: "Nguyen Van B",
                status: "Chưa giao hàng"
            },
            {
                id: 15,
                title: 'Hoa Mẫu đơn',
                amount: '3',
                price: 600000,
                clientName: "Nguyen Van B",
                status: "Chưa giao hàng"
            },
            {
                id: 16,
                title: 'Hoa Mẫu đơn',
                amount: '3',
                price: 600000,
                clientName: "Nguyen Van B",
                status: "Chưa giao hàng"
            },
            {
                id: 17,
                title: 'Hoa Mẫu đơn',
                amount: '3',
                price: 600000,
                clientName: "Nguyen Van B",
                status: "Chưa giao hàng"
            },
            {
                id: 18,
                title: 'Hoa Mẫu đơn',
                amount: '3',
                price: 600000,
                clientName: "Nguyen Van B",
                status: "Chưa giao hàng"
            },
            {
                id: 19,
                title: 'Hoa Mẫu đơn',
                amount: '3',
                price: 600000,
                clientName: "Nguyen Van B",
                status: "Chưa giao hàng"
            },
            {
                id: 20,
                title: 'Hoa Mẫu đơn',
                amount: '3',
                price: 600000,
                clientName: "Nguyen Van B",
                status: "Chưa giao hàng"
            },
            {
                id: 21,
                title: 'Hoa Mẫu đơn',
                amount: '3',
                price: 600000,
                clientName: "Nguyen Van B",
                status: "Chưa giao hàng"
            },
            {
                id: 22,
                title: 'Hoa Mẫu đơn',
                amount: '3',
                price: 600000,
                clientName: "Nguyen Van B",
                status: "Chưa giao hàng"
            },
            {
                id: 23,
                title: 'Hoa Mẫu đơn',
                amount: '3',
                price: 600000,
                clientName: "Nguyen Van B",
                status: "Chưa giao hàng"
            },
            {
                id: 24,
                title: 'Hoa Mẫu đơn',
                amount: '3',
                price: 600000,
                clientName: "Nguyen Van B",
                status: "Chưa giao hàng"
            }
        ]
        const paginationComponentOptions = {
            rowsPerPageText: 'Số lượng dòng',
            rangeSeparatorText: 'Của',
            selectAllRowsItem: false,
            selectAllRowsItemText: 'Tất cả',
        };
        return (
            <>

                <div className="row">
                    <div className="col-sm-12">
                        <div className="page-title-box">
                            <div className="btn-group float-right">
                                <ol className="breadcrumb hide-phone p-0 m-0">
                                    <li className="breadcrumb-item"><a href="#">Homepage</a></li>
                                    <li className="breadcrumb-item"><a href="#">Order</a></li>
                                    <li className="breadcrumb-item active">List</li>
                                </ol>
                            </div>
                            <h4 className="page-title">Danh sách đặt hoa</h4>
                        </div>
                    </div>
                </div>
                <div className='row'>
                <div class="col-md-3 col-xl-3">
                        <div class="card-box tilebox-one">
                            <i class="icon-paypal float-right text-muted"></i>
                            <h6 class="text-muted text-uppercase mt-0">Lợi Nhuận</h6>
                            <h2 class="m-b-20">$<span data-plugin="counterup">46,782</span></h2>
                            <span class="badge badge-danger"> -29% </span> <span class="text-muted">From previous period</span>
                        </div>
                    </div>
                    <div class="col-md-3 col-xl-3">
                        <div class="card-box tilebox-one">
                            <i class="icon-layers float-right text-muted"></i>
                            <h6 class="text-muted text-uppercase mt-0">Số đơn hàng</h6>
                            <h2 class="m-b-20" data-plugin="counterup">1,587</h2>
                            <span class="badge badge-custom"> +11% </span> <span class="text-muted">From previous period</span>
                        </div>
                    </div>
                    <div class="col-md-3 col-xl-3">
                        <div class="card-box tilebox-one">
                            <i class="icon-chart float-right text-muted"></i>
                            <h6 class="text-muted text-uppercase mt-0">Giá trung bình</h6>
                            <h2 class="m-b-20">$<span data-plugin="counterup">15.9</span></h2>
                            <span class="badge badge-custom"> 0% </span> <span class="text-muted">From previous period</span>
                        </div>
                    </div>
                    <div class="col-md-3 col-xl-3">
                        <div class="card-box tilebox-one">
                            <i class="icon-rocket float-right text-muted"></i>
                            <h6 class="text-muted text-uppercase mt-0">Tổng số đơn hàng trong năm</h6>
                            <h2 class="m-b-20" data-plugin="counterup">1,890</h2>
                            <span class="badge badge-custom"> +89% </span> <span class="text-muted">Last year</span>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="card-box task-detail">
                            <div className='row'>
                                <div className='col-md-6'>
                                    <div className='row'>
                                        <div className='col-md-6'>
                                            <div claclassNamess="form-group">
                                                <label>Từ ngày</label>
                                                <div>
                                                    <div className="input-group">

                                                        <DatePicker selected={this.state.startDate} onChange={(date) => this.setStartDate(date)} />
                                                    </div>
                                                </div>

                                            </div>

                                        </div>
                                        <div className='col-md-6'>
                                            <label>Đến ngày</label>
                                            <div>
                                                <div className="input-group">
                                                    <DatePicker selected={this.state.endDate} onChange={(date) => this.setEndDate(date)} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-12'>
                                    <div className="hidden-print mt-4 mb-4">
                                        <div className="text-left">
                                            <Link href="#" className="btn btn-primary waves-effect waves-light btn-search-page">Tìm kiếm</Link>
                                            <Link href="#" className="btn btn-primary waves-effect waves-light btn-ship-page"
                                            >Xuất Excel</Link>
                                            <Link href="#" className="btn btn-danger waves-effect waves-light btn-ship-page"
                                            >Giao hàng</Link>

                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-12' style={{ textAlign: "center" }}>

                                    <DataTable
                                        columns={columns}
                                        data={data}
                                        pagination
                                        selectableRows
                                        onSelectedRowsChange={() => this.handleChange()}
                                        paginationComponentOptions={paginationComponentOptions}
                                        selectableRowDisabled={rowDisabledCriteria}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default OrderPage