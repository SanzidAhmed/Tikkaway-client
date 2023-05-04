import React, { useEffect, useState } from 'react';
import ChefCard from './ChefCard';

const Chef = () => {
    const [chefs, setChefs] = useState([]);

    useEffect(() => {
        fetch('https://tikkaway-server-sanzidahmed.vercel.app/chef')
            .then(res => res.json())
            .then(data => setChefs(data))
    }, [])
    return (
        <div className='md:bg-yellow-100'>
            <div className='container mx-auto pb-20'>
                <h1 className='text-center pt-10 font-semibold text-4xl mb-6'>Expert chef are here</h1>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                    {
                        chefs.map(chef => <ChefCard
                            key={chef.id}
                            chef={chef}
                        ></ChefCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Chef;