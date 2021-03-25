import {useState} from 'react';
import Axios from 'axios';
import AuthorForm from '../components/AuthorForm';
import { navigate} from '@reach/router';

const Create = props => {
    const [author,setAuthor] = useState({
        name: "",
    })

    const [errors,setErrors] = useState({
        name: "",
    })

    const handleChange = e => {
        setAuthor({
            ...author,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();

        Axios.post("http://localhost:8000/api/authors",author)
            .then(res => navigate('/'))
            .catch(err => {
                console.log(err.response.data.errors);
                setErrors(err.response.data.errors);
            })
    }

    return(
            <AuthorForm
                formatForm="bg-primary"
                inputs={author}
                title="Add a new Author:"
                handleInputChange={handleChange}
                handleSubmit={handleSubmit}
                errors={errors}
            />
    )
}

export default Create;