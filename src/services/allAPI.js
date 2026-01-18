import commonAPI from "./commonAPI"
import SERVERURL from "./serverURL"

export const registerAPI = async (reqBody) => {
    return await commonAPI("POST", `${SERVERURL}/register`, reqBody)
}

export const loginAPI = async (reqBody) => {
    return await commonAPI("POST", `${SERVERURL}/login`, reqBody)
}

export const depositAPI = async (reqBody) => {
    return await commonAPI("POST", `${SERVERURL}/deposit`, reqBody)
}

export const withdrawAPI = async (reqBody) => {
    return await commonAPI("POST", `${SERVERURL}/withdraw`, reqBody)
}

export const depositHistoryAPI = async (reqBody) => {
    return await commonAPI("POST", `${SERVERURL}/deposit-history`, reqBody)
}

export const withdrawHistoryAPI = async (reqBody) => {
    return await commonAPI("POST", `${SERVERURL}/withdraw-history`, reqBody)
}

export const transferAPI = async (reqBody) => {
    return await commonAPI("POST", `${SERVERURL}/transfer`, reqBody);
}

export const transferHistoryAPI = async (reqBody) => {
    return await commonAPI("POST", `${SERVERURL}/transfer-history`, reqBody);
}

export const getUserAPI = async (reqBody) => {
    return await commonAPI("POST", `${SERVERURL}/get-user`, reqBody);
};

export const getUserTransactionsAPI = (userId) => {
    return commonAPI("GET", `${SERVERURL}/transactions/user/${userId}`);
};

export const applyLoanAPI = (reqBody) => commonAPI("POST", `${SERVERURL}/loan/apply`, reqBody); 

export const getUserLoansAPI = (userId) => commonAPI("GET", `${SERVERURL}/loan/user/${userId}`); 

export const getAllLoansAPI = () => commonAPI("GET", `${SERVERURL}/loan/all`); 

export const updateLoanStatusAPI = (loanId, status) => commonAPI("PATCH", `${SERVERURL}/loan/update/${loanId}`, { status });







