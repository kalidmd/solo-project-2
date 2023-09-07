import meme from '../images/troll-face.png';

const Header = ()=>{
    return(
        <div className="header-cont">
            <div className="header">
                <div className="header--logo-cont">
                    <img className="header--logo-cont--logo" src={meme} alt="Meme" />
                    <span className="header--logo-cont--txt">Meme Generator</span>
                </div>
                <div className="header--react-course">
                    React Course - Project 3
                </div>
            </div>
        </div>
    )
}

export default Header;