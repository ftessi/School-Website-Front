import { useState } from 'react';
import { FormControl, InputLabel, Select, MenuItem, TextField, Button } from '@mui/material';

const roles = [
    { value: 'admin', label: 'Admin' },
    { value: 'publisher', label: 'Publisher' },
];

export const UserForm = () => {
    // const [username, setUsername] = useState(user.username);
    // const [password, setPassword] = useState(user.password);
    // const [privileges, setPrivileges] = useState(user.privileges);
    // const [email, setEmail] = useState(user.email);

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     onSave({ username, password, privileges, email });
    // };

    return (
        <form>
            <TextField
                label="Username"
                // value={username}
                // onChange={(event) => setUsername(event.target.value)}
                fullWidth
                sx={{ my: 2 }}
            />
            <TextField
                label="Password"
                // value={password}
                // onChange={(event) => setPassword(event.target.value)}
                fullWidth
                sx={{ my: 2 }}
            />
            <FormControl fullWidth sx={{ my: 2 }}>
                <InputLabel>Privileges</InputLabel>
                <Select value="privileges" >
                    {roles.map((role) => (
                        <MenuItem key={role.value} value={role.value}>
                            {role.label}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <TextField
                label="Email"
                // value={email}
                // onChange={(event) => setEmail(event.target.value)}
                fullWidth
                sx={{ my: 2 }}
            />
            <Button type="submit" variant="contained" color="primary">
                Save
            </Button>
        </form >
    );
};
