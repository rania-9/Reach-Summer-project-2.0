import { useRef } from 'react';
import nicotine from './nicotine.png';
import brain from './brain.png';
import brainparts from './brainparts.png';
import brickbrain from './brickbrain.png';

import { Parallax, ParallaxLayer } from '@react-spring/parallax';

function App() {
    const ref = useRef();
  
    return(
      <div>
        <Parallax pages={4} ref={ref}>
          <ParallaxLayer
            sticky={{ start: 0, end: 1 }}>
            <img src={brain} />
          </ParallaxLayer>
          <ParallaxLayer
            horizontal={true}
            >
            <img src={brain} />
          </ParallaxLayer>
        </Parallax>
      </div>
    )
};
export default App;
