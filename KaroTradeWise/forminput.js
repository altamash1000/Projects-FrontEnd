$(document).ready(function () {
    $("#search-btn").click(function () {
        var searchText = $("#search-input").val().toLowerCase();
        $("#product-table tbody tr").each(function () {
            var name = $(this).find("td:eq(1)").text().toLowerCase();
            var price = $(this).find("td:eq(3)").text().toLowerCase();

            if (name.includes(searchText) || price.includes(searchText)) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    });
});