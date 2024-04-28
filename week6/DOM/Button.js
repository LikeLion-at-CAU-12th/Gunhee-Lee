import DOM from "./DOM.js";

class Button extends DOM {
    constructor(iconClass, className) {
        super('button', '', className);
        // 버튼을 아이콘으로 대체합니다.
        const icon = document.createElement('i');
        icon.className = iconClass; 
        this.node.appendChild(icon);
    }
}

export default Button;
