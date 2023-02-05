import React, { Component } from 'react'

export class FlowerCardComponent extends Component {
    render() {
        let flower = this.props.flower;

        return (
            <>
                <div className="card m-b-30 ribbon-box">
                    {flower.isSale ? <div className="ribbon-two ribbon-two-danger"><span>Sale</span></div> : ""}
                    <img className="card-img-top img-fluid flower-img"
                        src={flower.img} alt="Card cap" />
                    <div class="card-body ps-0" style={{ color: "black" }}>
                        <h5 class="fw-bold text-1000 text-truncate mb-1">{flower.title}</h5>
                        <span class="text-1000 fw-bold">{flower.price}đ</span>
                    </div>
                </div>
            </>
        )
    }
}

export default FlowerCardComponent