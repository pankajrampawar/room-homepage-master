import React from 'react';
import { lazy } from 'react';
import textFile from "./components/textFile"

function App() {

  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const toggleMenu = ()=>{
    setIsMenuOpen(prevState => !prevState)
  }

  const [heroIndex, setHeroIndex]  = React.useState(1);

  const shiftHeroIndex = (operation) => {
    switch (operation) {
      case '-': 
      setHeroIndex(prev => {
        if(prev === 1) return 1;
        else if (prev > 1) return prev-1;
      });
      break;

      case '+' : 
      setHeroIndex(prev => {
        if (prev === 3) return 3;
        else if (prev < 3) return prev+1;
      });
      break;
    }
  }

  return (
  <div className='relative'>

    <header className='p-5 flex  items-center absolute w-full mt-3 z-10'>
        <div> 
          <img src='/images/icon-hamburger.svg' /> 
        </div>

        <div className='w-full flex justify-center' onClick={toggleMenu}>
          <img src='/images/logo.svg' alt='logo'/>
        </div>

        { isMenuOpen && 
          <div className='absolute top-0 left-0 w-full bg-white px-5 py-7 flex items-center'>
            <div onClick={toggleMenu}>
              <img src='/images/icon-close.svg' />
            </div>

            <div className='flex gap-4 items-center justify-center w-full flex-wrap'>
              <span>Home</span>
              <span>Shop</span>
              <span>About</span>
              <span>Contact</span>
            </div>
          </div>
        }
    </header>

    <main>
      <section>
        <section className='relative'>

          <div>  {/*hero image*/}
            <img src={`/images/mobile-image-hero-${heroIndex}.jpg`}/>
          </div>

          <div className='flex bg-black absolute gap-4 bottom-0 right-0'> {/* Left and Right arrow*/}
            <span className='p-4'
              onClick={()=>{shiftHeroIndex('-')}}
            >
              <img src='/images/icon-angle-left.svg' className='h-3'/>
            </span>
            <span className='p-4'
              onClick={()=>{shiftHeroIndex('+')}}
            >
              <img src='/images/icon-angle-right.svg' className='h-3'/>
            </span>
          </div>
        
        </section>

        <section>
          <div>
            <h1>{textFile[heroIndex].heading}</h1>
            <p>{textFile[heroIndex].paragraph}</p>
            <button>SHOP NOW <img src='/images/icon-arrow.svg' alt='arrow icon' /></button>
          </div>
        </section>
      </section>

      <section>
        <div>
          <img src='/images/image-about-dark.jpg' alt='black chair set'/>
        </div>

        <div>
          <h2>
            About our furniture
          </h2>

          <p>
            Our multifunctional collection blends design and function to suit your individual taste.
            Make each room unique, or pick a cohesive theme that best express your interests and what
            inspires you. Find the furniture pieces you need, from traditional to contemporary styles
            or anything in between. Product specialists are available to help you create your dream space.
          </p>
        </div>

        <div>
          <img src='/images/image-about-light.jpg' alt='white chair'/>
        </div>
      </section>
      
    </main>
  </div>
  );
}

export default App;
