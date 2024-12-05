import imageNotFound from "data-base64:assets/imageNotFound.jpeg"

class Logic {

    public setImage(){
        const allImages = document.getElementsByTagName("img");
        for(const img of allImages){
            img.src = imageNotFound;
        }
    }

}

export const logic = new Logic();