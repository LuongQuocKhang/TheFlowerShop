import React, { Component } from 'react'
import { Carousel } from 'react-responsive-carousel'
import './carousel.css'

export class AdvertisementComponent extends Component {
    render() {
        const onChange = async () => {

        }
        const onClickItem = async () => {

        }
        const onClickThumb = async () => {

        }
        let bannerCarousel = "";

        let banners = [
            {
                id: 1,
                src: "assets/images/banner/banner-noel.jpg"
            },
            {
                id: 2,
                src: "assets/images/banner/cay-thong-giang-sinh.jpg"
            },
            {
                id: 3,
                src: "assets/images/banner/only-rose.jpg"
            }
        ];

        bannerCarousel = banners.map((banner) => {
            return (
                <div>
                    <img key={banner.id}
                        src={banner.src}
                        alt="Card cap" style={{height: 450}} />
                </div>
            )
        })

        return (
            <>
                <Carousel showArrows={true} onChange={onChange} onClickItem={onClickItem} onClickThumb={onClickThumb}
                    autoPlay={true}
                    infiniteLoop={true}
                    showThumbs={false}
                    transitionTime={2}
                >
                    
                   {bannerCarousel}
                </Carousel>
            </>
        )
    }
}

export default AdvertisementComponent