import axios from "axios";

const Search = (url, DataRequested, StateSet, name) =>{
    const SearchRequest = async(err) => {
      try {  
        const res = await axios({
        url: url,
        method: 'post',
        data: DataRequested
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
