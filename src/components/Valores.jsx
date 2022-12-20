import React, { useEffect, useState } from 'react'
import { CSSTransition, SwitchTransition } from 'react-transition-group';

const array = ['a', 'b', 'c', 'd'];
const Valores = () => {

  const [text, setText] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setText((value) => {
        if (value + 1 === array.length) {
          return 0;
        }
        return value + 1;
      })
    }, 2000)
    return () => clearInterval(interval);
  }, [])

  return (
    <div>
      <SwitchTransition>
        <CSSTransition className='fade' key={array[text]} addEventListener={(node, done) => node.addEventListener('transitioned', done, false)}>
          <span>{array[text]}</span>
        </CSSTransition>
      </SwitchTransition>
    </div>
  )
}

export default Valores