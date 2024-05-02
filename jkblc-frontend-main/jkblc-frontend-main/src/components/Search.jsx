import PropTypes from "prop-types"
import { useLocation, useNavigate } from 'react-router-dom'
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useEffect } from "react";

const Search = ({setSearch}) => {
    const {pathname,search} = useLocation();
    const navigate = useNavigate();

    const onChange = (e) => {
        setSearch(e.target.value);
        const urlParams = new URLSearchParams(location.search);
        urlParams.set('search', e.target.value)
        navigate(`${pathname}?search=${e.target.value}`)
    }
    useEffect(()=>{
        if(search){
            setSearch(search)
        }
    })

  return (
    <div>
       <div className="p-3 bg-slate-300 flex justify-between rounded-lg focus:shadow-md shadow-sm">
                <input type="text" placeholder='search' className='outline-none bg-slate-300' onChange={onChange} />
                <FaMagnifyingGlass className='w-4 h-4 mt-1' />
            </div>
    </div>
  )
}

Search.propTypes = {
    setSearch:PropTypes.func,
    search:PropTypes.string
}
export default Search