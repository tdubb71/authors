import {Link} from '@reach/router';

const AuthorForm = props => {
    //deconstruct props
    const {inputs,handleInputChange,handleSubmit,title,errors, formatForm} = props;

    return (
        <>
        <div className="text-align-left col-4 mx-auto">
            <Link to='/'>Home</Link>
            <h5 className="mt-2">{title}</h5>
        </div>
        <form onSubmit={handleSubmit} className="col-4 mx-auto">
        
            
            <div className={`form-group card p-2 ${formatForm}`}>
                <label className="font-weight-bold" htmlFor="name">Name:</label>
                <input 
                    type="text"
                    name="name"
                    className="form-control"
                    onChange={handleInputChange}
                    value={inputs.name}
                />
                <span className="text-danger">
                    {errors.name ? errors.name.message : ""}
                </span>
            </div>
            <Link className="btn btn-warning mr-2" to="/">Cancel</Link>
            <input type="submit" value="Submit" className="btn btn-primary" />
        </form>
        </>
    )
}

export default AuthorForm;