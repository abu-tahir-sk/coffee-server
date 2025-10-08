
import banner from '../assets/images/more/3.png'
const Banner = () => {
      return (
            <div style={{ backgroundImage: `url(${banner})`, }} className=' h-[70vh] bg-cover   text-white flex justify-end'>
                 <div className='flex  justify-center items-center '>

                 <div className='flex flex-col justify-start items-start w-[70%]'>
                  <h2 className='font-bold text-2xl py-2'>Would you like a Cup of Delicious Coffee?</h2>
                  <p className='py-3'>It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                  <button className="btn bg-[#E3B577]">Learn More</button>
                 </div>
                 </div>
            </div>
      );
};

export default Banner;