import React, {useState} from 'https://cdn.skypack.dev/react';
import ReactDOM from 'https://cdn.skypack.dev/react-dom';
import {TiChevronLeftOutline, TiChevronRightOutline} from 'https://cdn.skypack.dev/react-icons/ti';
import './Mediateka.css'
import gr3 from './img/gr3.jpg'
import { Container } from 'react-bootstrap';


export const Mendiateka =()=>{

let kard = [
  {
    "id": 1,
    // "name":"Sarlavha",
    // "malumot":"Assalomu aleykum",
    "img":"http://sirdaryo.uz/uploads/2021/04/gr3.jpg",
  },
  {
    "id": 2,
    // "name":"Hello world",
    // "malumot":"Assalomu aleykum",
    "img":"http://sirdaryo.uz/uploads/2021/04/gr2.jpg"
  },
  {
    "id": 3,
    // "name":"Hi Gitle",
    // "malumot":"Assalomu aleykum",
    "img":"http://sirdaryo.uz/uploads/2021/04/gr1.jpg"
  },
  {"img":"http://sirdaryo.uz/uploads/2021/04/banner1-medium.jpg"},
  {"img":"http://sirdaryo.uz/uploads/2021/04/gr4.jpg"},
  {"img":"http://sirdaryo.uz/uploads/2021/04/photo2021-04-1515-39-22-2.jpg"},
]

const CARDS = 10;
const MAX_VISIBILITY = 3;

const Card = ({title, content}) => (
  <div className='card'>
    <h2>{title.name}</h2>
    <p>{title.malumot}</p>
    <img className='img1' src={title.img}alt="" />
  </div>
);

const Carousel = ({children}) => {
  const [active, setActive] = useState(2);
  const count = React.Children.count(children);
  
  
  return (
    <>
 

    
    <div className='text'>
      <h1 className='tt'>Mediateka</h1>
    </div>


    <div className='carousel-item'>
    <div className='carousel'>
      {active > 0 && <button className='nav left' onClick={() => setActive(i => i - 1)}><TiChevronLeftOutline/></button>}
      {React.Children.map(children, (child, i) => (
        <div className='card-container' style={{
            '--active': i === active ? 1 : 0,
            '--offset': (active - i) / 3,
            '--direction': Math.sign(active - i),
            '--abs-offset': Math.abs(active - i) / 3,
            'pointer-events': active === i ? 'auto' : 'none',
            'opacity': Math.abs(active - i) >= MAX_VISIBILITY ? '0' : '1',
            'display': Math.abs(active - i) > MAX_VISIBILITY ? 'none' : 'block',
          }}>
          {child}
        </div>
      ))}
      {active < count - 1 && <button className='nav right' onClick={() => setActive(i => i + 1)}><TiChevronRightOutline/></button>}
    </div>
    </div>
   
    </>
  
  );
};

const App = () => (
  <div className='app'>
    <Carousel>
     
      {kard.map((title)=>(
        <Card title={title} />
      ))}
    </Carousel>
  </div>
);

ReactDOM.render(
  <App/>,
  document.body
);
}
