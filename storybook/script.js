// script.js
document.addEventListener("DOMContentLoaded", () => {
    const pages = document.querySelectorAll('.page');
    let currentPage = 0;

    const updatePage = (nextPage) => {
        pages[currentPage].classList.remove('active');
        pages[nextPage].classList.add('active');
        currentPage = nextPage;
    };

    document.getElementById('nextPage').addEventListener('click', () => {
        if (currentPage < pages.length - 1) {
            updatePage(currentPage + 1);
        }
    });

    document.getElementById('prevPage').addEventListener('click', () => {
        if (currentPage > 0) {
            updatePage(currentPage - 1);
        }
    });

    // Initialize first page
    pages[currentPage].classList.add('active');
});
