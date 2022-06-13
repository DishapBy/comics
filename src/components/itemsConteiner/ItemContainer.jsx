import React, {useEffect, useState} from 'react';
import {Container, Pagination, TextField, Stack, Link} from '@mui/material';
import {getData} from "../../service/api";
import ComicItem from "../comictIem/ComicItem";
import CircularProgress from "@mui/material/CircularProgress";
import NotFoundMessage from "../NotFoundMessage/NotFoundNessage";
import MyPagination from "../pagination/Pagination";

function ItemContainer(props) {

    const [posts, setPosts] = useState('');
    const [titleStartsWith, setTitleStartsWith] = useState('');
    const [startYear, setStartYear] = useState(0);
    const [page, setPage] = useState(1);
    const [pageTotalCount, setPageTotalCount] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        getData(page - 1, titleStartsWith, startYear)
            .then(res => {
                setPosts(res.data.data.results);
                setPageTotalCount(Math.floor(res.data.data.total / 20));
                setLoading(false);
            })
    }, [page, titleStartsWith, startYear])

    return (
        <Container>
            <div className="container__input">
                <TextField
                    fullWidth
                    label={"Input search request"}
                    value={titleStartsWith}
                    onChange={e => {
                        setTitleStartsWith(e.target.value)
                        setPage(1)
                    }}>

                </TextField>
                <TextField
                    fullWidth
                    label={"Input year"}
                    inputProps={{maxLength: 4}}
                    onChange={e => {
                        if (e.target.value > 999) {
                            setStartYear(Number(e.target.value))
                            setPage(1)
                        }
                        if (!e.target.value) {
                            setStartYear(Number(e.target.value))
                        }
                    }}>
                </TextField>
            </div>

            <MyPagination loading={loading}
                          pageTotalCount={pageTotalCount}
                          page={page}
                          posts={posts}
                          changePage={setPage}/>

            <NotFoundMessage loading={loading} length={posts.length}/>

        </Container>
    );
}

export default ItemContainer;