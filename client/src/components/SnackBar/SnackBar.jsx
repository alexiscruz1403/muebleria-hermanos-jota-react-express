import "./SnackBar.css";

export const SnackBar = ({ message, type }) => {
    return(
        <div className={`snackbar ${type}`}>
            {message}
        </div>
    );
}