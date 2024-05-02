import { useEffect, useState } from "react"
import MovieList from "../components/MovieList"
import Banner from "../components/Banner"
import Search from "../components/Search"

const Movie = () => {
  const [movies, setMovies] = useState()
  const [search,setSearch] = useState("");
  const fetchMovies = async () => {
    try {
      const res = await fetch(`https://jkblc-frontend-api.vercel.app/jkb/movies?search=${search}`)
      console.log({search})
      const data = await res.json();
      setMovies(data.movies);
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchMovies()
  }, [search])
  
  return (
    <div className='w-full flex-col '>
      <Banner />
      <Search setSearch={setSearch}/>
      <h1 className="text-center font-bold p-3">
        All Movies
      </h1>
      {
        movies ? (
          <MovieList movies={movies} />
        ) : (
          <h1>Movies not found</h1>
        )
      }
    </div>
  )
}



export default Movie