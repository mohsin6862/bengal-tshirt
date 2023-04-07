import React from 'react';
import { useLoaderData } from 'react-router-dom';
import TShirt from '../Tshirt/Tshirt';

const Shop = () => {
    const tShirts = useLoaderData();
    
    return (
        <>
            <div className='flex w-ful max-w-7xl my-12 mx-auto gap-5' >
                <div className='w-[75%] grid grid-cols-3 gap-3'>
                    {
                        tShirts.map(tShirt => <TShirt key={tShirt._id} tShirt={tShirt}></TShirt>)
                    }

                </div>
                <div className='w-[25%] bg-amber-600'>
                    <h1>babe</h1>

                </div>
            </div>
        </>
    );
};

export default Shop;