import { Button, Card, CardActions, CardContent, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import FormAddTrainingstyle from '../../styles/FormAddTrainingstyle.module.css';

interface IFormAddTraining{
    sendData: (data: Array<string>) => void;
}

export function FormAddTraining(props: IFormAddTraining): JSX.Element {

    const [value1, setValue1] = useState('');
    const handleChange1 = (e: any) => setValue1(e.target.value);

    const [value2, setValue2] = useState('');
    const handleChange2 = (e: any) => setValue2(e.target.value);

    const [value3, setValue3] = useState('');
    const handleChange3 = (e: any) => setValue3(e.target.value);

    const [value4, setValue4] = useState('');
    const handleChange4 = (e: any) => setValue4(e.target.value);


    const addOneTraining = () => {
        const newArray = [value1, value2, value3, value4];
        props.sendData(newArray);
    }



  return (
    <Card sx={{ maxWidth: 500, margin: '0 auto', borderRadius: '10px;', boxShadow: "none;", border:"1px solid black", padding:"10px;"}}>
        <Typography variant="h3" gutterBottom component="div" sx={{ padding:'20px', textAlign:'center'}}>
            Add one exercice
        </Typography>
        <CardContent sx={{ display:'flex', flexDirection:'column' }}>
            <TextField className={FormAddTrainingstyle.oneline} id="outlined-basic" label="Exercice name" variant="outlined" value={value1} onInput={handleChange1} />
            <TextField className={FormAddTrainingstyle.oneline} id="outlined-basic" label="Number of repetition" variant="outlined" value={value2} onInput={handleChange2} />
            <TextField className={FormAddTrainingstyle.oneline} id="outlined-basic" label="Number of series" variant="outlined" value={value3} onInput={handleChange3} />
            <TextField className={FormAddTrainingstyle.oneline} id="outlined-basic" label="Pause time between series" variant="outlined" value={value4} onInput={handleChange4} />
        </CardContent>
        <CardActions className={FormAddTrainingstyle.addbutton}>
            <Button variant="outlined" onClick={addOneTraining}>ADD</Button>
        </CardActions>
    </Card>
  );
}




