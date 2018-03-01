export default function (state = {value:1},action) {
    switch (action.type) {
        case 'ADD' : return {value:state.value + 1};
        case 'MINUS' : return {value:state.value - 1};
        default : return state;
    }
}