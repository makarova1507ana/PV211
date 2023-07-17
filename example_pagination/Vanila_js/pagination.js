const paginationNumbers = document.getElementById("pagination-numbers");
const paginationList = document.getElementById("pagination-list"); // ul
const listItems = paginationList.querySelectorAll("li"); // all li
const nextButton = document.getElementById("next-button");
const prevButton = document.getElementById("prev-button");

const paginationLimit = 10; // limit
const pageCount = Math.ceil(listItems.length / paginationLimit); // 50 / 10= pagecount
let currentPage;


// создаем кнопки с номерами страниц
const appendPageNumber = (index) => {
    const pageNumber = document.createElement("button");
    pageNumber.className = "pagination-number";
    pageNumber.setAttribute("page-index", index);
    pageNumber.innerHTML = index;

    paginationNumbers.appendChild(pageNumber);
};

const getPaginationNumbers = () => {
    for (let i = 1; i <= pageCount; i++) {
        appendPageNumber(i);
    }
};

// при загрузке DOM, разбиваем на страницы 
window.addEventListener("load", () => {
    getPaginationNumbers();
    setCurrentPage(1);

    prevButton.addEventListener("click", () => {
        setCurrentPage(currentPage - 1);
    });

    nextButton.addEventListener("click", () => {
        setCurrentPage(currentPage + 1);
    });

    document.querySelectorAll(".pagination-number").forEach((button) => {
        const pageIndex = Number(button.getAttribute("page-index"));
        if (pageIndex) {
            button.addEventListener("click", () => {
                setCurrentPage(pageIndex);
            });
        }
    });
});

// получили текущую страницу, отоборжаем на ней элементы
const setCurrentPage = (pageNum) => {
    currentPage = pageNum;
    handleActivePageNumber();
    handlePageButtonStatus();
    const currRange = pageNum * paginationLimit;
    const prevRange = (pageNum - 1) * paginationLimit;

    listItems.forEach((item, index) => {
        item.classList.add("hidden");
        if (index >= prevRange && index < currRange) {
            item.classList.remove("hidden");
        }
    });

};

const handleActivePageNumber = () => {
    document.querySelectorAll(".pagination-number").forEach((button) => {
        button.classList.remove("active");

        const pageIndex = Number(button.getAttribute("page-index"));
        if (pageIndex == currentPage) {
            button.classList.add("active");
        }
    });
};

const disableButton = (button) => {
    // button.classList.add("disabled");
    button.setAttribute("disabled", true);
};

const enableButton = (button) => {
    // button.classList.remove("disabled");
    button.removeAttribute("disabled");
};

const handlePageButtonStatus = () => {
    if (currentPage === 1) {
        disableButton(prevButton);
    } else {
        enableButton(prevButton);
    }

    if (pageCount === currentPage) {
        disableButton(nextButton);
    } else {
        enableButton(nextButton);
    }
};