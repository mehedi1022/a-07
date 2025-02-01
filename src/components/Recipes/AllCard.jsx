import { React, useEffect, useState } from 'react';
import Card from "./Card"

const AllCard = () => {

    const [allCard, setAllCard] = useState([])

    useEffect(() => {

        fetch("/cafe.json")
            .then((res) => res.json())
            .then((c) => setAllCard(c))
            .catch((error) => console.error(error))
    }, [])


    return (
        <div className="grid grid-cols-2 gap-4">
            {
                allCard.map((card) => (
                    <Card key={card.id} card={card} />
                ))
            }



        </div>
    );
};

export default AllCard;