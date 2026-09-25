import axios from 'axios';

const deleteAsset = async (id) =>{
    try{
        const res = await axios.delete(`http://localhost:8081/api/assets/delete-asset/${id}`);
        console.log(res)
        return res.data
    }catch(e){
        return e.response;
    }
}

// await deleteAsset(21);

const searchAsset = async (assetName)=>{
     try{
        const res = await axios.get(`http://localhost:8081/api/assets/get-assets/${assetName}`);
        console.log(res)
        return res.data
    }catch(e){
        return e.response;
    }
}

await searchAsset("Equity");