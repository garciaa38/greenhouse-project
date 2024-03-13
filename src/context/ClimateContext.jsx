// Temperature has a default value of 50 degrees
// Humidity has a default value of 40%

import { createContext, useContext, useState } from 'react';

export const ClimateContext = createContext();
export const useClimateContext = () => useContext(ClimateContext)
export const ClimateProvider = ({ children }) => {
    const [ temperature, setTemperature ] = useState(50);
    const [ hygrometer, setHygrometer ] = useState(40);
    return (
        <ClimateContext.Provider value={{temperature, setTemperature, hygrometer, setHygrometer}}>
            { children }
        </ClimateContext.Provider>
    )
}
