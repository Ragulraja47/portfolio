import HeroImg from './assets/hero.png'
import { FaInstagram } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { AiOutlineLinkedin } from "react-icons/ai";
function Hero(){
    return(
        <div className="Hero">

            <section className='flex flex-col md:flex-row px-5 py-32 bg-Secondary justify-center'>
                <div className='md:w-1/2 flex flex-col'>
                <h1 className='text-white text-6xl font-hero-font '>Hi, <br/> Im <span className='text-black hover:text-white'>Ragul Raja</span> 
                <p className='text-2xl'>Junior Full-stack developer</p>
                </h1>
                <div className='flex py-10'>
                    <a className='pr-5 hover:text-white' href=""><AiOutlineLinkedin size={40} /></a>
                    <a className='pr-5 hover:text-white'  href=""><IoLogoGithub size={40} /></a>
                    <a className='hover:text-white'  href=""><FaInstagram size={40} /></a>
                </div>
                </div>
                
                <img className='md:w-1/3' src={HeroImg} />
            </section>
                       
        </div>
    );

};
export default Hero;