import React, { useState } from 'react'
import style from './CardMovieSearch.module.scss'
import { Link } from 'react-router-dom'
import { AiOutlineStar, AiFillStar } from 'react-icons/ai'
import { addMovie } from '../../redux/features/data/dataSlice'

export default function CardMovieSearch({ id, img, year, title, type, object, kickList }) {

    let [existe, setExiste] = useState((window.localStorage.getItem("favorites")))

    const addFavorite = (object) => {

        let data = JSON.parse(window.localStorage.getItem("favorites"))


        if (data) {
            data.push(object)
            window.localStorage.setItem("favorites", JSON.stringify(data))
            setExiste(window.localStorage.getItem("favorites"))
        } else {
            let arr = [object]
            window.localStorage.setItem("favorites", JSON.stringify(arr))
            setExiste(window.localStorage.getItem("favorites"))
        }
    }
    const removeFavorite = (object) => {
        let data = JSON.parse(window.localStorage.getItem("favorites"))

        let modify = data.filter(p => p.imdbID !== object.imdbID)

        kickList(modify)

        window.localStorage.setItem("favorites", JSON.stringify(modify))
        setExiste(window.localStorage.getItem("favorites"))
    }

    return (
        <div className={style.container}>
            <div className={style.container__data}>
                <div className={style.container__data_image}>
                    <img src={img} alt={title} />
                </div>
                <div className={style.container__data_title}>
                    <Link className={style.container__data_readmore} to={`/${type}/${id}`}>{title}</Link>
                    <div className={style.container__extra}>
                        <p className={style.container__extra_type}>{type.charAt(0).toUpperCase() + type.slice(1)}</p>
                        <p className={style.container__extra_year}>{year}</p>
                    </div>
                </div>
            </div>
            <div className={style.container__star}>
                {existe?.includes(id) ?
                    <AiFillStar onClick={() => removeFavorite(object)} />
                    :
                    <AiOutlineStar onClick={() => addFavorite(object)} />
                }
            </div>
        </div>

    )
}
