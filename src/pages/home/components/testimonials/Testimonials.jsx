import styles from './Testimonials.module.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'

import image1 from '../../../../assets/image1.jpg'
import image2 from '../../../../assets/image2.jpg'
import image3 from '../../../../assets/image3.jpg'
import image4 from '../../../../assets/image4.jpg'

import 'swiper/css'
import 'swiper/css/navigation'

const data = [
  {
    image: image1,
    name: 'João da Silva',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
    date: '12/12/2022',
  },
  {
    image: image2,
    name: 'Maria Souza',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
    date: '19/10/2023',
  },
  {
    image: image3,
    name: 'Jaqueline Almeida',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
    date: '14/12/2020',
  },
  {
    image: image4,
    name: 'Ana Souza',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
    date: '12/12/2022',
  },
]
export function Testimonials() {
  return (
    <div className={styles.container}>
      <h2>Depoimentos dos nossos alunos</h2>
      <Swiper
        className={styles.Swiper}
        navigation={true}
        modules={[Navigation]}
      >
        {data.map((item, index) => {
          return (
            <SwiperSlide key={index} className={styles.SwiperSlide}>
              <div className={styles.wrapper}>
                <img src={item.image} alt={item.name} />
                <h3>{item.name}</h3>
                <p>{item.text}</p>
                <time>{item.date}</time>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}
