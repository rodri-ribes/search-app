import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Spinner from '../../components/Spinner/Spinner'
import style from './ContentDetail.module.scss'
import { BsFillStarFill, BsTrophyFill } from 'react-icons/bs'
import CardMovie from '../../components/CardMovie/CardMovie'

import { AiOutlineStar, AiFillStar } from 'react-icons/ai'
import { useState } from 'react'
import axios from 'axios'


export default function ContentDetail() {

    let { category, id } = useParams()

    let [existe, setExiste] = useState((window.localStorage.getItem("favorites")))

    let movieSearch = useSelector(state => state.data.movieSearch.Search)

    const [movie, setMovie] = useState(false)
    const [movies, setMovies] = useState(false)


    const main = async () => {

        try {
            const resp = await axios.get(`https://www.omdbapi.com/?i=${id}&plot=full&apikey=882127a8`);
            setMovie(resp.data)
        } catch (error) {
            console.log(error)
        }
    }


    useEffect(() => {

        if (movieSearch?.length > 0) {
            setMovies(movieSearch)

            window.localStorage.setItem("search", JSON.stringify(movieSearch))
        } else if (movieSearch?.length === undefined && window.localStorage.getItem("search")) {
            setMovies(JSON.parse(window.localStorage.getItem("search")))
        }
        main()
    }, [movie])


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

        window.localStorage.setItem("favorites", JSON.stringify(modify))
        setExiste(window.localStorage.getItem("favorites"))
    }


    return (
        <div className={style.container}>
            {
                movie ?
                    movie.Ratings[0] ?
                        <div className={style.container__content}>
                            <div className={style.container__content__sectionOne}>
                                <div className={style.container__content__sectionOne__image}>
                                    <img src={movie?.Poster} alt={movie?.Title} />
                                    <div className={style.container__content__sectionOne__image__rating}>
                                        <BsFillStarFill />
                                        <p>{movie?.Ratings[0].Value}</p>
                                    </div>
                                </div>
                                <div className={style.container__content__sectionOne__data}>
                                    <div className={style.container__content__sectionOne__data__group}>
                                        <h2>{movie?.Title}</h2>
                                        <div className={style.container__content__sectionOne__data__group__info}>
                                            <p className={style.container__extra_type}>{movie?.Type.charAt(0).toUpperCase() + movie?.Type.slice(1)}</p>
                                            <p className={style.container__extra_year}>{movie?.Year}</p>
                                        </div>
                                        <div className={style.container__star}>
                                            {existe?.includes(id) ?
                                                <AiFillStar onClick={() => removeFavorite(movie)} />
                                                :
                                                <AiOutlineStar onClick={() => addFavorite(movie)} />
                                            }
                                        </div>
                                    </div>
                                    <p>{movie?.Plot}</p>
                                </div>
                            </div>
                            <div className={style.container__content__sectionTwo}>
                                <h3>Information</h3>

                                <div className={style.container__content__sectionTwo__data}>
                                    <p> <b>Genre:</b> {movie?.Genre}</p>
                                    <p> <b>Actors:</b> {movie?.Actors}</p>
                                    <p> <b>Country:</b> {movie?.Country}</p>
                                    <p> <b>Lenguage:</b> {movie?.Language}</p>
                                    {
                                        movie?.BoxOffice !== "N/A" && <p> <b>Raised:</b> {movie?.BoxOffice}</p>
                                    }
                                    {
                                        movie?.Released !== "N/A" && <p> <b>Released:</b> {movie?.Released}</p>
                                    }
                                    {
                                        movie?.Runtime !== "N/A" && <p> <b>Duration:</b> {movie?.Runtime}</p>
                                    }
                                    {
                                        movie?.Director !== "N/A" && <p> <b>Director:</b> {movie?.Director}</p>
                                    }
                                    {
                                        movie?.Writer !== "N/A" && <p> <b>Writer:</b> {movie?.Writer}</p>
                                    }
                                    {
                                        movie?.totalSeasons && <p> <b>Seasons:</b> {movie?.totalSeasons}</p>
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
                            <div className={style.container__content__sectionFour}>
                                <h3>Related</h3>
                                <div className={style.container__content__sectionFour__related}>
                                    {
                                        movies ?
                                            movies?.filter(f => f.imdbID !== id).slice(0, 5).map(p => {
                                                return (
                                                    <CardMovie
                                                        title={p.Title}
                                                        year={p.Year}
                                                        type={p.Type}
                                                        img={p.Poster}
                                                        id={p.imdbID}
                                                        key={p.imdbID}
                                                    />

                                                )
                                            })
                                            :
                                            <Spinner />
                                    }
                                </div>

                            </div>
                        </div>
                        :
                        <h3 className={style.error}>There is no information about this {category.charAt(0).toUpperCase() + category.slice(1)}</h3>
                    :
                    <Spinner />
            }
        </div>
    )
}
