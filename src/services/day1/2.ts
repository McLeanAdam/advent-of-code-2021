export const day1_2 = (req, res) => {

    const { data } = req.body;

    const counter = data.reduce((total, currentValue, currentIndex, arr) => {
        if(currentIndex > 2) {
            const previousTotal = arr[currentIndex-3]+arr[currentIndex-2]+arr[currentIndex-1]
            const currentTotal = arr[currentIndex-2]+arr[currentIndex-1]+currentValue
            if(previousTotal < currentTotal) total++;
        }
        return total;
    }, 0)

    res.status(200).send(`${counter}`);
}