
"use client"
export default function Studentsdetail({params}) {
    console.log(params);
    
    return (
        <div>
            <h4>
                students details
            </h4>
           <h4>
          name:{params.student}
           </h4>
        </div>
    )
}