import React, { useState } from 'react';

const Card = ({data, handleCountryName}) => {
    const {flags , name, population} = data;
    const [back, setBack] = useState(false)
    const addcountrys = (datas) =>{
         setBack(!back)
         handleCountryName(datas)
    }
    return (
        <div>
            <div className={`card h-[400px] ${back?'bg-gray-600 text-white':''} bg-base-100 shadow-xl`}>
            <figure><img src={flags.png} alt="Shoes"  className='w-80 h-[200px]'/></figure>
            <div className="card-body">
                <h2 className="card-title">Name : {name.common}</h2>
                <p>Population : {population} </p>
                <div className="card-actions justify-end">
                <button onClick={()=>addcountrys(data)} className="btn btn-primary">Add Countrys</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Card;