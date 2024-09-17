import axios from "axios";
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Card } from "./Card";

export function Button() {
    let x;
    const [search, setSearch] = useState("Trending");
    const [data, setData] = useState([]);

    const Search = async () => {
        const response = await axios.post('http://localhost:5050/news', { topic: search });
        const data = await response.data;
        console.log(data);
        setData(data.data);
    }

    useEffect(() => {
        Search();
    }, [search]);

    return (
        <div className="max-w-7xl mx-auto p-4">
            {/* Search Bar */}
            <div className="w-full relative mb-6">
                <input
                    onChange={(e) => {
                        x = e.target.value;
                    }}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type="text"
                    placeholder="Search for news..."
                />
                <FaSearch
                    className="absolute right-4 top-2 text-gray-500 hover:text-gray-700 cursor-pointer"
                    onClick={() => { setSearch(x) }}
                />
            </div>

            {/* Button Group */}
            <div className="flex justify-between mb-8">
                <button
                    onClick={() => { setSearch("Latest") }}
                    className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition duration-300">
                    Latest
                </button>
                <button
                    onClick={() => { setSearch("Politics") }}
                    className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition duration-300">
                    Politics
                </button>
                <button
                    onClick={() => { setSearch("Trending") }}
                    className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition duration-300">
                    Trending
                </button>
            </div>

            {/* Results Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {data.length > 0 ? (
                    data.map((article, index) => (<Card key={index} article={article} />))
                ) : (
                    <p className="text-gray-500 text-center">No Article Found</p>
                )}
            </div>
        </div>
    );
}
