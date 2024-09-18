import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import Link from "next/link";



export default function DashboardLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div className="h-screen flex">
        <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%]">
          <Link href="" className="flex items-center justify-center lg:justify-start gap-2 p-4">
          <img src="logo.png" width={32} height={32} alt="" />
          <span className="hidden lg:block font-bold">SUGUL</span>
          </Link>
          <Menu />
        </div>
        <div className="w-[86%] md:w-[92%] lg:[82%] xl:w-[86%] bg-[#f7f8fa] overflow-scroll">
          <Navbar />
          {children}
        </div>

        </div>
    );
  }