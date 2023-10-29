import React, {JSX} from "react";
import '../css/TerminalColors.css';
import '../css/CommandOutput.css';

function CommandOutput(input: string) {
    function getCommandOutput(input: string): JSX.Element {
        // split input into command and arguments
        const inputArray = input.split(" ");
        const command = inputArray[0];

        const commandList = ["help", "fh"];

        // check if command is contained in the list of commands
        if (!commandList.includes(command)) {
            return (
                <div className="terminal-green terminal-output">
                    {command}: command not found
                </div>
            )
        }

        return (
            <div>

            </div>
        )
    }

    return (
        <div>
            {getCommandOutput(input)}
        </div>
    )
}

export default CommandOutput;