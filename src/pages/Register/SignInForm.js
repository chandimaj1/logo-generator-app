import React, {  } from 'react';
import { Grid } from '@material-ui/core';
import {Form} from '../../components/useForm';
import  Controls from '../../components/controls/Controls';


export default function SignInForm(props) {

    return (
        <Form>
            <Grid container>
                <Grid item xs={12}>
                <Controls.Input
                        name="email"
                        label="Email"
                        //value={values.firstName}
                        //onChange={handleInputChange}
                        //error={errors.firstName}
                   />
                    
                </Grid>
                <Grid item xs={12}>
                   <Controls.Input
                        name="Password"
                        type="password"
                        label="Password"
                        //value={values.lastName}
                        //onChange={handleInputChange}
                        //error={errors.lastName}
                   />
                </Grid>
                
                <Grid item xs={12}>
                    <Controls.CheckBox
                        name="isSaveMe"
                        label="Remember me for 30 days for fast sign in"
                        //value={values.isAgree}
                        //onChange={handleInputChange}
                    />
                </Grid>

                <div>
                    <Controls.Button
                        type="submit"
                        text="Sign In"
                    />
                </div>
            </Grid>
        </Form>
    )
}
