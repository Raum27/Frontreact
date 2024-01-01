import React, { useState, useEffect } from 'react';


function PapgNoFace() {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setIsVisible(false);
        }, 5000); // Set the timeout duration in milliseconds (e.g., 5000 for 5 seconds)

        return () => clearTimeout(timeoutId);
    }, []);

    return (
        <>
            {isVisible && (
                <div role="alert" className="alert alert-error">
                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className='font-semibold'>Sorry! your files are not found the faces, Please Try again &#128549;</span>
                </div>
            )}
        </>
    );
}

export default PapgNoFace