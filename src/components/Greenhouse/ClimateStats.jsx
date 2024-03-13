import { useEffect, useState } from 'react';
import './ClimateStats.css';
import { useClimateContext } from '../../context/ClimateContext';


function ClimateStats() {
  const { temperature, hygrometer } = useClimateContext();
  //State Variable that tracks the desired temp displayed
  const [currTemp, setCurrTemp] = useState(temperature);

  useEffect(() => {
    if (temperature > currTemp) {
      //Increase currTemp every 1 sec
      setTimeout(() => {
        setCurrTemp(currTemp + 1)
      }, 1000)
    } else {
      //Decrease currTemp every 1 sec
    }
  }, [currTemp, temperature])

  console.log( 'TEMPERATURE', temperature, 'CURR TEMP', currTemp );

  return (
    <div className="climate-stats">
      <div className="temperature">
        Temperature {currTemp}°F
      </div>
      <div className="humidity">
        Humidity {hygrometer}%
      </div>
    </div>
  )
}

export default ClimateStats;
