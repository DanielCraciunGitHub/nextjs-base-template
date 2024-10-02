"use client"

import { ChevronUp } from "lucide-react"
import { useEffect, useState } from "react"

import { Button } from "@/components/ui/button"

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      // if the user scrolls down, show the button
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      window.scrollY > 500 ? setIsVisible(true) : setIsVisible(false)
    }
    // listen for scroll events
    window.addEventListener("scroll", toggleVisibility)

    // clear the listener on component unmount
    return () => {
      window.removeEventListener("scroll", toggleVisibility)
    }
  }, [])

  // handles the animation when scrolling to the top
  const scrollToTop = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    isVisible &&
      window.scrollTo({
        top: 0,
        behavior: "auto",
      })
  }

  return (
    <Button
      className={`fixed bottom-20 right-4 rounded-full p-2 outline-none transition-opacity duration-200 md:bottom-4 ${
        isVisible ? "opacity-50" : "opacity-0"
      }`}
      onClick={scrollToTop}
    >
      <ChevronUp />
      <span className="sr-only">Scroll to top button</span>
    </Button>
  )
}

export default ScrollToTopButton
