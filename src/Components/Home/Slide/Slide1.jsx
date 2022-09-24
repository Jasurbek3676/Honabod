import React, {Component } from 'react'
import s from './Slide1.module.css'
import { Container } from 'react-bootstrap'
import Slider from "react-slick";
import d from './img/doc1.png'

export default class Responsive extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className={s.back}> 
        <div style={{color: 'black'}} id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">   
        <Container>
            <Slider {...settings}  autoplay>
                  <div className={s.bir}>
                      <div className={s.text}>
                          <p>Viloyat hokimining qaror va faroyishlari</p> 
                      </div>
                      <div className={s.img}>
                        <div></div>
                      <img src={d} alt="" />
                      </div>
                  </div>
                  <div className={s.bir}>
                      <div className={s.text}>
                          <p>Viloyat hokimining qaror va faroyishlari</p>
                      </div>
                      <div className={s.img}>
                        <div></div>
                      <img src={d} alt="" />
                      </div>
                  </div>
                  <div className={s.bir}>
                      <div className={s.text}>
                          <p>Viloyat hokimining qaror va faroyishlari</p>
                      </div>
                      <div className={s.img}>
                        <div></div>
                      <img src={d} alt="" />
                      </div>
                  </div>
                  <div className={s.bir}>
                      <div className={s.text}>
                          <p>Viloyat hokimining qaror va faroyishlari</p>
                      </div>
                      <div className={s.img}>
                        <div></div>
                      <img src={d} alt="" />
                      </div>
                  </div>
                  <div className={s.bir}>
                      <div className={s.text}>
                          <p>Viloyat hokimining qaror va faroyishlari</p>
                      </div>
                      <div className={s.img}>
                        <div></div>
                      <img src={d} alt="" />
                      </div>
                  </div>
                  <div className={s.bir}>
                      <div className={s.text}>
                          <p>Viloyat hokimining qaror va faroyishlari</p>
                      </div>
                      <div className={s.img}>
                        <div></div>
                      <img src={d} alt="" />
                      </div>
                  </div>
                  <div className={s.bir}>
                      <div className={s.text}>
                          <p>Viloyat hokimining qaror va faroyishlari</p>
                      </div>
                      <div className={s.img}>
                        <div></div>
                      <img src={d} alt="" />
                      </div>
                  </div>
                  <div className={s.bir}>
                      <div className={s.text}>
                          <p>Viloyat hokimining qaror va faroyishlari</p>
                      </div>
                      <div className={s.img}>
                        <div></div>
                      <img src={d} alt="" />
                      </div>
                  </div>
                  <div className={s.bir}>
                      <div className={s.text}>
                          <p>Viloyat hokimining qaror va faroyishlari</p>
                      </div>
                      <div className={s.img}>
                        <div></div>
                      <img src={d} alt="" />
                      </div>
                  </div>
            </Slider>
            </Container>
        </div>
      </div>
    );
  }
}
