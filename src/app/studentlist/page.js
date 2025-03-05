import Link from "next/link";

export default function Studentslist() {
    return (
        <div>
            <h4>
                students list
            </h4>
            <ul>
               <li>
                <Link href="/studentlist/1">arpit</Link>
               </li>
               <li>
                <Link href="/studentlist/2">rakesh</Link>
               </li>
               <li>
                <Link href="/studentlist/3">mrinal</Link>
               </li>
               <li>
                <Link href="/studentlist/4">shiva</Link>
               </li>
            </ul>
        </div>
    )
}