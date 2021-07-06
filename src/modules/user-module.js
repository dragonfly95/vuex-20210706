
const actions = {
    async fetchUser({commit}) {
        const response = await axios.get('http://localhost/users')
        commit('setUsers', response.data);
    },
    
}