import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom"

export const Search = props => {
    const navigate = useNavigate();
    const { game } = useParams();
    const [query, setQuery] = useState(null);

    useEffect(() => {
        axios.get("https://www.cheapshark.com/api/1.0/games?title=" + game)
            .then(res => setQuery(res.data))
            .catch(err => console.log(err))
    }, [])

    const onClickHandler = id => {
        navigate(`/game/${id}`)
    }

    return(
        <div>
            <p className="text-xl mb-6">Search for { game }:</p>
            <div className="flex flex-wrap justify-around">
                {
                    query ? query.map((obj, i) => <div key={ i } className="cursor-pointer transition ease-in-out delay-150 hover:scale-110 duration-300 m-3 rounded-lg shadow-lg max-w-sm max-h-min" onClick={ () => onClickHandler(obj.gameID) }>
                        <img src={ obj.thumb } alt="" className="object-scale-down h-48 m-auto" />
                        <p>{ obj.external }</p>
                    </div>) : ""
                }
            </div>
        </div>
    )
}