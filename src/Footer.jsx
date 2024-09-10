import purple from '/src/assets/purple.jpg'
import book from '/src/assets/book1.jpg'
import picture1 from '/src/assets/boy and girl.jpeg'

function Footer(){
  
  return(<>

      <div className="mt-16" id='gallery'>
        <h2 className='text-4xl text-center mb-6'>Gallery</h2>
        <div className='grid lg:grid-cols-4 gap-5 lg:h-screen justify-center items-center gal'>
          <img src={picture1} />
          <img src={book} />
          <img src={purple} />
          <img src={picture1} className='me:hidden lg:block'/>
          <img src={book} className='me:hidden lg:block'/>
          <img src={purple} className='me:hidden lg:block'/>
        </div>
      </div>

      <footer className='mt-16 py-10'>
        
        <div className='grid lg:grid-cols-2 lg:gap-20 me:gap-10'>
          
          <div className='me:px-5'>
                <h2 className='text-2xl mb-5'>CHRIS</h2>
                <p className='text-lg mb-3 text-gray-700 flex'><span className='mr-3'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="m20.893 13.393-1.135-1.135a2.252 2.252 0 0 1-.421-.585l-1.08-2.16a.414.414 0 0 0-.663-.107.827.827 0 0 1-.812.21l-1.273-.363a.89.89 0 0 0-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 0 1-1.81 1.025 1.055 1.055 0 0 1-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 0 1-1.383-2.46l.007-.042a2.25 2.25 0 0 1 .29-.787l.09-.15a2.25 2.25 0 0 1 2.37-1.048l1.178.236a1.125 1.125 0 0 0 1.302-.795l.208-.73a1.125 1.125 0 0 0-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 0 1-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 0 1-1.458-1.137l1.411-2.353a2.25 2.25 0 0 0 .286-.76m11.928 9.869A9 9 0 0 0 8.965 3.525m11.928 9.868A9 9 0 1 1 8.965 3.525" />
            </svg>
            </span>24, Olatunde Ayomide Avenue, Anthony, Lagos Nigeria.</p>
                <p  className='text-lg mb-3 text-gray-700 flex'><span className='mr-3'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
              </svg>
              </span>+234 706 226 4386</p>
                <p  className='text-lg mb-3 text-gray-700 flex'> <span className='mr-3'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H6.911a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661Z" />
              </svg>
              </span>P O Box 4401K Ikeja Headquarters, Ikeja, Lagos.</p>
              <p className='text-lg mb-3 text-gray-700 flex'><span className='mr-3'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </svg>
              </span>info.chronicles@internationalschool <br /> .com</p>
          </div>

          <div className='me:px-5'>
            <h2 className='text-2xl mb-5'>Stay Connected</h2>
            
            <p className='text-lg mb-3 text-gray-700'>Admission Tel: +234 902 458 5559</p>
            <p className='text-lg mb-3 text-gray-700'>Email: info.chronicles@internationalschool.com, <br />admission@chroniclesinternationalschool <br /> .com</p>
          </div>
        </div>
      </footer>
  
  </>)

}

export default Footer