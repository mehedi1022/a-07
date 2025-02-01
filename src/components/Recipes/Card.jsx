import React from 'react';

const Card = ({ card }) => {
    const { recipe_name, recipe_id, recipe_image, short_description, ingredients, preparing_time, calories } = card
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-xl">
                <div className="flex justify-center pt-8">
                    <img className="w-80 h-[200px] object-cover rounded-2xl"
                        src={recipe_image}
                        alt={recipe_name} />
                </div>
                <div className="card-body">
                    <h2 className="text-[#282828] text-xl font-semibold font-['Lexend']">{recipe_name}</h2>
                    <p className="text-[#878787] text-base font-normal font-['Fira Sans'] leading-[30px]">{short_description}</p>
                    <hr className="h-[0px] border border-[#282828]/10" />
                    <h3 className="text-[#282828] text-lg font-medium font-['Lexend']">Ingredients: 6</h3>
                    <div className="w-[348px] text-[#878787] text-lg font-normal font-['Fira Sans'] leading-loose">
                        {
                            ingredients.map((ingred, index) =>
                                <ul className="list-disc list-inside">
                                    <li key={index}>{ingred}</li>
                                </ul>
                                )
                        }
                    </div>
                    <hr className="h-[0px] border border-[#282828]/10" />
                    <div className="flex gap-4">
                        <div className="flex">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                            <p>{preparing_time}</p>
                        </div>
                        <div className="flex">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z" />
                            </svg>
                            <p>{calories}</p>
                        </div>
                    </div>
                    <div className="card-actions">
                        <button className="h-[49px] px-6 py-[13px] bg-[#0be58a] rounded-[50px] justify-center items-center gap-2.5 inline-flex text-[#150b2b] text-lg font-medium font-['Lexend']">Want to Cook</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;