import { useReactTable, getCoreRowModel, flexRender } from '@tanstack/react-table'
import JSON from '../../../public/cafe.json'
import { useMemo } from 'react'

export default function Table() {

    const data = useMemo(() => JSON, [])
    const columns = [
        
        {
            header: 'Name',
            accessorKey: 'recipe_name',
            footer: 'Name'
        },
        {
            header: 'Time',
            accessorKey: 'preparing_time',
            footer: 'Time'
        },
        {
            header: 'Calories',
            accessorKey: 'calories',
            footer: 'Calories'
        }
    ]
    const table = useReactTable({ data, columns, getCoreRowModel: getCoreRowModel() })
    return (
        <div className='w3-container'>
            <table className='w3-table-all'>
                <thead className="text-[#878787] text-base font-medium font-['Fira Sans']">
                    {table.getHeaderGroups().map(headerGroup => (
                        <tr key={headerGroup.recipe_id}>
                            {headerGroup.headers.map(header =>
                                <th key={header.recipe_id}>
                                    {flexRender(header.column.columnDef.header, header.getContext())}
                                </th>
                            )}
                        </tr>
                    ))}
                </thead>
                <tbody className="text-[#282828]/70 text-base font-normal font-['Fira Sans'] leading-relaxed">
                    {table.getRowModel().rows.map(row => (
                        <tr key={row.recipe_id}>
                            {row.getVisibleCells().map(cell => (
                                <td>
                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                </td>
                            ))}
                        </tr>
                    ))}

                </tbody>
                <tfoot>
                    {table.getFooterGroups().map(footerGroup => (
                        <tr key={footerGroup.recipe_id}>
                            {footerGroup.headers.map(header =>
                                <th key={header.recipe_id}>
                                    {flexRender(header.column.columnDef.header, header.getContext())}
                                </th>
                            )}
                        </tr>
                    ))}
                </tfoot>
            </table>
        </div>
    )
}
