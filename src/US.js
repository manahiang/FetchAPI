import axios from "axios"
import { useEffect, useState } from "react"
import Images from "./Components/images"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function Unsplash() {
    const [images, setGallery] = useState([])

    const FetchAPI = async () => {
        const response = await axios.get('https://api.unsplash.com/photos/?client_id=rs6C-D5MzpC0-CkNlRaCmHP2A17XfwvpuHgidq_ZPPY');
        //console.log(response.data)
        const data = await response.data;
        console.log(data);
        setGallery(data);

    }
    useEffect(() => {
        FetchAPI();
    }, [])
    return (
        <div>

            <h1 style={{ textAlign: 'center', fontSize: '90px', color: 'red', fontFamily: 'monospace' }}>
                Fetch API
            </h1>
            <hr style={{ color: 'black' }} />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div style={{
                    columnCount: 3, display: 'inline-block',
                    justifyContent: 'center', alignItems: 'center', alignContent: 'center'
                }}>
                    {images.length > 0 && (
                        <Images images={images} />
                    )}

                </div>
            </div>
        </div>

    )

}
export default Unsplash;