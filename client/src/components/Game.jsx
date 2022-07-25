import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

export const Game = props => {
    const { id } = useParams();
    const [query, setQuery] = useState(null);

    useEffect(() => {
        axios.get("https://www.cheapshark.com/api/1.0/games?id=" + id)
            .then(res => setQuery(res.data))
            .catch(err => console.log(err))
    }, [id])

    const onClickHandler = dealId => {
        console.log(dealId)
    }

    return(
        <div>
            {
                query ? <div>
                    <p className="text-2xl mb-2">{ query.info.title }</p>
                    <img src={ query.info.thumb } alt="" className="m-auto"/>
                    <p className="text-xl mt-2">Historical Lowest Price: { query.cheapestPriceEver.price }</p>
                    <table className="w-9/12 min-w-max m-auto mt-3">
                        <thead className="bg-white border-b">
                            <tr>
                                <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-center">Current Price:</th>
                                <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-center">Retail Price:</th>
                                <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-center">Current Savings:</th>
                            </tr>
                        </thead>
                        {
                            query.deals.map((deal, i) => <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100" onClick={ () => onClickHandler(deal.dealID) }>
                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{ deal.price }</td>
                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{ deal.retailPrice }</td>
                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{ Math.trunc(deal.savings) }% </td>
                            </tr>)
                        }
                    </table>
                </div> : ""
            }
        </div>
    )
}