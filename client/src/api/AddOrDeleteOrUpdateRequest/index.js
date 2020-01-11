import axios from "axios";

const AddOrDeleteOrUpdateRequest = async (url, data, method, message) => {
    try {
        const token = window.sessionStorage.getItem('token');
        const res = await axios({
            url: url,
            method: method,
            data: data,
            headers: {
                'Content-Type': 'application/json',
                'authorization': token
            }
        });
        if(res.status===200){
            alert(message)
        } else {alert('Wrong Input')};
    } 
    catch {alert('wrong Input')}
}
    

export default AddOrDeleteOrUpdateRequest;
