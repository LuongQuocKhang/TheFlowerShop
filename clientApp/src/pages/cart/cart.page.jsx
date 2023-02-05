import React, { Component } from 'react'

export class CartPage extends Component {
    render() {
        return (
            <>
                <div className="row">
                    <div className="col-sm-12">
                        <div className="page-title-box">
                            <div className="btn-group float-right">
                                <ol className="breadcrumb hide-phone p-0 m-0">
                                    <li className="breadcrumb-item"><a href="#">Homepage</a></li>
                                    <li className="breadcrumb-item"><a href="#">Cart</a></li>
                                    <li className="breadcrumb-item active">Detail</li>
                                </ol>
                            </div>
                            <h4 className="page-title">Cart Detail</h4>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-8">
                        <div className="card-box task-detail">
                            <div className="media mt-0 m-b-30">
                                <img className="d-flex mr-3 rounded-circle" alt="64x64" src="assets/images/users/avatar-2.jpg" style={{width: 48, height: 48}}/>
                                <div className="media-body">
                                    <h5 className="media-heading mb-0 mt-0">James L. Kelley</h5>
                                    <span className="badge badge-danger">Urgent</span>
                                </div>
                            </div>

                            <h4 className="m-b-20">Code HTML email template for welcome email</h4>

                            <p className="text-muted">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, illo, iste
                                itaque voluptas corrupti ratione reprehenderit magni similique? Tempore, quos
                                delectus asperiores libero voluptas quod perferendis! Voluptate, quod illo
                                rerum? Lorem ipsum dolor sit amet.
                            </p>

                            <p className="text-muted">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, illo, iste
                                itaque voluptas corrupti ratione reprehenderit magni similique? Tempore, quos
                                delectus asperiores libero voluptas quod perferendis! Voluptate, quod illo
                                rerum? Lorem ipsum dolor sit amet.
                            </p>

                            <ul className="list-inline task-dates m-b-0 mt-5">
                                <li>
                                    <h5 className="m-b-5">Start Date</h5>
                                    <p> 01 December 2017 <small className="text-muted">1:00 PM</small></p>
                                </li>

                                <li>
                                    <h5 className="m-b-5">Due Date</h5>
                                    <p> 17 February 2018 <small className="text-muted">12:00 PM</small></p>
                                </li>
                            </ul>
                            <div className="clearfix"></div>

                            <div className="task-tags mt-4">
                                <h5 className="">Tags</h5>
                                <input type="text" value="Amsterdam,Washington,Sydney" data-role="tagsinput" placeholder="add tags"/>
                            </div>

                            <div className="assign-team mt-4">
                                <h5 className="m-b-5">Assign to</h5>
                                <div>
                                    <a href="#"> <img className="rounded-circle thumb-sm" alt="64x64" src="assets/images/users/avatar-2.jpg"/> </a>
                                    <a href="#"> <img className="rounded-circle thumb-sm" alt="64x64" src="assets/images/users/avatar-3.jpg"/> </a>
                                    <a href="#"> <img className="rounded-circle thumb-sm" alt="64x64" src="assets/images/users/avatar-5.jpg"/> </a>
                                    <a href="#"> <img className="rounded-circle thumb-sm" alt="64x64" src="assets/images/users/avatar-8.jpg"/> </a>
                                    <a href="#"><span className="add-new-plus"><i className="mdi mdi-plus"></i> </span></a>
                                </div>
                            </div>

                            <div className="attached-files mt-4">
                                <h5 className="">Attached Files </h5>
                                <div className="files-list">
                                    <div className="file-box">
                                        <a href=""><img src="assets/images/attached-files/img-1.jpg" className="img-responsive img-thumbnail" alt="attached-img"/></a>
                                        <p className="font-13 mb-1 text-muted"><small>File one</small></p>
                                    </div>
                                    <div className="file-box">
                                        <a href=""><img src="assets/images/attached-files/img-2.jpg" className="img-responsive img-thumbnail" alt="attached-img"/></a>
                                        <p className="font-13 mb-1 text-muted"><small>Attached-2</small></p>
                                    </div>
                                    <div className="file-box">
                                        <a href=""><img src="assets/images/attached-files/img-3.jpg" className="img-responsive img-thumbnail" alt="attached-img"/></a>
                                        <p className="font-13 mb-1 text-muted"><small>Dribbble shot</small></p>
                                    </div>
                                    <div className="file-box ml-3">
                                        <a href="#"><span className="add-new-plus"><i className="mdi mdi-plus"></i> </span></a>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12">
                                        <div className="text-right m-t-30">
                                            <button type="submit" className="btn btn-success waves-effect waves-light">
                                                Save
                                            </button>
                                            <button type="button"
                                                    className="btn btn-light waves-effect">Cancel
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="card-box">
                            <h4 className="header-title m-b-30">Comments (5)</h4>

                            <div>

                                <div className="media m-b-20">
                                    <div className="d-flex mr-3">
                                        <a href="#"> <img className="media-object rounded-circle thumb-sm" alt="64x64" src="assets/images/users/avatar-1.jpg"/> </a>
                                    </div>
                                    <div className="media-body">
                                        <h5 className="mt-0">Maxine Kennedy</h5>
                                        <p className="font-13 text-muted mb-0">
                                            <a href="" className="text-dark">@Michael</a>
                                            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                                            ante sollicitudin commodo. Cras purus odio.
                                        </p>
                                        <a href="" className="text-success font-13">Reply</a>
                                    </div>
                                </div>

                                <div className="media m-b-20">
                                    <div className="d-flex mr-3">
                                        <a href="#"> <img className="media-object rounded-circle thumb-sm" alt="64x64" src="assets/images/users/avatar-2.jpg"/> </a>
                                    </div>
                                    <div className="media-body">
                                        <h5 className="mt-0">Doyle Bell</h5>
                                        <p className="font-13 text-muted mb-0">
                                            <a href="" className="text-dark">@Michael</a>
                                            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                                            ante sollicitudin commodo. Cras purus odio.
                                        </p>
                                        <a href="" className="text-success font-13">Reply</a>

                                        <div className="media m-t-20 m-b-20">
                                            <div className="d-flex mr-3">
                                                <a href="#"> <img className="media-object rounded-circle thumb-sm" alt="64x64" src="assets/images/users/avatar-3.jpg"/> </a>
                                            </div>
                                            <div className="media-body">
                                                <h5 className="mt-0">Elena Vancamp</h5>
                                                <p className="font-13 text-muted mb-0">
                                                    <a href="" className="text-dark">@Doyle</a>
                                                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                                                    ante sollicitudin commodo. Cras purus odio.
                                                </p>
                                                <a href="" className="text-success font-13">Reply</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="media m-b-20">
                                    <div className="d-flex mr-3">
                                        <a href="#"> <img className="media-object rounded-circle thumb-sm" alt="64x64" src="assets/images/users/avatar-1.jpg"/> </a>
                                    </div>
                                    <div className="media-body">
                                        <h5 className="mt-0">Maxine Kennedy</h5>
                                        <p className="font-13 text-muted mb-0">
                                            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                                            ante sollicitudin commodo. Cras purus odio.
                                        </p>
                                        <a href="" className="text-success font-13">Reply</a>
                                    </div>
                                </div>

                                <div className="media m-b-20">
                                    <div className="d-flex mr-3">
                                        <a href="#"> <img className="media-object rounded-circle thumb-sm" alt="64x64" src="assets/images/users/avatar-5.jpg"/> </a>
                                    </div>
                                    <div className="media-body">
                                        <h5 className="mt-0">Erick Loper</h5>
                                        <p className="font-13 text-muted mb-0">
                                            <a href="" className="text-dark">@Maxine</a>
                                            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                                            ante sollicitudin commodo. Cras purus odio.
                                        </p>
                                        <a href="" className="text-success font-13">Reply</a>
                                    </div>
                                </div>

                                <div className="media m-b-20">
                                    <div className="d-flex mr-3">
                                        <a href="#"> <img className="media-object rounded-circle thumb-sm" alt="64x64" src="assets/images/users/avatar-1.jpg"/> </a>
                                    </div>
                                    <div className="media-body">
                                        <input type="text" className="form-control input-sm" placeholder="Some text value..."/>
                                        <div className="mt-2 text-right">
                                            <button type="submit" className="btn btn-sm btn-custom waves-effect waves-light">Send</button>
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

export default CartPage