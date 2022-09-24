import React from 'react'
import s from './Qabulxona.module.css'
import a from '../Qbulxona/Img/murojat.svg'
import b from '../Qbulxona/Img/sms.svg'
import d from '../Qbulxona/Img/yozuv.svg'
const Qabulxona = () => {
  return (
    <div className={s.boss}>
      <div></div>
          <div className={s.rightmenu}>
              <div className={s.lastnews}>
                    <span>Interaktiv qabulxona</span>
              </div> 


              <br />
              <div class={s.rightmenuitem}> 
                <span>
                  <img src={a} alt="" />
                </span>
                <a href="https://regulation.gov.uz/uz/document/index?GlobalSearch%5Btitle%5D=&GlobalSearch%5Bid%5D=&GlobalSearch%5Bauthority_id%5D=7580&GlobalSearch%5Bdocument_type_id%5D=&GlobalSearch%5Bpublication_at_range%5D=&GlobalSearch%5Bdiscussing_status_id%5D=2" target={'_blank'}>
                  O`z fikrlaringizni yuboring
                </a>
              </div>


              <div class={s.rightmenuitem}>
                <span>
                  <img src={b} alt="" />
                </span>
                <a href="">
                  O`z fikrlaringizni yuboring
                </a>
              </div>


              <div class={s.rightmenuitem}>
                <span>
                  <img src={d} alt="" />
                </span>
                <a href="">O`z fikrlaringizni yuboring</a>
              </div>


          </div>
    </div>
  )
}

export default Qabulxona