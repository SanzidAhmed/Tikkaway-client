import React from 'react';
import { HandThumbUpIcon } from '@heroicons/react/24/solid'

const ChefCard = ({ chef }) => {
    const { chefName, chefPicture, yearsExperience, likes, recipes } = chef;

    return (
        <div>
            <div className="card md:w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={chefPicture} alt="Shoes" className="rounded-xl md:h-48 md:w-full" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{chefName}</h2>
                    <ol className=' ml-0'>
                        <h1 className='font-semibold text-base underline'>Special Recipe</h1>
                        {
                            recipes.map(recipe => <li>{recipe.recipeName}</li>)
                        }
                    </ol>
                    <div className='md:flex md:gap-10'>
                        <p><span className='font-bold'>Experience:</span> {yearsExperience} years</p>
                        <p className='inline-flex gap-1'><span className='font-bold'>Likes:</span> {likes}<HandThumbUpIcon className="h-6 w-6 text-gray-500" /></p>
                    </div>
                    <div className="card-actions">
                        <button className="btn btn-primary  bg-yellow-500 border-white">View details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChefCard;