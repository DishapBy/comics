import React from "react";
import { Card } from '@mui/material';

function ComicItem({title, description, thumbnail}) {


    const img = thumbnail.path + '/portrait_medium.' + thumbnail.extension;

    return (
        <Card className={'comics__container--item'} >
                <div className={'comics__title--container'}>
                    <p>{title}</p>
                </div>
                <div className={'comics__title--description'}>
                    <span>{description}</span>
                </div>
                <img className={'comics__img'} src={img} alt="img"/>
        </Card>
    );
}

export default ComicItem;