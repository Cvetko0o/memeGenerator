import pic from "../images/troll-face.jpg"

export default function Navbar(){
    return <div className="navbar">
        <img src={pic} className="image--logo" />
        <h1>Meme Generator</h1>
        <h3>Place for time</h3>
    </div>
}