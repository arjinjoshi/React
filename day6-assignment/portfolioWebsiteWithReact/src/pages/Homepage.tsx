
import ProfileImage from "../assets/UserImage.jpg"


const Homepage = () => {
  return (
    <div className='flex justify-between h-full mt-30 items-center'>
        <div className='text-lightdarkblue tracking-wide flex flex-col gap-5'>
            <h1 className='text-4xl'>Hi! Arjin Joshi </h1>
            <div className='text-4xl'>
                I am a 
                <span className='text-lightpurple'> Full Stack Developer
                </span>
            </div>

        <p className='text-lg tracking-wide'>I'm a software developer and here is my portfolio website. <br /> Here you'll learn about my journey as a software developer.</p>

        <button className='bg-bgOrange bg-orange-500 text-white text-left text-lg tracking-wide padding w-30 rounded-2xl p-3'> <p className='text-center'>Hire Me</p></button>

        <div className='text-lightGray text-9xl select-none absolute bottom-6 left-45'>
             Home
        </div>




        </div>
        <div className='p-10 grayscale transition-all duration-1000 animate-scale-image'>
            <img src={ProfileImage} className='h-88 rounded-xl ' alt="" />
        </div>

    </div>

  )
}

export default Homepage
