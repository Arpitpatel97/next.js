"use client"
import {useRouter} from 'next/navigation'
const Login=()=>{
    const router=useRouter();
    const navigate=(destination)=>{
        router.push("/login/"+destination);
    }
    return(
      <div>
          <h1>
             login page
          </h1>
           <button onClick={()=>navigate("studentlogin")}>
           got to student login  page
           </button>
           <br/>
           <button onClick={()=>navigate("teacherlogin")}>
            go to teacher login page
           </button>
      </div>
    )
}

export default Login;