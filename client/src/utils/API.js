import axios from "axios";

export default {
    getUser: function(username) {
        return axios.get("api/users/"+ username)
    },

    getUserById: function(id) {
        return axios.get("api/users"+ id)
    },

    saveUser: function(userData) {
        return axios.post("/api/users", userData)
    },

    updateUser: function(id) {
        return axios.put("/api/users/"+id)
    },

    getTrails: function() {
        return axios.get("/api/trails");   
    },

    getTrail: function(id) {
        return axios.get("/api/trails/" + id);
    },

    saveTrail: function(userData) {
        return axios.post("/api/trails", userData)
    },

    updateTrail: function(id) {
        return axios.put("/api/trails/"+id)
    },

}