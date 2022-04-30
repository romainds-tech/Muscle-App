import { Button, TextField, Typography } from '@mui/material'
import type { NextPage } from 'next'
import { Logo } from '../components/Logo/Logo'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useRouter } from 'next/router';
import Link from 'next/link';
import React, { useState } from 'react';




const Home: NextPage = () => {

  const { pathname } = useRouter();

  const isTraining = pathname === '/training';
  
  const [value, setValue] = useState('');
  const handleChange = (e: any) => setValue(e.target.value);
  

  return (
    <div className="container">

      <div className='content-page'>
        <Logo />
        <Typography className='Bigtitle' variant="h2" gutterBottom component="div">
          Exercice App
        </Typography>

        <TextField id="outlined-basic" label="Training name" variant="outlined" value={value} onChange={handleChange} />

          {/* Send TextField value in the query */}

          <Link href={{ pathname: '/trainingpage', query: { title: value} }} >
            <a>
              <Button className='arrow' variant="outlined"><ArrowForwardIosIcon />
              </Button>
            </a>
          </Link>

      </div>
    </div>
  )
}

export default Home
