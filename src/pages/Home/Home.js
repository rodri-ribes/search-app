import React, { useEffect, useRef, useState } from 'react'
import CardMovieSearch from '../../components/CardMovieSearch/CardMovieSearch'
import style from './Home.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { cleanMovieAction, getMovies } from '../../redux/features/data/dataSlice'
import { FaSearch } from 'react-icons/fa'
import Typed from 'typed.js'


export default function Home() {

    const [term, setTerm] = useState("")

    let dispatch = useDispatch();

    let movieSearch = useSelector(state => state.data.movieSearch)

    const onSearch = (e) => {
        e.preventDefault()
        dispatch(getMovies(term))
    }

    useEffect(() => {
        if (term === "") {
            movieSearch = false
            dispatch(getMovies(term))
        }
    }, [term])


    const present = useRef(null)

    useEffect(() => {
        dispatch(cleanMovieAction())
        const typed = new Typed(present.current, {
            strings: ["Games", "Series", "Movies"],
            startDelay: 300,
            typeSpeed: 75,
            backSpeed: 75,
            smartBackspace: true,
            showCursor: false,
            shuffle: false,
            backDelay: 1500,
            loop: true,
            loopCount: false,
        })
    }, [])


    return (
        <div className={style.Container}>
            <div className={style.Container__header}>
                <h2>Your favorite site to find <span ref={present}></span></h2>
            </div>

            <form onSubmit={(e) => onSearch(e)} className={style.Container__search}>
                <input type="text" value={term.charAt(0).toUpperCase() + term.slice(1)} onChange={e => setTerm(e.target.value)} placeholder="What are you looking for?" />
                <button type='submit'><FaSearch /></button>
            </form>

            <div className={style.container__movies}>
                {
                    term !== "" ?
                        movieSearch.Response === "True" &&
                        movieSearch?.Search?.map(p => {
                            return (
                                <CardMovieSearch
                                    title={p.Title}
                                    year={p.Year}
                                    type={p.Type}
                                    img={p.Poster}
                                    id={p.imdbID}
                                    object={p}
                                    key={p.imdbID}
                                />
                            )
                        })
                        :
                        null
                }
            </div>
        </div>
    )
}
