import axios from "axios";

const AddOrDeleteRequest = async (url, data, method, message) => {
    try {  
        const res = await axios({
            url: url,
            method: method,
            data: data
        });
        if(res.status===200 && res.data.length>=1){
            alert(message)
        } else {console.error(); alert('Wrong Input')};
    } 
    catch {console.error(); alert('wrong Input')}
}
    

export default AddOrDeleteRequest;
