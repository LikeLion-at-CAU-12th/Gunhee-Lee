import Div from "./Div.js";
import Button from "./Button.js";

// Complete class는 'complete-list'에 추가되는 row의 구성요소를 정의합니다.
class Complete {
    constructor(todoText) {
        this.row = new Div('', 'row').node;
        this.textBox = new Div(todoText, 'text-box');
        this.delBtn = new Button('fas fa-trash', 'del-btn'); 
        this.row.appendChild(this.textBox.node);
        this.row.appendChild(this.delBtn.node);

        // 삭제 버튼
        this.delBtn.node.addEventListener('click', () => {
            this.row.remove();
        });
    }
    getRow() {
        return this.row;
    }
}

export default Complete;
