import { Link } from "react-router"
import { Button } from "./ui/button"

import Logo from "./Logo"

function Header() {
  return (
    <header className="fixed top-0 left-0 w-full p-4">
        <div className="container h-16 border backdrop-blur-3xl rounded-xl flex justify-between items-center">
            <Link to="/">
                <Logo />
            </Link>

            <div className="flex items-center gap-2">
                <Button asChild variant="ghost">
                    <Link to="/login"> Anmelden </Link>
                </Button>
                <Button asChild>
                    <Link to="/register"> Kostenlos starten </Link>
                </Button>
            </div>
        </div>
    </header>
  )
}

export default Header