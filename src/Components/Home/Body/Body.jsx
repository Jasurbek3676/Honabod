import React, {Component } from 'react'
import s from './Body.module.css'
import { Container } from 'react-bootstrap'
import Slider from "react-slick";
import aholi from './img/aholi.png'
import up from './img/up.png'
import qurulish from './img/qurulish.png'
import shot from './img/shot.png'
import pul from './img/pul.png'
import chart from './img/chart.png'
import dollar from './img/dollar.png'




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
        <Container>

        
        <div className={s.main}>
          <div className={s.text}>
          <div className={s.chiziq}></div>
          <h1>Xonobod Raqamlarda</h1>
          </div>
        <Slider {...settings} autoplay replay> 

         
         <div className={s.bir}>
              <div className={s.jf}>
                <img src={aholi} alt="" />
                <div className={s.jf1}>
                  <div className={s.jf2}>
                    <h2>878.599%</h2>
                    <img src={up} alt="" />
                  </div>
                  <p>2022 yilning yanvar oyi holatiga</p>
                </div>
              </div>
              <h3>Aholi soni</h3>
            </div>
         
       


          
            <div className={s.ikki}>
              <div className={s.jf}>
                  <img src={qurulish} alt="" />
                  <div className={s.jf1}>
                      <div className={s.jf2}>
                          <h2>117.0%</h2>
                          <img src={up} alt="" />
                      </div>
                      <p>2021 yilning yanvar-dekabr oyiga nisbatan foiz</p>
                  </div>
              </div>
              <h3>Qurilish ishlari</h3>
            </div>
         


          
              <div className={s.uch}>
              <div className={s.jf}>
                    <img src={shot} alt="" />
                    <div className={s.jf1}>
                        <div className={s.jf2}>
                            <h2>110.8%</h2>
                            <img src={up} alt="" />
                        </div>
                        <p>2021 yilning yanvar-dekabr oyiga nisbatan foiz</p>
                    </div>
                </div>
                <h3>Chakana savdo tavar aylanmasi</h3>
              </div>
         


          
              <div className={s.tort}>
              <div className={s.jf}>
                    <img src={pul} alt="" />
                    <div className={s.jf1}>
                        <div className={s.jf2}>
                            <h2>109.1%</h2>
                            <img src={up} alt="" />
                        </div>
                        <p>2021 yilning yanvar-dekabr oyiga nisbatan foiz</p>
                    </div>
                </div>
                <h3>Tashkil etilgan kichik biznes subyektlari soni</h3>
              </div>
      


        
              <div className={s.besh}>
              <div className={s.jf}>
                    <img src={chart} alt="" />
                    <div className={s.jf1}>
                        <div className={s.jf2}>
                            <h2>110.2%</h2>
                            <img src={up} alt="" />
                        </div>
                        <p>2021 yilning yanvar-dekabr oyiga nisbatan foiz</p>
                    </div>
                </div>
                <h3>Yalpi hududiy mahsulot</h3>
              </div>
      


          
              <div className={s.olti}>
              <div className={s.jf}>
                    <img src={dollar} alt="" />
                    <div className={s.jf1}>
                        <div className={s.jf2}>
                            <h2>116.4%</h2>
                            <img src={up} alt="" />
                        </div>
                        <p>2021 yilning yanvar-dekabr oyiga nisbatan foiz</p>
                    </div>
                </div>
                <h3>Asosiy kapitalga kiritilgan investitsiyalar</h3>
              </div>
         

        </Slider>
        </div>
        </Container>
      </div>
    );
  }
}
