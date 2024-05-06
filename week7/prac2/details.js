// 동일한 객체를 불러오고, 버튼의 순서값만 전달받아 출력하는 방법

// 상세보기 페이지가 열리면 자동으로 함수를 실행한다.
document.addEventListener('DOMContentLoaded', function() {
    getDetails();
});

// URL 의 특정 파라미터, order 값만 파싱한다.
const urlParams = new URL(location.href).searchParams;
const order = parseInt(urlParams.get('order'));

console.log(order)

const baseURL = "https:/apis.data.go.kr/B551011/PhotoGalleryService1"
const container = document.getElementById('container')
const option = {
    serviceKey:
        "zmLWCF9EeN9sTvzqypjn4CEIUZltIDttIRT2%2FyEr%2FjsttMFeDEMmssUmbSYPz4nTvdpKLbOG%2FGxn6ipIOp2TPQ%3D%3D",
    numofRows: 5,
    MobileApp: "test",
    MobileOS: "ETC",
    arrange: "A",
    _type: "json",
    pageNo : 1,
};

async function getDetails() {
    const url = `${baseURL}/galleryList1?numOfRows=${option.numofRows}&MobileApp=${option.MobileApp}&MobileOS=${option.MobileOS}&arrange=${option.arrange}&_type=${option._type}&pageNo=${option.pageNo}&serviceKey=${option.serviceKey}`

    const fetchData = await fetch(url);
    console.log(fetchData);

    const toJSON = await fetchData.json();
    console.log(toJSON);
    
    const datas = await toJSON.response.body.items.item;
    console.log(datas);

    // 객체 내부 순회
    datas.map((data, i) => {
        console.log(i);
        if (i === order) {
            // YY/MM/DD
            dateTime = data.galCreatedtime;
            YY = dateTime.substring(2, 4).padStart(2, '0');
            MM = dateTime.substring(4, 6).padStart(2, '0');
            SS = dateTime.substring(6, 8).padStart(2, '0');

            const date = `${YY}/${MM}/${SS}`;

            const list = document.createElement('div');
            list.id = 'list';

            const image = document.createElement('img');
            image.src = data.galWebImageUrl;

            const info = document.createElement('span');
            info.innerText = `
            제목 : ${data.galTitle}
            장소 : ${data.galPhotographyLocation}

            날짜 : ${date}
            촬영자 : ${data.galPhotographer}
            키워드 : ${data.galSearchKeyword}
            `;

            list.appendChild(info);
            list.appendChild(image);
            container.appendChild(list);
        }
    })
}