import moment from "moment";
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

  export function getAge(birthDate,withUnit=true) {
      var today = new Date();

      let age = 0;
      let unit = '';
  
      if(moment(today).diff(birthDate,'years') > 0 ){
        age =  moment(today).diff(birthDate,'years');
        unit  = 'years';
      }
      
      else if(moment(today).diff(birthDate,'months') > 0 ){
        age =  moment(today).diff(birthDate,'months');
        unit  = 'months';
      }

      else {
        age =  moment(today).diff(birthDate,'days');
        unit  = 'days';
      }

      if(withUnit)
      return age + ' '+unit;

      return moment(today).diff(birthDate,'days') ;
  }

