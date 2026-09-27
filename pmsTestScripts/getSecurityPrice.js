import axios from 'axios'
const getSecurityPrice = async (id)=>{
    const res = await axios.get(`http://localhost:8081/api/security/get-security-price/${id}`,"");
    console.log(res);
    return res;
}

const res = await getSecurityPrice(2)

console.log(res.data);
