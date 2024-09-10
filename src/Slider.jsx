import {useEffect, useState} from 'react'


function Slider(){
  const [slideIndex, setSlideIndex] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {

    const talks = document.querySelectorAll('.talks div');
    
    function initializeSlider() {
      if (talks.length > 0) {
        talks[slideIndex].classList.add('display');
        const id = setInterval(nextSlide, 5000);
        setIntervalId(id);
      }
    }

    function showSlide(index) {
      if (index >= talks.length) {
        setSlideIndex(0);
      } else if (index < 0) {
        setSlideIndex(talks.length - 1);
      } else {
        setSlideIndex(index);
      }
      talks.forEach((talk) => talk.classList.remove('display'));
      talks[slideIndex].classList.add('display');
    }

    function nextSlide() {
      setSlideIndex((prevIndex) => {
        const newIndex = prevIndex + 1;
        showSlide(newIndex);
        return newIndex;
      });
    }

    initializeSlider();

    return () => clearInterval(intervalId);

  }, [slideIndex]);

  return(<>
  
    <div className='mt-16 parent'>
        <h2 className='lg:text-4xl me:text-3xl'>What our parents say</h2>

        <div className='talks'>
          <div  className={slideIndex === 0 ? 'displaySlide' : ''}>
            <h3><span>"</span> I like the way the students are encouraged to be confident in themselves. <span>"</span></h3>
            <p>Mr Marcus</p>
          </div>

          <div  className={slideIndex === 1 ? 'displaySlide' : ''}>
            <h3><span>"</span> I think the most important part of education is focusing on developing the children and Chronicles school provides that. <span>"</span></h3>
            <p>Mrs Oluwadapo</p>
          </div>

          <div  className={slideIndex === 2 ? 'displaySlide' : ''}>
            <h3><span>"</span> I appreciate the effort the teachers put in developing this children. <span>"</span></h3>
            <p>Mr Joseph</p>
          </div>
                 
        </div>

    </div>

  </>)
}

export default Slider