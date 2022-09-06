import { NavLink, Outlet } from "react-router-dom"

export function About() {
    return (
        <section className="about">
            <section className="title-container">
                <h2>our toys</h2>
                <p>Our toys are made by hand, from only quality materials with an emphasis on the quality of the environment and the quality of the toy.</p>
            </section>

            <img src={require(`../assets/imgs/about.jpg`)} alt="toys" />
            {/* <nav>
                <NavLink replace to='/about/team'>Team</NavLink>
                <NavLink replace to='/about/vision'>Vision</NavLink>
            </nav> */}

        </section>
    )
}


