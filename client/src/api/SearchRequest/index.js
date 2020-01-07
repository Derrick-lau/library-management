import axios from "axios";

const SearchRequest = async(url, data, stateSet) => {
      try { 
        const token = window.sessionStorage.getItem('token'); 
        const res = await axios({
          url: url,
          method: 'get',
          params: data,
          headers: {
            'Content-Type': 'application/json',
            'authorization': token
          }
        
      });
        res.status===200 && res.data.length>=1 ?
        await stateSet(res.data) : stateSet([{id:'Not found'}]);
      } 
      catch {console.error(); stateSet([{id:'Not found'}])}
    }

    

export default SearchRequest;
