import axios from 'axios';

class ProfileService {
    base_url = "XXXXXX/"

    
    getProfileByXp = async (xpColaborador) => {
        const url = this.base_url + "profile/"+xpColaborador
        const res = await axios.get(url).catch(function (error) {
            if (error.response) {
                return error.response;
            }
          });
        return res;
        
    }

}
export {ProfileService} ;