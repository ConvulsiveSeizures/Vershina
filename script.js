$(document).ready(() => {
   $("#btnToggleTheme").on("click", () => {
    $("#themeWrapper").toggleClass("changeTheme")
    $(".tg-color").toggleClass("white")
    $("#sunIcon").toggleClass("goHidden")
   })
    setTimeout(() => {
        $("#themeWrapper").addClass("changeTheme")
        $("#timeBlur").addClass("active")
    }, 500)
})