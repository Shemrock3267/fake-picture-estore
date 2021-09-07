import { useEffect, useState, useRef } from "react";

function useHover() {
  const [hovered, setHovered] = useState(false)
  const trackRef = useRef(null)

  function enter() {
    setHovered(true)
  }

  function leave() {
    setHovered(false)
  }

  useEffect(() => {
    // to prevent losing actual ref when effect runs for cleanup function
    // adding another variable called myRef
    const myRef = trackRef.current; 
    myRef.addEventListener('mouseenter', enter)
    myRef.addEventListener('mouseleave', leave)
    
    return () => {
      myRef.removeEventListener('mouseenter', enter)
      myRef.removeEventListener('mouseleave', leave)
    }
  }, [])
  
  return [hovered, trackRef]
}

export default useHover;