import { useEffect, useRef } from 'react';

const useCursorPosition = (contentEditableRef, value) => {
    const cursorPositionRef = useRef(null);

    useEffect(() => {
        if (contentEditableRef.current && cursorPositionRef.current !== null) {
            const range = document.createRange();
            const sel = window.getSelection();
            range.setStart(contentEditableRef.current.childNodes[0], cursorPositionRef.current);
            range.collapse(true);
            sel.removeAllRanges();
            sel.addRange(range);
        }
    }, [value, contentEditableRef]);

    const saveCursorPosition = () => {
        if (contentEditableRef.current) {
            const sel = window.getSelection();
            if (sel.rangeCount > 0) {
                const range = sel.getRangeAt(0);
                cursorPositionRef.current = range.startOffset;
            }
        }
    };

    return saveCursorPosition;
};
