import Todo from "../DOM/Todo.js";
import CompleteController from "../controller/CompleteController.js";

class TodoController {
    constructor(todo) {
        // Todo 객체에는 내부 텍스트, 완료버튼, 삭제버튼이 포함됩니다.
        this.newTodo = new Todo(todo);  
        this.delBtnNode = this.newTodo.getDelBtn(); 
        this.comBtnNode = this.newTodo.getCompleteBtn();  
        this.innerNode = this.newTodo.getInnerText();  

         // 완료된 항목을 관리하는 컨트롤러를 생성합니다.
        this.completeController = new CompleteController(); 

        // 조건에 따라 완료 목록으로 이동하도록 삭제 버튼을 수정합니다.
        this.delBtnNode.addEventListener('click', () => {
            if (this.comBtnNode.firstChild.className === "fas fa-times") {
                this.moveToComplete();  // 완료 목록으로 이동합니다.
            } 
            this.delTodo();  // 항목 삭제
        });

        this.comBtnNode.addEventListener('click', () => {
            this.doneTodo(); 
        });
    }

    // Todo -> Complete
    moveToComplete() {
        const todoText = this.innerNode.innerText;  // 할 일 텍스트 가져오기
        this.completeController.addComplete(todoText);  // 완료 목록에 추가
    }

    // 추가
    addTodo() {
        const todoList = document.getElementById("to-do-list");  
        const input = document.querySelector("input");  
        todoList.appendChild(this.newTodo.addRow()); 
        input.value = '';  // 입력 필드 초기화
    }

    // 삭제
    delTodo() {
        const todoList = document.getElementById("to-do-list");  
        todoList.removeChild(this.newTodo.getRow());  
    }

    // 토글
    doneTodo() {
        this.innerNode.classList.toggle('done-text');  // 텍스트 스타일 토글
        this.comBtnNode.firstChild.className = this.comBtnNode.firstChild.className === 'fas fa-check' ? 'fas fa-times' : 'fas fa-check';  // 아이콘 토글
        if (this.comBtnNode.firstChild.className === "fas fa-check") {
            this.innerNode.classList.remove('done-text');  // 완료 스타일 제거
        } else {
            this.innerNode.classList.add('done-text');  // 완료 스타일 추가
        }
    }
}

export default TodoController;
