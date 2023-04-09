import React from "react";
import AnimatedCursor from "react-animated-cursor";


export default function App() {
  return (
    <div>
      <AnimatedCursor
      innerSize={10}
      outerSize={20}
      color='77,181,255'
      outerAlpha={0.5}
      innerScale={0.5}
      outerScale={2}


      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link'
      ]}
    />
    </div>
  );
}