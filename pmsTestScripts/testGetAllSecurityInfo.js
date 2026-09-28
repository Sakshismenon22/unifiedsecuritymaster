import axios from 'axios'
const getSecuritiesInfo = async ()=>{
    try{
        const res = await axios.get(`http://localhost:8082/api/security/get-all-security-info`,"");
        console.log(res.data);
        return res.data;
    }catch(e){
        return e.response;
    }
}

const res = await getSecuritiesInfo();

for(let security of res.data.securities){
    console.log(security);
}

