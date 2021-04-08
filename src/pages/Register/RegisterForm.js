import React, { useEffect } from 'react';
import { Grid } from '@material-ui/core';
import {useForm, Form} from '../../components/useForm';
import  Controls from '../../components/controls/Controls';
import  * as registerServices from '../../services/registerServices';

const genderItems = [
    {id:'male', title:'Male'},
    {id:'female', title:'Female'},
    {id:'other', title:'Other'},
]


const initialFValues = {
    id:0,
    firstName:'',
    lastName:'',
    email:'',
    mobile:'',
    country:'',
    industry:1,
    gender:'male',
    dateOfBirth:new Date(2016,0,1),
    isAgree: false,
    
}


export default function RegisterForm(props) {

    const {addOrEdit, recordForEdit} = props;
    const validate = (fieldValues = values) => {
        let temp = {...errors}
        if('firstName' in fieldValues)
            temp.firstName = fieldValues.firstName?"":"This field is required.";
        if('lastName' in fieldValues)
            temp.lastName = fieldValues.lastName?"":"This field is required.";
        if('email' in fieldValues)
            temp.email = (/.+@.+..+/).test(fieldValues.email)?"":"This field is required. Please make sure that you entered a valid email address";
        if('industry' in fieldValues)
            temp.industry = fieldValues.industry?"":"This field is required.";
        setErrors({
            ...temp
        })

        if(fieldValues === values)
            return Object.values(temp).every( x => x === "");
    }

    const {
        values, 
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm,
    } = useForm(initialFValues, true, validate );

    const handleSubmit = e => {
        e.preventDefault();
        if (validate()){
            addOrEdit(values, resetForm)
        }
            
    }
    
    useEffect(()=>{
        if(recordForEdit != null){
            setValues({
                ...recordForEdit
            })
        }
    })

    return (
        <Form onSubmit={handleSubmit}>
            <Grid container>
                <Grid item xs={12} md={6}>
                <Controls.Input
                        name="firstName"
                        label="First Name"
                        value={values.firstName}
                        onChange={handleInputChange}
                        error={errors.firstName}
                   />
                    
                </Grid>
                <Grid item xs={12} md={6}>
                   <Controls.Input
                        name="lastName"
                        label="Last Name"
                        value={values.lastName}
                        onChange={handleInputChange}
                        error={errors.lastName}
                   />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Controls.Input
                        name="email"
                        label="Email"
                        value={values.email}
                        onChange={handleInputChange}
                        error={errors.email}
                   />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Controls.Select 
                            name="industry"
                            label="Industry"
                            value={values.industry}
                            options={ registerServices.getIndustriesList() }
                            onChange={handleInputChange}
                            error={errors.industry}
                        />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Controls.Autocomplete 
                            name="country"
                            label="Country"
                            value={values.country}
                            onChange={handleInputChange}
                            options={ registerServices.getCountriesList() }
                        />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Controls.DatePicker
                        name="dateOfBirth"
                        label="Date of Birth"
                        value={values.dateOfBirth}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Controls.RadioGroup
                        name="gender"
                        label="Gender"
                        value={values.gender}
                        onChange={handleInputChange}
                        items={genderItems}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Controls.CheckBox
                        name="isAgree"
                        label="I Agree to Logomation Terms &amp; Conditions"
                        value={values.isAgree}
                        onChange={handleInputChange}
                    />
                </Grid>

                <div>
                    <Controls.Button
                        type="submit"
                        text="Create my Logomation Account"
                    />
                    <Controls.Button
                        type="reset"
                        color="default"
                        text="Reset"
                        onClick={resetForm} 
                    />
                </div>
            </Grid>
        </Form>
    )
}
