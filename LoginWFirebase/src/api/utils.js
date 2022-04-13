import { Platform } from "react-native";
import { storage } from "../../App";
export const getFormattedDate = date=>  date.getDate()  + "-" + (date.getMonth()+1) + "-" + date.getFullYear()


export const uploadImage = async ({name, image }) =>{
    try {
    let ref = storage.child('/pets/'+name);
    let imgRef = await ref.putString(image,'base64');
    let url = await ref.getDownloadURL();
    return url;
    }
    catch(error){
      console.log(error);
      return null
    }
  }

  export function getAge(birthDate) 
  {
      var today = new Date();
      var age = today.getFullYear() - birthDate.getFullYear();
      var m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) 
      {
          age--;
      }
      return age;
  }

