/* eslint-disable no-unused-vars */
import React, { useState, useRef, createContext } from 'react'
import './App.css'
import './styles/firstQuarter.css'
import './styles/secondQuarter.css'
import './styles/lowerHalf.css'
import './fonts/digital-7.ttf'
import MasterBar from './masterBar'
import { defaultPatches, patchTemplate } from './patches'
import MasterPanel from './masterPanel'
import Oscillators from './oscillatorsPanel'
import Mixer from './mixer'
import Filters from './filters'
import Arpeggiator from './arpeggiator'
import Porta from './porta'
import Lfos from './lfos'
import Envelopes from './envelopes'
import Effects from './effects'
import MidBar from './midBar'
import KeysTopper from './keysTopper'
import OPM from './oPM'
import Keyboard from './keyboard'

import * as Tone from 'tone'
const AudioContext = {
  synth: new Tone.Synth().toDestination()
}

function App () {
  const [patchNumber, setPatchNumber] = useState(0)
  const [patches, setPatches] = useState(defaultPatches)
  const stagingPatch = useRef(patchTemplate)

  const [synth, setSynth] = useState(new Tone.Synth().toDestination())

  function playNote (note) {
    synth.triggerAttackRelease(`${note}4`, '8n')
  }

  return (
    <AudioContext.Provider>
      <div id="appContainer">
        <div id="BSMaster">
          <div id="masterShadowLeft" />
          <MasterBar />
          <MasterPanel
            patches={patches}
            setPatches={setPatches}
            patchNumber={patchNumber}
            setPatchNumber={setPatchNumber}
            stagingPatch={stagingPatch}
          />
          <Oscillators
            patches={patches}
            patchNumber={patchNumber}
            stagingPatch={stagingPatch}
          />
          <Mixer
            patches={patches}
            patchNumber={patchNumber}
            stagingPatch={stagingPatch}
          />
          <Filters
            patches={patches}
            patchNumber={patchNumber}
            stagingPatch={stagingPatch}
          />
          <Arpeggiator
            patches={patches}
            patchNumber={patchNumber}
            stagingPatch={stagingPatch}
          />
          <Porta
            patches={patches}
            patchNumber={patchNumber}
            stagingPatch={stagingPatch}
          />
          <Lfos
            patches={patches}
            patchNumber={patchNumber}
            stagingPatch={stagingPatch}
          />
          <Envelopes
            patches={patches}
            patchNumber={patchNumber}
            stagingPatch={stagingPatch}
          />
          <Effects
            patches={patches}
            patchNumber={patchNumber}
            stagingPatch={stagingPatch}
          />
          <MidBar />
          <KeysTopper />
          <OPM />
          <Keyboard />
          <div id="masterShadowRight" />
        </div>
      </div>
    </AudioContext.Provider>
  )
}

export default App
