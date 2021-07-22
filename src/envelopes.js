import { useState, useEffect } from 'react';
import './styles/envelopes.css';
import SwitchABC from './switchABC';
import Fader from './fader';
import Bulb from './bulb';

const Envelopes = (props) => {
  const { patch } = props;
  const [eSS, setESS] = useState(patch.envSelectS);
  const [attackFader, setAttackFader] = useState(patch.fader1);
  const [decayFader, setDecayFader] = useState(patch.fader2);
  const [sustainFader, setSustainFader] = useState(patch.fader3);
  const [releaseFader, setReleaseFader] = useState(patch.fader4);
  const [triggeringS, setTriggeringS] = useState(patch.triggeringS);

  useEffect(() => {
    setESS(patch.envSelectS);
    setAttackFader(patch.fader1);
    setDecayFader(patch.fader2);
    setSustainFader(patch.fader3);
    setReleaseFader(patch.fader4);
    setTriggeringS(patch.triggeringS);
  }, [patch]);

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
        <Fader position={attackFader} setPosition={setAttackFader} />
      </div>
      <div id="envelopesLeftLine" />
      <p id="attackL" className="subLabelLarge">
        Attack
      </p>
      <div id="fader2">
        <Fader position={decayFader} setPosition={setDecayFader} />
      </div>
      <p id="decayL" className="subLabelLarge">
        Decay
      </p>
      <div id="fader3">
        <Fader position={sustainFader} setPosition={setSustainFader} />
      </div>
      <p id="sustainL" className="subLabelLarge">
        Sustain
      </p>
      <div id="fader4">
        <Fader position={releaseFader} setPosition={setReleaseFader} />
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
