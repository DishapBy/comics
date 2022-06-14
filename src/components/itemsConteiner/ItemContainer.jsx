import React, {useEffect, useState} from 'react';
import _debounce from 'lodash/debounce';
import {Container, TextField, Stack, Link} from '@mui/material';
import {getData} from "../../service/api";
import NotFoundMessage from "../NotFoundMessage/NotFoundNessage";
import MyPagination from "../pagination/Pagination";

function ItemContainer(props) {

    const [posts, setPosts] = useState([]);
    const [titleStartsWith, setTitleStartsWith] = useState(null);
    const [startYear, setStartYear] = useState(null);
    const [page, setPage] = useState(1);
    const [pageTotalCount, setPageTotalCount] = useState(0);
    const [loading, setLoading] = useState(true);

    const changeTitle = _debounce(({target: {value}}) => {
        if (!value) {
            setTitleStartsWith(null);
        } else {
            setTitleStartsWith(value);
        }
        setPage(1);
    }, 1000);

    const changeYear = _debounce(({target: {value}}) => {
        if (value > 999) {
            setStartYear(Number(value));
        }
        if(!value){
            setStartYear(null);
        }
        setPage(1);
    }, 1000);

    useEffect(() => {
        (async () => {
            setLoading(true);
            try {
                await getData(page - 1, titleStartsWith, startYear)
                    .then(res => {
                        setPosts(res.data.data.results);
                        setPageTotalCount(Math.floor(res.data.data.total / 20));
                        setLoading(false);
                    })
            } catch (e) {
                console.log('Error', e)
            } finally {
                setLoading(false);
            }
        })()
    }, [page, titleStartsWith, startYear])

    return (
        <Container>
            <div className="container__input">
                <TextField
                    fullWidth
                    label={"Input search request"}
                    onChange={changeTitle}>

                </TextField>
                <TextField
                    fullWidth
                    label={"Input year"}
                    inputProps={{maxLength: 4, type: "number"}}
                    onChange={changeYear}>
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