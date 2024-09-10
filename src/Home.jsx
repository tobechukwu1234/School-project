import purple from '/src/assets/purple.jpg'
import book from '/src/assets/book1.jpg'
import Slider from './Slider.jsx'
import Footer from './Footer.jsx'
import {Link} from 'react-router-dom'
import { useState } from 'react'

function Home(){
  const [menuOpen, setMenuOpen] = useState(false)
    

  return(
    <>
      <div className="mt-6 lg:mx-8 me:mx-2">
        <div>
          <nav className="flex me:flex-col lg:flex-row lg:justify-center">

            <div className="flex justify-between items-center me:mx-5 lg:mr-10">
              <h1 className="font-bold uppercase">
                <a href="#" className="text-xl me:text-purple-900 lg:text-black">CHRIS</a>
              </h1>
              <div className='lg:hidden menu' onClick={() => setMenuOpen(!menuOpen)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 text-purple-700">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                </svg>
              </div>
            </div>

            <div className={`${menuOpen ? 'block' : 'hidden'} lg:flex lg:justify-between lg:items-top`}>
              <ul className="mt-4 lg:flex lg:justify-center lg:mx-10">
                <li className="mx-7"><a href="#"><span>Home</span></a></li>
                <li className="mx-7"><a href="#about"><span>About</span></a></li>
                <li className="mx-7"><a href="#contact"><span>Contact Us</span></a></li>
                <li className="mx-7"><a href="#gallery"><span>Gallery</span></a></li>
              </ul>

              <ul className="mt-4 flex lg:justify-center me:justify-start lg:ml-10">
                <Link to="/register">
                  <li className="mx-7 sign">
                    <a href="#"><span>Sign up</span></a>
                  </li>
                </Link>
                <Link to='/login'>
                  <li className="portal">
                    <a href=""><span>School Portal</span></a>
                  </li>
                </Link>
              </ul>
            </div>
          </nav>

        </div>
      </div>

      <div className="banner mt-4 ">
        <div className="cove">
            <div className="mt-16 lg:mt-40 lg:mx-20 lg:grid lg:grid-cols-2 gap-10 ">
              <div className='some p-4 align-center justify-center'>
                <h1 className='font-bold lg:text-5xl text-4xl mb-3 '>Chronicles International School</h1>
                <p className='italic mb-3 text-xl'>Learning Beyond Boundaries.</p>
                <p className='mb-2'>We are delighted to have you visit our school's website, and we extend a warm welcome to you. Our commitment to excellence in education is complemented by our dedication to building strong character, creativity, and lifelong learning skills.</p>
                <p className='font-semibold mb-10'>Every day is a step towards a brighter future.</p>
                <div className="flex">
                    <div className="mr-4 lg:mr-10 portal">
                      <a href="#"><span>Schedule a Visit</span></a>
                    </div>
                    <div className="sign text-white">
                      <a href="#"><span>Learn more</span></a>
                    </div>
                </div>
              </div>

              <div className='me:hidden lg:block'>
                
              </div>
            </div>
        </div>
          
      </div>

      

      <div id='apply' className='mt-8 grid lg:grid-cols-3'>
        <div div className='col-span-2 lg:ml-16' >
            <h2 className='text-3xl lg:text-4xl mb-3 lg:mb-5'>Apply for Admission</h2>
            <p className='text-lg mb-3'>At Chronicles International School, we are committed to providing a well-rounded education that prepares students for success in life. We invite you to become a part of us, where academic excellence, personal growth, and a supportive environment go hand in hand.</p>
            <button className='apply'><a href="#">Apply now</a></button>
        </div>
        
        <div className='col-span-1'></div>

      </div>

      <div id='about'>
          <div className='mt-16 lg:mx-32 me:mx-7 text-center'>
            <h1 className='font-bold lg:text-5xl me:text-3xl me:mb-5 lg:mb-10 text-gray-800'>A Tradition of Excellence at <br /> Chronicles International School</h1>
            <p className='mb-5 text-gray-900 text-lg'>Established in 2017 Chronicles International School has a history of providing top notch education and instilling a passion for learning in students. We are proud to offer a combination of Nigerian and international curricula ensuring that our students receive a comprehensive education that equips them for success in an increasingly interconnected world.</p>
            <p className='mb-5 text-gray-900 text-lg'>Our teaching philosophy incorporates the Montessori approach focusing on learning, interactive activities and the cultivation of critical thinking skills from an early stage. This methodology enables students to delve into subjects at their speed while establishing a solid groundwork in fundamental academic disciplines.</p>
            <p className='mb-5 text-gray-900 text-lg'>Recognizing the significance of a learning environment we have outfitted our classrooms with cutting edge resources and our campus fosters a secure, inviting and stimulating setting where students can flourish. In addition to academics we provide an array of opportunities such as sports, music, arts and clubs to inspire students to explore their interests acquire new talents and boost their self assurance.</p>
            <p className='mb-5 text-gray-900 text-lg'>Our unwavering dedication to excellence is evident in our committed faculty members who are dedicated to nurturing each students potential fostering a love for continual learning and preparing them to become conscientious individuals, with well rounded capabilities.
            Come be a part of the Chronicles International School and embark on an adventure that blends heritage, with creativity all amidst a caring and vibrant environment.</p>
                  
          </div>

          <div className="vision-container flex">

         
              <div className="imagekk lg:mr-10">
                <img src={purple} />
              </div>
            
                           
              <div className="vision">
                  <h2>Our Educational Philosophy</h2>
                  
                  <p>Our philosophy centers on providing a student-centered education that encourages exploration, curiosity, and lifelong learning. We are committed to holistic education that nurtures the intellectual, emotional, and social growth of each child.
                  We focus on developing critical thinking, problem-solving skills, and a passion for knowledge in a caring and inclusive environment.
                  </p>
              </div>

              <div className="mission">
                <img src={book}></img>
                <p></p>
              </div>

              <div className="mission1">
                <h2>What We Believe In</h2>
                <p>We believe in the power of a positive learning environment to inspire students to achieve their highest potential. We believe that every child deserves to be seen, heard, and supported as they grow into confident, compassionate individuals. We believe in shaping well-rounded individuals who excel academically and uphold strong moral values.</p>
              </div>
          </div>

          

          <div className='mt-16 me:mx-7 lg:mx-40 grid lg:grid-cols-3 gap-5'>

            <div className='bg-white px-6 py-6 class school relative'>
              <h3 >Preschool</h3>
              <p className='mb-6'>The Preschool section of Chronicles International School provide a safe, nurturing, and stimulating environment where young children can learn and grow. Our preschool program is designed for children aged 18 months to 5+ years. Through engaging activities and a supportive atmosphere, we help each child build a strong foundation for lifelong learning.</p>
              <button className='more'><a href="#">Read more</a></button>
            </div>

            <div className='bg-white px-6 py-6 class school relative'>
              <h3>Elementary</h3>
              <p className='mb-8'>Our curriculum is designed to inspire a love of learning, critical thinking, and creativity, while our dedicated teachers ensure that each student feels valued and encouraged to reach their full potential. We are committed to providing a solid academic foundation and a nurturing environment for children from grades 1-6.</p>
              <button className='more'><a href="#">Read more</a></button>
            </div>

            <div className='bg-white px-6 py-6 class school relative'>
              <h3>Secondary</h3>
              <p className='mb-8'>We provide a rigorous academic program and a supportive environment to prepare students for future success. Our dedicated teachers and diverse extracurricular activities ensure that students are equipped with the skills and confidence they need for college and beyond. Join us today.</p>
              <button className='more'><a href="#">Read more</a></button>
            </div>

          </div>
      </div>

      
      <div id='contact'>
          <div className='mt-16 info'>
            <h1 className='text-center mb-3 lg:text-4xl me:text-3xl'>Be the first to know</h1>
            <p className='text-center mb-4 lg:text-xl me:text-lg'>Signup for the latest news from Chronicles International School</p>
            <div className='things lg:flex lg:justify-center lg:align-center'>
              <input type="text" placeholder='Name'/>
              <input type="text" placeholder='Email'/>
              <button className="btn"><a href="#">Subscribe</a></button>
            </div>
          </div>
      </div>

      
      <div>
        <Slider/>
        <Footer/>
      </div>

      

      
    </>
  )
}

export default Home