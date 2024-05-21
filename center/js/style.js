window.addEventListener('scroll', function () {
    const header = document.querySelector('.section-one');
    const scrollPosition = window.scrollY;

    if (scrollPosition > 0) {
        header.classList.add('header-sticky');
    } else {
        header.classList.remove('header-sticky');
    }
});



document.addEventListener("DOMContentLoaded", function () {
    const loadMoreBtn = document.querySelector(".button");
    const products = document.querySelectorAll(".product");
    const tabs = document.querySelectorAll('.nav-link[data-toggle="tab"]');
    const soSanPhamDauTien = 10;
    let soSanPhamHienThi = soSanPhamDauTien;
    // const filterLinks = document.querySelectorAll(".filter-link");
    // const innerWraps = document.querySelectorAll(".inner-wrap");
    // filterLinks.forEach(link => {
    //     link.addEventListener('click', function(event){
    //         event.preventDefault();
    //         const filterValue = link.getAttribute("data-filter");
    //         innerWraps.forEach(innerWrap => {
    //             if(innerWrap.id === filterValue) {
    //                 innerWrap.style.display = 'flex';
    //             } else {
    //                 innerWrap.style.display = 'none';
    //             }
    //         });
    //     });
    // });

    function chuyenDoiSanPham() {
        products.forEach((product, index) => {
            if (index < soSanPhamHienThi) {
                product.style.display = 'block';
            } else {
                product.style.display = 'none';
            }
        });
    }
    chuyenDoiSanPham();

    function anNutXemToanBo() {
        loadMoreBtn.style.display = 'none';
    }

    // Ẩn nút khi trang web được tải lần đầu

    loadMoreBtn.addEventListener('click', function () {
        soSanPhamHienThi += soSanPhamDauTien;
        chuyenDoiSanPham();
        if (soSanPhamHienThi >= products.length) {
            loadMoreBtn.style.display = 'none';

        }
    });

    tabs.forEach(tab => {
        tab.addEventListener('click', function () {
            anNutXemToanBo();
        });
    });
});



let availableKeywords = [
    'iPhone',
    'iPad',
    'Apple watch',
    'Macbook',
    'iPhone 15'
];


const resultBox = document.getElementById("searchResults");
const inputBox = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");

let hasNewResults = false; // Biến để kiểm tra xem có kết quả tìm kiếm mới hay không

inputBox.onkeyup = function () {
    let result = [];
    let input = inputBox.value;
    if (input.length) {
        result = availableKeywords.filter((keyword) => {
            return keyword.toLowerCase().includes(input.toLowerCase());
        });
        console.log(result);
        hasNewResults = true; // Đặt hasNewResults thành true nếu có kết quả tìm kiếm mới
    } else {
        hasNewResults = false; // Đặt hasNewResults thành false nếu không có kết quả tìm kiếm mới
    }
    display(result);
}

// searchButton.addEventListener('click', function () {
//     const searchTerm = inputBox.value.trim().toLowerCase(); // Lấy từ khóa tìm kiếm và chuyển thành chữ thường
//     const searchResults = availableKeywords.filter(keyword => keyword.toLowerCase().includes(searchTerm)); // Lọc danh sách sản phẩm dựa trên từ khóa tìm kiếm

//     display(searchResults); // Hiển thị kết quả tìm kiếm
// });

searchButton.addEventListener('click', function () {
    const searchTerm = inputBox.value.trim().toLowerCase(); // Lấy giá trị từ ô input và chuẩn hóa
    const searchResults = availableKeywords.filter(keyword => keyword.toLowerCase().includes(searchTerm)); // Tìm kiếm trong danh sách từ khóa

    if (searchResults.length === 1 && searchResults[0] === searchTerm) {
        // Nếu chỉ có một kết quả và nó khớp chính xác với từ khóa tìm kiếm
        // Chuyển hướng đến trang tương ứng
        window.location.href = `./BTL/chitietsanpahm/iphone.html`;
    } else {
        // Xử lý hiển thị kết quả tìm kiếm nếu cần
        console.log("Kết quả tìm kiếm:", searchResults);
    }
});


