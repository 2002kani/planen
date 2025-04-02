 import { redirect } from "react-router";

export function generateID(){
    return Math.random().toString(36).slice(8) + Date.now().toString(36);
  }
  
  export function getUserId(): string {
    const clerkUserId = localStorage.getItem("clerkUserId");
  
    if(!clerkUserId){
      redirect("/auth-sync")
      return "";
    }

    return clerkUserId;
  }