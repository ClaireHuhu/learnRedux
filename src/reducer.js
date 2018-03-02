export default function (state = {value:1,state:''},action) {
    switch (action.type) {
        case 'ADD' : return {value:state.value + 1};
        case 'MINUS' : return {value:state.value - 1};
        case 'START' : return {state:'start'};
        case 'GETTED' : return {state: 'getted'};
        default : return state;
    }
}