function display(result) {
    const content = result.map((list) => {
        return "<li>" + list + "</li>";
    });
    if (hasNewResults) { // Kiểm tra xem có kết quả tìm kiếm mới hay không
        resultBox.innerHTML = "<ul>" + content.join('') + "</ul>";
        resultBox.style.display = "block"; // Hiển thị phần kết quả tìm kiếm
    } else {
        resultBox.style.display = "none"; // Ẩn phần kết quả tìm kiếm nếu không có kết quả mới
    }
    const resultList = document.createElement('ul');

    if (results.length === 0) {
        resultList.innerHTML = '<li>Không có kết quả phù hợp</li>';
    } else {
        results.forEach(result => {
            const listItem = document.createElement('li');
            listItem.textContent = result;
            resultList.appendChild(listItem);
        });
    }

    // Xóa các kết quả tìm kiếm hiện có và thêm kết quả mới
    resultBox.innerHTML = '';
    resultBox.appendChild(resultList);
}
resultBox.addEventListener('click', function (event) {
    const clickedItem = event.target; // Lấy phần tử đã được nhấp vào
    if (clickedItem.tagName === 'LI') { // Kiểm tra xem phần tử đã nhấp vào có phải là <li> không
        const link = clickedItem.querySelector('a');
        if (link) { // Nếu có liên kết
            event.preventDefault(); // Ngăn chặn hành động mặc định của liên kết
            window.location.href = link.href; // Chuyển hướng trình duyệt đến địa chỉ liên kết
        } else {
            inputBox.value = clickedItem.textContent; // Điền nội dung của phần tử <li> vào ô tìm kiếm
            const searchTerm = inputBox.value.trim().toLowerCase(); // Lấy từ khóa tìm kiếm và chuyển thành chữ thường
            const searchResults = availableKeywords.filter(keyword => keyword.toLowerCase().includes(searchTerm)); // Lọc danh sách sản phẩm dựa trên từ khóa tìm kiếm
            display(searchResults); // Hiển thị kết quả tìm kiếm
        }
    }
});


inputBox.addEventListener('input', function () {
    const input = inputBox.value.trim();
    if (input.length > 0) {
        resultBox.querySelector('ul').classList.add('visible'); // Hiển thị phần kết quả tìm kiếm
    } else {
        resultBox.querySelector('ul').classList.remove('visible'); // Ẩn phần kết quả tìm kiếm nếu không có input từ người dùng
    }
});

// Hiển thị hoặc ẩn nút "scroll lên đầu" khi cuộn trang
window.addEventListener('scroll', function () {
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');
    if (window.scrollY > 200) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});

// Cuộn lên đầu khi nút "scroll lên đầu" được nhấp
document.getElementById('scrollToTopBtn').addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Cuộn mượt
    });
});

// Set the date we're counting down to
const countDownDate = new Date("May 30, 2024 15:37:25").getTime();

// Update the count down every 1 second
const x = setInterval(function () {

    // Get today's date and time
    const now = new Date().getTime();

    // Find the distance between now and the count down date
    const distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="timer"
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("timer").innerHTML = "EXPIRED";
    }
}, 1000);

$('.slider').each(function () {
    var $this = $(this);
    var $group = $this.find('.slide_group');
    var $slides = $this.find('.slide');
    var bulletArray = [];
    var currentIndex = 0;
    var timeout;

    function move(newIndex) {
        var animateLeft, slideLeft;

        advance();

        if ($group.is(':animated') || currentIndex === newIndex) {
            return;
        }

        bulletArray[currentIndex].removeClass('active');
        bulletArray[newIndex].addClass('active');

        if (newIndex > currentIndex) {
            slideLeft = '100%';
            animateLeft = '-100%';
        } else {
            slideLeft = '-100%';
            animateLeft = '100%';
        }

        $slides.eq(newIndex).css({
            display: 'block',
            left: slideLeft
        });
        $group.animate({
            left: animateLeft
        }, function () {
            $slides.eq(currentIndex).css({
                display: 'none'
            });
            $slides.eq(newIndex).css({
                left: 0
            });
            $group.css({
                left: 0
            });
            currentIndex = newIndex;
        });
    }

    function advance() {
        clearTimeout(timeout);
        timeout = setTimeout(function () {
            if (currentIndex < ($slides.length - 1)) {
                move(currentIndex + 1);
            } else {
                move(0);
            }
        }, 4000);
    }

    $('.next_btn').on('click', function () {
        if (currentIndex < ($slides.length - 1)) {
            move(currentIndex + 1);
        } else {
            move(0);
        }
    });

    $('.previous_btn').on('click', function () {
        if (currentIndex !== 0) {
            move(currentIndex - 1);
        } else {
            move(3);
        }
    });

    $.each($slides, function (index) {
        var $button = $('<a class="slide_btn">&bull;</a>');

        if (index === currentIndex) {
            $button.addClass('active');
        }
        $button.on('click', function () {
            move(index);
        }).appendTo('.slide_buttons');
        bulletArray.push($button);
    });

    advance();
});