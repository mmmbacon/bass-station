import { useState } from 'react';
import './styles/filters.css';
import Knob from './knob';
import KnobBig from './knobBig';
import KnobBorder from './knobBorder';
import KnobBigBorder from './knobBigBorder';
import Bulb from './bulb';
import SwitchAB from './switchAB';
import SwitchABC from './switchABC';

const Filters = (props) => {
  const [filtersTypeS, setFiltersTypeS] = useState('A');
  const [filtersSlopS, setFiltersSlopS] = useState('B');
  const [filtersShape, setFiltersShape] = useState(1);
  return (
    <div className="absolute">
      <div id="filtersTypeS">
        <SwitchAB
          orientation={'Horizontal'}
          position={filtersTypeS}
          setPosition={setFiltersTypeS}
        />
      </div>
      <p id="filtersTypeL" className="subLabelLarge">
        Type
      </p>
      <div id="filtersType1Bulb">
        <Bulb on={filtersTypeS === 'A'} />
      </div>
      <p id="filtersClassicL" className="subLabelXSmall">
        Classic
      </p>
      <div id="filtersType2Bulb">
        <Bulb on={filtersTypeS === 'B'} />
      </div>
      <p id="filtersAcidL" className="subLabelXSmall">
        Acid
      </p>
      <div id="filtersSlopeS">
        <SwitchAB
          orientation={'Horizontal'}
          position={filtersSlopS}
          setPosition={setFiltersSlopS}
        />
      </div>
      <p id="filtersSlopeL" className="subLabelLarge">
        Slope
      </p>
      <div id="filtersSlope1Bulb">
        <Bulb on={filtersSlopS === 'A'} />
      </div>
      <p id="filters12DBL" className="subLabelXSmall">
        12dB
      </p>
      <div id="filtersSlope2Bulb">
        <Bulb on={filtersSlopS === 'B'} />
      </div>
      <p id="filters24DBL" className="subLabelXSmall">
        24dB
      </p>
      <div id="filtersShapeS">
        <SwitchABC position={'A'} />
      </div>
      <p id="filtersShapeL" className="subLabelLarge">
        Shape
      </p>
      <div id="filtersShape1Bulb">
        <Bulb on={filtersShape === 1} />
      </div>
      <div id="filtersShape2Bulb">
        <Bulb on={filtersShape === 2} />
      </div>
      <div id="filtersShape3Bulb">
        <Bulb on={filtersShape === 3} />
      </div>
      <p id="filtersLPL" className="subLabelLarge">
        LP
      </p>
      <p id="filtersBPL" className="subLabelLarge">
        BP
      </p>
      <p id="filtersHPL" className="subLabelLarge">
        HP
      </p>
      <div id="filtersBulbsArm1" />
      <div id="filtersBulbsArm2" />
      <div id="filtersBulbsArm3" />
      <div id="filtersBulbsArm4" />
      <div id="overdriveK" className="knobDiv">
        <KnobBorder highNoon={false} />
        <Knob />
        <p id="overdriveKL" className="knobLabel">
          Overdrive
        </p>
      </div>
      <div id="resonanceK" className="knobDiv">
        <KnobBorder highNoon={false} />
        <Knob />
        <p id="resonanceKL" className="knobLabel">
          Resonance
        </p>
      </div>
      <div id="filtersMEDK" className="knobDiv">
        <KnobBorder highNoon={true} />
        <Knob />
        <p id="filtersMEDKL" className="knobLabel">
          Mod Env depth
        </p>
      </div>
      <div id="filtersLFO2K" className="knobDiv">
        <KnobBorder highNoon={true} />
        <Knob />
        <p id="filtersLFO2KL" className="knobLabel">
          LFO 2 depth
        </p>
      </div>
      <div id="filtersBracketLeft" />
      <div id="filtersBracketRight" />
      <div id="filtersLineOne" />
      <div id="filtersLineTwo" />
      <div id="frequencyK" className="knobDiv">
        <KnobBigBorder />
        <KnobBig />
        <p id="filtersFrequencyKL" className="knobLabel">
          Frequency
        </p>
      </div>
    </div>
  );
};

export default Filters;
