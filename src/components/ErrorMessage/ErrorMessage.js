import React from 'react';

function ErrorMessage({isError}) {
    return (
        <>
            {isError
                ? <h2>
                    Request error
                </h2>
                : null
            }
        </>
    )}

export default ErrorMessage;