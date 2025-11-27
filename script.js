// Click để mở/đóng dropdown (hoạt động ngon cả mobile & desktop)
document.querySelectorAll('.dropdown').forEach(dropdown => {
  const btn = dropdown.querySelector('.dropbtn');

  btn.addEventListener('click', (e) => {
    e.stopPropagation();

    // Đóng tất cả dropdown khác
    document.querySelectorAll('.dropdown').forEach(d => {
      if (d !== dropdown) d.classList.remove('active');
    });

    // Toggle dropdown hiện tại
    dropdown.classList.toggle('active');
  });
});

// Click ngoài thì đóng hết
document.addEventListener('click', () => {
  document.querySelectorAll('.dropdown').forEach(d => {
    d.classList.remove('active');
  });
});
//catalogories
// document.getElementById('category-dropdown')?.addEventListener('click', function (e) {
//   e.stopPropagation();
//   this.classList.toggle('active');
// });

// Đóng khi click ngoài (giữ nguyên từ topbar)
// document.addEventListener('click', () => {
//   document.querySelectorAll('.category-dropdown')?.classList.remove('active');
// });
// === SỬA LỖI TẠI ĐÂY – ĐOẠN NÀY THAY THẾ HẾT ĐOẠN CŨ ===
// Đóng tất cả dropdown khi click ra ngoài (topbar + category)
// document.addEventListener('click', () => {
//   // Đóng dropdown topbar
//   document.querySelectorAll('.dropdown').forEach(dropdown => {
//     dropdown.classList.remove('active');
//   });

//   // Đóng dropdown danh mục
//   document.querySelectorAll('.category-dropdown').forEach(dropdown => {
//     dropdown.classList.remove('active');
//   });
// });

// Chỉ mở dropdown khi click đúng vào nút
// document.querySelectorAll('.dropdown, .category-dropdown').forEach(dropdown => {
//   const btn = dropdown.querySelector('.dropbtn, .category-btn');

//   btn?.addEventListener('click', (e) => {
//     e.stopPropagation(); // ngăn đóng ngay lập tức

//     // Nếu là dropdown khác thì đóng hết trước
//     document.querySelectorAll('.dropdown, .category-dropdown').forEach(other => {
//       if (other !== dropdown) other.classList.remove('active');
//     });

//     // Toggle cái đang click
//     dropdown.classList.toggle('active');
//   });
// });
//danh mục gọn hơn
document.addEventListener('click', () => {
  document.querySelectorAll('.dropdown, .category-dropdown').forEach(el =>
    el.classList.remove('active')
  );
});

document.querySelectorAll('.dropdown .dropbtn, .category-dropdown .category-btn')
  .forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      const dropdown = btn.closest('.dropdown, .category-dropdown');
      document.querySelectorAll('.dropdown, .category-dropdown')
        .forEach(el => el.classList.toggle('active', el === dropdown));
    });
  });
// Hero Slider siêu mượt
const slides = document.querySelectorAll('.hero-slider .slides img');
const dots = document.querySelectorAll('.dot');
const prevBtn = document.querySelector('.hero-slider .prev');
const nextBtn = document.querySelector('.hero-slider .next');
let currentSlide = 0;

function showSlide(n) {
  slides.forEach((slide, index) => {
    slide.classList.remove('active');
    dots[index].classList.remove('active');
  });
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].classList.add('active');
  dots[currentSlide].classList.add('active');
}

// Next/Prev
nextBtn.addEventListener('click', () => showSlide(currentSlide + 1));
prevBtn.addEventListener('click', () => showSlide(currentSlide - 1));

// Dots click
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => showSlide(index));
});

// Auto play mỗi 5 giây
setInterval(() => {
  showSlide(currentSlide + 1);
}, 5000);
//danh muc ở dưới
// Hàm carousel chung (dùng cho cả 2 phần)
function initCarousel(carousel) {
  const track = carousel.querySelector('.carousel-track');
  const items = track.children.length;
  const prev = carousel.querySelector('.carousel-prev');
  const next = carousel.querySelector('.carousel-next');
  let index = 0;

  function update() {
    const width = track.children[0].offsetWidth + 20; // + gap
    track.style.transform = `translateX(-${index * width}px)`;
  }

  next.addEventListener('click', () => {
    index = (index < items - 4) ? index + 1 : 0;
    update();
  });

  prev.addEventListener('click', () => {
    index = (index > 0) ? index - 1 : items - 4;
    update();
  });

  // Tự động resize khi đổi kích thước màn hình
  window.addEventListener('resize', update);
  update(); // lần đầu
}

// Khởi động cho 2 carousel
document.querySelectorAll('.categories-carousel, .shops-carousel').forEach(initCarousel);