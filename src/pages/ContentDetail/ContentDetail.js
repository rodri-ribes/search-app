import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Spinner from '../../components/Spinner/Spinner'
import { getMovie } from '../../redux/features/data/dataSlice'
import style from './ContentDetail.module.scss'
import { BsFillStarFill, BsTrophyFill } from 'react-icons/bs'

export default function ContentDetail() {

    let { category, id } = useParams()
    let dispatch = useDispatch()

    useEffect(() => {
        dispatch(getMovie(id))
    }, [])

    let movie = useSelector(state => state.data.movie)
    console.log(movie)


    return (
        <div className={style.container}>
            {
                movie ?
                    <div className={style.container__content}>
                        <div className={style.container__content__sectionOne}>
                            <div className={style.container__content__sectionOne__image}>
                                <img src={movie.Poster} alt={movie.Title} />
                                <div className={style.container__content__sectionOne__image__rating}>
                                    <BsFillStarFill />
                                    <p>{movie.Ratings[0].Value}</p>
                                </div>
                            </div>
                            <div className={style.container__content__sectionOne__data}>
                                <div className={style.container__content__sectionOne__data__group}>
                                    <h2>{movie.Title}</h2>
                                    <div className={style.container__content__sectionOne__data__group__info}>
                                        <p className={style.container__extra_type}>{movie.Type.charAt(0).toUpperCase() + movie.Type.slice(1)}</p>
                                        <p className={style.container__extra_year}>{movie.Year}</p>
                                    </div>
                                </div>
                                <p>{movie.Plot}</p>
                            </div>
                        </div>
                        <div className={style.container__content__sectionTwo}>
                            <h3>Information</h3>

                            <div className={style.container__content__sectionTwo__data}>
                                <p> <b>Genre:</b> {movie.Genre}</p>
                                <p> <b>Actors:</b> {movie.Actors}</p>
                                <p> <b>Country:</b> {movie.Country}</p>
                                <p> <b>Lenguage:</b> {movie.Language}</p>
                                {
                                    movie.BoxOffice !== "N/A" && <p> <b>Raised:</b> {movie.BoxOffice}</p>
                                }
                                {
                                    movie.Released !== "N/A" && <p> <b>Released:</b> {movie.Released}</p>
                                }
                                {
                                    movie.Runtime !== "N/A" && <p> <b>Duration:</b> {movie.Runtime}</p>
                                }
                                {
                                    movie.Director !== "N/A" && <p> <b>Director:</b> {movie.Director}</p>
                                }
                                {
                                    movie.Writer !== "N/A" && <p> <b>Writer:</b> {movie.Writer}</p>
                                }
                                {
                                    movie.totalSeasons && <p> <b>Seasons:</b> {movie.totalSeasons}</p>
                                }
                            </div>
                        </div>

                        {
                            movie.Awards !== "N/A" && <div className={style.container__content__sectionThree}>
                                <h3>Awards</h3>
                                {
                                    <div className={style.container__content__sectionTwo__awards__group}>
                                        <BsTrophyFill />
                                        <p>{movie.Awards}</p>
                                    </div>
                                }
                            </div>

                        }

                    </div>
                    :
                    <Spinner />
            }
        </div>
    )
}
