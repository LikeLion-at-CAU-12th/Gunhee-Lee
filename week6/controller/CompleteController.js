import Complete from "../DOM/Complete.js";

// CompleteController 클래스는 완료된 항목을 관리합니다.
class CompleteController {
    constructor() {
        this.completeList = document.getElementById("complete-list");
    }

    addComplete(todoText) {
        const newComplete = new Complete(todoText);
        this.completeList.appendChild(newComplete.getRow());
    }
}

export default CompleteController;
