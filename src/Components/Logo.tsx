import { logo } from "@/Assets"

function Logo() {
  return (
    <div className="flex items-center gap-2 font-semibold text-">
        <img src={logo} alt="Planen"  className="w-6 h-6"/>
        <p className="text-lg">Planen</p>
    </div>
  )
}

export default Logo