// ĐỢI HTML TẢI XONG MỚI CHẠY JS – QUAN TRỌNG NHẤT!!!
document.addEventListener('DOMContentLoaded', function () {

  // ===== THUMBNAIL ĐỔI ẢNH CHÍNH =====
  const mainImg = document.getElementById('main-img');
  document.querySelectorAll('.thumb').forEach(thumb => {
    thumb.addEventListener('click', function () {
      document.querySelectorAll('.thumb').forEach(t => t.classList.remove('active'));
      this.classList.add('active');
      mainImg.src = this.dataset.img;
    });
  });

  // ===== TAB CHUYỂN NỘI DUNG =====
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', function () {
      // Xóa active cũ
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));

      // Thêm active mới
      this.classList.add('active');
      const tabId = this.getAttribute('data-tab');
      document.getElementById(tabId).classList.add('active');
    });
  });

  // ===== CAROUSEL SẢN PHẨM LIÊN QUAN (nếu có) =====
  function initCarousel(carousel) {
    const track = carousel.querySelector('.carousel-track');
    if (!track) return;
    const prev = carousel.querySelector('.carousel-prev');
    const next = carousel.querySelector('.carousel-next');
    let index = 0;

    function update() {
      const itemWidth = track.children[0].offsetWidth + 20;
      track.style.transform = `translateX(-${index * itemWidth}px)`;
    }

    if (next && prev) {
      next.onclick = () => {
        index = index < track.children.length - 5 ? index + 1 : 0;
        update();
      };
      prev.onclick = () => {
        index = index > 0 ? index - 1 : track.children.length - 5;
        update();
      };
    }
    window.addEventListener('resize', update);
    update();
  }

  document.querySelectorAll('.related-carousel').forEach(initCarousel);
});
