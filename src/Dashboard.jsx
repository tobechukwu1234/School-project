import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';

function Dashboard(){

  const storedUserInfo = localStorage.getItem('userInfo')
  let parsedUserInfo = JSON.parse(storedUserInfo)

    const keyName = parsedUserInfo.firsname.slice(0, 1)
    const keyName2 = parsedUserInfo.lasname.slice(0, 1)

 

  return(<>
    <div>
      <div className="grid lg:grid-cols-5 h-screen together">

     
        <div className="lg:col-span-1 p-6 bg-white left-sidebar">
            <Link to="/">
              <h1 className="text-2xl font-bold lg:my-6 me:my-3 ml-6">
              <a href="#" className="text-purple-800">CHRIS</a>
              </h1>
            </Link>
            

          <div className="flex flex-col lg:gap-80 mt-10">
            <div className="chan ml-10">
              <h2 className="lg:py-4 me:py-3">
                <a href="#" className="text-purple-800">Dashboard</a>
              </h2>
              <h2 className="lg:py-4 me:py-3">
                <a href="#">Classes</a>
              </h2>
              <h2 className="lg:py-4 me:py-3">
                <a href="#">Assesment</a>
              </h2>
              <h2 className="lg:py-4 me:py-3">
                <a href="#">Study books</a>
              </h2>
              <h2 className="lg:py-4 me:py-3">
                <a href="#">Log out</a>
              </h2>
            </div>

            <div>
              <h2>
                <a href="#">
                  <img src="" />
                </a>
              </h2>
              <p className="text-sm text-gray-500 lg:block me:hidden">&copy; Chronicles International School</p>
            </div>
          </div>

        </div>
  
        <div className="lg:col-span-4 main-content">

          <div className="flex justify-between items-center py-8  lg:px-5 me:px-8 bg-purple-200">

            <div className="lg:px-4 search">
              <input type="text" placeholder="Search here"/>
            </div>
            
            <div className="flex items-center lg:gap-4 me:gap-6 justify-center">

              <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
              </div>

              <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                </svg>
              </div>

              <div className="bg-purple-800 text-white px-4 py-2 rounded-full brief">
                <p>{keyName}{keyName2}</p>
              </div>

              <div>
                <a href="#" className="text-purple-800 underline">{parsedUserInfo.firsname} {parsedUserInfo.lasname}</a>
              </div>

            </div>
          </div>

          <div>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4 px-16 py-8">
              <div className="bg-white p-5 dash shadow-xl">
                <div className="flex justify-between items-center">
                  <div>
                    <h2 className="text-md text-gray-500 pb-2">REVENUE</h2>
                    <p className="lg:text-lg font-bold">1.2M</p>
                  </div>
                  <div className="bg-purple-300 text-white px-4 py-2 rounded-full text-center shadow-lg">
                    <p>R</p>
                  </div>
                </div>
                <p className="pt-7 lg:text-sm"><span className="text-green-800 font-bold">23%</span> Since Launch</p>
              </div>

              <div className="bg-white p-5 dash shadow-xl">
                <div className="flex justify-between items-center">
                  <div>
                    <h2 className="text-md text-gray-500 pb-2">REGISTERED USERS</h2>
                    <p className="lg:text-lg font-bold">102</p>
                  </div>
                  <div className="bg-purple-300 text-white px-4 py-2 rounded-full text-center shadow-lg">
                    <p>U</p>
                  </div>
                </div>
                <p className="pt-7 lg:text-sm"><span className="text-green-800 font-bold">53%</span> Since Launch</p>
              </div>

              <div className="bg-white p-5 dash shadow-xl">
                <div className="flex justify-between items-center">
                  <div>
                    <h2 className="text-md text-gray-500 pb-2">LOGIN</h2>
                    <p className="lg:text-lg font-bold">17</p>
                  </div>
                  <div className="bg-purple-300 text-white px-4 py-2 rounded-full text-center shadow-lg">
                    <p>L</p>
                  </div>
                </div>
                <p className="pt-7 lg:text-sm"><span className="text-red-800 font-bold">23%</span> Since Launch</p>
              </div>

              <div className="bg-white p-5 dash shadow-xl">
                <div className="flex justify-between items-center">
                  <div>
                    <h2 className="text-md text-gray-500 pb-2">NO OF STUDENTS</h2>
                    <p className="lg:text-lg font-bold">321</p>
                  </div>
                  <div className="bg-purple-300 text-white px-4 py-2 rounded-full text-center shadow-lg">
                    <p>N</p>
                  </div>
                </div>
                <p className="pt-7 lg:text-sm"><span className="text-green-800 font-bold">29%</span> Since Launch</p>
              </div>

            </div>
          </div>

          <div className="py-3 px-12 mb-2">
            <p className="text-3xl">User Review</p>
          </div>

        
          <div className="lg:px-16 me:px-6 mb-20">
            <table className="w-full">
              <thead className="lg:text-sm bod">
                <tr>
                  <th className="py-2 px-4 text-left">S/N</th>
                  <th className="py-2 px-16 text-left">SUBJECTS</th>
                  <th className="py-2 px-16 text-left">BODY</th>
                  <th className="py-2 px-16 text-left">EMAIL</th>
                </tr>
              </thead>
              <tbody className="text-sm bg-white">
                <tr className="border-b">
                  <td className="py-2 px-4">1</td>
                  <td className="py-2 px-16">General</td>
                  <td className="py-2 px-16 whitespace-normal">I think it is a great app that should help me improve my understanding and knowledge and excel at my exams</td>
                  <td className="py-2 px-16">user@example.com</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-4">2</td>
                  <td className="py-2 px-16">Uploaded Question</td>
                  <td className="py-2 px-16 whitespace-normal">What is the capital of France? (A) London (B) Berlin (C) Paris (D) Madrid</td>
                  <td className="py-2 px-16">Geography Class</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 px-4">3</td>
                <td className="py-2 px-16">Subject</td>
                <td className="py-2 px-16 whitespace-normal">Mathematics - Algebra, Geometry, Trigonometry</td>
                <td className="py-2 px-16">Grade 10</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 px-4">4</td>
                <td className="py-2 px-16">Test Taken</td>
                <td className="py-2 px-16 whitespace-normal">Biology Mid-term Exam - Score: 85%</td>
                <td className="py-2 px-16">john.doe@student.com</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 px-4">5</td>
                <td className="py-2 px-16">User Review</td>
                <td className="py-2 px-16 whitespace-normal">The practice quizzes are really helpful. I'd love to see more interactive content!</td>
                <td className="py-2 px-16">sarah@example.com</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="py-2 px-4">6</td>
                <td className="py-2 px-16">Uploaded Question</td>
                <td className="py-2 px-16 whitespace-normal">What is the main function of mitochondria? (A) Protein synthesis (B) Energy production (C) Cell division (D) Waste removal</td>
                <td className="py-2 px-16">Biology Class</td>
              </tr>
                <tr className="border-b hover:bg-gray-50 lg:block me:hidden">
                  <td className="py-2 px-4">7</td>
                  <td className="py-2 px-16">Test Taken</td>
                  <td className="py-2 px-16 whitespace-normal">Chemistry Final Exam - Score: 92%</td>
                  <td className="py-2 px-16">emma.smith@student.com</td>
                </tr>
                <tr className="border-b hover:bg-gray-50 lg:block me:hidden">
                  <td className="py-2 px-4">8</td>
                  <td className="py-2 px-16">User Review</td>
                  <td className="py-2 px-16 whitespace-normal">The explanations for complex topics are clear and easy to understand. Great job!</td>
                  <td className="py-2 px-16">michael@example.com</td>
                </tr>
                <tr className="border-b hover:bg-gray-50 lg:block me:hidden">
                  <td className="py-2 px-4">9</td>
                  <td className="py-2 px-16">Subject</td>
                  <td className="py-2 px-16 whitespace-normal">History - Ancient Civilizations, World Wars, Modern Era</td>
                  <td className="py-2 px-16">Grade 11</td>
                </tr>
                <tr className="border-b hover:bg-gray-50 lg:block me:hidden">
                  <td className="py-2 px-4">10</td>
                  <td className="py-2 px-16">Uploaded Question</td>
                  <td className="py-2 px-16 whitespace-normal">Who wrote the play "Romeo and Juliet"? (A) Charles Dickens (B) William Shakespeare (C) Jane Austen (D) Mark Twain</td>
                  <td className="py-2 px-16">Literature Class</td>
                </tr>
                
          
              </tbody>
            </table>
          </div>

          <div className="flex justify-between items-center mb-8 px-10 me:text-sm lg:text-md">
            <div>
              <p className="underline text-gray-500 font-bold">Copyright © Chronicles International Sch</p>
            </div>
            <div className="flex gap-4">
              <Link to="/"><a href="#" className="underline text-gray-500 font-bold">CHRIS</a></Link>
                
                <a href="#" className="underline text-gray-500 font-bold">About us</a>
                <a href="#" className="underline text-gray-500 font-bold">Services</a>

                              
            </div>
          </div>


        </div>
          
     
      
        

        

      </div>

     
    </div>
  </>)

}

export default Dashboard