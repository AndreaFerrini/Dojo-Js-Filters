document.addEventListener('DOMContentLoaded', function () {
    const imageUpload = document.getElementById('image-upload');
    const uploadedImage = document.getElementById('uploaded-image');
    const filterSelect = document.getElementById('filter-select');

    function applyFilter(filter) {
        uploadedImage.style.filter = filter;
    }

    imageUpload.addEventListener('change', function (event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                uploadedImage.src = e.target.result;
                applyFilter(filterSelect.value);
            };
            reader.readAsDataURL(file);
        }
    });

    filterSelect.addEventListener('change', function (event) {
        const selectedFilter = event.target.value;
        applyFilter(selectedFilter);
    });
});