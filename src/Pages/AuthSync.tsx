import { useNavigate } from "react-router"
import { useEffect } from "react"
import { SignedIn, useAuth } from "@clerk/clerk-react"

const AuthSync = () => {
    const navigate = useNavigate();
    const { isSignedIn, isLoaded, userId } = useAuth();

    useEffect(() => {  
        if(!isLoaded) return;

        if(!isSignedIn) {
            navigate("/");
            return;
        }

        if(isSignedIn){
            localStorage.setItem("clerkUserId", userId);

            navigate("/app/today");
        }
    }, [userId, isSignedIn, isLoaded])

    return (
        <div>AuthSync</div>
  )
}

export default AuthSync