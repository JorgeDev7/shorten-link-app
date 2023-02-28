import { useState } from "react";

export default function Link({ linkData }) {

    const [copy, setCopy] = useState(false);

    const { nameLink, shortLink } = linkData;

    const handleCopy = () => {
        navigator.clipboard.writeText(shortLink);
        setCopy(true);
    }

    // TODO: REALIZAR EL DEPLOY DEL PROYECTO Y CONFIGURAR EL .GITIGNORE

    return (
        <li className='list__item'>
            <div className='list__head'>
                <p className='list__link'>{nameLink}</p>
            </div>
            <div className='list__body'>
                <p className='list__link-short'>{shortLink}</p>
                <button
                    className={`list__btn ${copy ? 'copied' : ''}`}
                    type='button'
                    onClick={handleCopy}
                >{`${copy ? 'Copied!' : 'Copy'}`}</button>
            </div>
        </li>
    )
}
