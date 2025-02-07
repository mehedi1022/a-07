import { useReactTable, getCoreRowModel, flexRender } from '@tanstack/react-table'
import { useState, useEffect } from 'react'

export default function Table() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('/cafe.json')
            .then(response => response.json())
            .then(json => setData(json))
            .catch(error => console.error(error));
    }, []);

    const handleCart = (p) => {
        // console.log(p);
        const isExist = data.find(item => item.id == p.id);
        if (!isExist) {
            setData([...data,p]);
        }
        else{
          alert("already exist")
        }
    
      }

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

    return (
        <div className="h-[685px] rounded-2xl border border-[#282828]/20">
            <div className="">
                <h1 className="text-center text-[#282828] text-2xl font-semibold font-['Lexend']">Want to cook: 01</h1>
                <hr className="mx-[50px] h-[0px] border border-[#282828]/20" />
                <table className="text-left items-center">
                    <thead className="text-[#878787] text-base font-medium font-['Fira Sans']">
                        {table.getHeaderGroups().map(headerGroup => (
                            <tr key={headerGroup.id} className="">
                                {headerGroup.headers.map(header =>
                                    <th key={header.id} className="w-[120px] pb-5 pr-5">
                                        {flexRender(header.column.columnDef.header, header.getContext())}
                                    </th>
                                )}
                            </tr>
                        ))}
                    </thead>
                    <tbody className="text-[#282828]/70 text-base font-normal font-['Fira Sans'] leading-relaxed px-6 py-4 bg-[#282828]/5">
                        {table.getRowModel().rows.map(row => (
                            <tr key={row.id}>
                                {row.getVisibleCells().map(cell => (
                                    <td key={cell.id}  className="w-[120px] pb-5 pr-5">
                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                        
                                    </td>
                                    
                                ))}
                            </tr>
                        ))}
                        
                    </tbody>

                </table>
            </div>

        </div>
    );
}
