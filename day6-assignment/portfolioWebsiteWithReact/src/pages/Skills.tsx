import CSSImage from "../assets/stack/CSS.png"
import GitImage from "../assets/stack/Git.svg"
import GitHubImage from "../assets/stack/Github.svg"
import HTMLImage from "../assets/stack/HTML.png"
import JavascriptImage from "../assets/stack/Javascript.svg"
import MongodbImage from "../assets/stack/MongoDB.svg"
import NodeJsImage from "../assets/stack/NodeJs.svg"
import ReactImage from "../assets/stack/React.png"
import ReduxImage from "../assets/stack/Redux.svg"
import TailwindImage from "../assets/stack/Tailwind.png"
import TypescriptImage from "../assets/stack/Typescript.svg"
import ExpressImage from "../assets/stack/Express.png"



const Skills = () => {
  return (
    <div>
                    <h1 className="text-9xl text-orange-500 text-center tracking-wide"> Skills </h1>        
            <div className="flex w-full gap-20">

                <div className="w-1/2">

                    <div className="flex flex-col mt-5">
                        <div className="text-5xl text-orange-500">
                            <span className="text-8xl font-serif" >M</span>e and <br />
                            My Tech Stack
                        </div>
                        <p className="text-lg my-8">
                        Hello, I’m Arjin Joshi, a passionate Full-Stack Web Developer with one month of experience in designing and delivering impactful digital solutions. Since one and half years, I serve as a Part-Time Instructor at Kathmandu Engineering College, where I mentor students in programming fundamentals. <br /> <br /> Alongside teaching, I studying a MERN stack course, specializing in React.js to build seamless and visually appealing UI/UX designs. My commitment to excellence drives me to continuously learn and refine my skills, ensuring high-quality outcomes in every project I undertake.
                        </p>
                    </div>
                </div>
                <div className="flex mt-15 items-center justify-center gap-8 flex-wrap w-1/2 h-full">
                    <img src={MongodbImage} className="w-24 h-24" alt="" />
                    <img src={ExpressImage} className="w-24 h-24" alt="" />
                    <img src={ReactImage} className="w-24 h-24" alt="" />
                    <img src={NodeJsImage} className="w-24 h-24" alt="" />
                    <img src={GitImage} className="w-24 h-24" alt="" />
                    <img src={GitHubImage} className="w-24 h-24" alt="" />
                    <img src={HTMLImage} className="w-24 h-24" alt="" />
                    <img src={CSSImage} className="w-24 h-24" alt="" />
                    <img src={JavascriptImage} className="w-24 h-24" alt="" />
                    <img src={TypescriptImage} className="w-24 h-24" alt="" />
                    <img src={TailwindImage} className="w-24 h-24" alt="" />
                    <img src={ReduxImage} className="w-24 h-24" alt="" />
                </div>

        </div>
        <div className='text-lightGray text-9xl select-none absolute bottom-6 left-45'>
             Skills
        </div>
    </div>
  )
}

export default Skills
