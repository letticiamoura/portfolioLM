
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

function Footer() {

    return(

        <footer className="bg-pessego text-slate-white p-8 text-center relative left-0 bottom-0">

            <ul className="flex  justify-center list-none">

                <li>
                    <a className="text-slate-white text-3xl hover:text-orange mr-16 text-center" href='https://github.com/LetticiaMoura' target="_blank"> <FaGithub /> </a>
                </li>

                <li>
                    
                    <a className="text-slate-white text-3xl hover:text-orange mr-16 text-center" href='https://www.linkedin.com/in/leticia-moura-2157891a6' target="_blank"> <FaLinkedin /> </a>

                </li>

                <li>

                    <a className="text-slate-white text-3xl hover:text-orange mr-12  text-center" href='https://www.instagram.com/leticiamourah_?igsh=aGpoZHkzYWx2cDRy' target="_blank"> <FaInstagram /> </a>

                </li>
                
            </ul>

            <p className="mt-2 text-2xl font-bold"> <span className="font-weight font-bold text-slate-white"> Leticia Moura </span> <span className="font-bold text-orange"> &copy; </span>2024</p>

        </footer>
            
    )
}

export default Footer;