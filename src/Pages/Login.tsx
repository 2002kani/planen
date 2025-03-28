import Head from "@/Components/Head"
import { SignIn } from "@clerk/clerk-react"

const Login = () => {
  return (
    <>
        <Head title="Logge dich in dein Account ein" />

        <section>
          <div className="container flex justify-center">
            <SignIn signUpUrl="/register"/>
          </div>
        </section>
    </>
  )
}

export default Login