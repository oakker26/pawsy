import {useState} from 'react'
export let useScrollPosition = () => {
  let  [scrollPosition, setScrollPosition] = useState(0);
    window.addEventListener("scroll", () => {
        setScrollPosition(window.pageYOffset)
    })
    return scrollPosition
}
 useScrollPosition