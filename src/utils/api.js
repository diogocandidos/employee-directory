import axios from 'axios';

const usersURL = 'https://randomuser.me/api/?results=200&nat=us';


export default {
    getUsers: function() {
    axios.get(usersURL)
    .then(resp => {
    console.log(resp.data); 
})
}};


