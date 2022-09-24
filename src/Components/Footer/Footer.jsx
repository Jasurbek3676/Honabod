import React,{useState} from 'react'
import { Container } from 'react-bootstrap'
import s from './Footer.module.css'
import logo from './logo.png'
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import { Dropdown, Menu, Space } from 'antd';
import xarita from './xarita.jpg'
import { NavLink } from 'react-router-dom'

// const Footer = () => {
//     const [openMenu, setOpenMenu] = useState(false);
//   const toggleMenu = () => {
//     setOpenMenu(!openMenu);

// };
//     const [openDown, setOpenDown] = useState(false);
//     const toggleDown = () => { 
//       setOpenDown(!openDown);
//   };

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
  const imenu = (
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
  const umenu = (
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



 
  const  Footer = () => (
    <div className={s.main}>
        <Container> 
            <div className='row'>
                <div className="col">
                    <div className={s.bir}>
                       <NavLink to={""}>
                        <div className={s.title}>
                            <img src={logo} alt="" />
                            <h1>XONOBOD SHAXAR HOKIMLIGI</h1>
                        </div>
                        </NavLink>
                        <h1>Manzil</h1>
                        <div className={s.location}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                            </svg>
                            <p>171500,Xonobod shaxri,Umarshayx Mirzo ko'chasi,2 uy</p>
                        </div>
                        <div className={s.location}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                            </svg>
                            <p>Qabulxona telefoni : +998912345678</p>
                        </div>
                        <div className={s.location}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                            </svg>
                            <p>Ishonch telefoni : +998912345678</p>
                        </div>
                        <div className={s.location}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clock" viewBox="0 0 16 16">
                            <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
                            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
                            </svg>
                            <p>Ish vaqti: Dushanba - Juma, 9:00 - 18:00, Tushlik 13:00-14:00</p>
                        </div>
                    </div>
                </div>
                <div className='col'>
                    <div className={s.ikki}>
                        <h1>SAYT XARITASI</h1>
                                       <Dropdown overlay={menu} trigger={['click']} placement="bottom" arrow>
                                        <a onClick={e => e.preventDefault()}>
                                         <Space>
                                        <h2>Hokimyat haqida <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
</svg></h2>
                                         </Space>
                                         </a>
                                         </Dropdown>
                              <NavLink to={"/yangi"}><h2>Yangiliklar</h2></NavLink>      
                        <a href=""><h2>Boshqarma va tashkilotlar</h2></a>
                        <Dropdown overlay={imenu} trigger={['click']} placement="bottom" arrow>
                            <a onClick={e => e.preventDefault()}>
                                <Space>
                                    <h2>Mahalliy kengash <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
</svg></h2>
                                </Space>
                            </a>
                        </Dropdown>

                        <Dropdown overlay={umenu} trigger={['click']} placement="top" arrow>
                            <a onClick={e => e.preventDefault()}>
                                <Space>
                                    <h2>Matbuot hizmati <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-up" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/>
</svg></h2>
                                </Space>
                            </a>
                        </Dropdown>
                        <a href=""><h2>Aloqa</h2></a>
                        <a href=""><h2>Ochiq ma'lumotlar</h2></a>
                    </div>
                </div>
                <div className="col">
                    <div className={s.uch}>
                        <h1>XARITA</h1>
                        <div className={s.xarita}>
                            <a href=""><img src={xarita} alt=""  class="img-fluid"/></a>
                        </div>
                        <div className={s.search}>
                          <input type="text" placeholder='Izlash'  className='w-100'/>
                          <button><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg></button>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    </div>
  
  );

export default Footer