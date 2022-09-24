import React, { useState } from 'react'
import s from './Header.module.css'
import search from '../Header/img/search.png'
import { NavLink } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import logo from '../Header/img/logo.png'
import f from '../Header/img/face.png'
import i from '../Header/img/inst.png'
import y from '../Header/img/you.png'
import t from '../Header/img/tel.png'
import b from '../Header/img/burger.webp'
import { Dropdown, Menu, Space } from 'antd';
const Header = () => {

    
        const menu = (
        <Menu
          items={[
            {
              label: (
                <NavLink  rel="noopener noreferrer" to={"/rahbar"}>
                  Rahbariyat
                </NavLink>
              ),
              key: '0',
            },
            {
                label: (
                  <NavLink  rel="noopener noreferrer" to={'/aparat'}>
                    Аpparat xodimlari
                  </NavLink>
                ),
                key: '0',
              },
              {
                label: (
                  <NavLink  rel="noopener noreferrer" to={'/tashkiliy'}>
                    Tashkiliy tuzilma
                  </NavLink>
                ),
                key: '0',
              },
              {
                label: (
                  <NavLink  rel="noopener noreferrer" to="/hokimlig">
                    Viloyat hokimligining vazifalari va funktsiyalari
                  </NavLink>
                ),
                key: '0',
              },
              {
                label: (
                  <NavLink  rel="noopener noreferrer" to="/tashkiliy">
                    Hokimlikning huquqiy maqomini belgilovchi hujjatlar
                  </NavLink>
                ),
                key: '0',
              },
              {
                label: (
                  <NavLink  rel="noopener noreferrer" to="/fuqaro">
                    Fuqarolarni qabul qilish tartibi
                  </NavLink>
                ),
                key: '0',
              },
              {
                label: (
                  <NavLink rel="noopener noreferrer" to="/rekvizit">
                    Rekvizitlari
                  </NavLink>
                ),
                key: '0',
              },
          ]}
        />
        );
        const menu1 = (
            <Menu
            items={[
                {
                label: (
                    <NavLink  rel="noopener noreferrer" to="/senat-azolari">
                    Senat a’zolari
                    </NavLink>
                ),
                key: '0',
                },
                {
                    label: (
                    <NavLink  rel="noopener noreferrer" to="/deputat">
                    Deputatlar tarkibi
                    </NavLink>
                    ),
                    key: '0',
                },
                {
                    label: (
                    <NavLink  rel="noopener noreferrer" to="/kotibyat-mudir">
                    Kotibiyat mudirlari
                    </NavLink>
                    ),
                    key: '0',
                },
                {
                    label: (
                    <NavLink  rel="noopener noreferrer" to="/doimiy-komissia">
                    Doimiy komissiya a’zolari
                    </NavLink>
                    ),
                    key: '0',
                },
                {
                    label: (
                    <NavLink  rel="noopener noreferrer" to="/komak-komissia">
                    Ko‘maklashuvchi komissiya
                    </NavLink>
                    ),
                    key: '0',
                },
                {
                    label: (
                    <NavLink  rel="noopener noreferrer" to="/qabulqilingan">
                    Qabul qilingan qarorlar
                    </NavLink>
                    ),
                    key: '0',
                },
                
            ]}
            />
        );
        const menu2 = (
            <Menu
            items={[
                {
                label: (
                    <NavLink  rel="noopener noreferrer" to="/matbuot-hizmati">
                    Matbuot xizmati haqida
                    </NavLink>
                ),
                key: '0',
                },
                {
                    label: (
                    <NavLink  rel="noopener noreferrer" to="/akreditsya">
                    Akkreditatsiya
                    </NavLink>
                    ),
                    key: '0',
                },
                {
                    label: (
                    <NavLink  rel="noopener noreferrer" to="/media-reja">
                    Media-rejalar
                    </NavLink>
                    ),
                    key: '0',
                },
                {
                    label: (
                    <NavLink  rel="noopener noreferrer" to="/brifinglar">
                    Brifinglar
                    </NavLink>
                    ),
                    key: '0',
                },
                {
                    label: (
                    <NavLink  rel="noopener noreferrer" to="/matbuot-anjuman">
                    Matbuot anjumanlari
                    </NavLink>
                    ),
                    key: '0',
                },
                {
                    label: (
                    <NavLink  rel="noopener noreferrer" to="/press">
                    Press-relizlar
                    </NavLink>
                    ),
                    key: '0',
                },
                {
                    label: (
                    <NavLink  rel="noopener noreferrer" to="/rasmiy">
                    Rasmiy munosabatlar
                    </NavLink>
                    ),
                    key: '0',
                },
                {
                    label: (
                    <NavLink  rel="noopener noreferrer" to="/bayonotlar">
                    Rahbariyatning bayonotlari
                    </NavLink>
                    ),
                    key: '0',
                },
                {
                    label: (
                    <NavLink  rel="noopener noreferrer" to="/joylashtirilgan-malumot">
                    Veb-saytda joylashtiriladigan ma’lumotlar
                    </NavLink>
                    ),
                    key: '0',
                },
                {
                    label: (
                    <NavLink  rel="noopener noreferrer" to="/axborod-tartib">
                    Axborot olish uchun so'rovlarni qabul qilish tartibi
                    </NavLink>
                    ),
                    key: '0',
                },
                
                
            ]}
            />
        );

        const [openMenu, setOpenMenu] = useState(false);
        const toggleMenu = () => {
            setOpenMenu(!openMenu);
        }

  return (
    <div className={s.app}> 
        <Container>
                <div className={s.container}>
                    <div className={s.block1}>
                        <div></div>
                        <div className={s.data}>
                            <p>Dushanba, 5 Sentyabr 2022, 17:01:33</p>
                            <p>Havo harorati +36.9C°</p>
                            <div className={s.inp}>
                                <input type="text" className={s.inp2} placeholder={'Izlash'} />
                                <img src={search} alt="" />
                            </div>
                        </div>
                        <div className={s.lang}>
                            <NavLink to={""} className={s.link}>O’zbekcha</NavLink>
                            <NavLink to={""} className={s.link}>Ўзбекча</NavLink>
                            <NavLink to={""} className={s.link}>Русский</NavLink>
                            <NavLink to={""} className={s.link}>English</NavLink>
                        </div>
                    </div>
                </div>
        </Container>    
                <div className={s.big}>
                    <div className={s.block2}>
                        <NavLink to={""}>
                            <div className={s.logo}>
                                <img src={logo} alt="" />
                                <h1>
                                    Xonobod shahar Hokimligi
                                </h1>
                            </div>
                        </NavLink>
                        
                        <div className={s.social}>
                            
                        <NavLink to={""} className={s.link1}>
                            <img src={f} alt="" />
                        </NavLink>
                        <NavLink to={""} className={s.link1}>
                            <img src={i} alt="" />
                        </NavLink>
                        <NavLink to={""} className={s.link1}>
                            <img src={y} alt="" />
                        </NavLink>
                        <NavLink to={""} className={s.link1}>
                            <img src={t} alt="" />
                        </NavLink>
                        </div>
                    </div>
                </div>



                <div className={s.big2}>
                    <div></div>
                    <div className={s.navigation}>
                        <Dropdown overlay={menu}>
                                <NavLink to={""} className={s.nav}>
                                    Hokimiyat haqida
                                </NavLink>
                        </Dropdown>
                        <NavLink to={"/yangi"} className={s.nav}>
                            Yangiliklar
                        </NavLink>
                        <Dropdown overlay={menu1}>
                                <div to={""} className={s.nav} >
                                    Mahalliy Kengash
                                </div>
                        </Dropdown>
                        <Dropdown overlay={menu2}>
                                <div to={""} className={s.nav}>
                                    Matbuot xizmati
                                </div>
                        </Dropdown>
                        <NavLink to={""} className={s.nav}>
                            Aloqa
                        </NavLink>
                        <NavLink to={"/ochiq"} className={s.nav}>
                            Ochiq ma'lumotlar
                        </NavLink>
                    </div>
                </div>  

                <div className={s.line}>
                    <div></div>
                    <div className={s.line2}></div>
                </div>

                <Container>
                    <button onClick={toggleMenu} className={s.btn}>
                        <img src={b} alt="" />
                    </button>
                </Container >


                {/* BurgerMenu */}
                    {openMenu ? (
                    <div className={s.burgmenu}>
                        <div className={s.navigation}> 
                        <Dropdown overlay={menu}>
                                <NavLink to={""} className={s.nav}>
                                    Hokimiyat haqida
                                </NavLink>
                        </Dropdown>
                        <NavLink to={"/yangi"} className={s.nav}>
                            Yangiliklar
                        </NavLink>
                        <Dropdown overlay={menu1}>
                                <NavLink to={""} className={s.nav} >
                                    Mahalliy Kengash
                                </NavLink>
                        </Dropdown>
                        <Dropdown overlay={menu2}>
                                <NavLink to={""} className={s.nav}>
                                    Matbuot xizmati
                                </NavLink>
                        </Dropdown>
                        <NavLink to={""} className={s.nav}>
                            Aloqa
                        </NavLink>
                        <NavLink to={"/ochiq"} className={s.nav}>
                            Ochiq ma'lumotlar
                        </NavLink>
                        </div>
                    </div>
                    ) : null}
                
              


    </div>
  )
}

export default Header