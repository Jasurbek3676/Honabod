import React from 'react'
import s from './Yangiliklar.module.css'
import { Container } from 'react-bootstrap'
import d from './d.png'
import p from './p.png'

let yangi=[
    {"id": 2, "mavzu":"Yangiliklar 1", "date":"10:00 / 9.09.2022", "img":"https://picsum.photos/200", "view":"20", "paragraph":"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam tempore voluptas nihil recusandae eaque quis porro quibusdam libero consequuntur atque corrupti fugiat, alias deserunt modi hic nemo nulla quas eveniet maxime iste! Id eaque pariatur qui omnis libero in sapiente illo quibusdam voluptatum animi repellat rem, porro et sequi veritatis officiis vero corporis dicta quae modi cum molestias nobis soluta. Porro, placeat et! Accusantium fugiat soluta exercitationem libero animi fugit perspiciatis repellat excepturi natus. Doloribus eos consequuntur animi voluptates commodi non eveniet, sed assumenda minus blanditiis architecto ipsam veritatis nisi sit dolores rem magni nobis quia molestiae ad! Suscipit, excepturi!" },
    {"id": 1, "mavzu":"Yangiliklar 2", "date":"11:00 / 9.09.2022", "img":"https://picsum.photos/200", "view":"25", "paragraph":"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam tempore voluptas nihil recusandae eaque quis porro quibusdam libero consequuntur atque corrupti fugiat, alias deserunt modi hic nemo nulla quas eveniet maxime iste! Id eaque pariatur qui omnis libero in sapiente illo quibusdam voluptatum animi repellat rem, porro et sequi veritatis officiis vero corporis dicta quae modi cum molestias nobis soluta. Porro, placeat et! Accusantium fugiat soluta exercitationem libero animi fugit perspiciatis repellat excepturi natus. Doloribus eos consequuntur animi voluptates commodi non eveniet, sed assumenda minus blanditiis architecto ipsam veritatis nisi sit dolores rem magni nobis quia molestiae ad! Suscipit, excepturi!" },
    {"id": 3, "mavzu":"Yangiliklar 3", "date":"12:00 / 9.09.2022", "img":"https://picsum.photos/200", "view":"30", "paragraph":"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam tempore voluptas nihil recusandae eaque quis porro quibusdam libero consequuntur atque corrupti fugiat, alias deserunt modi hic nemo nulla quas eveniet maxime iste! Id eaque pariatur qui omnis libero in sapiente illo quibusdam voluptatum animi repellat rem, porro et sequi veritatis officiis vero corporis dicta quae modi cum molestias nobis soluta. Porro, placeat et! Accusantium fugiat soluta exercitationem libero animi fugit perspiciatis repellat excepturi natus. Doloribus eos consequuntur animi voluptates commodi non eveniet, sed assumenda minus blanditiis architecto ipsam veritatis nisi sit dolores rem magni nobis quia molestiae ad! Suscipit, excepturi!" },
    {"id": 4, "mavzu":"Yangiliklar 4", "date":"13:00 / 9.09.2022", "img":"https://picsum.photos/200", "view":"35", "paragraph":"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam tempore voluptas nihil recusandae eaque quis porro quibusdam libero consequuntur atque corrupti fugiat, alias deserunt modi hic nemo nulla quas eveniet maxime iste! Id eaque pariatur qui omnis libero in sapiente illo quibusdam voluptatum animi repellat rem, porro et sequi veritatis officiis vero corporis dicta quae modi cum molestias nobis soluta. Porro, placeat et! Accusantium fugiat soluta exercitationem libero animi fugit perspiciatis repellat excepturi natus. Doloribus eos consequuntur animi voluptates commodi non eveniet, sed assumenda minus blanditiis architecto ipsam veritatis nisi sit dolores rem magni nobis quia molestiae ad! Suscipit, excepturi!" },
]

const Yangiliklar = () => {
  return (
    <div className={s.main}>
        <Container>
            <div className={s.title}>
                <h1>Asosiy / Yangiliklar</h1>
            </div> 
            <div className='row'>
                <div className='col'>


                    {yangi.map((data, index)=>(
                        <div className={s.news}>
                        <span>{data.mavzu}</span>
                        <div className={s.ip}>
                            <div>
                                <div className={s.rasmlar}>
                                    <img src={data.img} alt="" />
                                </div>
                            </div>
                            
                            <div className={s.parag}>
                              <p>{data.paragraph}</p>
                              <div className={s.pros}>
                                <div className={s.wive}>
                                  <img src={d} alt="" />
                                  <p>{data.date}</p>
                                  <img src={p} alt="" />
                                  <p>{data.view}</p>
                                </div>
                              </div>
                              
                            </div>
                        </div>
                    </div>
                    ))}


                </div>
            </div>
        </Container>
                  
    </div>
  )
}

export default Yangiliklar