import React from 'react'
import realtor_1 from '../assets/realtor-1.jpeg';
import realtor_2 from '../assets/realtor-2.jpeg';
import realtor_3 from '../assets/realtor-3.jpeg';

const Realtor = () => {
  return (
    <div className="realtors">
        <h3 className="heading-3">Top 3 realtors</h3>
        <div className="realtors__list">
                <img src={realtor_1} alt="img-1" className="realtors-img"/>
                <div className="realtors__details">
                    <h4 className="heading-4 heading-4--light">Erik Feinman</h4>
                    <p className="realtors__sold">245 HOUSES SOLD</p>
                </div>

                <img src={realtor_2} alt="img-2" className="realtors-img"/>
                <div className="realtors__details">
                    <h4 className="heading-4 heading-4--light">Kim Brown</h4>
                    <p className="realtors__sold">212 HOUSES SOLD</p>
                </div>

                <img src={realtor_3} alt="img-1" className="realtors-img"/>
                <div className="realtors__details">
                    <h4 className="heading-4 heading-4--light">Toby Ramsey</h4>
                    <p className="realtors__sold">198 HOUSES SOLD</p>
                </div>
        </div>
    </div>
  )
}

export default Realtor