import React, { useState } from 'react'
import style from './CardMovie.module.scss'
import { Link } from 'react-router-dom'
import { AiOutlineStar, AiFillStar } from 'react-icons/ai'
import { addMovie } from '../../redux/features/data/dataSlice'

export default function CardMovie({ id, img, year, title, type }) {

    return (
        <div className={style.container}>
            <Link to={`/${type}/${id}`} className={style.container__data}>
                <div className={style.container__data_image}>
                    <img src={img} alt={title} />
                    <div className={style.container__extra}>
                        <p className={style.container__extra_type}>{type.charAt(0).toUpperCase() + type.slice(1)}</p>
                        <p className={style.container__extra_year}>{year}</p>
                    </div>
                </div>
                <div className={style.container__data_title}>
                    <h3 className={style.container__data_readmore} >{title}</h3>
                </div>
            </Link>

        </div>

    )
}
