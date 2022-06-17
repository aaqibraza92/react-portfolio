
const Auth = {
    getAuth: () => {
        const auth = localStorage.getItem('snapsend-auth');
        if (!auth) {
            return null;
        }
        return JSON.parse(auth);
    },
    setAuth: (auth) => {
        localStorage.setItem('snapsend-auth', JSON.stringify(auth));
    },
    removeAuth: () => {
        localStorage.removeItem('snapsend-auth');
    },

    isUserLogedin : () => {
        let result = false;
        const authdata = localStorage.getItem('snapsend-auth');
        if(!authdata) return null;
        result = true;
        return result;
    },
}
// console.log(AuthHelp)
export default { ...Auth };