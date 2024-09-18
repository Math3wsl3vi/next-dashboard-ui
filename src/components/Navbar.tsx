import Image from "next/image"

const Navbar = () =>{
    return(
        <div className="flex items-center justify-between p-4">
            <div className="hidden md:flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-500 px-2 ">
                <Image src="/search.png" width={14} height={14} alt=""/>
                <input type="text" placeholder="Search..." className="w-[200px] p-2 bg-transparent outline-none "/>
            </div>
            <div className="flex items-centerpa gap-6 justify-end w-full">
            <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer">
                <Image src="/message.png" width={20} height={20} alt="" />
            </div> 
            <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer relative">
                <Image src="/announcement.png" width={20} height={20} alt="" />
                <div className="absolute -top-3 -right-3 h-5 w-5 items-center flex justify-center bg-purple-500 text-white rounded-full text-xs">1</div>
            </div> 
            <div className="flex flex-col">
                <span className="text-xs leading-3 font-medium" >John Doe</span>
                <span className="text-[10px] text-right text-gray-500"> Admin</span>
            </div>
            <Image src="/avatar.png" width={36} height={36} className="rounded-full" alt=""/>
        </div>
        </div>
    )
}
export default Navbar
  