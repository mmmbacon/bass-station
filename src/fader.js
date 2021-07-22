import { useRef } from 'react';
import './styles/fader.css';

const Fader = (props) => {
  let faderLineArr = [];
  for (let i = 0; i < 11; i++) {
    faderLineArr.push(1);
  }
  const bigLines = [1, 6, 11];

  const faderMaster = useRef(null);
  const faderAdjustActive = useRef(false);
  const clientStart = useRef(0);
  const restingPlace = useRef(props.position);

  const activateFaderAdjust = (e) => {
    e.preventDefault();
    faderAdjustActive.current = true;
    clientStart.current = e.clientY;
    faderMaster.current.style.cursor = 'grabbing';
  };

  const disengageFaderAdjust = () => {
    faderAdjustActive.current = false;
    faderMaster.current.style.cursor = 'default';
    restingPlace.current = props.position;
  };

  const adjustFader = (e) => {
    if (faderAdjustActive.current) {
      let amountMoved = (e.clientY - clientStart.current) * 0.09;
      let moveDifference = amountMoved + restingPlace.current;
      if (moveDifference >= -4.55 && moveDifference <= 4.45) {
        props.setPosition(moveDifference);
      }
    }
  };

  return (
    <div
      className="faderMaster"
      onMouseUp={disengageFaderAdjust}
      onMouseLeave={disengageFaderAdjust}
      onMouseMove={adjustFader}
      ref={faderMaster}
    >
      <div className="faderLineBox">
        {faderLineArr.map((line, idx) => {
          if (bigLines.includes(idx + 1)) {
            return <div className="faderLineBig" key={`line${idx}`} />;
          } else {
            return <div className="faderLineSmall" key={`line${idx}`} />;
          }
        })}
      </div>
      <div className="faderTrack">
        <div className="faderTrackSplit" />
        <div
          className="faderNub"
          style={{ transform: `translateY(${props.position}rem)` }}
        >
          <div className="faderNubTop" onMouseDown={activateFaderAdjust}>
            <div className="faderNubTopLine" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fader;
