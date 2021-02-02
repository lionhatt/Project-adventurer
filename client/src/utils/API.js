import axios from "axios";

export default {
    getUser: function(username) {
        return axios.get("api/users/username"+ username)
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

    addAdventureToUser: function(id, adventureId) {
        return axios.put(`/api/users/${id}`, adventureId)
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

    addAdventureToTrail: function(id, adventureId) {
        return axios.put(`/api/trails/${id}`, adventureId)
    },

    getAdventures: function() {
        return axios.get("/api/adventures");   
    },

    getAdventure: function(id) {
        return axios.get("/api/adventures/" + id);
    },

    saveAdventure: function(userData) {
        return axios.post("/api/adventures", userData)
    },

    updateAdventure: function(id) {
        return axios.put("/api/adventures/"+id)
    },



}