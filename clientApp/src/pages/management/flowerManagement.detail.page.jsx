import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class FlowerManagementDetailPage extends Component {
    render() {
        return (
            <>
                <div className="row">
                    <div className="col-sm-12">
                        <div className="page-title-box">
                            <div className="btn-group float-right">
                                <ol className="breadcrumb hide-phone p-0 m-0">
                                    <li className="breadcrumb-item"><Link to="">Homepage</Link></li>
                                    <li className="breadcrumb-item"><Link href="#">Management</Link></li>
                                    <li className="breadcrumb-item">Flower</li>
                                    <li className="breadcrumb-item active">Detail</li>
                                </ol>
                            </div>
                            <h4 className="page-title">Thông tin hoa</h4>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <div className="card-box">
                            
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default FlowerManagementDetailPage