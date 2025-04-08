import { pageNotFound } from "@/Assets"
import { Button } from "@/Components/ui/button"
import { isRouteErrorResponse, useRouteError, Link } from "react-router"
import Header from "@/Components/Header"
import Footer from "@/Components/Footer"

const NotFound = () => {

  const error = useRouteError();

  return (
    <div className="min-h-[100dvh] flex flex-col">
      <Header />

      <div className="grow container flex flex-col justify-center items-center pt-32 pb-12">
        <h2 className="text-2xl font-semibold text-center sm:text-4xl">
          {isRouteErrorResponse(error) ? "Hmmm, die Seite scheint nicht zu existieren" : "Es ist ein Fehler aufgetreten"} 
        </h2>
        <p className="text-muted-foreground mx-w-[55ch text-center mt-4 mb-6 sm:text-lg]">
          {isRouteErrorResponse(error) ? "Kehre zur Startseite zurück um deine Aufgaben weiterhin zu managen." : "Wir arbeiten daran dieses Problem schnellstmöglich zu Lösen. Probiere es später erneut."}
        </p>

        <div className="flex gap-2">
          <Button asChild>
            <Link to="/"> Zur Startseite </Link>
          </Button>
          <Button asChild variant="ghost">
            <Link to="/app/inbox"> Eingang einsehen </Link>
          </Button>
        </div>

        <div className="mt-10">
          <img 
          src={pageNotFound} 
          width={500}
          height={323}
          alt="ERROR 404" 
          className="" />
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default NotFound