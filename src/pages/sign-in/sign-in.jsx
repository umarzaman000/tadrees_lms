import { useState } from 'react';
import { Autocomplete } from '@mantine/core';
import '@mantine/core/styles/Input.css';
import './login.css'; 
import logo from "../../assets/logo.png";
import Image from 'next/image';
import { Paper, Text, ThemeIcon, rem } from '@mantine/core';
import { IconColorSwatch } from '@tabler/icons-react';
import classes from './CardGradient.module.css';
import { PasswordInput,Group, Anchor } from '@mantine/core';

export default function Login() {
  const [emailValue, setEmailValue] = useState('');
  const [passwordshow, setPasswordshow] = useState(false); 
  const handleChangeforpassword = () => {
    setPasswordshow(!passwordshow);
  };
  const handleForgotPassword = () => {
    console.log("Forgot Password clicked!");
  };
  return (<>
  <div className='container'>
    <Paper withBorder radius="md" className={classes.card}>
   <Image width={160} height={48} src={logo} />
  <Text size="xl" weight={500} mt="md" className='signin'>
  Sign In
</Text>

      <Autocomplete
       style={{ marginTop: '20px', marginBottom: '20px' }}
       type='text'
        placeholder="Email"
      />
      <Autocomplete
      style={{ marginTop: '20px', marginBottom: '20px' }}
      type={passwordshow ? 'text' : 'password'}
        placeholder="Password"
      />
      <div className='d-flex-chechbox'>
      <label style={{ fontSize: "12px"}}>
        <input
          type='checkbox'
          onChange={handleChangeforpassword}
          checked={passwordshow}
          
        />
        Show Password
      </label>
      <Anchor href="#" onClick={(event) => event.preventDefault()} pt={2} fw={500} fz="xs">
          Forgot your password?
        </Anchor>
      </div>
    </Paper>
    </div>
    </>
  );
}
