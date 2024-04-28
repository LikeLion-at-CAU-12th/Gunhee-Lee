import DOM from "./DOM.js";

// Div 는 부모 요소로부터 상속 받는다.
class Div extends DOM{
    constructor(innerText, className) {
        super('div', innerText, className);
    }
}

export default Div