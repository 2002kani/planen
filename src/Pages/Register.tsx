import Head from "@/Components/Head"
import { SignUp } from "@clerk/clerk-react"

const Register = () => {
  return (
    <>
        <Head title="Erstelle ein Account auf Planen" />

        <section>
          <div className="container flex justify-center">
            <SignUp signInUrl="/login"/>
          </div>
        </section>
    </>
  )
}

export default Register