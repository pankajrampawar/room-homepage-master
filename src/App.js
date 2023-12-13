import React from 'react';
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
  <div className='relative md:h-screen'>

    <header className='p-5 pt-7 flex  items-center absolute w-full z-10 md:gap-16'>
        <div className='sm:hidden'> 
          <img src='/images/icon-hamburger.svg' /> 
        </div>

        <div className='w-full flex justify-center md:w-auto md:pl-6' onClick={toggleMenu}>
          <img src='/images/logo.svg' alt='logo'/>
        </div>

        {/* Components for desktop */}
        <div className='hidden md:flex gap-6 text-white fontS text-lg items-center'>
          <span className='cursor-pointer navComp relative'>home</span>
          <span className='cursor-pointer navComp relative'>shop</span>
          <span className='cursor-pointer navComp relative'>about</span>
          <span className='cursor-pointer navComp relative'>contact</span>
        </div>

          <div className={`absolute top-0 left-0 w-full bg-white px-5 py-7 flex items-center md:hidden drawer ${isMenuOpen ? 'drawerShow' : ''} `}>
            <div onClick={toggleMenu}>
              <img src='/images/icon-close.svg' />
            </div>

            <div className='flex gap-4 items-center justify-center w-full flex-wrap md:hidden'>
              <span>Home</span>
              <span>Shop</span>
              <span>About</span>
              <span>Contact</span>
            </div>
          </div>
    </header>

    <main className=''>

      <section className='sm:flex'>
        
        <section className='relative'>
          <div>  {/*hero image*/}
            <img src={`/images/mobile-image-hero-${heroIndex}.jpg`} className='w-full sm:hidden'/>
            <img src={`/images/desktop-image-hero-${heroIndex}.jpg`} className='hidden sm:block' />
          </div>

          <div className='flex bg-black absolute bottom-0 right-0 md:-right-[135.33px]'> {/* Left and Right arrow*/}
            <span className='flex items-center justify-center p-5 md:p-6 md:px-7 hover:bg-zinc-700 cursor-pointer'
              onClick={()=>{shiftHeroIndex('-')}}
            >
              <img src='/images/icon-angle-left.svg' className='h-4 md:h-5'/>
            </span>
            <span className='flex items-center justify-center p-5 md:p-6 md:px-7 hover:bg-zinc-700 cursor-pointer'
              onClick={()=>{shiftHeroIndex('+')}}
            >
              <img src='/images/icon-angle-right.svg' className='h-4 md:h-5'/>
            </span>
          </div>
        </section>

        <section className='md:w-1/2'>
          <div className='py-10 px-5 md:flex flex-col justify-center md:h-full gap-2 md:px-24'>
            <h1 className='fontL text-3xl leading-8 md:text-5xl'>{textFile[heroIndex].heading}</h1>
            <p className='text-sm mt-4 text-gray-400 fontS'>{textFile[heroIndex].paragraph}</p>
            <button className='mt-4 flex items-center tracking-[7px] text-sm fontM cursor-pointer hover:text-zinc-500'>SHOP NOW <img src='/images/icon-arrow.svg' alt='arrow icon' className='ml-2 w-10'/></button>
          </div>
        </section>

      </section>

      <section className='md:flex h-full md:justify-between'>
        <div>
          <img src='/images/image-about-dark.jpg' alt='black chair set' className='w-full sm:hidden'/>
          <img src='/images/image-about-dark.jpg' alt='black chair set' className='hidden sm:block h-full' />
        </div>

        <div className='py-10 px-5 md:w-1/3 md:py-16'>
          <h2 className='tracking-widest fontM text-lg md:text-2xl'>
            ABOUT OUR FURNITURE
          </h2>

          <p className='text-sm fontS text-gray-400 mt-5'> 
            Our multifunctional collection blends design and function to suit your individual taste.
            Make each room unique, or pick a cohesive theme that best express your interests and what
            inspires you. Find the furniture pieces you need, from traditional to contemporary styles
            or anything in between. Product specialists are available to help you create your dream space.
          </p>
        </div>

        <div>
          <img src='/images/image-about-light.jpg' alt='white chair' className='w-full sm:hidden'/>
          <img src='/images/image-about-light.jpg' alt='white chair' className='hidden sm:block h-full' />
        </div>
      </section>
      
    </main>
  </div>
  );
}

export default App;
