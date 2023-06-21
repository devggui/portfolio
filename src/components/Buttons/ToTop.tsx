import { useEffect, useState } from "react";

export function ToTop() {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 200) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <button 
      className={`top-button ${showButton ? 'show' : ''}`}
      onClick={scrollToTop}
    >
      <img 
        src="/icons/arrow-up.svg" 
        alt="Icone de seta para cima" 
        width={40}
        height={40}
      />
    </button>
  )
}