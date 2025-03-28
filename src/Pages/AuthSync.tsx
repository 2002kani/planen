import { useNavigate } from "react-router"
import { useEffect } from "react"
import { SignedIn, useAuth } from "@clerk/clerk-react"

const AuthSync = () => {
    const navigate = useNavigate();
    const { isSignedIn, isLoaded, userId } = useAuth();

    useEffect(() => {  
        if(!isLoaded) return;

        if(!isSignedIn) {
            if(localStorage.getItem("clerkUserId")){
                localStorage.removeItem("clerkUserId");
            }
            navigate("/");
            return;
        }

        if(isSignedIn){
            localStorage.setItem("clerkUserId", userId);

            navigate("/app/today");
        }
    }, [userId, isSignedIn, isLoaded])

    return (
        <>
        
        </>
  )
}

export default AuthSync