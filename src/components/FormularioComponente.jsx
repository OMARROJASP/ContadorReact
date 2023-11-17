import {useState} from "react";

export const FormularioComponente = () => {
    const [formState, setFormState] = useState({
        userName:'Omar Rojas Poma',
        email: 'omarrojasp@gmail.com',
        password: '123123'
    })

    const {userName, email, password} = formState

    const onInputChange= ({target})=>{
       const {name, value} = target
        setFormState({
            ...formState,
            [name]: value
        })
    }

    const onSubmit = (event) => {
        event.preventDefault()
        console.log(formState)
    }
    return(
        <>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="userName">User Name</label>
                    <input
                            type="text"
                            className="form-control"
                            name="userName"
                            placeholder="Enter your UserName"
                            value={userName}
                            onChange={onInputChange}
                    />

                </div>
                <div className="form-group">
                    <label  htmlFor="email" >Email Address</label>
                    <input
                        type="email"
                        className="form-control"
                        name="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={onInputChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password" >Password</label>
                    <input
                        type="password"
                        className="form-control"
                        name="password"
                        placeholder="Password"
                        value={password}
                        onChange={onInputChange}
                    />
                </div>
                <button
                    type="submit"
                    className="btn btn-primary">Submit</button>
            </form>
        </>
    )
}