
import ChefCard from './ChefCard';
import { useLoaderData } from 'react-router-dom';

const Chef = () => {
    const chefs = useLoaderData();
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