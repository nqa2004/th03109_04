//Thay đổi màu khi ấn vào button .mau vs .dl
const button1 = document.querySelectorAll('.dl-button');
const button2 = document.querySelectorAll('.mau-button');


button1.forEach((button) => {
  button.addEventListener('click', () => {
    button1.forEach((otherButton) => {
      otherButton.classList.remove('active-button');
    });
    button.classList.add('active-button');
  });
});

button2.forEach((button) => {
  button.addEventListener('click', () => {
    button2.forEach((otherButton) => {
      otherButton.classList.remove('active-button');
    });
    button.classList.add('active-button');
  });
});

const images = document.querySelectorAll('img.l-img');

images.forEach((img) => {
  img.addEventListener('click', () => {
    images.forEach((otherImg) => {
      otherImg.classList.remove('active-image');
    });
    img.classList.add('active-image');
  });
});

//Thay đổi ảnh = image và button
function changeImage(event) {
  const currentImg = document.querySelector('.inner-image img');
  currentImg.src = event.target.dataset.src;
}

function changeclo(button) {
  const currentImg = document.querySelector('.inner-image img');
  const img = button.previousElementSibling;
  currentImg.src = img.dataset.src;
}

//Thay đổi chọn màu vs dl
const button3 = document.querySelectorAll('.mau-button');
const hiddenSpan1 = document.querySelector('.chonmau');

button3.forEach(button => {
  button.addEventListener('click', () => {
    hiddenSpan1.textContent = `${button.dataset.color}`;
  });
});

const button4 = document.querySelectorAll('.dl-button');
const hiddenSpan2 = document.querySelector('.dongia');

button4.forEach(button => {
  button.addEventListener('click', () => {
    hiddenSpan2.textContent = `${button.dataset.text1}`;
  });
});

const button5 = document.querySelectorAll('.dl-button');
const hiddenSpan3 = document.querySelector('.chondl');

button4.forEach(button => {
  button.addEventListener('click', () => {
    hiddenSpan3.textContent = `${button.dataset.text2}`;
  });
});

//Thay đổi sl đặt hàng
let value = 1;
function tangValue() {
  value++;
  document.getElementById('counter').value = value;
}
function giamValue() {
  value--;
  document.getElementById('counter').value = value < 1 ? 1 : value;
}

//Ẩn hiện mô tả sản phẩm
function toggleDescription() {
  const description = document.getElementById("mota");
  const button = document.getElementById("hien-antt");

  description.classList.toggle("hidden");
  button.textContent = description.classList.contains("hidden") ? "Xem thêm" : "Thu gọn";
}

//Click để mua vs liên hệ
function mua(){
  location.assign("/content/thanhtoan.html");
}

function lienhe(){
  location.assign("/content/lienhe.html");
}
 
function xemtt(){
  location.assign("/content/tintuc.html");
}

function xemrv(){
  location.assign("/content/review.html");
}

//Click di chuyển sp liên quan
