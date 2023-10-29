import React, {useEffect, useRef} from "react";
import '../css/CustomInput.css'

const CustomInput = ({ handleCommandInput }: { handleCommandInput: (input: string) => void }) => {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [inputValue, setInputValue] = React.useState('');

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            // Perform your action here
            //alert('Enter key pressed! You can execute your functionality here.');
            setInputValue("")
            handleCommandInput(inputValue)
        }
    }

    const handleUserInput = (input: string) => {
        // if input is empty and input is not a space
        // then i want to activate the whiteDivFunction
        setInputValue(input)
    }

    return (
        <input
            placeholder={"Type here, try fh --help"}
            value={inputValue}
            className="terminal-input terminal-green"
            ref={inputRef}
            onChange={(e) => handleUserInput(e.target.value)}
            onKeyDown={handleKeyDown}
        />
    )
}

export default CustomInput;