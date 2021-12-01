export const day1_1 = (req, res) => {

    const { data } = req.body;

    const counter = data.reduce((total, currentValue, currentIndex, arr) => {
        if(currentIndex > 0) {
            if(arr[currentIndex-1] < currentValue) total++;
        }
        return total;
    }, 0)

    res.status(200).send(`${counter}`);
}