import ReactSlider from 'react-slider';
import './Thermometer.css';
import { useClimateContext } from '../../context/ClimateContext';
import { useState, useEffect } from 'react';

function Thermometer() {
  const { temperature, setTemperature } = useClimateContext();
  
  const [currTemp, setCurrTemp] = useState(temperature);

  useEffect(() => {
    if (temperature > currTemp) {
      //Increase currTemp every 1 sec
      setTimeout(() => {
        setCurrTemp(currTemp + 1)
      }, 1000);

    } else if (temperature < currTemp) {
      //Decrease currTemp every 1 sec
      setTimeout(() => {
        setCurrTemp(currTemp - 1)
      }, 1000);

    }
  }, [currTemp, temperature])


  return (
    <section>
      <h2>Thermometer</h2>
      <div className="actual-temp">Actual Temperature: {currTemp}°F</div>
      <ReactSlider
        value={temperature}
        onAfterChange={(val) => setTemperature(val)}
        className="thermometer-slider"
        thumbClassName="thermometer-thumb"
        trackClassName="thermometer-track"
        ariaLabel={"Thermometer"}
        orientation="vertical"
        min={0}
        max={120}
        renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
        invert
        pearling
        minDistance={1}
      />
    </section>
  );
}

export default Thermometer;
