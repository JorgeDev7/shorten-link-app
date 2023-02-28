import { useState, useEffect } from 'react';
import Error from './Error';
import axios from 'axios';

export default function Formulario({ listado, setListado }) {

    const [link, setLink] = useState('');
    const [error, setError] = useState(false);


    const handleSubmit = e => {
        e.preventDefault();

        if ([link].includes('')) {
            setError(true);
            return
        }

        setError(false);

        const shortLink = async () => {
            const url = `https://api.shrtco.de/v2/shorten?url=${link}`;
            const { data } = await axios(url);

            const shortObj = {
                nameLink: data.result.original_link,
                shortLink: data.result.full_short_link
            }

            setListado([...listado, shortObj]);

            setLink('');
        }

        shortLink();

    }

    return (
        <form
            className='d-flex flex-column align-items-md-start flex-md-row p-md-5 gap-4 w-100'
            onSubmit={handleSubmit}
        >
            <div className='shorten-section__input-box'>
                <input
                    type="text"
                    className={`shorten-section__input form-control ${error ? 'active-input' : ''}`}
                    placeholder='Shorten a link here...'
                    value={link}
                    onChange={e => setLink(e.target.value)}
                />
                {error && (
                    <Error
                        msg="Please add a link"
                    />
                )}
            </div>
            <button
                className='shorten-section__btn'
                type='submit'
            >Shorten It!</button>
        </form>
    )
}
