import logo from "../images/logo.png"

function Navbar(){
    return(
        <div className="navbar">
            <img className="navbar--logo" src={logo} alt="test"/>
            <h3 className="navbar--title">Meme Generator</h3>
            <p className="navbar--p">Made by <a className="navbar--link" href="https://github.com/marijedb" target="blank">Marije</a></p>
        </div>
    )
}

export default Navbar;