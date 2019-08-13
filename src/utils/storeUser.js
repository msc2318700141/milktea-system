export default{
    setUser(user){
        localStorage.setItem('user',JSON.stringify(user))
    },
    getUser(){
        localStorage.getItem('user')
    }
}
