import { Outlet } from "react-router"

import Header from "@/Components/Header"
import Footer from "@/Components/Footer"

function RootLayout() {
  return (
    <>
        <div className="min-h-[100dvh] flex flex-col overflow-hidden">
            <Header /> 

        <div className="grow grid grid-cols-1 items-center pt-36 pb-16">
            <Outlet />
        </div>

            <Footer />
        </div>
    </>
  )
}

export default RootLayout