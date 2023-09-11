 
import React, { useEffect, useState } from 'react';
import Card from './Card';
 

const Countrys = () => {
    const [countrys, setCountrys ] = useState([]);
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=>res.json())
        .then(data => setCountrys(data))
    },[])
    const [countryName, setCountryName] = useState([]);
    const handleCountryName = (datas) =>{
         const newData = [...countryName,datas]
         setCountryName(newData)
    }
    return (
        <div>
            <h1 className='font-bold text-2xl text-center mt-4'>Loaded Countrys : {countrys.length} </h1>
            <div className='px-9'>
            <h1 className='container mx-auto pl-9 text-3xl font-bold text-green-400'>Add Countrys List Items </h1>
                    <ul className='container mx-auto pl-9 text-3xl font-semibold  text-cyan-500 list-decimal'>
                        {countryName.map((e, id)=><li key={id}>{e.name.common}</li>)}
                    </ul>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-8 mt-9'>
                {countrys.map(data=><Card
                handleCountryName={handleCountryName}
                data={data}
                key={data.name.common}/>)}
            </div>
        </div>
    );
};

export default Countrys;