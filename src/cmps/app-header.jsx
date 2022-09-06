import { connect, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";

export function AppHeader(props) {
    const loggedInUser = useSelector(state => state.userModule.loggedInUser)
    const navigate = useNavigate()

    const onBack = () => {
        // history.goBack()
        navigate(-1)
    }
    return (
        <header className='app-header'>
            <section className='container'>
                <h1 className="logo">Robotss</h1>
                <section className="user">
                    <p>Name: {loggedInUser.name}</p>
                    <p>Balance: {loggedInUser.balance}</p>
                </section>
                <section className="back">
                    <button onClick={onBack}>Back</button>
                </section>
                <nav>
                    <NavLink to='/' >Home</NavLink>
                    <NavLink to='/about'>About</NavLink>
                </nav>
            </section>
        </header>
    )
}


// const mapStateToProps = state => {
//     return {
//         loggedInUser: state.userModule.loggedInUser
//     }
// }

// export const AppHeader = connect(mapStateToProps)(_AppHeader)