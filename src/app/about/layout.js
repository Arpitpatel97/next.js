import Link from "next/link";
import './about.css';
export default function Layout({children}){
    return (
    <div>
      <ul className="about-menu">
        <li>
            <h4>
                about-menu
            </h4>
        </li>
        <li >
            <Link href="/about">about main</Link>
        </li>
        <li >
            <Link href="/about/aboutstudent">about student</Link>
        </li>
        <li >
            <Link href="/about/aboutcollege">about college</Link>
        </li>
      </ul>
        {
            children
        }
    </div>)
}
