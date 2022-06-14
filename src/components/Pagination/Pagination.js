import React from 'react';
import Pagination from "@mui/material/Pagination";

function MyPagination({ page, pageTotalCount, changePage}) {
    return (
        <>
            <div className={'container__pagination'}>
                <Pagination
                    count={pageTotalCount}
                    page={page}
                    onChange={(event, num) => {
                        changePage(num)
                    }}
                >
                </Pagination>
            </div>
        </>
    );
}

export default MyPagination;