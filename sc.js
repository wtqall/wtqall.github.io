document.addEventListener('DOMContentLoaded', function() {
const List = document.querySelectorAll('.list')
const IT = document.querySelectorAll('.block_it')
    function filter(){
        List.forEach(item => {
            item.addEventListener('click', event => {
                const targetID = event.target.dataset.id
                console.log(targetID)
                function getIT (className){
                    IT.forEach(it =>{
                        if(it.classList.contains(className)){
                            it.style.display = 'block'
                        }else{
                            it.style.display = 'none'
                        }
                    })
                }
                switch(targetID){
                    case 'all':
                        getIT('block_it')
                        break
                        case 'trololo':
                            getIT(targetID)
                        break
                        case 'pepe':
                            getIT(targetID)
                        break
                }
            })
        })
    }
    filter();
});

document.querySelectorAll('.img-cont img').forEach(img => {
    img.onclick = () => {
        document.querySelector('.damn').style.display = 'block';
        const fullScreenImg = document.querySelector('.damn img');
        fullScreenImg.src = img.getAttribute('src');
        fullScreenImg.style.display = 'block';
    }
});
document.querySelector('.damn span').onclick = () => {
    document.querySelector('.damn').style.display = 'none';
    document.querySelector('.damn img').style.display = 'none';
}
document.addEventListener('DOMContentLoaded', function() {
    const it = document.querySelectorAll('.block_it');
    let currentPage = 1;
    const imagesPerPage = 3; // Number of images per page

    function showPage(all) {
        const startIndex = (page - 1) * imagesPerPage;
        const endIndex = startIndex + imagesPerPage;

        it.forEach((item, index) => {
            if (index >= startIndex && index < endIndex) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    }

    function updatePagination() {
        const totalPages = Math.ceil(it.length / imagesPerPage);

        document.querySelector('.prev-page').addEventListener('click', () => {
            if (currentPage > 1) {
                currentPage--;
                showPage(currentPage);
            }
        });

        document.querySelector('.next-page').addEventListener('click', () => {
            if (currentPage < totalPages) {
                currentPage++;
                showPage(currentPage);
            }
        });
    }

    showPage(currentPage);
    updatePagination();

    // Slider functionality
    let currentImageIndex = 0;

    document.querySelector('.next').addEventListener('click', () => {
        currentImageIndex = (currentImageIndex + 1) % it.length;
        showImage(currentImageIndex);
    });

    document.querySelector('.prev').addEventListener('click', () => {
        currentImageIndex = (currentImageIndex - 1 + it.length) % it.length;
        showImage(currentImageIndex);
    });

    function showImage(index) {
        // Logic to display the image at the given index
    }
});
const images = document.querySelectorAll('.block_it');
const modal = document.querySelector('.damn');
const modalImage = modal.querySelector('img');
const modalCloseButton = modal.querySelector('span');
const sliderPagination = modal.querySelector('.slider-pagination');
const prevButton = modal.querySelector('.prev');
const nextButton = modal.querySelector('.next');

let currentImageIndex = 0;

function showImage(index) {
    modal.style.display = 'block';
    modalImage.src = images[index].querySelector('img').src;
    updatePagination(index);
}

function updatePagination(index) {
    sliderPagination.innerHTML = `${index + 1} / ${images.length}`;
}

prevButton.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    showImage(currentImageIndex);
});

nextButton.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    showImage(currentImageIndex);
});

modalCloseButton.addEventListener('click', () => {
    modal.style.display = 'none';
});

images.forEach((image, index) => {
    image.addEventListener('click', () => {
        currentImageIndex = index;
        showImage(currentImageIndex);
    });
});

updatePagination(currentImageIndex);
