import React, {JSX, useState} from 'react';
import CommandOutput from './CommandOutput';
import '../css/Terminal.css';
import CustomInput from "./CustomInput";
import UserInfo from "./UserInfo";

function Terminal() {
    const [divList, setDivList] = useState<JSX.Element[]>([]);

    const appendDiv = (input: string) => {
        const newDivList = [...divList];
        newDivList.push(
            <UserInfo componentType={
                <div className="terminal-green">{input}</div>
            }/>,
            CommandOutput(input)
        )
        setDivList(newDivList);
    };

    const handleCommandInput = (event: React.KeyboardEvent<HTMLInputElement>, input: string) => {
        if (event.key === 'Enter') {
            // Perform your action here
            //alert('Enter key pressed! You can execute your functionality here.');
            ;
        }
    };

    return (
        <div className="Terminal">
            {divList.map((div, index) => (
                <div key={index}>{div}</div>
            ))}
            <UserInfo componentType={
                <CustomInput handleCommandInput={appendDiv}/>
            }/>

        </div>
    );
}

export default Terminal;