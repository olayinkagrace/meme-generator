import React from "react";

function MemeBody(params) {

  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImg:"https://i.imgflip.com/1g8my4.jpg"
  })

  const [allMeme, setAllMeme] =React.useState([])

    React.useEffect(function () {
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setAllMeme(data.data.memes))
    }, [])
   
  function generateMemeImg(params) {
    const memeArray = allMeme
    const randomNumbers = Math.floor (Math.random() * memeArray.length)
//    setMemeImg(memeArray[randomNumbers].url) 
const url = memeArray[randomNumbers].url
setMeme(prevState =>({
    ...prevState,
     randomImg: url
}) )
   
  }
  function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => ({
          ...prevMeme, [name]: value
      }))
      }
    return(
        <section className="pt-5 container">
          <input
          type="text"
          placeholder="top-text"
          onChange={handleChange}
          className="py-1  mb-2 form-control"
          name= "topText"
          value={meme.topText}
          /> 
           <input
          type="text"
          placeholder="bottom-text"
          onChange={handleChange}
          className="py-1 float-end form-control"
          name= "bottomText"
          value={meme.bottomText}
          />
          <br></br>
          <button onClick={generateMemeImg} className="body-btn w-100 mt-3 mb-4 py-2">Get a new meme image</button>
          <div className="div-container">
            <img className="img img-fluid h-auto position-relative" src={meme.randomImg} alt="memepics" />
            <h1 className="meme-top-text w-75">{meme.topText}</h1>
            <h1 className="meme-bottom-text">{meme.bottomText}</h1>
            
          </div>
        </section>
    )
}
export default MemeBody