import express from 'express';
import { day1_1 } from './services/day1/1';
import { day1_2 } from './services/day1/2';
import { day2_1 } from './services/day2/1';
const app = express();
const port = process.env.PORT || 6000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.route('/day-1/1').post(day1_1);
app.route('/day-1/2').post(day1_2);
app.route('/day-2/1').post(day2_1);
 
        
app.listen(port,() => {
    console.log(`🔥`,` Server started on: ${port}`);
});
