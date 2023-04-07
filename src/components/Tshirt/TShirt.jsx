import React from 'react';

const TShirt = ({tShirt}) => {
    console.log(tShirt)
    const{_id,name,picture,price}=tShirt;
    return (
        <div className='border-2 border-red-300 '>
            <img className='w-[500px] h-80' src={picture} alt="" />
            <h2 className='text-xl font-bold text-center'>{name}</h2>
            <h2 className='text-xl font-bold text-center'>Price: ${price}</h2>
        </div>
    );
};

export default TShirt;