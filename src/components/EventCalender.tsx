"use client"
import Calendar from "react-calendar"
import 'react-calendar/dist/Calendar.css';
import { useState } from "react"
import { title } from "process";
import { time } from "console";
import Image from "next/image";

type ValuePiece = Date | null
type Value = ValuePiece | [ValuePiece, ValuePiece]
//temporary 
const events = [
  {
    id: 1,
    title: "lorem",
    time: "12:00PM to 2:00PM",
    description: "i wanted an afterschool job but then an indistructible superhero hired me"
  },
  {
    id: 2,
    title: "lorem",
    time: "12:00PM to 2:00PM",
    description: "i wanted an afterschool job but then an indistructible superhero hired me"
  },
  {
    id: 3,
    title: "lorem",
    time: "12:00PM to 2:00PM",
    description: "i wanted an afterschool job but then an indistructible superhero hired me"
  },
]

const EventCalender = () => {
  const [value, setValue] = useState<ValuePiece>(new Date())

  const handleChange = (newValue: Value) => {
    if (Array.isArray(newValue)) {
      setValue(newValue[0])
    } else {
      setValue(newValue)
    }
  }

  return (
    <div className="bg-white p-4 rounded-md">
      <Calendar onChange={handleChange} value={value} />
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold my-4">Events</h1>
        <Image src="/moreDark.png" width={20} height={20} alt="" />
      </div>
      <div className="flex flex-col gap-4">
        {events.map(event =>(
          <div className="p-5 rounded-md border-2 border-gray-100 border-t04 odd:border-t-lamaSky even:border-t-lamaPurple" key={event.id}>
            <div className="flex items-center justify-between">
              <h1 className="font-semibold text-gray-600">{event.title}</h1>
              <span
              className="text-gray-300 text-xs">{event.time}</span>
            </div>
            <p className="mt-2 text-gray-400 text-sm">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default EventCalender