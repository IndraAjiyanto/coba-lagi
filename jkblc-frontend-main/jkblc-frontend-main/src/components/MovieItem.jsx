import PropTypes from "prop-types"
import StarIcon from '@mui/icons-material/Star';

const MovieItem = ({ movie }) => {
  console.log({ movie })
  return (
    <div className="w-full sm:max-w-[400px] space-y-3 flex flex-col  rounded-md shadow-md p-3 ">
      <img src={movie.img} className="object-cover h-[250px]" alt="" />
      <span className="absolute bg-slate-200 p-2 rounded-sm">
        rating <StarIcon className="w-4 h-4 text-yellow-500" />
      </span>

      <div className="flex justify-between px-3 border-b">
        <p>{movie.name}</p>
        <p className="text-slate-500">{movie.year}</p>
      </div>
      <div className="flex gap-3 justify-center px-3 text-slate-500">
        {
          movie.genre.map(genre => (
          <p
          key={genre}
          >{genre}</p>
        ))
        }
      </div>
    </div>
  )
}

MovieItem.propTypes = {
  movie: PropTypes.object
}
export default MovieItem