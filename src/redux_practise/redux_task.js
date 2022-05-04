import React from 'react'
import { createStore} from 'redux';

function Redux() {
    function inc(){
        return{
            type:'increment'
        }
    }
    function dec(){
        return {
            type:'decrement'
        }
    }
    function reducer(state={num:0,msg:'hello'},action){
        switch (action.type) {
            case 'increment':
                state = {
                    ...state,
                    num:state.num + 1
                }
                break;
             case 'decrement':
                state = {
                    ...state,
                    num:state.num - 1
                }
                break;
        
            default:
                break;
        }
        return state
    }

    let store = createStore(reducer)
    store.subscribe(() => console.log(store.getState()))
    store.dispatch(inc());
    
    return (
        <div>
            hello
        </div>
    )
}

export default Redux
