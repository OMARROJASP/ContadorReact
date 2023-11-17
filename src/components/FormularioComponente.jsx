export const FormularioComponente = () => {

    return(
        <>
            <form>
                <div className="form-group">
                    <label htmlFor="userName">Email address</label>
                    <input
                            type="email"
                            className="form-control"
                            name="userName"
                            placeholder="Enter your UserName"
                    />

                </div>
                <div className="form-group">
                    <label  htmlFor="email" >Email Address</label>
                    <input
                        type="email"
                        className="form-control"
                        name="email"
                        placeholder="Enter email"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password" >Password</label>
                    <input
                        type="password"
                        className="form-control"
                        name="password"
                        placeholder="Password"
                    />
                </div>
                <button
                    type="submit"
                    className="btn btn-primary">Submit</button>
            </form>
        </>
    )
}