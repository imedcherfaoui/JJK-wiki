import React from 'react'
import img from '../../images/megumi.png';

export default function DetailCaractere() {
  return (
    <div className='container-fluid'>
    <div className='row'>
        <div className="col-4">
            <img src={img} alt="" />
        </div>
        <div className="col-8"></div>
    </div>
      
    </div>
  )
}
