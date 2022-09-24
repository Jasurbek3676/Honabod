import React, { Component } from "react";
import Slider from "react-slick";
import s from "./News.module.css"
import m from '../News/img/mak.jpg'
import n from '../News/img/mak2.jpg'
import b from '../News/img/mak3.jpg'
import v from '../News/img/mak4.jpg'
import c from '../News/img/mak5.jpg'
import d from '../News/img/date.png'
import e from '../News/img/eye.png'
const News = () => {

    const settings = {
      dots: true,
      infinite: true,
      speed: 500, 
      slidesToShow: 1,
      slidesToScroll: 1}





      
    return (
      <div className={s.app}>
            <div class="container">
                <div class="row align-items-end">
                            <div class="col mb-9" style={{height:"480px"}}>
                              <Slider style={{width: '337px', height:"400px"}} {...settings}>
                                <div className={s.carusel}>
                                  <h3>
                                    <div className={s.head2} >
                                      <p>Yangiliklar</p>
                                    </div>
                                  <img src={m} alt="" /></h3>
                                </div>
                                <div className={s.carusel}>
                                  <h3>
                                  <div className={s.head2}>
                                      <p>Yangiliklar</p>
                                    </div>
                                  <img src={n} alt="" />
                                  </h3>                        
                                </div>
                                <div className={s.carusel}>
                                  <h3>
                                  <div className={s.head2}>
                                      <p>Yangiliklar</p>
                                    </div>
                                  <img src={b} alt="" />
                                  </h3>                        
                                </div>
                                <div className={s.carusel}>
                                  <h3>
                                  <div className={s.head2}>
                                      <p>Yangiliklar</p>
                                    </div>
                                  <img src={v} alt="" />
                                  </h3>                        
                                </div>
                                <div className={s.carusel}>
                                  <h3>
                                    <div className={s.head2}>
                                      <p>Yangiliklar</p>
                                    </div>
                                  <img src={c} alt="" />
                                  </h3>                        
                                </div>
                              </Slider>
                              </div>



                              <div class="col ">
                              <div className={s.head3}>
                                <p>So‘nggi yangiliklar</p>
                              </div>
                              <div className={s.content}>
                                <div className={s.wive}>
                                  <img src={d} alt="" />
                                  <p>10:00 / 09.09.2022</p>
                                  <img src={e} alt="" />
                                  <p>25</p>
                                </div>
                                <h1>Sayyor qabul: Murojaatlar kelgusi yil dasturlarini oldindan belgilab olish uchun asos bo‘ladi</h1>
                              </div>
                              <div className={s.content}>
                                <div className={s.wive}>
                                  <img src={d} alt="" />
                                  <p>10:00 / 09.09.2022</p>
                                  <img src={e} alt="" />
                                  <p>25</p>
                                </div>
                                <h1>Sayyor qabul: Murojaatlar kelgusi yil dasturlarini oldindan belgilab olish uchun asos bo‘ladi</h1>
                              </div>
                              <div className={s.content}>
                                <div className={s.wive}>
                                  <img src={d} alt="" />
                                  <p>10:00 / 09.09.2022</p>
                                  <img src={e} alt="" />
                                  <p>25</p>
                                </div>
                                <h1>Sayyor qabul: Murojaatlar kelgusi yil dasturlarini oldindan belgilab olish uchun asos bo‘ladi</h1>
                              </div>
                              <div className={s.content}>
                                <div className={s.wive}>
                                  <img src={d} alt="" />
                                  <p>10:00 / 09.09.2022</p>
                                  <img src={e} alt="" />
                                  <p>25</p>
                                </div>
                                <h1>Sayyor qabul: Murojaatlar kelgusi yil dasturlarini oldindan belgilab olish uchun asos bo‘ladi</h1>
                              </div>

                        </div>






                        <div class="col">
                              <div className={s.content}>
                                  <div className={s.wive}>
                                    <img src={d} alt="" />
                                    <p>10:00 / 09.09.2022</p>
                                    <img src={e} alt="" />
                                    <p>25</p>
                                  </div>
                                  <h1>Sayyor qabul: Murojaatlar kelgusi yil dasturlarini oldindan belgilab olish uchun asos bo‘ladi</h1>
                              </div>
                              <div className={s.content}>
                                <div className={s.wive}>
                                  <img src={d} alt="" />
                                  <p>10:00 / 09.09.2022</p>
                                  <img src={e} alt="" />
                                  <p>25</p>
                                </div>
                                <h1>Sayyor qabul: Murojaatlar kelgusi yil dasturlarini oldindan belgilab olish uchun asos bo‘ladi</h1>
                              </div>
                              <div className={s.content}>
                                <div className={s.wive}>
                                  <img src={d} alt="" />
                                  <p>10:00 / 09.09.2022</p>
                                  <img src={e} alt="" />
                                  <p>25</p>
                                </div>
                                <h1>Sayyor qabul: Murojaatlar kelgusi yil dasturlarini oldindan belgilab olish uchun asos bo‘ladi</h1>
                              </div>
                              <div className={s.content}>
                                <div className={s.wive}>
                                  <img src={d} alt="" />
                                  <p>10:00 / 09.09.2022</p>
                                  <img src={e} alt="" />
                                  <p>25</p>
                                </div>
                                <h1>Sayyor qabul: Murojaatlar kelgusi yil dasturlarini oldindan belgilab olish uchun asos bo‘ladi</h1>
                              </div>
                        </div>
                </div>
                
            </div>
          <div className={s.slide}>

          </div>

      </div>
    );
  }
export default News;