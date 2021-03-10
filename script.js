$(document).ready(() => {


    //toggle theme
   $("#btnToggleTheme").on("click", () => {
    $("#themeWrapper").toggleClass("changeTheme")
    $(".tg-color").toggleClass("white")
    $("#sunIcon").toggleClass("goHidden")
    $(".stars").toggleClass("themeTrue")
   })
    setTimeout(() => {
        $("#themeWrapper").addClass("changeTheme")
        $("#timeBlur").addClass("active")
    }, 100)

    $(".slide").addClass("dis")
    $("#linkCont div").addClass("dis")


    //button Point onCLick
    $("#pointContainer a").on("click", (e) => {
        $("body").css("overflowY", "hidden")
        let curId = e.target.dataset["id"]
        //set z-index
        $("#mapWrapper").addClass("toview")
        $("#themeWrapper").addClass("timeBlur")
        $(`.mapContainer[data-id=${curId}]`).addClass("active")
    })

    //close map
    $("#mapWrapper button").on("click", (e) => {
        $("body").css("overflowY", "scroll")
        $("#mapWrapper").removeClass("toview")
        $("#themeWrapper").removeClass("timeBlur")
        $(".mapContainer").removeClass("active")
    })


    //open category => tours
    $(".categoryBtn").on("click", () => {
        if (!$("#themeWrapper").hasClass("changeTheme")) {
            $("#galleryWrapper").addClass("tgColor")
        }
        $("body").css("overflowY", "hidden")
        $("#themeWrapper").addClass("timeBlur")
        $("#gallerySection").addClass("frontview")
    })

    //close tours
    $("#closeGalleryBtn").on("click", (e) => {
        $("body").css("overflowY", "scroll")
        $("#gallerySection").removeClass("frontview")
    })
})

