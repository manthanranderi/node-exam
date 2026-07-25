document.addEventListener("DOMContentLoaded", () => {

    const deleteButtons = document.querySelectorAll(".delete-btn");

    deleteButtons.forEach(button => {
        button.addEventListener("click", (e) => {
            const confirmDelete = confirm("Are you sure you want to delete this item?");

            if (!confirmDelete) {
                e.preventDefault();
            }
        });
    });

    const forms = document.querySelectorAll("form");

    forms.forEach(form => {
        form.addEventListener("submit", (e) => {

            const requiredFields = form.querySelectorAll("[required]");

            let isValid = true;

            requiredFields.forEach(field => {
                if (field.value.trim() === "") {
                    isValid = false;
                    field.style.border = "2px solid red";
                } else {
                    field.style.border = "1px solid #ccc";
                }
            });

            if (!isValid) {
                e.preventDefault();
                alert("Please fill all required fields.");
            }

        });
    });

});