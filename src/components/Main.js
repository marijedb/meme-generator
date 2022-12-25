import {useState, useEffect} from "react"

function Main() {

    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        memeImage: "https://i.imgflip.com/1op9wy.jpg"
    }) 
        
    const [memeImages, setMemeImages] = useState({})


    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                [name]: value
            }
        })
    }

    useEffect(() => {
        fetch('https://api.imgflip.com/get_memes')
            .then(response => response.json())
            .then(memesData => setMemeImages(memesData.data.memes))
    },[])

    function getMemeImage(){
        const randomNumber = Math.floor(Math.random() * memeImages.length)
        const url = memeImages[randomNumber].url
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                memeImage: url
            }
        })
    }


    return(
        <div className="main">
            <div className="form">
                <input 
                    className="form--input"
                    type="text"
                    name="topText"
                    placeholder="Top text here" 
                    value={meme.topText}  
                    onChange={handleChange}
                />
                <input 
                    className="form--input"
                    type="text"
                    name="bottomText"
                    placeholder="Bottom text here" 
                    value={meme.bottomText}  
                    onChange={handleChange}
                />
                <button className="form--button" onClick={getMemeImage}>
                    Get a new Meme image
                </button>
            </div>
            <div className="main--image-container">
                <img className="main--image" src={meme.memeImage} alt="meme"/>
                <p className="meme-text top">{meme.topText}</p>
                <p className="meme-text bottom">{meme.bottomText}</p>
            </div>
        </div>
    )
}

export default Main