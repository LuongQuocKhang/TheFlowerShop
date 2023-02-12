import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { EditorState } from 'draft-js';
import { Editor } from "react-draft-wysiwyg";

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import './flowerManagement.add.css'

export class FlowerManagementAddPage extends Component {
    constructor() {
        super();
        this.state = {
            editorState: EditorState.createEmpty(),
        }
    }


    onEditorStateChange = (editorState) => {
        this.setState({
            editorState,
        });
    };
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
                                    <li className="breadcrumb-item active">Add</li>
                                </ol>
                            </div>
                            <h4 className="page-title">Thêm thông tin hoa</h4>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <div className="card-box">
                            <div className="row">
                                <div className="col-12">
                                    <div className="card-box">
                                        <h4 className="m-t-0 header-title">Thêm sản phẩm mới</h4>

                                        <div className="row">
                                            <div className="col-12">
                                                <div className="p-20">
                                                    <form className="form-horizontal">
                                                        <div className="form-group row">
                                                            <label className="col-2 col-form-label">Tên sản phẩm</label>
                                                            <div className="col-8">
                                                                <input type="text" className="form-control" />
                                                            </div>
                                                        </div>
                                                        <div className="form-group row">
                                                            <label className="col-2 col-form-label">Giá tiền</label>
                                                            <div className="col-md-8">
                                                                <input type="number" placeholder="" data-a-sign="VND " className="form-control autonumber" />
                                                            </div>
                                                        </div>
                                                        <div className="form-group row">
                                                            <label className="col-2 col-form-label">Mô tả</label>
                                                            <div className="col-md-12">
                                                                <Editor
                                                                    editorState={this.state.editorState}
                                                                    wrapperClassName="demo-wrapper"
                                                                    editorClassName="demo-editor"
                                                                    onEditorStateChange={this.onEditorStateChange}
                                                                />
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                            <div className="hidden-print mt-4 mb-4">
                                                <div className="text-left">
                                                    <Link to="/management/add" className="btn btn-danger waves-effect waves-light" style={{ MarginLeft: 10 }}>Thêm hoa mới</Link>
                                                </div>
                                            </div>
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

export default FlowerManagementAddPage