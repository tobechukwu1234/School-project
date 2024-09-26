
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';




function Slider(){
  const parentReview = [
    {
      message: "The school's holistic approach to education is impressive. They focus on academic excellence and character development.",
      person: "Mrs. Thompson"
    },
    {
      message: "I've seen remarkable growth in my child's critical thinking skills since enrolling at Chronicles school. From the way my son behaves to the way he talk.",
      person: "Dr. Adebayo"
    },
    {
      message: "The diverse extracurricular activities offered here have helped my child discover new talents and interests. I am so grateful to God for giving us a School like Chronicles",
      person: "Ms. Chen"
    },
   
  {
    message: "I think the most important part of education is focusing on developing the children and Chronicles school provides that.",
    person: "Mrs Oluwadapo"
  },
  {
    message: "I think the most important part of education is focusing on developing the children and Chronicles school provides that.",
    person: "Mrs Oluwadapo"
  }
 
]
  return(
    <div>
      <div className='mt-16 parent'>
          <h2 className='lg:text-4xl me:text-3xl'>What our parents say</h2>

          
          <Swiper
        cssMode={true}
        navigation={true}
        // pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
          {
              parentReview.map((review, index) => (
                <SwiperSlide>
                  <div className="talks" key={index}>
                    <div>
                      <h3><span>"</span> {review.message} <span>"</span></h3>
                      <p>{review.person}</p>
                    </div>

                  </div>
                </SwiperSlide>
                
              ))
            }
        
      </Swiper>
         
         
         
        
      </div>
    </div>

    
      
      
  )
}

export default Slider