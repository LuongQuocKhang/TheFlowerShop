import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import DataTable from 'react-data-table-component';

export class FlowerManagementListPage extends Component {

    handleChange() {

    }

    render() {

        const columns = [
            {
                name: '#',
                selector: row => row.id,
            },
            {
                name: 'Sản Phẩm',
                selector: row => {
                    let urlDetail = '/management/' + row.id;
                    return <Link to={urlDetail}> {row.title} </Link>
                }
            },
            {
                name: 'Giá Tiền',
                selector: row => row.price,
            },
            {
                name: 'Khuyến mãi',
                selector: row => row.promotion,
            },
        ]

        const data = [
            {
                id: 1,
                title: 'Giỏ hoa hồng vàng',
                price: 400000,
                promotion: "Giảm 10% tám tháng 3"
            },
            {
                id: 2,
                title: 'Giỏ hoa hồng vàng',
                price: 400000,
                promotion: "Giảm 10% tám tháng 3"
            },
            {
                id: 3,
                title: "Hộp hoa tươi - Sắc Hồng Xinh - 5424",
                price: 700000,
                promotion: ""
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
                                    <li className="breadcrumb-item"><Link to="">Homepage</Link></li>
                                    <li className="breadcrumb-item"><Link href="#">Management</Link></li>
                                    <li className="breadcrumb-item active">Flower List</li>
                                </ol>
                            </div>
                            <h4 className="page-title">Danh sách hoa</h4>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <div className="card-box">
                            <div className="hidden-print mt-4 mb-4">
                                <div className="text-left">
                                    <Link to="/management/add" className="btn btn-danger waves-effect waves-light" style={{ MarginLeft: 10 }}>Thêm hoa mới</Link>
                                </div>
                            </div>

                            <DataTable
                                columns={columns}
                                data={data}
                                pagination
                                selectableRows
                                onSelectedRowsChange={() => this.handleChange()}
                                paginationComponentOptions={paginationComponentOptions}
                            // selectableRowDisabled={rowDisabledCriteria}
                            />

                        </div>

                    </div>

                </div>
            </>
        )
    }
}

export default FlowerManagementListPage