import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css' 
import { RouterProvider } from 'react-router'
import { ClerkProvider } from '@clerk/clerk-react'
import { dark } from '@clerk/themes'
import { HelmetProvider } from 'react-helmet-async'
 
import router from './Routes/index.tsx'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
const SIGN_IN_FORCE_REDIRECTED_URL = import.meta.env.VITE_CLERK_SIGN_IN_FORCE_REDIRECTED_URL
const SIGN_UP_FORCE_REDIRECTED_URL = import.meta.env.VITE_CLERK_SIGN_UP_FORCE_REDIRECTED_URL
  
if(!PUBLISHABLE_KEY){
  throw new Error("Kein Clerk Key veröffentlicht");
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
    <ClerkProvider 
    publishableKey={PUBLISHABLE_KEY} 
    afterSignOutUrl="/auth-sync"
    signInForceRedirectUrl={SIGN_IN_FORCE_REDIRECTED_URL}
    signUpForceRedirectUrl={SIGN_UP_FORCE_REDIRECTED_URL}
    appearance={{ baseTheme: dark }}>
    <RouterProvider router={router} />
    </ClerkProvider>
    </HelmetProvider>
  </StrictMode>,
)
