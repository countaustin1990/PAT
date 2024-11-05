import { useEffect, useRef } from 'react';
import debounce from 'lodash/debounce'; // Import debounce from lodash
import './HorizontalScrollBar.css';
import RedOilRice from '../../assets/Redoilrice.jpg';
import IndomieEgg from '../../assets/indomiegg.jpg';
import JollofRice from '../../assets/Jollofrice.jpg';
import LongSpagetti from '../../assets/Longspagetti.jpg';
import Vegetables from '../../assets/Vegetables.jpg';

const items = [
  { id: 1, title: 'Red Oil Rice', image: RedOilRice },
  { id: 2, title: 'Fried Indomie & Egg', image: IndomieEgg },
  { id: 3, title: 'Jollof Rice', image: JollofRice },
  { id: 4, title: 'Long Spagetti', image: LongSpagetti },
  { id: 5, title: 'Vegetables', image: Vegetables },
];

const HorizontalScrollBar = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let animationFrameId;

    const scroll = (lastTime) => {
      const now = performance.now();
      if (now - lastTime >= 16) { // approximately 60fps
        scrollContainer.scrollLeft += 1.5; 
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0; 
        }
        lastTime = now;
      }
      animationFrameId = requestAnimationFrame(() => scroll(lastTime));
    };

    animationFrameId = requestAnimationFrame(() => scroll(performance.now()));

    // Debounced functions for stopping and resuming scroll
    const stopScroll = debounce(() => cancelAnimationFrame(animationFrameId), 300);
    const resumeScroll = debounce(() => animationFrameId = requestAnimationFrame(() => scroll(performance.now())), 300);

    scrollContainer.addEventListener('mouseenter', stopScroll);
    scrollContainer.addEventListener('mouseleave', resumeScroll);

    return () => {
      cancelAnimationFrame(animationFrameId);
      scrollContainer.removeEventListener('mouseenter', stopScroll);
      scrollContainer.removeEventListener('mouseleave', resumeScroll);
    };
  }, []);

  return (
    <div className="container mx-auto my-10">
      <h2 className="text-2xl font-semibold mb-4 capitalize text-center">Menu of the Day</h2>
      <div ref={scrollRef} className="scrollbar flex overflow-x-auto overflow-y-hidden space-x-4 py-4 px-4">
        {items.concat(items).map((item, index) => (
          <div key={item.id + (index >= items.length ? '-dup' : '')} className="scroll-item bg-red-500 rounded-lg min-w-[300px] min-h-[300px]">
            <img src={item.image} alt={item.title} className="h-56 w-full rounded-lg object-cover" />
            <h3 className="mt-2 text-lg font-semibold text-gray-200">{item.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalScrollBar;
