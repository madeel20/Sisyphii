import { storage } from "../../App";

export const getFormattedDate = date=>  date.getDate()  + "-" + (date.getMonth()+1) + "-" + date.getFullYear()


export const uploadImage = async ({name, image }) =>{
    try {
    let ref = storage.child('/pets/'+name);
    let imgRef = await ref.putString(image,'data_url');
    let url = await ref.getDownloadURL();
    return url;
    }
    catch(error){
      console.log(error);
      return null
    }
  }