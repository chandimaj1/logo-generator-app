import React from 'react'
import FontPicker from "font-picker-react";
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme=>({
    themeDemo:{
        fontSize:'1.1rem'
    }
}));

export default function FontPickerComponent(props) {

    //const {state, setState} = props;
    const classes = useStyles();

    return (
			<div>
				<FontPicker
					apiKey="AIzaSyAJEIKLbLKUjiMHD1s1GxMVYDYU-lDiWV4"
					activeFontFamily={"Open Sans"}
				/>
				<p className={classes.themeDemo}>
                    <span className="apply-font">
                        The selected font looks like this.
                    </span>
                </p>
			</div>
		);
}

/*
import React,{Component} from "react";
import FontPicker from "font-picker-react";

export default function FontPicker(props) {
	constructor(props) {
		super(props);
		this.state = {
			activeFontFamily: "Open Sans",
		};
	}


	render() {
		
	}
}
*/