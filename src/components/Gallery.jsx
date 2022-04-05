import React from 'react'

import Gal_1 from '../assets/gal-1.jpeg'
import Gal_2 from '../assets/gal-2.jpeg'
import Gal_3 from '../assets/gal-3.jpeg'
import Gal_4 from '../assets/gal-4.jpeg'
import Gal_5 from '../assets/gal-5.jpeg'
import Gal_6 from '../assets/gal-6.jpeg'
import Gal_7 from '../assets/gal-7.jpeg'
import Gal_8 from '../assets/gal-8.jpeg'
import Gal_9 from '../assets/gal-9.jpeg'
import Gal_10 from '../assets/gal-10.jpeg'
import Gal_11 from '../assets/gal-11.jpeg'
import Gal_12 from '../assets/gal-12.jpeg'
import Gal_13 from '../assets/gal-13.jpeg'
import Gal_14 from '../assets/gal-14.jpeg'

const Gallery = () => {
  return (
    <section className="gallery">
            <figure className="gallery__item gallery__item--1">
                <img src={Gal_1} alt="img-1" className="gallery__img"/>
            </figure>
            <figure className="gallery__item gallery__item--2">
                <img src={Gal_2} alt="img-2" className="gallery__img"/>
            </figure>
            <figure className="gallery__item gallery__item--3">
                <img src={Gal_3} alt="img-3" className="gallery__img"/>
            </figure>
            <figure className="gallery__item gallery__item--4">
                <img src={Gal_4} alt="img-4" className="gallery__img"/>
            </figure>
            <figure className="gallery__item gallery__item--5">
                <img src={Gal_5} alt="img-5" className="gallery__img"/>
            </figure>
            <figure className="gallery__item gallery__item--6">
                <img src={Gal_6} alt="img-6" className="gallery__img"/>
            </figure>
            <figure className="gallery__item gallery__item--7">
                <img src={Gal_7} alt="img-7" className="gallery__img"/>
            </figure>
            <figure className="gallery__item gallery__item--8">
                <img src={Gal_8} alt="img-8" className="gallery__img"/>
            </figure>
            <figure className="gallery__item gallery__item--9">
                <img src={Gal_9} alt="img-9" className="gallery__img"/>
            </figure>
            <figure className="gallery__item gallery__item--10">
                <img src={Gal_10} alt="img-10" className="gallery__img"/>
            </figure>
            <figure className="gallery__item gallery__item--11">
                <img src={Gal_11} alt="img-11" className="gallery__img"/>
            </figure>
            <figure className="gallery__item gallery__item--12">
                <img src={Gal_12} alt="img-12" className="gallery__img"/>
            </figure>
            <figure className="gallery__item gallery__item--13">
                <img src={Gal_13} alt="img-13" className="gallery__img"/>
            </figure>
            <figure className="gallery__item gallery__item--14">
                <img src={Gal_14} alt="img-14" className="gallery__img"/>
            </figure>
        </section>
  )
}

export default Gallery