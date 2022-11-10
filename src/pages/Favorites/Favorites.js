import React, { useEffect, useState } from 'react'
import CardMovieSearch from '../../components/CardMovieSearch/CardMovieSearch'
import style from './Favorites.module.scss'

export default function Favorites() {

    const [data, setData] = useState(JSON.parse(window.localStorage.getItem("favorites")))

    const [term, setTerm] = useState("")

    useEffect(() => {
        setData(JSON.parse(window.localStorage.getItem("favorites")))
    }, [])

    function filterType(term) {

        return function (x) {
            return x.Type.toLowerCase().includes(term) || !term
        }

    }

    return (
        <div className={style.container}>
            {
                data.length > 0 && <div className={style.container__filter}>
                    <p>Filter By: </p>
                    <div>
                        <b onClick={() => setTerm("")}>All</b>
                        <b onClick={() => setTerm("game")}>Games</b>
                        <b onClick={() => setTerm("movie")}>Movies</b>
                        <b onClick={() => setTerm("serie")}>Series</b>
                    </div>
                </div>
            }
            {
                data.length > 0 ?
                    data?.filter(filterType(term)).map(p => {
                        return (
                            <CardMovieSearch
                                title={p.Title}
                                year={p.Year}
                                type={p.Type}
                                img={p.Poster}
                                id={p.imdbID}
                                object={p}
                                key={p.imdbID}
                                kickList={setData}
                            />
                        )
                    })
                    :
                    <h3>Add your favorite Games, Series and Movies</h3>
            }
        </div>
    )
}
