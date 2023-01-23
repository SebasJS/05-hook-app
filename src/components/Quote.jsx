import { useState } from "react"
import { useLayoutEffect } from "react"
import { useRef } from "react"

export const Quote = ({quote, author, index}) => {

  const pRef = useRef()
  const [boxSize, setBoxSize] = useState({ height: 0, width: 0}) 

  useLayoutEffect(() => {
    
    const { height, width } = pRef.current.getBoundingClientRect();
    setBoxSize({height, width})
  
  }, [quote])

  return (
    <>
      <blockquote 
      className="blockquote text-end"
      ref={pRef}
      >
        <p className="mb-1">{ quote }</p>
        <footer className="blockquote-footer">{ author }</footer>
      </blockquote>
      <code>
        {JSON.stringify(boxSize)}
      </code>
    </>
  )
}
