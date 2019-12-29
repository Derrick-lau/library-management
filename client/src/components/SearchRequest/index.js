import axios from "axios";

const SearchRequest = (url, data, stateSet) =>{
    const searchRequest = async(err) => {
      try {  
        const res = await axios({
        url: url,
        method: 'post',
        data: data
      });
        {
          res.status===200 && res.data.length>=1 ?
          await stateSet(res.data) : stateSet([{id:'Not found'}]);
        }
      } catch {console.log(err)}
    }
    searchRequest();
  }


export default SearchRequest;
