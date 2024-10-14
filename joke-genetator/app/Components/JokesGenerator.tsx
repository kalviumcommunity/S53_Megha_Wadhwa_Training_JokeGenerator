import React from 'react'
import style from './JokesGenerator.module.css'

interface Joke {
    created_at: string,
    icon_url: string,
    id: string,
    url: string,
    value: string

}

const JokesGenerator = async () => {
    const res = await fetch("https://api.chucknorris.io/jokes/random")
    const jokes: Joke = await res.json()
    console.log(jokes)
    const { created_at, icon_url, id, url, value } = jokes;
    const formattedDate = new Date(created_at).toISOString().split('T')[0];

    return (
        <div key={id} className={style.container}>
            <div className={style.card}>
            <h1 className={style.title}>Random Chuck Norris Jokes</h1>
                <img src={icon_url} alt={url} />
            </div>
                <p>{value}</p>
                <p>Created at: {formattedDate}</p>
                <button className={style.button}>Next Joke</button>
        </div>
    )
}

export default JokesGenerator