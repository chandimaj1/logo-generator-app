import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

export default function Select(props) {

    const {name, label, value, onChange, options} = props;

    return (
        <Autocomplete
            options={options}
            getOptionLabel={(option) => option.title}
            renderInput={(params) => <TextField {...params} 
                                        label={label} 
                                        variant="outlined" 
                                        name = {name}
                                        value = {value}
                                        onChange = {onChange}
                                        autoComplete='off'
                                        />}
        />
    )
}
