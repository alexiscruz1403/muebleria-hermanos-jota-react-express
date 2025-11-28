import NavBar from '../Navbar/NavBar' ;
import Footer from "../Footer/Footer";

export const Layout = ({ children }) => {
    return(
        <div className="layout">
            <NavBar />
            <main>{children}</main>
            <Footer />
        </div>
    )
}