import React from 'react';
import ComicItem from "../ComictIem/ComicItem";

function ComicsContainer({comics}) {
    return (
        <div className={'comics__container'}>
            {comics.map(item => <ComicItem key={item.id} {...item} />)}
        </div>
    );
}

export default ComicsContainer;