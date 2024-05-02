class DOM{
    constructor(tagName, innerText, className) {
        this.node = document.createElement(tagName); // html tag
        this.node.innerText = innerText;
        if (className) this.node.classList.add(className); // 단순히 추가만 합니다. 
    }
}

export default DOM;