import { Link } from "react-router-dom"
// import List from "./List"

function Homepage() {

    return (
        <Link to="/List"> 
            <div className="yesBox">
                
                <span className="yesBut">
                List to Foods
                </span>
                
            </div>
        </Link>
    )

}

export default Homepage