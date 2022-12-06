import React, { useState } from 'react'
import { TextField, Button} from '@mui/material';
import './Login.css';
import axios from 'axios';
import { useAuth } from '../Utils/UseAuth';
import jwt_decode from "jwt-decode";
import logo from './../img/logoschool.png';

export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState('');

    const {login} = useAuth();

    const Auth = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/login', {
                email: email,
                password: password
            }).then(function (response) {
                console.log(response.data.accessToken);
                const decoded = jwt_decode(response.data.accessToken);
                console.log(decoded)
                login({data: response.data.accessToken});});
        } catch (error) {
            console.log(error)
            setMsg("Error!");

        }
    }
    return (
        <>
            <div className='Login-Container container-fluid'>
                <form onSubmit={Auth} className='LoginForm container'>
                    <img className="Logo" src={logo} alt="Logo FS"></img>
                    <h1 className='Title'>INICIA SESIÓN</h1>
                    <TextField className='Input g-3 m-3' id="outlined-basic" label="Email" variant="outlined" color='success' name="UNInput" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <TextField className='Input g-3 m-3' id="outlined-basic" label="Contraseña" variant="outlined" color='success'  name="PWInput" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <Button className='FormField g-3 m-3' variant="contained" color="success" type="submit">Iniciar Sesión</Button>
                    <h1 className='Alert'>{msg}</h1>
                </form>
            </div>
        </>
    )
}