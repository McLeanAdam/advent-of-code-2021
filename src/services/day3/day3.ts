export const day3_1 = (req, res) => {

    const { data } = req.body;

    const powerConsumption = data.reduce((total, currentValue, currentIndex, arr) => {
        
        for (var i = 0; i < currentValue.length; i++) {
            total[i] = total[i] + parseInt(currentValue.charAt(i));
          }
          return total;
        
    }, [...Array(data[0].length).fill(0)])

    const {gamma, epsilon} = convertToGammaAndEpsilonRates(powerConsumption, data.length);

    res.status(200).send(`${parseInt(gamma,2) * parseInt(epsilon,2)}`);
}

export const day3_2 = (req, res) => {

    const { data } = req.body;
    let charIndex = 0;
    
    const oxygenGen = applySort(data,true);
    const CO2Scrub = applySort(data,false);

    res.status(200).send(`${parseInt(oxygenGen,2) * parseInt(CO2Scrub,2)}`);
}

const applySort = (data, Majority) => {
    let charIndex = 0;
    while (data.length > 1) {
        data = sortArray(data,charIndex,Majority);
        charIndex++;
    };
    return data[0];
}
const sortArray = (data: string[], charLocation: number, isMajority: boolean) => {
    
    const filteredData = data.reduce((total, currentValue, currentIndex, arr) => {
        if(currentValue[charLocation] === '0') {
            total[0].push(currentValue);
        }
        else {
            total[1].push(currentValue); 
        }
    
          return total
        
    }, [[],[]])
    return isMajority === (filteredData[0].length > filteredData[1].length) ? filteredData[0] : filteredData[1];
}

const convertToGammaAndEpsilonRates = (data: number[], itemCount: number) => {
    const calculatedValues = data.reduce( (total, currentValue, currentIndex, arr) => {
        if(currentValue > itemCount/2) {
            total.gamma = total.gamma + '1';
            total.epsilon = total.epsilon + '0';
        } else {
            total.gamma = total.gamma + '0';
            total.epsilon = total.epsilon + '1';
        }
        return total
    }, {gamma: '',epsilon: ''})

    return {gamma: calculatedValues.gamma ,epsilon: calculatedValues.epsilon }
}