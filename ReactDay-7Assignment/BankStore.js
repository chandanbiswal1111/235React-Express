import { legacy_createStore as createStore } from 'redux';

// Step1:   Reducer Function
const bankReducer = (state, action) => 
{
    // Convert action type to upper case
    action.type = action.type.toUpperCase();    

    // alert(action.type);
    let  updatedState = {};

    switch (action.type) 
    {
        case "CREATE":
            updatedState.balance =  500;   
            break; 

        case "DEPOSIT":
            updatedState.balance =  state.balance + parseFloat(action.amount);
            break;
            
            case "WITHDRAW":
                if((state.balance < parseFloat(action.amount)) )  
                {
                    alert("Insufficient Balance");
                    updatedState.balance =  state.balance;
                }
                else if((state.balance - parseFloat(action.amount)) < 500){
                    alert("Your Account should maintain a minimum balance of $500.Cannot Withdraw.");
                    updatedState.balance =  state.balance;
                }
                else
                {
                    updatedState.balance =  state.balance - parseFloat(action.amount);
                }
                break;
        default:
           updatedState = state;
           break;
      }

      return updatedState;
};

// Step2:  Create Store
const bankStore = createStore(bankReducer,{balance: 500});
export default bankStore;