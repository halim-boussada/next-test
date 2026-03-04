"use client"
import { useRouter } from "next/navigation";
export default function Redirect({id} : {id : number}) {
   const router = useRouter()

   function goTodetails(){
     router.push("/posts/" + id)
   }
  return (
    <div>
       <button onClick={goTodetails}>redirect button</button>
    </div>
  );
}
