import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Home = props => {
    const navigate = useNavigate();
    const [game, setGame] = useState(null);

    const onChangeHandler = e => {
        setGame(e.target.value)
    }
    
    const onSubmitHandler = e => {
        e.preventDefault();
        navigate(`/search/${game}`)
    }

    return(
        <div>
            <form onSubmit={ onSubmitHandler }>
                <div className="form-group mb-6">
                    <input type="text" name="search" className="form-control block w-6/12 m-auto px-3 py-1.5 text-base font-normal bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" onChange={ onChangeHandler } />
                </div>
                <div className="form-group">
                    <input type="submit" value="Search for Deals" className="px-6 py-2.5 bg-blue-600 font-medium leading-tight uppercase rounded hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" />
                </div>
            </form>
        </div>
    )
}