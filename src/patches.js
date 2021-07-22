// fader positions: -4.55 - +4.45

const Patches = {
  0: {
    volumeK: 0,
    coarseK: -150,
    fineK: 0,
    MEDK: 0,
    LFO1K: 0,
    pulseWidthK: 0,
    rangeB: 2,
    waveformB: 3,
    oscSelectS: 'A',
    pulseWidthS: 'B',
    subOscOctaveS: 'A',
    subOscWaveS: 'C',
    mixerOsc1K: 150,
    mixerOsc2K: -150,
    mixerUtilityS: 'A',
    mixerSubK: 120,
    mixerUtilityK: -150,
    filtersTypeS: 'A',
    overdriveK: -150,
    resonanceK: -150,
    filtersSlopeS: 'B',
    frequencyK: -115,
    filtersShapeS: 'A',
    filtersMEDK: 75,
    filtersLFO2K: 0,
    tempoK: 0,
    rhythmK: 110,
    rhythm2K: 30,
    arpLegatoBulb: false,
    arpLatchBulb: false,
    arpOctavesK: -90,
    glideTimeK: -150,
    lFO1Wave: 1,
    lfosLFO1K: -70,
    lfosLFO2K: -35,
    lFO2Wave: 1,
    speedDelayS: 'B',
    envSelectS: 'B',
    fader1: 4,
    fader2: 3,
    fader3: -1,
    fader4: 4.45,
    triggeringS: 'A',
    distortionK: -150,
    oFMK: -150,
  },
  1: {
    volumeK: 0,
    coarseK: 0,
    fineK: 0,
    MEDK: 0,
    LFO1K: 0,
    pulseWidthK: 0,
    rangeB: 1,
    waveformB: 3,
    oscSelectS: 'A',
    pulseWidthS: 'B',
    subOscOctaveS: 'A',
    subOscWaveS: 'A',
    mixerOsc1K: 10,
    mixerOsc2K: 0,
    mixerUtilityS: 'A',
    mixerSubK: 25,
    mixerUtilityK: -150,
    filtersTypeS: 'A',
    overdriveK: 25,
    resonanceK: -150,
    filtersSlopeS: 'B',
    frequencyK: -90,
    filtersShapeS: 'A',
    filtersMEDK: 5,
    filtersLFO2K: 0,
    tempoK: 0,
    rhythmK: 150,
    rhythm2K: 120,
    arpLegatoBulb: false,
    arpLatchBulb: false,
    arpOctavesK: -90,
    glideTimeK: -150,
    lFO1Wave: 1,
    lfosLFO1K: -50,
    lfosLFO2K: -150,
    lFO2Wave: 3,
    speedDelayS: 'B',
    envSelectS: 'B',
    fader1: 4.45,
    fader2: 0.75,
    fader3: -4.55,
    fader4: 1.5,
    triggeringS: 'C',
    distortionK: -150,
    oFMK: -150,
  },
  2: {
    volumeK: 0,
    coarseK: -150,
    fineK: 0,
    MEDK: 0,
    LFO1K: 0,
    pulseWidthK: 0,
    rangeB: 2,
    waveformB: 3,
    oscSelectS: 'A',
    pulseWidthS: 'B',
    subOscOctaveS: 'A',
    subOscWaveS: 'C',
    mixerOsc1K: 150,
    mixerOsc2K: -150,
    mixerUtilityS: 'A',
    mixerSubK: 120,
    mixerUtilityK: -150,
    filtersTypeS: 'A',
    overdriveK: -150,
    resonanceK: 0,
    filtersSlopeS: 'B',
    frequencyK: -115,
    filtersShapeS: 'A',
    filtersMEDK: 90,
    filtersLFO2K: 0,
    tempoK: 0,
    rhythmK: 118,
    rhythm2K: 30,
    arpLegatoBulb: false,
    arpLatchBulb: false,
    arpOctavesK: -90,
    glideTimeK: -150,
    lFO1Wave: 1,
    lfosLFO1K: -60,
    lfosLFO2K: -35,
    lFO2Wave: 4,
    speedDelayS: 'B',
    envSelectS: 'B',
    fader1: 3.5,
    fader2: 1.7,
    fader3: 0.2,
    fader4: 4.45,
    triggeringS: 'C',
    distortionK: -150,
    oFMK: -150,
  },
  3: {
    volumeK: 0,
    coarseK: 0,
    fineK: 0,
    MEDK: 0,
    LFO1K: 0,
    pulseWidthK: 15,
    rangeB: 2,
    waveformB: 3,
    oscSelectS: 'A',
    pulseWidthS: 'B',
    subOscOctaveS: 'A',
    subOscWaveS: 'A',
    mixerOsc1K: 150,
    mixerOsc2K: -50,
    mixerUtilityS: 'A',
    mixerSubK: -150,
    mixerUtilityK: -150,
    filtersTypeS: 'A',
    overdriveK: -145,
    resonanceK: 20,
    filtersSlopeS: 'B',
    frequencyK: -67,
    filtersShapeS: 'A',
    filtersMEDK: 90,
    filtersLFO2K: 0,
    tempoK: 0,
    rhythmK: 150,
    rhythm2K: -90,
    arpLegatoBulb: false,
    arpLatchBulb: false,
    arpOctavesK: -90,
    glideTimeK: -110,
    lFO1Wave: 1,
    lfosLFO1K: -63,
    lfosLFO2K: -105,
    lFO2Wave: 1,
    speedDelayS: 'B',
    envSelectS: 'B',
    fader1: 4.45,
    fader2: 0.45,
    fader3: 4.45,
    fader4: 4.45,
    triggeringS: 'C',
    distortionK: -120,
    oFMK: -150,
  },
  4: {
    volumeK: 0,
    coarseK: 0,
    fineK: 0,
    MEDK: 0,
    LFO1K: 0,
    pulseWidthK: 0,
    rangeB: 1,
    waveformB: 3,
    oscSelectS: 'A',
    pulseWidthS: 'B',
    subOscOctaveS: 'A',
    subOscWaveS: 'A',
    mixerOsc1K: -70,
    mixerOsc2K: -150,
    mixerUtilityS: 'A',
    mixerSubK: -75,
    mixerUtilityK: -150,
    filtersTypeS: 'A',
    overdriveK: 15,
    resonanceK: -150,
    filtersSlopeS: 'B',
    frequencyK: -150,
    filtersShapeS: 'A',
    filtersMEDK: 150,
    filtersLFO2K: 0,
    tempoK: 0,
    rhythmK: 150,
    rhythm2K: -90,
    arpLegatoBulb: false,
    arpLatchBulb: false,
    arpOctavesK: -90,
    glideTimeK: -150,
    lFO1Wave: 1,
    lfosLFO1K: -63,
    lfosLFO2K: -150,
    lFO2Wave: 3,
    speedDelayS: 'B',
    envSelectS: 'B',
    fader1: 4.45,
    fader2: 0.7,
    fader3: -2.25,
    fader4: 4.45,
    triggeringS: 'C',
    distortionK: -150,
    oFMK: -150,
  },
  5: {
    volumeK: 0,
    coarseK: -150,
    fineK: 0,
    MEDK: 0,
    LFO1K: 0,
    pulseWidthK: 0,
    rangeB: 1,
    waveformB: 4,
    oscSelectS: 'A',
    pulseWidthS: 'B',
    subOscOctaveS: 'B',
    subOscWaveS: 'C',
    mixerOsc1K: 150,
    mixerOsc2K: -150,
    mixerUtilityS: 'A',
    mixerSubK: -150,
    mixerUtilityK: -150,
    filtersTypeS: 'A',
    overdriveK: -120,
    resonanceK: 66,
    filtersSlopeS: 'B',
    frequencyK: -150,
    filtersShapeS: 'A',
    filtersMEDK: 90,
    filtersLFO2K: -32,
    tempoK: 0,
    rhythmK: 150,
    rhythm2K: 60,
    arpLegatoBulb: false,
    arpLatchBulb: false,
    arpOctavesK: -60,
    glideTimeK: -67,
    lFO1Wave: 1,
    lfosLFO1K: -65,
    lfosLFO2K: -27,
    lFO2Wave: 1,
    speedDelayS: 'B',
    envSelectS: 'B',
    fader1: 4.45,
    fader2: -4.4,
    fader3: 4.45,
    fader4: -4.55,
    triggeringS: 'B',
    distortionK: -150,
    oFMK: -150,
  },
};

export default Patches;
