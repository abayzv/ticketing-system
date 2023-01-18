export const state = () => {
    return {
        email: 'flou@admin.com',
        password: 'pass789',
        isLogin: JSON.parse(localStorage.getItem('isLogin')),
        avatar: 'https://i.pravatar.cc/150?img=37'
    }
}

export const mutations = {
    setEmail(state, email) {
        state.email = email
    },
    setPassword(state, password) {
        state.password = password
    },
    setLogin(state, isLogin) {
        state.isLogin = isLogin
        localStorage.setItem('isLogin', isLogin)
    }
}