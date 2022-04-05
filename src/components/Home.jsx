import React from 'react'
import {BsFillHeartFill, BsMapFill, BsKeyFill} from 'react-icons/bs'
import {FaUserAlt} from 'react-icons/fa'
import {IoMdLocate} from 'react-icons/io'

import house_1 from '../assets/house-1.jpeg';
import house_2 from '../assets/house-2.jpeg';
import house_3 from '../assets/house-3.jpeg';
import house_4 from '../assets/house-4.jpeg';
import house_5 from '../assets/house-5.jpeg';
import house_6 from '../assets/house-6.jpeg';

const Home = () => {
  return (
    <section className="homes">
        <div className="home">
            <img src={house_1} alt="house-1" className="home__img"/>
            <div className="home__icon">
                <BsFillHeartFill/>
            </div>
            <h5 className="home__heading">Beautiful Family House</h5>
            <div className="home__location">
                <div className="home__location">
                    <BsMapFill/>
                </div>
                <p className="home__location home__location-paragragh">Abuja</p>
            </div>
            <div className="home__rooms">
                <div className="home__rooms">
                    <FaUserAlt/>
                </div>
                <p className="home__location home__location-paragragh">5 rooms</p>
            </div>
            <div className="home__expand">
                <div  className="home__expand">
                    <IoMdLocate/>
                </div>
                <p className="home__location home__location-paragragh">375 m<sup>2</sup></p>
            </div>
            <div className="home__key">
                <div className="home__key">
                    <BsKeyFill/>
                </div>
                <p className="home__location home__location-paragragh">&#8358;1,200,000</p>
            </div>
            <button className="btn home__btn">CONTACT REALTOR</button>
        </div>
        
        <div className="home">
            <img src={house_2} alt="house-2" className="home__img"/>
            <div className="home__icon">
                <BsFillHeartFill/>
            </div>
            <h5 className="home__heading">Modern Glass Villa</h5>
            <div className="home__location">
                <div className="home__location">
                    <BsMapFill/>
                </div>
                <p className="home__location home__location-paragragh">Ibadan</p>
            </div>
            <div className="home__rooms">
                <div className="home__rooms">
                    <FaUserAlt/>
                </div>
                <p className="home__location home__location-paragragh">6 rooms</p>
            </div>
            <div className="home__expand">
                <div  className="home__expand">
                    <IoMdLocate/>
                </div>
                <p className="home__location home__location-paragragh">450 m<sup>2</sup></p>
            </div>
            <div className="home__key">
                <div className="home__key">
                    <BsKeyFill/>
                </div>
                <p className="home__location home__location-paragragh">&#8358;1,000,000</p>
            </div>
            <button className="btn home__btn">CONTACT REALTOR</button>
        </div>

        <div className="home">
            <img src={house_3} alt="house-3" className="home__img"/>
            <div className="home__icon">
                <BsFillHeartFill/>
            </div>
            <h5 className="home__heading">Cozy Country House</h5>
            <div className="home__location">
                <div className="home__location">
                    <BsMapFill/>
                </div>
                <p className="home__location home__location-paragragh">Lagos</p>
            </div>
            <div className="home__rooms">
                <div className="home__rooms">
                    <FaUserAlt/>
                </div>
                <p className="home__location home__location-paragragh">4 rooms</p>
            </div>
            <div className="home__expand">
                <div className="home__expand">
                    <IoMdLocate/>
                </div>
                <p className="home__location home__location-paragragh">250 m<sup>2</sup></p>
            </div>
            <div className="home__key">
                <div className="home__key">
                    <BsKeyFill/>
                </div>
                <p className="home__location home__location-paragragh">&#8358;2,750,000</p>
            </div>
            <button className="btn home__btn">CONTACT REALTOR</button>
        </div>

        <div className="home">
            <img src={house_4} alt="house-4" className="home__img"/>
            <div className="home__icon">
                <BsFillHeartFill/>
            </div>
            <h5 className="home__heading">Large Rustical Villa</h5>
            <div className="home__location">
                <div className="home__location">
                    <BsMapFill/>
                </div>
                <p className="home__location home__location-paragragh">Osun</p>
            </div>
            <div className="home__rooms">
                <div className="home__rooms">
                    <FaUserAlt/>
                </div>
                <p className="home__location home__location-paragragh">6 rooms</p>
            </div>
            <div className="home__expand">
                <div  className="home__expand">
                    <IoMdLocate/>
                </div>
                <p className="home__location home__location-paragragh">480 m<sup>2</sup></p>
            </div>
            <div className="home__key">
                <div className="home__key">
                    <BsKeyFill/>
                </div>
                <p className="home__location home__location-paragragh">&#8358;850,000</p>
            </div>
            <button className="btn home__btn">CONTACT REALTOR</button>
        </div>

        <div className="home">
            <img src={house_5} alt="house-5" className="home__img"/>
            <div className="home__icon">
                <BsFillHeartFill/>
            </div>
            <h5 className="home__heading">Majestic Palace House</h5>
            <div className="home__location">
                <div className="home__location">
                    <BsMapFill/>
                </div>
                <p className="home__location home__location-paragragh">Saki</p>
            </div>
            <div className="home__rooms">
                <div className="home__rooms">
                    <FaUserAlt/>
                </div>
                <p className="home__location home__location-paragragh">18 rooms</p>
            </div>
            <div className="home__expand">
                <div  className="home__expand">
                    <IoMdLocate/>
                </div>
                <p className="home__location home__location-paragragh">520 m<sup>2</sup></p>
            </div>
            <div className="home__key">
                <div className="home__key">
                    <BsKeyFill/>
                </div>
                <p className="home__location home__location-paragragh">&#8358;1,500,000</p>
            </div>
            <button className="btn home__btn">CONTACT REALTOR</button>
        </div>

        <div className="home">
            <img src={house_6} alt="house-6" className="home__img"/>
            <div className="home__icon">
                <BsFillHeartFill/>
            </div>
            <h5 className="home__heading">Modern Family Apartment</h5>
            <div className="home__location">
                <div className="home__location">
                    <BsMapFill/>
                </div>
                <p className="home__location home__location-paragragh">Iseyin</p>
            </div>
            <div className="home__rooms">
                <div className="home__rooms">
                    <FaUserAlt/>
                </div>
                <p className="home__location home__location-paragragh">4 rooms</p>
            </div>
            <div className="home__expand">
                <div className="home__expand">
                    <IoMdLocate/>
                </div>
                <p className="home__location home__location-paragragh">200 m<sup>2</sup></p>
            </div>
            <div className="home__key">
                <div className="home__key">
                    <BsKeyFill/>
                </div>
                <p className="home__location home__location-paragragh">&#8358;200,000</p>
            </div>
            <button className="btn home__btn">CONTACT REALTOR</button>
        </div>
</section>
  )
}

export default Home