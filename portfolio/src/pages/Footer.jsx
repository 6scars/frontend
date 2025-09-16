import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'

export function Footer() {
    const [element, setElement] = useState(null);

    useEffect(() => {
        const footer = document.getElementById('footer-root');
        setElement(footer)
    }, [])

    if(element === null){
        return null
    }
    return createPortal(<footer>© 2025 Marcin Michoń | made with passion ✨
</footer>,element)
    
}