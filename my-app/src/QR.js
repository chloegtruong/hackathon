import qrcode from "./QRcode.png";

const QR = () => {

    return(
        <div>
            <h3>scan this QR code to login</h3>
            <img src = {qrcode} alt = "QR code"></img>
        </div>
        
    );
};

export default QR;