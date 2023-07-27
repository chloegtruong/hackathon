import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h3>Welcome to IRM</h3>
      <h5>How would you like to log in today?</h5>
      <Link to="imageqs">login using images</Link><br></br>
      <Link to="qr">login using a qr code</Link><br></br>
      <Link to ="bluetooth">login using bluetooth</Link><br></br>
      <Link to ="customqs">login using custom questions</Link><br></br>
      <Link to = "facescan">login using facial recognition</Link>
      
    </div>
  );
}

export default Home;