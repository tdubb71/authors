import notFound from '../assets/img/notFound.jpg';
import {Link} from '@reach/router'

const NotFound = props => {
    return (
        <div className="mt-4">
        <h4>We're sorry, but we could not find the author you are looking for. Would you like to add this author to our database?</h4>
        <h5>
            <Link to='/new'>Create an Author</Link>
        </h5>
        <img style={{width: "700px"}} src={notFound} alt="404" />
        </div>
    )
}

export default NotFound;