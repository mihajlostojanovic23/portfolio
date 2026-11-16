import { useId } from 'react'
import type { ReactNode } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import type { SwiperOptions } from 'swiper/types'
import style from './Swiper.module.css'

import 'swiper/css'
import 'swiper/css/navigation'

interface SwiperComponentProps<T> {
  items: T[]
  getItemKey: (item: T) => string | number
  renderItem: (item: T) => ReactNode
  swiperOptions?: Partial<SwiperOptions>
}

export const SwiperComponent = <T,>({
  items,
  getItemKey,
  renderItem,
  swiperOptions,
}: SwiperComponentProps<T>) => {
  const navId = useId()

  return (
    <div className={style.swiperWrapper}>
      <Swiper
        modules={[Navigation]}
        navigation={{
          prevEl: `[data-nav-prev="${navId}"]`,
          nextEl: `[data-nav-next="${navId}"]`,
        }}
        slidesPerView={4}
        spaceBetween={20}
        className={style.swiperContainer}
        {...swiperOptions}
      >
        {items.map((item) => (
          <SwiperSlide key={getItemKey(item)}>{renderItem(item)}</SwiperSlide>
        ))}
      </Swiper>
      <button
        type="button"
        data-nav-prev={navId}
        className="swiper-button-prev"
        aria-label="Previous slide"
      />
      <button
        type="button"
        data-nav-next={navId}
        className="swiper-button-next"
        aria-label="Next slide"
      />
    </div>
  )
}
