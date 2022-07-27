import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Home = props => {
    const navigate = useNavigate();
    const [game, setGame] = useState(null);
    const [searches, setSearches] = useState(null);
    
    const onChangeHandler = e => {
        setGame(e.target.value)
    }

    useEffect(() => {
        axios.get("http://localhost:8000/api/games")
            .then(res => setSearches(res.data))
            .catch(err => console.log(err));
    }, [searches])
    
    const onSubmitHandler = e => {
        e.preventDefault();
        navigate(`/search/${game}`)
    }

    const onClickHandler = name => {
        navigate(`/game/${name}`)
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
            <p className="font-mono text-xl mt-8">Recent Searches:</p>
            <div className="flex flex-wrap justify-around mt-8">
                {
                    searches ? searches.map((game, i) => <div key={ i } className="cursor-pointer transition ease-in-out delay-150 hover:scale-110 duration-300 m-3 rounded-lg shadow-lg max-w-sm max-h-min" onClick={ () => onClickHandler(game.name) }>
                        <img src={ game.image } className="object-scale-down h-48 m-auto" />
                        <p>{ game.name }</p>
                    </div>) : ""
                }
            </div>
        </div>
    )
}