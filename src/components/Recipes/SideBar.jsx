import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';



const SideBar = () => {

    const [air, setAir] = useState([])

    useEffect(() => {

        fetch("/cafe.json")
            .then((res) => res.json())
            .then((c) => setAir(c))
            .catch((error) => console.error(error))
    }, [])

    const columns = [
        {
            name: '',
            selector: row => row.recipe_id,
        },
        {
            name: 'Name',
            selector: row => row.recipe_name,
        },
        {
            name: 'Time',
            selector: row => row.preparing_time,
        },
        {
            name: 'Calories',
            selector: row => row.calories,
        },
    ];

    return (
        <div>
            <div>
                <div>
                    <h1 className="text-center text-[#282828] text-2xl font-semibold font-['Lexend']">Want to cook: 01</h1>
                </div>
                <div>
                <DataTable
                columns={columns}
                data={air}
            />
                </div>
            </div>
            <div>
                <div>
                    <h1 className="text-center text-[#282828] text-2xl font-semibold font-['Lexend']">Currently cooking: 02</h1>
                </div>
                <div>

                </div>
            </div>

            {/* <DataTable
                columns={columns}
                data={air}
            /> */}
        </div>

    );
};

export default SideBar;