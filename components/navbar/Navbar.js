import Link from "next/link";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../utils/firebase";
import { Hamburger } from './Hamburger';
import Image from "next/image";

// import logo image
import Logo from '../../img/vercel.jpg'


const Navbar = () => {
    const [user, loading] = useAuthState(auth);
    return (
        <nav className="bg-white fixed bg-opacity-50 backdrop-blur-lg md:mt-0 w-full mx-auto z-50 shadow">
        <div className="hidden items-center md:visible md:flex md:justify-between px-10 py-2">
        <div className="hover:cursor">
            <ul className="flex items-center gap-3">
              <Link legacyBehavior href="/dashboard">
                <Image src={Logo} width={20} alt="image"/>
              </Link>
              <Link legacyBehavior href="/dashboard">
                <a className="font-display text-2xl text-black tracking-tighter font-medium	">Trackie</a>          
              </Link>
            </ul>
        </div>
    
        <div className="flex gap-4 justify-center items-center">
                <div className="hover:underline text-sm md:text-base font-semibold">
                {!user && (
                    <Link href={"/auth/Login"} legacyBehavior>
                        <a>Login</a>
                    </Link>
                )}
                {user && (
                <div className="hover:underline text-sm md:text-base font-semibold">
                    <Link href="/dashboard" legacyBehavior>
                        <a>Dashboard</a>
                    </Link>
                </div> 
                )}
                </div>
                {user && (
                    <div className="hover:underline text-sm md:text-base font-semibold">
                    <Link href="/input" legacyBehavior>
                        <a>Input</a>
                    </Link>
                    </div>
                )}
                {user && (
                    <div className="hover:underline text-sm md:text-base font-semibold">
                    <Link href="/pay" legacyBehavior>
                        <a>Pay</a>
                    </Link>
                    </div>
                )}                           
                <div className="hover:underline text-sm md:text-base font-semibold">
                    {user && (
                        <div className="flex items-center gap-4">
                            <Link href="/Profile">
                                <img className="w-8 h-8 rounded-full cursor-pointer" src={user.photoURL} />
                            </Link>  
                        </div>
                    )}
                </div> 
            </div> 
    
        </div>
    
        <div className="flex justify-between md:mt-3 md:hidden w-full max-w-3xl mx-auto px-5 md:px-10 py-2 items-center hover:cursor">
            <ul className="flex items-center gap-1">
                <Link legacyBehavior href="/dashboard">
                    <Image src={Logo} width={20} alt="image"/>
                </Link>
                <Link legacyBehavior href="/dashboard">
                    <p className="font-display text-xl text-black tracking-tighter">Trackie</p>          
                </Link>
            </ul>         
            <Hamburger />
        </div>
    
        </nav>
    );
}
 
export default Navbar;
