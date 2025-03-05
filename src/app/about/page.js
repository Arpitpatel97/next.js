"use client"
import {useRouter} from 'next/navigation'
const About=()=>{
    const router=useRouter();
    const navigate=(destination)=>{
        router.push("/about/"+destination);
    }
    return(
      <div>
          <h1 className='heading'>
              about page
          </h1>
           <button onClick={()=>navigate("aboutstudent")}>
            go to about student
           </button>
           <br/>
           <button onClick={()=>navigate("aboutcollege")}>
            go to about college
           </button>
      </div>
    )
}

export default About;