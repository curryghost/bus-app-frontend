import SearchIcon from '@mui/icons-material/Search';
import { useEffect, useRef } from 'react';
import { useState } from 'react';
import './FloatingSearch.scss';



export const FloatingSearch = ({ input, handleChange }) => {
    const [expand, setExpand] = useState(false);
    const inputRef = useRef(null);

    const handleClick = (e) => {
        e.stopPropagation();
        setExpand(!expand);
    }

    const handleListener = e => {
        if (!e.target.contains(inputRef.current))
            if (expand) {
                setExpand(false)
                document.removeEventListener('click', handleListener)
            }
    }

    useEffect(() => {
        expand && document.addEventListener('click', handleListener);
        return () => document.removeEventListener('click', handleListener)
    }, [expand])

    useEffect(() => {
        expand && inputRef.current.focus();
    }, [expand])


    return (
        <span className={'wrapper ' + (expand || 'fade')} >
            <span className='icon' onClick={handleClick}>
                <SearchIcon sx={{ fontSize: '3rem', position: 'relative', top: '3px', left: '3px' }} />
            </span>
            <input ref={inputRef} value={input} onChange={handleChange} type="text" className={expand ? 'expand' : ''} />
        </span>
    )
}