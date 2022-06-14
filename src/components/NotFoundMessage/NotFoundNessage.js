import React from 'react';
import {Container} from "@mui/material";

function NotFoundMessage({loading, length, isError}) {
    return (
        <>
        { !loading && !length && !isError
            ? <div className={'container__message'}>
                <h2>
                    Nothing was found. Change the query.
                </h2>
            </div>
            : null
        }
        </>
    )
}

export default NotFoundMessage;