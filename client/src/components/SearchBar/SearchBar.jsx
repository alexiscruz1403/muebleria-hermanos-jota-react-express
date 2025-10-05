import { useState, useEffect } from "react";
import "./SearchBar.css";

export const SearchBar = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        const timer = setTimeout(() => onSearch(searchTerm), 300);
        return () => clearTimeout(timer);
    }, [searchTerm]);

    return(
        <div id="search-container">
            <div id="search-bar">
                <i className="fa-solid fa-magnifying-glass"></i>
                <input 
                    type="text" 
                    id="search-input" 
                    placeholder="Buscar productos..." 
                    value={searchTerm} 
                    onInput={(e) => {setSearchTerm(e.target.value)}} 
                />
            </div>
        </div>
    );
}