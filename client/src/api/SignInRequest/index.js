import axios from "axios";

const SaveTokenToSession = (token) => window.sessionStorage.setItem('token', token)

const SignInRequest = async (url, user, Setfn ) => {
    try {  
        const res = await axios({
          url: url,
          method: 'post',
          data: user
      });
        if(res.status===200 && res.data.length>=1){
          await Setfn(true);
          const token = res.data;
          SaveTokenToSession(token);
        } else {console.error()};
    } 
    catch {console.error()}
  }

export default SignInRequest;
