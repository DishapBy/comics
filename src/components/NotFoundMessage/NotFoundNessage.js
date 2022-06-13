import React from 'react';
import {Container} from "@mui/material";

function NotFoundMessage({loading, length}) {
    return (
        <>
        { !loading && length === 0
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