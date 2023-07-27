import field from "./randomimage.png"

const ImageQs = () => {

    return(
        <div>
            <img src = {field} alt = "random field" width = "400" height = "400"></img>
            <h3>Where was this photo taken?</h3>
            <input type = "text"></input>
            <button>submit</button>
        </div>
        
    );
};

export default ImageQs;