import React, {useCallback, useEffect, useRef, useState} from 'react'


export const Generator = () => {
    const [length, setLength] = useState(6);
    const [password, setPassword] = useState('');
    const [characters, setCharacters] = useState(false);
    const [numbers, setNumbers] = useState(false);

    // to generate the password:
    const generatePassword = useCallback(
        () => {
            let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
            if(characters) str += '&$%><@-_#|/+=()!{}~';
            if(numbers) str += '0123456789';
            let pass = '';

            for(let i = 0; i < length; i++) {
                let char = Math.floor(Math.random() * str.length);
                pass += str.charAt(char);
            }
            setPassword(pass);
        },
        [length, characters, numbers],
    );

    // to call the password generator function :
    useEffect(() => {
        generatePassword();
    }, [generatePassword]);

    // to handle the copy button :
    const passwordRef = useRef(null);
    const copyHandler = () => {
        window.navigator.clipboard.writeText(password);
        passwordRef.current?.select();
    }

    return (
        <div className="generator-container">
            <input type='text'
                   value={password}
                   placeholder="password"
                   ref={passwordRef}
                   readOnly
                   className="password-input"
            />

            <button onClick={copyHandler} className="copy-button">Copy password</button>

            <input type='range'
                   max={30} min={6}
                   value={length}
                   onChange={(e) => {
                       setLength(e.target.value);
                   }}
                   className="range-slider"
            />
            <label className="length-label">length : {length}</label>

            <input type='checkbox' id='numbers'
                   checked={numbers}
                   onChange={() => setNumbers(prev => !prev)}
                   className="checkbox-input"
            />
            <label htmlFor="numbers" className="checkbox-label">Include numbers</label>

            <input type='checkbox' id='characters'
                   checked={characters}
                   onChange={() => setCharacters(prev => !prev)}
                   className="checkbox-input"
            />
            <label htmlFor="characters" className="checkbox-label">Include characters</label>
        </div>
    )
}