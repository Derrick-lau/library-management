import axios from "axios";

const SearchRequest = async(url, data, stateSet) => {
      try {  
        const res = await axios({
        url: url,
        method: 'get',
        params: data
      });
        res.status===200 && res.data.length>=1 ?
        await stateSet(res.data) : stateSet([{id:'Not found'}]);
      } 
      catch {console.error()}
    }

    

export default SearchRequest;
