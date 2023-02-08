import React, { Component } from 'react'
import DataTable from 'react-data-table-component';

export class OrderPage extends Component {

    
    render() {

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
                <div className="row">
                    <div className="col-lg-12">
                        <div className="card-box task-detail">
                            <div className='row'>
                                <div className='col-md-12' style={{ textAlign: "center" }}>
                                    <DataTable
                                        columns={columns}
                                        data={data}
                                        pagination
                                        paginationComponentOptions={paginationComponentOptions}
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