import FormModal from '@/components/FormModal'
import Pagination from '@/components/Pagination'
import Table from '@/components/Table'
import TableSearch from '@/components/TableSearch'
import { lessonsData, role } from '@/lib/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Lesson = {
  id: number;
  subject: string;
  class:string;
  teacher:string;
}

const columns = [
  {
    header: "Subject Name",
    accessor: "name"
  },
  {
    header: "Class Name",
    accessor: "class",

  },
  {
    header: "Teacher",
    accessor: "teacher",
    className: "hidden lg:table-cell"
  },
  {
    header: "Actions",
    accessor: "action",
    className: "hidden lg:table-cell"
  },
  
]

const LessonsList = () => {

  const renderRow = (item:Lesson) => (
    <tr key={item.id} className='border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight'>
      <td className='flex items-center gap-2 p-4'>
      {item.subject}
      </td>
      <td>{item.class}</td>
      <td className='hidden md:table-cell'>{item.teacher}</td>
      <td>
        <div className='flex items-center gap-2'>
          {role === "admin" &&  (
             <>
              <FormModal table='lesson' type='edit' data={item.id} />
              <FormModal table='lesson' type='delete' id={item.id} />
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
        <h1 className='hidden md:block text-lg font-semibold'>All Lessons</h1>
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
             <FormModal table='lesson' type='plus' />
        )}
          </div>
        </div>
      </div>
        {/* list */}
        <Table columns={columns} renderRow={renderRow} data={lessonsData} />
        {/* pagination */}
        <Pagination />
    </div>
  )
}

export default LessonsList