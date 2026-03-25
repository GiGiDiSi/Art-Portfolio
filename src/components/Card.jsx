import pfp from '../assets/teehee.png'
function Card(){
    return(
        <div className="card">
            <img className="pfp" src={pfp} alt="Me PFP" id="pfp"></img>
            <h1 className="textCenter">GiGiDiSi</h1>
            <p>Hobbyist Artist</p>
        </div>
    )
}
export default Card