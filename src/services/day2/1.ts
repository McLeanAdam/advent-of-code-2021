export const day2_1 = (req, res) => {

    const { data } = req.body;

    const location = data.reduce((total, currentValue, currentIndex, arr) => {
        
        let [direction, value] = currentValue.split(" ");
        value = parseInt(value)
        switch (true){
            case direction === 'up':
                total.y = total.y - value;
                break;
            case direction === 'down':
                total.y = total.y + value;
                break;
            case direction === 'forward':
                total.x = total.x + value;
                break;
        }
        console.log(total);
        return total;
        
    }, { x: 0, y: 0 })

    res.status(200).send(`${location.x*location.y}`);
}