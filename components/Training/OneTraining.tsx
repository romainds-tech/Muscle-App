import { Button, Fade, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import OneTrainingstyle from '../../styles/OneTrainingstyle.module.css';
import CloseIcon from '@mui/icons-material/Close';

interface IOneTraining {
  title: string;
  key: string;
  id: string;
  deletefunc: (id: string) => void;
}

export function OneTraining(props: IOneTraining): JSX.Element {

  return (
    <Fade in={true} timeout={500}>
      <div className={OneTrainingstyle.content}>
        <div className={OneTrainingstyle.complete}>
          <div>
            {props.title}
          </div>
        </div>
        
        <Button className={OneTrainingstyle.supprbtn} variant="outlined" color="error" onClick={() => props.deletefunc(props.id)}>
          <CloseIcon />
        </Button>
      </div>
    </Fade>
  );
}
