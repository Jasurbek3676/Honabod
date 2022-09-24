import React from 'react';
import s from './Ochiq.module.css'
import p from './img/pdf.png';
import { Pagination } from 'antd';
import 'antd/dist/antd.css';
const Ochiq = () => {
  return (
    <div className={s.app}>
        <div className={s.col1}>
            <div className={s.mycard}>
                <div className={s.card}>
                    <p>
                        Uy-joy sharoitlarini yaxshilashga muhtoj boʻlgan 
                        shaxslarning subsidiya ajratish haqida bergan arizalari
                        roʻyxati (navbati) toʻgʻrisida maʼlumot
                    </p>
                    <button>
                        Yuklab olish
                        <img src={p} alt="" />
                    </button>
                </div>
                <div className={s.card}>
                    <p>
                        Uy-joy sharoitlarini yaxshilashga muhtoj boʻlgan 
                        shaxslarning subsidiya ajratish haqida bergan arizalari
                        roʻyxati (navbati) toʻgʻrisida maʼlumot
                    </p>
                    <button>
                        Yuklab olish
                        <img src={p} alt="" />
                    </button>
                </div>
                <div className={s.card}>
                    <p>
                        Uy-joy sharoitlarini yaxshilashga muhtoj boʻlgan 
                        shaxslarning subsidiya ajratish haqida bergan arizalari
                        roʻyxati (navbati) toʻgʻrisida maʼlumot
                    </p>
                    <button>
                        Yuklab olish
                        <img src={p} alt="" />
                    </button>
                </div>
                <div className={s.card}>
                    <p>
                        Uy-joy sharoitlarini yaxshilashga muhtoj boʻlgan 
                        shaxslarning subsidiya ajratish haqida bergan arizalari
                        roʻyxati (navbati) toʻgʻrisida maʼlumot
                    </p>
                    <button>
                        Yuklab olish
                        <img src={p} alt="" />
                    </button>
                </div>
                <div className={s.card}>
                    <p>
                        Uy-joy sharoitlarini yaxshilashga muhtoj boʻlgan 
                        shaxslarning subsidiya ajratish haqida bergan arizalari
                        roʻyxati (navbati) toʻgʻrisida maʼlumot
                    </p>
                    <button>
                        Yuklab olish
                        <img src={p} alt="" />
                    </button>
                </div>
                <div className={s.card}>
                    <p>
                        Uy-joy sharoitlarini yaxshilashga muhtoj boʻlgan 
                        shaxslarning subsidiya ajratish haqida bergan arizalari
                        roʻyxati (navbati) toʻgʻrisida maʼlumot
                    </p>
                    <button>
                        Yuklab olish
                        <img src={p} alt="" />
                    </button>
                </div>
                <div className={s.card}>
                    <p>
                        Uy-joy sharoitlarini yaxshilashga muhtoj boʻlgan 
                        shaxslarning subsidiya ajratish haqida bergan arizalari
                        roʻyxati (navbati) toʻgʻrisida maʼlumot
                    </p>
                    <button>
                        Yuklab olish
                        <img src={p} alt="" />
                    </button>
                </div>
                <div className={s.card}>
                    <p>
                        Uy-joy sharoitlarini yaxshilashga muhtoj boʻlgan 
                        shaxslarning subsidiya ajratish haqida bergan arizalari
                        roʻyxati (navbati) toʻgʻrisida maʼlumot
                    </p>
                    <button>
                        Yuklab olish
                        <img src={p} alt="" />
                    </button>
                </div>
                <div className={s.card}>
                    <p>
                        Uy-joy sharoitlarini yaxshilashga muhtoj boʻlgan 
                        shaxslarning subsidiya ajratish haqida bergan arizalari
                        roʻyxati (navbati) toʻgʻrisida maʼlumot
                    </p>
                    <button>
                        Yuklab olish
                        <img src={p} alt="" />
                    </button>
                </div>
                <div className={s.card}>
                    <p>
                        Uy-joy sharoitlarini yaxshilashga muhtoj boʻlgan 
                        shaxslarning subsidiya ajratish haqida bergan arizalari
                        roʻyxati (navbati) toʻgʻrisida maʼlumot
                    </p>
                    <button>
                        Yuklab olish
                        <img src={p} alt="" />
                    </button>
                </div>
                <Pagination defaultCurrent={1} total={50} className={s.page}/>
            </div>
        </div>
        <div className={s.col2}>
            <div className={s.extra}>
                <p>Interaktiv xizmatlar</p>
                <p>Fuqarolar murojaati</p>
                <p>Shahar transporti</p>
                <p>Litsenziyalash xizmatlari</p>
                <p>Ko'p beriladigan savollar</p>
            </div>
        </div>
    </div>
  )
}

export default Ochiq