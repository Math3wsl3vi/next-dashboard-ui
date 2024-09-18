"use client"
import BigCalendar from "@/components/BigCalendar"
import Image from "next/image"
import "react-big-calendar/lib/css/react-big-calendar.css"
import Link from "next/link"
import Announcements from "@/components/Announcements"
import Performance from "@/components/Performance"


const SingleTeacherPage = () => {
  return (
    <div className="flex-1 p-4 flex flex-col gap-4 lg:flex-row">
        {/* left */}
        <div className="w-full xl:w-2/3">
        {/* top */}
        <div className="flex flex-col lg:flex-row gap-4">
            {/* user info */}
            <div className="bg-lamaSky px-4 py-6 rounded-md flex-1 flex gap-4">
                <div className="w-1/3">
                <Image src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" width={144} height={144} className="w-36 h-36 rounded-full object-cover" />
                </div>
                <div className="w-2/3 flex flex-col justify-end gap-4">
                <h1 className="text-lg font-semibold">Pyloric Sphincter</h1>
                <p className="text-sm text-gray-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur</p>
                <div className="flex items-center justify-between gap-2 flex-wrap text-xs font-medium">
                    <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                        <Image src="/blood.png" alt="" width={14} height={14} />
                        <span>A+</span>
                    </div>
                    <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                        <Image src="/date.png" alt="" width={14} height={14} />
                        <span>Jan 2022</span>
                    </div>
                    <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                        <Image src="/mail.png" alt="" width={14} height={14} />
                        <span>User@gmail.com</span>
                    </div>
                    <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                        <Image src="/phone.png" alt="" width={14} height={14} />
                        <span>123456789</span>
                    </div>
                </div>
                </div>

            </div>
            {/* small cards */}
            <div className="flex-1 flex gap-2 justify-center flex-wrap">
                {/* card */}
                <div className="bg-white p-4 rounded-md w-full md:w-[48%] xl:w-[45%]">
                    <Image src="/singleAttendance.png" width={24} height={24} alt="" className="h-6 w-6" />
                    <div className="">
                        <h1 className="text-xl font-semibold">90%</h1>
                        <span className="text-sm text-gray-400">Attendance</span>
                    </div>
                </div>
                {/* card */}
                <div className="bg-white p-4 rounded-md w-full md:w-[48%] xl:w-[45%]">
                    <Image src="/singleBranch.png" width={24} height={24} alt="" className="h-6 w-6" />
                    <div className="">
                        <h1 className="text-xl font-semibold">2</h1>
                        <span className="text-sm text-gray-400">Branches</span>
                    </div>
                </div>
                {/* card */}
                <div className="bg-white p-4 rounded-md w-full md:w-[48%] xl:w-[45%]">
                    <Image src="/singleLesson.png" width={24} height={24} alt="" className="h-6 w-6" />
                    <div className="">
                        <h1 className="text-xl font-semibold">5</h1>
                        <span className="text-sm text-gray-400">Lessons</span>
                    </div>
                </div>
                {/* card */}
                <div className="bg-white p-4 rounded-md w-full md:w-[48%] xl:w-[45%]">
                    <Image src="/singleClass.png" width={24} height={24} alt="" className="h-6 w-6" />
                    <div className="">
                        <h1 className="text-xl font-semibold">5</h1>
                        <span className="text-sm text-gray-400">Classes</span>
                    </div>
                </div>
            </div>
        </div>
        {/* bottom */}
        <div className="bg-white rounded-md mt-4 p-4 h-[800px] w-[99%]">
            <h1>Teacher&apos;s Schedule</h1>
            <BigCalendar />
        </div>
        </div>
        {/* right */}
        <div className="w-full xl:w-1/3 gap-4 flex flex-col">
        <div className="bg-white p-4 rounded-md">
            <h1 className="font-semibold text-xl">Shortcuts</h1>
            <div className="mt-4 flex flex-wrap text-xs text-gray-500 gap-2">
            <Link href="/" className="p-3 rounded-md bg-lamaSkyLight">Teacher&apos;s Classes</Link>
            <Link href="/" className="p-3 rounded-md bg-lamaPurpleLight">Teacher&apos;s Students</Link>
            <Link href="/" className="p-3 rounded-md bg-lamaYellowLight">Teacher&apos;s Lessons</Link>
            <Link href="/" className="p-3 rounded-md bg-pink-50">Teacher&apos;s Exams</Link>
            <Link href="/" className="p-3 rounded-md bg-lamaSkyLight">Teacher&apos;s Assignments</Link>
            </div>
        </div>
        <Performance/>
            <Announcements />
        </div>
    </div>
  )
}

export default SingleTeacherPage