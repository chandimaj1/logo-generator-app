import { FormControl, FormControlLabel, Checkbox as MuiCheckBox } from '@material-ui/core';
import React from 'react'

export default function CheckBox(props) {
    const {name, label, value, onChange} = props;

    const convertToDefaultEventParameter = (name,value) => ({
        target: {
            name, value
        }
    })
    
    return (
        <FormControl>
            <FormControlLabel
                control = {<MuiCheckBox 
                                name = {name}
                                color = "primary"
                                checked = {value}
                                onChange = {
                                    e  => onChange( convertToDefaultEventParameter(name, e.target.checked) ) 
                                }
                            />}
                label={label}
            >

            </FormControlLabel>
        </FormControl>
    )
}
