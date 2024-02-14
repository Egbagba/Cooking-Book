import {Link} from 'react-router-dom';

function Oops(){
    return <section className="OopsBox">
        <p>Oops...we did not find the page you were looking for.</p>
        <p>Try and cook something else that might tickle your fancy!</p>
        <Link to="/">BACK TO THE KITCHEN</Link>
    </section>
}
export default Oops