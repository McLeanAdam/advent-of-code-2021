export const day3_1 = (req, res) => {

    const { data } = req.body;

    const powerConsumption = data.reduce((total, currentValue, currentIndex, arr) => {
        
        for (var i = 0; i < currentValue.length; i++) {
            total[i] = total[i] + parseInt(currentValue.charAt(i));
          }
          console.log(total)
          return total;
        
    }, [...Array(data[0].length).fill(0)])

    const {gamma, epsilon} = convertToGammaAndEpsilonRates(powerConsumption, data.length);

    res.status(200).send(`${parseInt(gamma,2) * parseInt(epsilon,2)}`);
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