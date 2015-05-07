        $(document).ready(function () {

            $("button").click(function () {
                $.getJSON("http://search.ams.usda.gov/farmersmarkets/v1/data.svc/zipSearch?zip=" + $("#zip").val(), function (data) {
                    $(".getData").empty();
                    $.each(data, function () {
                        $.each(this, function (key, value) {

                            $(".getData").append("<ul><li>" + "Market ID: "+value.id + "</li><li>" + "Market Name: " + value.marketname + "</li></ul>");
							$("ul").addClass("list-group");
							$("li").addClass("list-group-item");
							$(".getData").addClass("container");

                        });

                    });
                });
            });

        });
