import React from "react";
import {TextField, Body} from "../styled";
import NextButton from "../../Buttons/NextButton/index";

const UserDetailsComponent = () => {
    return (<Body>
        <form>
            <br/>
            <div>
                <TextField label="Name" id="outlined-basic" variant="outlined" required/>
            </div>
            <br/>
            <div>
                <TextField id="outlined-basic" label="Role" variant="outlined"/>
            </div>
            <br/>
            <div>
                <TextField label="email" id="outlined-basic" variant="outlined"/>
            </div>
            <br/>
            <div>
                <TextField label="password" id="outlined-basic" variant="outlined"/>
                <br/>
            </div>
            <br/>
            <div>
                <NextButton/>
            </div>
        </form>
    </Body>);
};

export default UserDetailsComponent;
