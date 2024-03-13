import dayImage from './images/greenhouse-day.jpg';
import nightImage from './images/greenhouse-night.jpg';
import { useTheme } from '../../context/ThemeContext';
import './Greenhouse.css';

import LightSwitch from './LightSwitch';
import ClimateStats from './ClimateStats';


function Greenhouse() {
  
  const {themeName} = useTheme();

  console.log(themeName)

  return (
    <section>
      <div>
      {themeName === "day" ? (<img className='greenhouse-img' src={dayImage} alt='greenhouse'/>) : 
      (<img className='greenhouse-img' src={nightImage} alt='greenhouse'/>)}
      </div>
      <LightSwitch />
      <ClimateStats />
    </section>
  );
}

export default Greenhouse;
