'use client'
import React, { useEffect, useState } from 'react'
import style from './JokesGenerator.module.css'

interface Joke {
    created_at: string,
    icon_url: string,
    id: string,
    url: string,
    value: string

}

const JokesGenerator = () => {
    const [joke, setJoke] = useState<Joke | null>(null)

    const fetchJoke = async()=>{
        const res = await fetch("https://api.chucknorris.io/jokes/random")
        const jokes: Joke = await res.json()
        setJoke(jokes)
    }

    useEffect(() => {
        fetchJoke();
      }, []);
    
      const formattedDate = joke ? new Date(joke.created_at).toISOString().split('T')[0] : '';

    return (
        <div key={joke?.id} className={style.container}>
            <div className={style.card}>
            <h1 className={style.title}>Random Chuck Norris Jokes</h1>
                <img src={joke?.icon_url} alt={joke?.url} />
            </div>
                <p>{joke?.value}</p>
                <p>Created at: {formattedDate}</p>
                <button className={style.button} onClick={()=>{
                     fetchJoke()
                }}>Next Joke</button>
        </div>
    )
}

export default JokesGenerator