import '../ProjectVisual/ProjectVisual.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


export default function ProjectVisualCarousel({slides}) {
  function renderArrowPrev(onClickHandler, hasPrev, label) {
    return (
      <>
        {
          hasPrev && (
            <button className='slide-button'
              type="button"
              onClick={onClickHandler}
              title={label}
              style={{                
                left: 5,
              }}
            >
              ‹
            </button>
          )
        }
      </>
    )
  }

  function renderArrowNext(onClickHandler, hasNext, label) {
    return (
      <>
        {
          <button className='slide-button'
            type="button"
            onClick={onClickHandler}
            title={label}
            style={{              
              right: 5
            }}
          >
            ›
          </button>
        }
      </>
    )
  }


  return (
    <div className='screenshots-carousel-cont'>
      <Carousel autoPlay infiniteLoop showThumbs={false} className='project-visual-element project-slides-carousel'
          renderArrowPrev={renderArrowPrev} renderArrowNext={renderArrowNext}>
        {
          slides.map((screenshot, index) => {
            return (
              <div key={index}>
                <a href={`/images/${screenshot.src}`} target='_blank' style={{display: "block"}}>
                  <img src={`/images/${screenshot.src}`} alt={screenshot.legend} />
                </a>                    
                <p className="legend">{screenshot.legend}</p>
              </div>                      
            )                
          })
        }
      </Carousel>
    </div>
  )
}