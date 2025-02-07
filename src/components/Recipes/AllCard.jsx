import { React, useEffect, useState } from 'react';
import { useReactTable, getCoreRowModel, flexRender } from '@tanstack/react-table'

import Card from "./Card"
import cafe from "../../../public/cafe.json"

const AllCard = () => {

    const [allCard, setAllCard] = useState([])


    useEffect(() => {

        fetch("/cafe.json")
            .then((res) => res.json())
            .then((c) => setAllCard(c))
            .catch((error) => console.error(error))
    }, [])

    const [data, setData] = useState([]);

    // useEffect(() => {
    //     fetch('/cafe.json')
    //         .then(response => response.json())
    //         .then(json => setData(json))
    //         .catch(error => console.error(error));
    // }, []);

    const handleCart = (p) => {
        // console.log(p);
        const isExist = data.find((cd) => cd.recipe_id == p.recipe_id);
        // console.log(isExist);
        if (!isExist) {
            setData([...data, p]);
        }
        else {
            alert("already exist")
        }

    }
    console.log(data);

    const columns = [
        {
            header: 'Name',
            accessorKey: 'recipe_name'
        },
        {
            header: 'Time',
            accessorKey: 'preparing_time'
        },
        {
            header: 'Calories',
            accessorKey: 'calories'
        }
    ];

    const table = useReactTable({ data, columns, getCoreRowModel: getCoreRowModel() });




    const handleDelete = (recipe_id) =>{
        const newCart = data.filter(row => row.recipe_id != recipe_id)
        setData(newCart);
    }

    return (
        <div className="grid grid-cols-12">
            {/* this is cards */}
            <div className="col-span-8">
                <div className="grid grid-cols-2 gap-4">
                    {
                        allCard.map((cd) => (
                            <Card key={cd.recipe_id} card={cd} handleCart={handleCart} />
                        ))
                    }
                </div>
            </div>
            {/* this is cart  */}
            <div className="col-span-4">
                <div className="h-[685px] rounded-2xl border border-[#282828]/20">
                    <div className="">
                        <h1 className="text-center text-[#282828] text-2xl font-semibold font-['Lexend']">Want to cook: 01</h1>
                        <hr className="mx-[50px] h-[0px] border border-[#282828]/20" />
                        <table className="text-left items-center">
                            <thead className="text-[#878787] text-base font-medium font-['Fira Sans']">
                                {table.getHeaderGroups().map(headerGroup => (
                                    <tr key={headerGroup.id}>
                                        {headerGroup.headers.map(header =>
                                            <th key={header.id} className="w-[120px] pb-5 pr-5">
                                                {flexRender(header.column.columnDef.header, header.getContext())}
                                            </th>
                                        )}
                                    </tr>
                                ))}
                            </thead>
                            <tbody className="text-[#282828]/70 text-base font-normal font-['Fira Sans'] leading-relaxed px-6 py-4 bg-[#282828]/5">
                                {table.getRowModel().rows.map((row, index) => (
                                    <tr key={row.id}>
                                        <p>{index + 1}</p>
                                        {row.getVisibleCells().map(cell => (
                                            <td key={cell.id} className="w-[120px] pb-5 pr-5">
                                                {flexRender(cell.column.columnDef.cell, cell.getContext())} 

                                            </td>
                                           
                                        ))}
                                         <button className="text-[#150b2b] text-base font-medium font-['Lexend'] h-[38px] px-[18px] py-[9px] bg-[#0be58a] rounded-[50px] justify-center items-center gap-2.5 inline-flex" onClick={() => handleDelete(row.original.recipe_id)}>Preparing</button>
                                    </tr>
                                ))}

                            </tbody>

                        </table>
                    </div>

                </div>
            </div>


        </div>


    );
};

export default AllCard;