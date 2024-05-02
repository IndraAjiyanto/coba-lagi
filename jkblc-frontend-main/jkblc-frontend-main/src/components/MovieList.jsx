import PropTypes from 'prop-types'
import MovieItem from './MovieItem'

const MovieList = ({ movies }) => {
    console.log({ movies })

    return (
        <div className="flex justify-center flex-col sm:flex-wrap sm:flex-row">
            {
                movies && (
                    movies.map((movie) => (
                        <MovieItem movie={movie} key={movie._id} />
                    ))
                )
            }
        </div>
    )
}

MovieList.propTypes = {
    movies: PropTypes.array
}

export default MovieList