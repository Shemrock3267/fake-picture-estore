import React, { useContext} from "react"
import Image from '../components/Image.js';
import { CONTEXT } from '../components/storeContext.js';
import { getClass} from '../utils/index.js'

function Photos() {
    const { allPhotos } = useContext(CONTEXT);
    const GALLERY = allPhotos.map((photo,index) => {
        return (
            <Image key={photo.id} img={photo} className={getClass(index)}/>
        )
    })
   
    return (
        <main className="photos">
            {GALLERY}
        </main>
    )
}

export default Photos