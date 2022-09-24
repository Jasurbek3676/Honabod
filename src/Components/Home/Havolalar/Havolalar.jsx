import React from 'react'
import s from './Havolalar.module.css'
import a from './Img/besh.png'
import b from './Img/br.png'
import d from './Img/ikki.png'
import e from './Img/olti.png'
import f from './Img/sakkiz.png'
import g from './Img/toqqiz.png'
import h from './Img/tor.png'
import i from './Img/uch.png'
import j from './Img/yetti.png'
const Havolalar = () => {
  return (
    <div className={s.app}>
         <div className={s.colxl8}>
        <div className={s.usefulout}>
            <div className={s.heading}>
                <span className={s.headeng}>Foydali havolalar</span>
            </div>
            <div className={s.row}>

                <div > 
                     <div className={s.colmycolmd6}>
                    <a href="http://">
                        <div className={s.useful}>
                            <img src={b} alt="" />
                            <span className={s.usefal}>Jamoaviy murojatlar Portali</span>
                        </div>
                    </a>
                </div>
                
                
                </div>
              
                <div className={s.colmycolmd6}>
                    <a href="http://">
                        <div className={s.useful}>
                            <img src={d} alt="" />
                            <span className={s.usefal}>O‘ZBEKISTON RESPUBLIKASI  PREZIDENTI  RASMIY SAYTI</span>
                        </div>
                    </a>
                </div>
                <div className={s.colmycolmd6}>
                    <a href="http://">
                        <div className={s.useful}>
                            <img src={i} alt="" />
                            <span className={s.usefal}>O‘zbekiston Respublikasi  Majlisi  Qonunchilik palatasi</span>
                        </div>
                    </a>
                </div>
                <div className={s.colmycolmd6}>
                    <a href="http://">
                        <div className={s.useful}>
                            <img src={h} alt="" />
                            <span className={s.usefal}>Yagona interaktiv davlat  xizmatlari   portali</span>
                        </div>
                    </a>
                </div>
                <div className={s.colmycolmd6}>
                    <a href="http://">
                        <div className={s.useful}>
                            <img src={a} alt="" />
                            <span className={s.usefal}>O'zbekiston Respublikasi Tashqi  ishlar  Vazirligi</span>
                        </div>
                    </a>
                </div>
                <div className={s.colmycolmd6}>
                    <a href="http://">
                        <div className={s.useful}>
                            <img src={e} alt="" />
                            <span className={s.usefal}>O‘zbekiston Respublikasi Prezidenti  matbuot xizmati</span>
                        </div>
                    </a>
                </div>
                <div className={s.colmycolmd6}>
                    <a href="http://">
                        <div className={s.useful}>
                            <img src={j} alt="" />
                            <span className={s.usefal}>O‘zbekiston Respublikasi Oliy  Majlisining  senati</span>
                        </div>
                    </a>
                </div>
                <div className={s.colmycolmd6}>
                    <a href="http://">
                        <div className={s.useful}>
                            <img src={f} alt="" />
                            <span className={s.usefal}>Milliy huquqiy internet portali</span>
                        </div>
                    </a>
                </div>
                <div className={s.colmycolmd6}>
                    <a href="http://">
                        <div className={s.useful}>
                            <img src={g} alt="" />
                            <span className={s.usefal}>O'zbekiston Respublikasi Hukumat  portali</span>
                        </div>
                    </a>
                </div>
            </div>
        </div>
        </div>   
    </div>
  )
}

export default Havolalar