import axios from 'axios';

export const loginUser = async (username, password, imei) => {

    const url = 'https://yantek.padipresence.id/api/authentication/login'

    try{
        const { data } = await axios.post(url, { username, password, imei });
        console.log(data)
    } catch (error){
        console.log(error);
    }
}