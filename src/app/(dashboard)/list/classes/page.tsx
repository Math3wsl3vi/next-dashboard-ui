import FormModal from '@/components/FormModal'
import Pagination from '@/components/Pagination'
import Table from '@/components/Table'
import TableSearch from '@/components/TableSearch'
import { classesData, role } from '@/lib/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Class = {
  id: number;
  name:string;
  capacity:number;
  grade:string;
  supervisor:string;
}

const columns = [
  {
    header: "Class Name",
    accessor: "name"
  },
  {
    header: "Capacity",
    accessor: "capacity",
    className: "hidden lg:table-cell"

  },
  {
    header: "Grade",
    accessor: "grade",
    className: "hidden lg:table-cell"
  },
  {
    header: "Supervisor",
    accessor: "supervisor",
    className: "hidden lg:table-cell"
  },
  {
    header: "Actions",
    accessor: "action",
    className: "hidden lg:table-cell"
  },
  
]

const ClassesList = () => {

  const renderRow = (item:Class) => (
    <tr key={item.id} className='border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight'>
      <td className='flex items-center gap-2 p-4'>
      {item.name}
      </td>
      <td className='hidden md:table-cell'>{item.capacity}</td>
      <td className='hidden md:table-cell'>{item.grade}</td>
      <td className='hidden md:table-cell'>{item.supervisor}</td>
      <td>
        <div className='flex items-center gap-2'>
          <Link href={`./list/teachers/${item.id}`}>
          <button className='w-7 h-7 flex items-center justify-center rounded-full bg-lamaSky'>
            <Image src="/view.png" width={16} height={16} alt='' /> 
          </button>
          </Link>
          {role === "admin" &&  (
               <FormModal table='class' type='delete' id={item.id} />
        )}
        </div>
      </td>
    </tr>
  )

  return (
    <div className='bg-white p-4 ml-4 rounded-md flex-1 h-full ' >
      {/* top */}
      <div className='flex items-center justify-between'>
        <h1 className='hidden md:block text-lg font-semibold'>All Classes</h1>
        <div className='flex flex-col md:flex-row w-full md:w-auto gap-4'>
          <TableSearch />
          <div className='flex items-center gap-4 self-end'>
          <button className='w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow'>
            <Image  src="/filter.png"  width={14} height={14} alt=''/>
          </button>
          <button className='w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow'>
            <Image  src="/sort.png"  width={14} height={14} alt=''/>
          </button>
         {role === "admin" && ( 
                   <FormModal table='class' type='plus' />

        )}
          </div>
        </div>
      </div>
        {/* list */}
        <Table columns={columns} renderRow={renderRow} data={classesData} />
        {/* pagination */}
        <Pagination />
    </div>
  )
}

export default ClassesList