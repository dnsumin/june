const track = document.querySelector('.image-track');
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');

let currentIndex = 0;
const images = track.children;
const totalImages = images.length;

// 다음 이미지로 이동 (마지막에서 첫 번째로 루프)
nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalImages; // 루프 처리
    updateTrackPosition();
});

// 이전 이미지로 이동 (첫 번째에서 마지막으로 루프)
prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages; // 음수 방지
    updateTrackPosition();
});

// 이미지 위치 업데이트 함수
function updateTrackPosition() {
    const offset = -currentIndex * 100; // 100% 단위로 이동
    track.style.transform = `translateX(${offset}%)`;
}
