import "./Header.css";

export const Header = ({ title, info = "" }) => {
    return (
        <header className="c-head">
            <h2 className="c-title">{title}</h2>
            {info && <p className="c-sub">{info}</p>}
        </header>
    );
}