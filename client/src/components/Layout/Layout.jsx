import NavBar from '../Navbar/NavBar' ;
import Footer from "../Footer/Footer";

export const Layout = ({ children, cartCount }) => {
    return(
        <div className="layout">
            <NavBar cartCount={cartCount} />
            <main>{children}</main>
            <Footer />
        </div>
    )
}