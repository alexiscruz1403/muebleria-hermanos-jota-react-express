import { Link } from "react-router-dom"

export const NavLink = ({ to, label, onlyOnMobile = false }) => {
    const mobileClass = onlyOnMobile ? "md:hidden" : "";
    return (
        <Link to={to} className={`text-[#F5E6D3] md:text-[#a0522c] text-base font-semibold px-3 py-2 rounded-md md:hover:bg-[#e0cfc1] md:hover:text-[#7a3e1b] transition-colors duration-300 ${mobileClass}`}>
            {label}
        </Link>
    )
}