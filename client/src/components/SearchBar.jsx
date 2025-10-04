import { useState, useEffect } from "react";
import "../css/SearchBar.css";

export const SearchBar = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        const timer = setTimeout(async () => {
            const response = await fetch(`http://localhost:4000/api/productos?search=${searchTerm}`);
            const data = await response.json();
            onSearch(data);
        }, 300);

        return () => clearTimeout(timer);
    }, [searchTerm, onSearch]);

    return(
        <div id="search-container">
            <div id="search-bar">
                <i className="fa-solid fa-magnifying-glass"></i>
                <input type="text" id="search-input" placeholder="Buscar productos..." value={searchTerm} onInput={(e) => {setSearchTerm(e.target.value)}} />
            </div>
        </div>
    );
}