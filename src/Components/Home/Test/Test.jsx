import React from 'react'
import d from '../Slide/img/doc1.png'
import s from './Test.module.css'
// import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
const Test = () => {
    
  return (
    <div>
        <div class="owl-carousel owl-theme owl-loaded">
            <div class="owl-stage-outer">
                <div class="owl-stage">
                    <div class="owl-item">
                    <div className={s.bir}>
                      <div className={s.text}>
                          <p>Viloyat hokimining qaror va faroyishlari</p> 
                      </div>
                      <div className={s.img}>
                        <div></div>
                      <img src={d} alt="" />
                      </div>
                  </div>
                    </div>
                    <div class="owl-item">
                    <div className={s.bir}>
                      <div className={s.text}>
                          <p>Viloyat hokimining qaror va faroyishlari</p> 
                      </div>
                      <div className={s.img}>
                        <div></div>
                      <img src={d} alt="" />
                      </div>
                  </div>
                    </div>
                    <div class="owl-item">
                    <div className={s.bir}>
                      <div className={s.text}>
                          <p>Viloyat hokimining qaror va faroyishlari</p> 
                      </div>
                      <div className={s.img}>
                        <div></div>
                      <img src={d} alt="" />
                      </div>
                  </div>
                    </div>
                    <div class="owl-item">
                    <div className={s.bir}>
                      <div className={s.text}>
                          <p>Viloyat hokimining qaror va faroyishlari</p> 
                      </div>
                      <div className={s.img}>
                        <div></div>
                      <img src={d} alt="" />
                      </div>
                  </div>
                    </div>
                    <div class="owl-item">
                    <div className={s.bir}>
                      <div className={s.text}>
                          <p>Viloyat hokimining qaror va faroyishlari</p> 
                      </div>
                      <div className={s.img}>
                        <div></div>
                      <img src={d} alt="" />
                      </div>
                  </div>
                    </div>
                    <div class="owl-item">
                    <div className={s.bir}>
                      <div className={s.text}>
                          <p>Viloyat hokimining qaror va faroyishlari</p> 
                      </div>
                      <div className={s.img}>
                        <div></div>
                      <img src={d} alt="" />
                      </div>
                  </div>
                    </div>
                </div>
                
            </div>
            <div class="owl-nav">
                <div class="owl-prev">prev</div>
                <div class="owl-next">next</div>
            </div>
            <div class="owl-dots">
                <div class="owl-dot active"><span></span></div>
                <div class="owl-dot"><span></span></div>
                <div class="owl-dot"><span></span></div>
            </div>
        </div>
    </div>
  )
}

export default Test