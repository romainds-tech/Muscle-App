import { List, ListItem, ListItemButton, ListItemText, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Trainingstyle from '../../styles/Trainingstyle.module.css';
import { FormAddTraining } from '../FormAddTraining/FormAddTraining';
import { OneTraining } from './OneTraining';
import { v4 as uuidv4 } from 'uuid';

interface ITraining {
  title: string;
}

export function Training(props: ITraining): JSX.Element {

  const router = useRouter();

  const [dataArr, setDataArr] = useState([
    {txt: "Pump / 12 reps / 3 series / 45 seconds", id: uuidv4()}
  ])



  const addOneTraining = (array: Array<string>) => {
    const newArr = [...dataArr];
    const newTraining = {txt: array[0] + " / " + array[1] + " reps / " + array[2] + " series / " + array[3] + " seconds", id: uuidv4()};

    newArr.push(newTraining);
    setDataArr(newArr)
  }

  const deleteOneTraining = (id: string) => {
    const newArr = [...dataArr];
    const newDataArr = newArr.filter(item => item.id !== id);
    setDataArr(newDataArr);
  }


  return (
      <div className={Trainingstyle.Training}>
        <Typography variant="h2" gutterBottom component="div">
            {router.query.title}
        </Typography>

        <div className={Trainingstyle.ListOfTrainings}>
            {dataArr.map((item: any) => (
              <OneTraining key={item.id} id={item.id} title={item.txt} deletefunc={deleteOneTraining}/>
            ))}
        </div>

        <FormAddTraining sendData={addOneTraining}/>

      </div>
  );
}
