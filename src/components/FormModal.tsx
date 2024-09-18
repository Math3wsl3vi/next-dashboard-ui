"use client"

import Image from "next/image";
import { useState } from "react";
import TeacherForm from "./Forms/TeacherForm";

const FormModal = ({table, type, data, id}:{
    table:
     |"teacher" 
     |"student" 
     |"parent" 
     |"subject" 
     |"class" 
     |"lesson" 
     |"exam" 
     |"assignment" 
     |"result" 
     |"attendance" 
     |"event" 
     |"announcement" ;

     type: "plus"| "edit" | "delete"
     data? : any;
     id? : number;
    }) => {

        const size = type === "plus" ? "w-8 h-8" : "w-7 h-7"
        const bgColor = type === "plus" ? "bg-lamaYellow" : type === "edit" ? "bg-lamaSky" : "bg-lamaPurple";

        const [open, setOpen] = useState(false);

        const Form = ()=>{
          return type === "delete" && id? (
          <form action="" className="p-4 flex flex-col gap-4">
            <span className="text-center font-medium ">All data will be lost. Are you sure you want to delete this {table}?</span>
            <button className="bg-red-700 text-white py-2 px-2 rounded-md border-none  w-max self-center" >Delete</button>
          </form>

           ):(
            <TeacherForm type="plus" />
          );
        }
  return (
   <>
   <button className={`${size} flex items-center justify-center rounded-full ${bgColor}`} onClick={()=> setOpen(true)}>
    <Image src={`/${type}.png`} alt="" width={16} height={16}/>
   </button>
   {open && <div className="w-screen h-screen absolute left-0 top-0 bg-opacity-60 z-50 flex items-center justify-center ">
    <div className="bg-white p-4 rounded-md relative w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%] "> hello
    <div className="absolute top-4 right-4 cursor-pointer " onClick={()=>setOpen(false)} > 
    <Image src="/close.png" width={14} height={14} alt="" />
    </div>
    <Form />
    </div>
   </div> }
   </>
  )
}

export default FormModal