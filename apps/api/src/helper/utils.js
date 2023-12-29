module.exports = {
    errorResponse: (rc, success, message, error) => {
        return {
            rc, success, message, error
        }
    },
};