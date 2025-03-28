import { Outlet, useNavigation } from "react-router"

import Header from "@/Components/Header"
import Footer from "@/Components/Footer"

import { logo } from "@/Assets";
import { Loader2 } from "lucide-react";

function RootLayout() {
  const navigation = useNavigation();

  const isLoading = navigation.state === "loading" && !navigation.formData

  return (
    <>
        <div className="relative isolate min-h-[100dvh] flex flex-col overflow-hidden">
            <Header /> 

        <div className="grow grid grid-cols-1 items-center pt-36 pb-16">
            <Outlet />
        </div>

            <Footer />

            {/* Leichtes, modernes design an den Seiten */}
            <div className="bg-primary/20 absolute top-20 left-0 w-80 h-10 rotate-45 origin-top-left blur-3xl"></div>
            <div className="bg-primary/20 absolute top-20 right-0 w-80 h-10 -rotate-45 origin-top-right blur-3xl"></div>

            {/* Loader */}
            {isLoading && (
              <div className="fixed top-0 left-0 z-50 w-full h-[100dvh] bg-background flex flex-col justify-center items-center gap-5">
                <img src={logo} width={64} height={64} alt="planen." />
                <Loader2 className="text-muted-foreground animate-spin" />
              </div>
            )}
        </div>
    </>
  )
}

export default RootLayout