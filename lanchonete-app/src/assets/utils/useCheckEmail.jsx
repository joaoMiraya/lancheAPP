
export const useCheckEmail = () => {
    async function checkEmail(email) {
        const response = await axios.get(`http://localhost:3550/clientes/check-email?email=${email}`);
        return response.data;
    }

    function useCheckEmail(email) {
        return useQuery(['checkEmail', email], () => checkEmail(email));
    }
}