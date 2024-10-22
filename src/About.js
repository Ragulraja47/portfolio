import AbtImg from './assets/about.png';
function About(){
    return(

        <div className="About">
            <section className='flex bg-primary text-white px-5'>
                <div className='w-1/2'>
                    <img src={AbtImg} />                        
                </div>
                <div className='w-1/2 flex justify-center'>
                    <div className='flex flex-col justify-center'>
                    <h1 className='text-4xl border-b-4 border-color mb-5 w-[170px] font-bold'>About me</h1>
                    <p className=''>Aspiring Full Stack developer with strong Foundation in Java Language and eager to develop user friendly websites</p>
                    </div>
                </div>
            </section>
        </div>
    );

};
export default About;