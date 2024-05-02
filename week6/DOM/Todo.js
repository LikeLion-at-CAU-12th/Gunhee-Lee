import Div from "./Div.js";
import Button from "./Button.js";

class Todo{
    constructor(todo) {
        this.row = new Div('', 'row').node;
        this.textBox = new Div(todo, 'text-box');
        this.completeBtn = new Button('fas fa-check', 'complete-btn'); // Complete button with check icon
        this.delBtn = new Button('fas fa-trash', 'del-btn'); // Delete button with trash icon
        this.row.appendChild(this.textBox.node);
        this.row.appendChild(this.completeBtn.node);
        this.row.appendChild(this.delBtn.node);
    }
    addRow() {
        [this.textBox, this.completeBtn, this.delBtn].forEach((dom) => {
            this.row.appendChild(dom.node);
        })
        return this.row;
    }
    getRow() {
        return this.row;
    }
    getCompleteBtn() {
        return this.completeBtn.node;
    }
    getDelBtn() {
        return this.delBtn.node;
    }
    getInnerText() {
        return this.textBox.node;
    }
}

export default Todo