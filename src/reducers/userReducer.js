function UserReducer(state = {users: []}, action) {
    let users;
    debugger;
    switch (action.type) {
        case "ADD":
            return {...state,
                users: [...state.users, action.payload]
            }
        case "UPDATE":
            users = [...state.users].map(user=>{
                if(user.id === action.payload.id) 
                    return action.payload 
                return user
            })
            return {...state,
                users: [...users]
            }
        case "DELETE":
            users = [...state.users].filter(user=>{
                if(user.id!==action.payload.id)
                    return user;
                else return null;
            })
            return {...state,
                users: [...users]
            }
        default:
            return state;
            
    }
}

export default UserReducer;