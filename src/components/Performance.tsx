"use client"

import Image from 'next/image';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Group A', value: 92 , fill:"#c3ebfa "},
  { name: 'Group B', value: 8  , fill:"#fae27c " },
];

const Performance = () => {
  return (
    <div className='bg-white rounded-md p-4 h-80 relative'>
        <div className='flex items-center justify-between'>
            <h1 className='text-xl font-semibold'>Performance</h1>
            <Image src="/moreDark.png" width={16} height={16} alt='' />
        </div>
    <ResponsiveContainer width="100%" height="100%">
    <PieChart width={400} height={400}>
      <Pie
        dataKey="value"
        startAngle={180}
        endAngle={0}
        data={data}
        cx="50%"
        cy="50%"
        innerRadius={70}
        fill="#8884d8"
        
      />
    </PieChart>
  </ResponsiveContainer>
  <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center'>
        <h1 className='text-3xl font-bold'>9.2</h1>
        <p className='text-xs text-gray-300'>of 10 max FPS</p>
  </div>
  <h2 className='absolute font-medium bottom-16 left-0 right-0 m-auto text-center'>1st semester - 2nd semester</h2>
  </div>
  )
}

export default Performance