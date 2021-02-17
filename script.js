

$(document).ready(() => {
    $(".bilet").on("click", (e) => {
        e.preventDefault()
        $(e.target).removeClass("noactive")
        $(".cardTicketsAbs").toggleClass("display-n")
        $(".noactive").hide(1000)
        let currentCardId = e.target.getAttribute("data-id")
        $(`.cardTicket[data-id=${currentCardId }]`).css("opacity", 1)
        $(".cardTicketsAbs").addClass("frontView")
        $(".TicketBlur").addClass("active")
       
    })
    $(".closeTicket").on("click", (e) => {
        e.preventDefault()
        $(".cardTicketsAbs").toggleClass("display-n")
        $(".TicketBlur").removeClass("active")
        $(".cardTicket").css("opacity", 0)
        $(".bilet").addClass("noactive")
        $(".noactive").show(500)
        $(".cardTicketsAbs").removeClass("frontView")
    })

})