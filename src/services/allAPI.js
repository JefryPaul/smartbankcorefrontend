import commonAPI from "./commonAPI"
import SERVERURL from "./serverURL"

export const registerAPI = async (reqBody) => {
    return await commonAPI("POST", `${SERVERURL}/transactions/register`, reqBody)
}

export const loginAPI = async (reqBody) => {
    return await commonAPI("POST", `${SERVERURL}/transactions/login`, reqBody)
}

export const depositAPI = async (reqBody) => {
    return await commonAPI("POST", `${SERVERURL}/transactions/deposit`, reqBody)
}

export const withdrawAPI = async (reqBody) => {
    return await commonAPI("POST", `${SERVERURL}/transactions/withdraw`, reqBody)
}

export const depositHistoryAPI = async (reqBody) => {
    return await commonAPI("POST", `${SERVERURL}/transactions/deposit-history`, reqBody)
}

export const withdrawHistoryAPI = async (reqBody) => {
    return await commonAPI("POST", `${SERVERURL}/transactions/withdraw-history`, reqBody)
}

export const transferAPI = async (reqBody) => {
    return await commonAPI("POST", `${SERVERURL}/transactions/transfer`, reqBody);
}

export const transferHistoryAPI = async (reqBody) => {
    return await commonAPI("POST", `${SERVERURL}/transactions/transfer-history`, reqBody);
}

export const getUserAPI = async (reqBody) => {
    return await commonAPI("POST", `${SERVERURL}/transactions/get-user`, reqBody);
};

export const getUserTransactionsAPI = (userId) => {
    return commonAPI("GET", `${SERVERURL}/transactions/user/${userId}`);
};

export const applyLoanAPI = (reqBody) => commonAPI("POST", `${SERVERURL}/transactions/loan/apply`, reqBody); 

export const getUserLoansAPI = (userId) => commonAPI("GET", `${SERVERURL}/transactions/loan/user/${userId}`); 

export const getAllLoansAPI = () => commonAPI("GET", `${SERVERURL}/transactions/loan/all`); 

export const updateLoanStatusAPI = (loanId, status) => commonAPI("PATCH", `${SERVERURL}/transactions/loan/update/${loanId}`, { status });







