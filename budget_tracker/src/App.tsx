import React, { useEffect, useRef } from 'react';
import './App.css';

import { GenericCard } from './components/GenericCard';
import Dropdown from './components/Dropdown';
import { SwipeDashboard } from './components/SwipeDashboard';
import { Projects } from './components/Projects';

function App() {

  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;

    const handleMouseWheel = (event: WheelEvent) => {
      event.preventDefault();

      const currentElement = event.currentTarget as Element;

      console.log(event.currentTarget)
      const childrenArray = Array.from(currentElement.children || []) as Element[];
      const currentIndex = 0;
    
      console.log(currentIndex)
      if(event.deltaY > 0) {
        scrollToSnapPoint(currentIndex + 1, childrenArray);
      } else {
        scrollToSnapPoint(currentIndex, childrenArray);
      }
    }
    
    const scrollToSnapPoint = (index: number, children: Element[]) => {
      console.log(index)
      if (index >= 0 && index < children.length && children[index].classList.contains('snap')) {
        (children[index] as HTMLElement).scrollIntoView({ behavior: 'smooth' });
      }
    }

    if (container) {
      container.addEventListener('wheel', handleMouseWheel);
    }

    return () => {
      if (container) {
        container.removeEventListener('wheel', handleMouseWheel)
      }
    }

  }, []);
  return (
    <div className="App">
      <div className='container' ref={containerRef}>
        <section className='snap'>
          <div className='curve background_one'>

              <Dropdown/>

              <h1 className='title'> Welcome to Budget.io</h1>
              <h2 className='subtitle'> The one stop shop for budget planning </h2>

              <SwipeDashboard/>
          </div>
        </section>
        <section className='snap'>
          <div className='curve background_two'>

            <h1 className='title-two'> Projects </h1>

            <Projects/>
          </div>

        </section>
      </div>
    </div>
  );
}

export default App;
