$(function () {
	getdata();
// // modal open	
//     $(".modal_1").click(function () {
//         $("#modal01").velocity("fadeIn", {
//             duration: 350,
//             complete: function () {
//                 $(".overlay").velocity("fudeIn", {
//                     duration: 350
//                 });
//             }
//         });
//         return false;
//     });

// // modal close
//     $(".modalclose").click(function () {
//         $("#modal01").velocity("fadeOut", {
//             duration: 350,
//             complete: function () {
//                 $(".overlay").velocity("fadeOut", {
//                     duration: 350
//                 });
//             }
//         });
//         $(".overlay").fadeOut();
//         return false;
//     });


function getdata (){
    $(".button").click(function(){
       var modaldata = $(this).attr("data-modal");
       console.log(modaldata);
    });
}

function openmodal(){
	$("")
}

});