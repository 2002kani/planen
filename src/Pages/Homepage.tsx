import { Link } from "react-router"
import { Button } from "@/Components/ui/button"
import Head from "@/Components/Head"

import { heroBannerSm } from "@/Assets"
import { heroBannerLg } from "@/Assets"

function Homepage() {
  return (
    <>
    <Head title="Planen - KI basierte To-Do Listen & Projekt Management App" />

    <section>
      <div className="container !px-8 grid grid-cols-1 gap-8 items-center xl:gap-12 xl:grid-cols-[1fr_1.5fr]">
        <div className="flex flex-col items-center text-center space-y-4 lg:text-left lg:items-start lg:space-y-6">
          <h1 className="text-4xl font-semibold max-w-[22ch] md:text-5xl lg:text-5xl xl:text-5xl 2xl:text:5xl">
            Deine <span className="inline-flex bg-gradient-to-t from-primary/50 to-primary/30 rounded-sm px-2 overflow-hidden">smarte To-Do-App,</span> die mitdenkt, plant und Dich nie wieder etwas vergessen lässt.
          </h1>

          <p className="max-w-[48ch] text-foreground/80 md:text-lg lg:text-xl">
            Vereinfache dein Leben für dich und dein Team mit der #1 Task Manager und To-Do Software
          </p>

          <Button asChild size="lg">
            <Link to="/register">Kostenlos starten</Link>
          </Button>
        </div>

        <div className="bg-secondary rounded-2xl overflow-hidden aspect-square max-md:max-w-[480px] max-md:mx-auto md:aspect-video">
          <img 
            src={heroBannerSm}
            width={480}
            height={480}
            alt="Planen Webseite"  
            className="md:hidden"
          />
          <img 
            src={heroBannerLg} 
            width={960}
            height={540}
            alt="Planen Webseite" 
            className="max-md:hidden" 
          />
        </div>
      </div>
    </section>
    </>
  )
}

export default Homepage