import { useState } from 'react';
import './styles/envelopes.css';
import SwitchABC from './switchABC';
import Fader from './fader';
import Bulb from './bulb';
import SwitchAB from './switchAB';

const Envelopes = () => {
  const [eSS, setESS] = useState('B');
  const [triggeringS, setTriggeringS] = useState('A');
  return (
    <div className="absolute">
      <div id="envSelectS">
        <SwitchABC
          orientation={'Vertical'}
          position={eSS}
          setPosition={setESS}
        />
      </div>
      <p id="envSelectL" className="subLabelLarge">
        Env Select
      </p>
      <p id="envSelectL1" className="subLabelLarge">
        Amp Env
      </p>
      <p id="envSelectL2" className="subLabelLarge">
        Mod Env
      </p>
      <p id="envSelectL3" className="subLabelLarge">
        Amp+Mod Env
      </p>
      <div id="fader1">
        <Fader position={3} />
      </div>
      <div id="envelopesLeftLine" />
      <p id="attackL" className="subLabelLarge">
        Attack
      </p>
      <div id="fader2">
        <Fader position={2.4} />
      </div>
      <p id="decayL" className="subLabelLarge">
        Decay
      </p>
      <div id="fader3">
        <Fader position={-1.5} />
      </div>
      <p id="sustainL" className="subLabelLarge">
        Sustain
      </p>
      <div id="fader4">
        <Fader position={4} />
      </div>
      <p id="releaseL" className="subLabelLarge">
        Release
      </p>
      <div id="triggeringS">
        <SwitchABC
          orientation={'Vertical'}
          position={triggeringS}
          setPosition={setTriggeringS}
        />
      </div>
      <p id="triggeringL" className="subLabelLarge">
        Triggering
      </p>
      <div id="triggeringBulb1">
        <Bulb on={triggeringS === 'A'} />
      </div>
      <div id="triggeringBulb2">
        <Bulb on={triggeringS === 'B'} />
      </div>
      <div id="triggeringBulb3">
        <Bulb on={triggeringS === 'C'} />
      </div>
      <p id="triggeringBulbL1" className="subLabelLarge">
        Autoglide
      </p>
      <p id="triggeringBulbL2" className="subLabelLarge">
        Single
      </p>
      <p id="triggeringBulbL3" className="subLabelLarge">
        Multi
      </p>
    </div>
  );
};

export default Envelopes;
