// 공통 주소 선언 
const baseURL = "https:/apis.data.go.kr/B551011/PhotoGalleryService1"
const container = document.getElementById('container')
const option = {
    // 인코딩 키
    serviceKey:
        "zmLWCF9EeN9sTvzqypjn4CEIUZltIDttIRT2%2FyEr%2FjsttMFeDEMmssUmbSYPz4nTvdpKLbOG%2FGxn6ipIOp2TPQ%3D%3D",
    numofRows: 5,
    MobileApp: "test",
    MobileOS: "ETC",
    arrange: "A",
    _type: "json",
    pageNo : 1,
};

let count = -1;

// async 는 함수 앞에 붙여줍니다.
async function getData() {
    // 호출할 url
    // 파라미터를 시작하려면 ? 를 붙이고 원하는 인자를 복사해서 붙여넣는다.
    // const 로 미리 선언해서 변수로 사용해도 된다.
    // 쿼리 파라미터를 여러개 전송하고 싶다면 & 를 사용한다.
    const url = `${baseURL}/galleryList1?numOfRows=${option.numofRows}&MobileApp=${option.MobileApp}&MobileOS=${option.MobileOS}&arrange=${option.arrange}&_type=${option._type}&pageNo=${option.pageNo}&serviceKey=${option.serviceKey}`

    count++;
    // Promise 객체를 받아옵니다.
    const fetchData = await fetch(url);
    console.log(fetchData);

    // Promise to JSON
    const toJSON = await fetchData.json();
    console.log(toJSON);

    // 원하는 데이터를 받아오기 위해 key 값을 받아와야 함.
    const datas = await toJSON.response.body.items.item;
    console.log(datas);

    // 내부 순회 후 DOM 조작, i = 반복되는 횟수로 변함
    datas.map((data, i) => {
        // DOM 만들기
        const list = document.createElement('div');
        // DOM 에 id 값 주기
        list.id = 'list';
        
        // 이미지 추가하기
        const image = document.createElement('img');
        // 이미지 URL 연결
        image.src = data.galWebImageUrl;

        const info = document.createElement('span');
        info.innerText = `
        🫱 ${i + 1 + 5*count}번째 사진 
        제목 : ${data.galTitle}
        장소 : ${data.galPhotographyLocation}
        `;

        // 버튼
        const button = document.createElement('button');
        button.innerText = "더보기";
        button.addEventListener('click', () => callDetails(i));

        list.appendChild(image);
        list.appendChild(info);
        list.appendChild(button);

        container.appendChild(list);
    })
}

// '더보기' 버튼에 함수를 추가한다.
async function callDetails(order) {
    // window.location.href는 현재 열려 있는 페이지 주소를 담고 있는 속성
    // 쿼리 파라미터로 순서 값을 전달한다.
    window.location.href = `details.html?order=${order}`
}