import React from 'react';
import ComicItem from "../ComictIem/ComicItem";
import Pagination from "@mui/material/Pagination";

function MyPagination({loading, page, pageTotalCount, comics, changePage}) {
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