import axios from "axios";

const Search = (url, DataToServer, StateSet, name) =>{
    const SearchRequest = async(err) => {
      try {  
        const res = await axios({
        url: url,
        method: 'post',
        data: DataToServer
      });
        {
          res.status===200 && res.data.length>=1 && name !=='' ?
          StateSet(res.data) : StateSet([{id:'Not found'}]);
        }
      } catch {console.log(err)};
    }
    SearchRequest();
  }


export default Search;
