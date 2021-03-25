import {useState,useEffect} from 'react';
import Axios from 'axios';
import {Link} from '@reach/router';

const Main = props => {
    const [authors,setAuthors] = useState(false);

    useEffect(() => {
            Axios.get("http://localhost:8000/api/authors")
                .then(res => setAuthors(res.data.results))
                .catch(err =>console.log(err))
    },[])

    const handleDestroyAuthor = id => {
        Axios.delete(`http://localhost:8000/api/authors/${id}`)
            .then(res => setAuthors(res.data.results))
            .catch(err => console.log(err))
    }

    return(
        authors ?
            <div>
                <div className="text-align-left col-4 mx-auto">
                    <Link to='/new'>Add an Author</Link>
                    <p>We have quotes by:</p>
                </div>
                <table className="table table-striped col-4 mx-auto">
                    <thead className="thead-dark">
                        <tr class="d-flex">
                            <th className="col-9">Author</th>
                            <th className="col-3">Actions available</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            authors.map((j,i) => {
                                return <tr class="d-flex" key={i}>
                                            <td className="col-9">{j.name}</td>
                                            <td className="col-3">
                                                <Link 
                                                    to={`/edit/${j._id}`}
                                                    className="btn btn-warning btn-outline-info">Edit</Link>
                                                <button 
                                                    className="btn btn-danger btn-outline-dark" 
                                                    onClick={() => handleDestroyAuthor(j._id)}>Delete</button>
                                            </td>

                                        </tr>
                            })
                        }
                    </tbody>
                </table>
            </div> :
            <h2>Loading...</h2>
    )
}

export default Main;