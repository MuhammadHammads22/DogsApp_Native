import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    post:
    {
        seeker: "",
        errorSeeker:"",
        isErrorSeeker:false,
        phoneNumber: "",
        errorPhoneNumber:"",
        isErrorPhoneNumber:"",
        address: "",
        isErrorAddress:false,
        errorAddress:"",
        bankName: "",
        errorBankName:"",
        isErrorBankName:false,
        accountTitle: "",
        errorAccountTitle:"",
        isErrorAccountTitle:false,
        accountNumber: "",
        errorAccountNumber:"",
        isErrorAccountNumber:false,
        amountNeeded: 0,
        errorAmountNeeded:"",
        isErrorAmountNeeded:false,
        description: "",
        errorDescription:"",
        isErrorDescription:false,
        typeOfDonation: "",
        errorTypeOfDonation:"",
        isErrorTypeOfDonation:false,
        creator: "",
        errorCreator:"",
        isErrorCreator:""
    }
}
const createPostSlice = createSlice({
    name: 'createPost',
    initialState,
    reducers: {
        setSeeker(state, action) {
            state.post.seeker = action.payload
        },
        setErrorSeeker(state, action) {
            state.post.errorSeeker = action.payload
        },
        setIsErrorSeeker(state, action) {
            state.post.isErrorSeeker = action.payload
        },
        setPhoneNumber(state, action) {
            state.post.phoneNumber = action.payload
        },
        setErrorPhoneNumber(state, action) {
            state.post.errorPhoneNumber = action.payload
        },
        setIsErrorPhoneNumber(state, action) {
            state.post.isErrorPhoneNumber = action.payload
        },
        setAddress(state, action) {
            state.post.address = action.payload
        },
        setErrorAddress(state, action) {
            state.post.errorAddress = action.payload
        },
        setIsErrorAddress(state, action) {
            state.post.isErrorAddress = action.payload
        },
        setBankName(state, action) {
            state.post.bankName = action.payload;
        },
        setErrorBankName(state, action) {
            state.post.errorBankName = action.payload;
        },
        setIsErrorBankName(state, action) {
            state.post.errorBankName = action.payload;
        },
        setAccountTitle(state, action) {
            state.post.accountTitle = action.payload;
        },
        setErrorAccountTitle(state, action) {
            state.post.errorAccountTitle = action.payload;
        },
        setIsErrorAccountTitle(state, action) {
            state.post.isErrorAccountTitle = action.payload;
        },
        setAccountNumber(state, action) {
            state.post.accountNumber = action.payload;
        },
        setErrorAccountNumber(state, action) {
            state.post.errorAccountNumber = action.payload;
        },
        setIsErrorAccountNumber(state, action) {
            state.post.isErrorAccountNumber = action.payload;
        },
        setAmountNeeded(state, action) {
            state.post.amountNeeded = action.payload;
        },
        setErrorAmountNeeded(state, action) {
            state.post.errorAmountNeeded = action.payload;
        }, 
        setIsErrorAmountNeeded(state, action) {
            state.post.isErrorAmountNeeded = action.payload;
        },       
        setDescription(state, action) {
            state.post.description = action.payload;
        },
        setErrorDescription(state, action) {
            state.post.errorDescription = action.payload;
        },
        setIsErrorDescription(state, action) {
            state.post.isErrorDescription = action.payload;
        },
        setTypeOfDonation(state, action) {
            state.post.typeOfDonation = action.payload;
        },
        setErrorTypeOfDonation(state, action) {
            state.post.errorTypeOfDonation = action.payload;
        },
        setIsErrorTypeOfDonation(state, action) {
            state.post.isErrorTypeOfDonation = action.payload;
        },
        setCreator(state, action) {
            state.post.creator = action.payload;
        },
        setErrorCreator(state, action) {
            state.post.errorCreator = action.payload;
        },
        setIsErrorCreator(state, action) {
            state.post.isErrorCreator = action.payload;
        }
    }
});

export const {
    setSeeker,
    setErrorSeeker,
    setIsErrorSeeker,
    setPhoneNumber,
    setErrorPhoneNumber,
    setIsErrorPhoneNumber,
    setAddress,
    setErrorAddress,
    setIsErrorAddress,
    setBankName,
    setErrorBankName,
    setIsErrorBankName,
    setAccountTitle,
    setErrorAccountTitle,
    setIsErrorAccountTitle,
    setAccountNumber,
    setErrorAccountNumber,
    setIsErrorAccountNumber,
    setAmountNeeded,
    setErrorAmountNeeded,
    setIsErrorAmountNeeded,
    setDescription,
    setErrorDescription,
    setIsErrorDescription,
    setTypeOfDonation,
    setErrorTypeOfDonation,
    setIsErrorTypeOfDonation,
    setCreator,
    setErrorCreator,
    setIsErrorCreator
} = createPostSlice.actions;
export default createPostSlice.reducer;