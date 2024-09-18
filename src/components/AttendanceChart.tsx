"use client"
import Image from 'next/image';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Mon',
    Present: 40,
    Absent: 24,
  },
  {
    name: 'Tue',
    Present: 30,
    Absent: 13,
  },
  {
    name: 'Wed',
    Present: 20,
    Absent: 98,
  },
  {
    name: 'Thur',
    Present: 20,
    Absent: 39,
  },
  {
    name: 'Fri',
    Present: 10,
    Absent: 48,
  },

];

const AttendanceChart = () => {
  return (
    <div className='bg-white rounded-lg h-full p-4 '>
        <div className='flex justify-between items-center'>
            <h1 className='text-lg font-semibold'>Attendance</h1>
            <Image src="/moreDark.png" alt='' width={20} height={20} />
        </div>
        <ResponsiveContainer width="100%" height="90%">
        <BarChart
          width={500}
          height={300}
          data={data}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="name" axisLine={false} tickLine={false} />
          <YAxis axisLine={false} tickLine={false} />
          <Tooltip contentStyle={{ borderRadius:"10px", borderColor:"lightgray" }} />
          <Legend align='left' verticalAlign='top' wrapperStyle={{ paddingTop:"20px",paddingBottom:"40px"}} />
          <Bar dataKey="Absent" fill="#fae27c" legendType='circle' radius={[10,10,0,0]} />
          <Bar dataKey="Present" fill="#c3ebfa" legendType='circle' radius={[10,10,0,0]}  />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default AttendanceChart