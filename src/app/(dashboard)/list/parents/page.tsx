import FormModal from '@/components/FormModal'
import Pagination from '@/components/Pagination'
import Table from '@/components/Table'
import TableSearch from '@/components/TableSearch'
import { parentsData, role } from '@/lib/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Parent = {
  id: number;
  name:string;
  email?: string;
  students:string[];
  phone:string;
  address:string;

}

const columns = [
  {
    header: "Info",
    accessor: "info"
  },
  {
    header: "Student Name",
    accessor: "students",
    className: "hidden md:table-cell"
  },
  {
    header: "Phone",
    accessor: "phone",
    className: "hidden lg:table-cell"
  },
  {
    header: "Address",
    accessor: "address",
    className: "hidden lg:table-cell"
  },
  {
    header: "Actions",
    accessor: "actions",
    className: "hidden lg:table-cell"
  },
]

const ParentsList = () => {

  const renderRow = (item:Parent) => (
    <tr key={item.id} className='border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight'>
      <td className='flex items-center gap-2 p-4'>
        <div className='flex flex-col'>
          <h3 className='font-semibold'>{item.name}</h3>
          <p className='text-gray-500 text-sm'>{item.email}</p>
        </div>
      </td>
      <td className='hidden md:table-cell'>{item.students.join(",")}</td>
      <td className='hidden md:table-cell'>{item.phone}</td>
      <td className='hidden md:table-cell'>{item.address}</td>
      <td>
        <div className='flex items-center gap-2'>
          {role === "admin" &&  (
          <>
          <FormModal table='parent' type='edit' data={item.id} />
          <FormModal table='parent' type='delete' id={item.id} />
          </>

        )}
        </div>
      </td>
    </tr>
  )

  return (
    <div className='bg-white p-4 ml-4 rounded-md flex-1 h-full ' >
      {/* top */}
      <div className='flex items-center justify-between'>
        <h1 className='hidden md:block text-lg font-semibold'>All Parents</h1>
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
                  <FormModal table='parent' type='plus'/>

        )}
          </div>
        </div>
      </div>
        {/* list */}
        <Table columns={columns} renderRow={renderRow} data={parentsData} />
        {/* pagination */}
        <Pagination />
    </div>
  )
}

export default ParentsList