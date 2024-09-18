"use client"

import { z } from "zod";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import InputField from "../InputField";

const schema = z.object({
    username: z.string().min(3, { message: 'Username must be atleast 3 characters long!' })
    .max(20, { message: 'Username must be atmost 20 characters long!' }),
    email: z.string().email({message: 'invalid email address!'}),
    password: z.string().min(8, { message: 'Password must be atleast 8 characters long!' }),
    firstName:z.string().min(1, { message: 'First Name is required!' }),
    lastName:z.string().min(1, { message: 'Last Name is required!' }),
    phone:z.string().min(1, { message: 'Phone Number is required!' }),
    address:z.string().min(1, { message: 'Address Name is required!' }),
    birtday:z.date({ message: 'Birthday Name is required!' }),
    Gender: z.enum(["male" , "female"] ,{message: "Yeah there are only two!"}),
    img: z.instanceof(File,{message:"Image is required!"}),

});

type Inputs = z.infer<typeof schema>;

const TeacherForm = ({ type }: { type: "plus" | "edit"; data?: any; }) => {

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<Inputs> ({
        resolver: zodResolver(schema),
      });

      const onSubmit = handleSubmit(data => {
        console.log(data);
      })
    return (
        <form action="" className="flex flex-col gap-8" onSubmit={onSubmit}>
            <h1 className="font-bold text-xl ">Create a new Teacher</h1>
            <span className="text-xs text-gray-400 font-medium ">Authentication Information</span>
            <InputField 
            label="username"
            name="username"
            defaultValue={data?.username}
            register={register}
            error={errors.username}
            />
            <span className="text-xs text-gray-400 font-medium ">Personal Information</span>
            <button className="bg-blue-400 text-white p-2 rounded-md">{type=== "plus" ? "plus" : "edit"}</button>
        </form>
    )
}

export default TeacherForm