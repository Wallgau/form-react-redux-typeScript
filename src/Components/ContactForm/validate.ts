export const validate = ({username, password} : any) => {
    const errors: any = {};
    if (!username) {
        errors.username = "Required";
    }
    if (!password) {
        errors.password = "Required";
    }
    return errors;
};
