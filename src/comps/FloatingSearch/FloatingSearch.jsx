import SearchIcon from '@mui/icons-material/Search';
import { useCallback, useEffect, useRef } from 'react';
import { useState } from 'react';
import './FloatingSearch.scss';



export const FloatingSearch = ({ input, handleChange }) => {
    const [expand, setExpand] = useState(false);
    const inputRef = useRef(null);
    const wrapperRef = useRef(null);

    const handleClick = (e) => {
        e.stopPropagation();
        setExpand(!expand);
    }

    const handleListener = useCallback(e => {
        if (!e.target.contains(inputRef.current))
            if (expand) {
                setExpand(false)
                document.removeEventListener('click', handleListener)
            }
    }, [expand])

    const dragHandler = ({ clientX, clientY }) => {
        wrapperRef.current.style.top = `${clientY}px`
        wrapperRef.current.style.left = `${clientX}px`
        console.log(clientX)
    }
    useEffect(() => {
        expand && document.addEventListener('click', handleListener);
        expand && inputRef.current.focus();
        return () => document.removeEventListener('click', handleListener)
    }, [expand, handleListener])

    return (
        <span className={'wrapper ' + (expand || 'fade')} ref={wrapperRef} style={{ top: '80vh', left: '80vw' }} >
            <span className='icon' onClick={handleClick} draggable onDragEnd={dragHandler}>
                <SearchIcon sx={{ fontSize: '3rem', position: 'relative', top: '3px', left: '3px' }} />
            </span>
            <input ref={inputRef} value={input} onChange={handleChange} type="text" className={expand ? 'expand' : ''} />
        </span>
    )
}