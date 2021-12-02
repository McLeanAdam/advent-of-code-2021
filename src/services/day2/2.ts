export const day2_2 = (req, res) => {

    const { data } = req.body;

    const location = data.reduce((total, currentValue, currentIndex, arr) => {
        
        let [direction, value] = currentValue.split(" ");
        value = parseInt(value)
        switch (true){
            case direction === 'up':
                total.aim = total.aim - value;
                break;
            case direction === 'down':
                total.aim = total.aim + value;
                break;
            case direction === 'forward':
                total.x = total.x + value;
                total.y = total.y + (total.aim * value)
                break;
        }
        console.log(total);
        return total;
        
    }, { x: 0, y: 0 , aim:0})

    res.status(200).send(`${location.x*location.y}`);
}