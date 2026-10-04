import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import style from "./Swiper.module.css"

import 'swiper/css'
import 'swiper/css/navigation'
import ExperienceCard from '../ExperienceCard/ExperienceCard'
import experiencesList, { type Experience } from '@/layouts/Experience/experience.contants'

export const SwiperComponent = () => {
  return (
    <section>
      <h2>Continue watching</h2>

      <Swiper
        modules={[Navigation]}
        navigation
        slidesPerView='auto'
        spaceBetween='10px'
      
        className={style.swiperContainer}

      >
        {experiencesList.map((item: Experience, index) => (
          <SwiperSlide >
            <ExperienceCard key={index} {...item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}