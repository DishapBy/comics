import React from 'react';
import CircularProgress from "@mui/material/CircularProgress";
import {Stack} from "@mui/material";
import ComicItem from "../comictIem/ComicItem";
import Pagination from "@mui/material/Pagination";

function MyPagination({loading, page, pageTotalCount, posts, changePage}) {
    return (
        <>
            {loading
                ? <CircularProgress className={'loading__bar'} size='16rem'/>
                : <>
                    <Stack className={'container__pagination'} spacing={2}>
                        <Pagination
                            count={pageTotalCount}
                            page={page}
                            onChange={(event, num) => {
                                changePage(num)
                            }}
                        >
                        </Pagination>
                    </Stack>
                    <div className={'comics__container'}>
                        {posts.map(item => <ComicItem key={item.id} {...item} />)}
                    </div>
                </>}
        </>
    );
}

export default MyPagination;