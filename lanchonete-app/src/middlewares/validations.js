export const validateEmail = (email) => {
    const regex = new RegExp(
        "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$"
    );
    return regex.test(email);
};

export const validatePassword = (password) => {
    const regex = new RegExp(
        '^(?=.*[A-Z])(?=.*[!#@$%&])(?=.*[0-9])(?=.*[a-z]).{6,15}$'
    );
    return regex.test(password);
};