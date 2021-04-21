import React from "react";
import "./Signin.css";
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: 200,
        },
    },
}));

export function Signin(props) {
    const classes = useStyles();


    return (
        <div id="signin" className={"SigninWraper"}>
            <div className={"Signin"}>
                <div>
                    <h2>Signin</h2>
                </div>
                <div>
                    <form className={classes.root} noValidate autoComplete="off">
                        <div>
                            <TextField  id="standard-error" label="Full name" defaultValue="" />

                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}