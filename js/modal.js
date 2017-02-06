$(function () {
    var modaldata;
    getdata();
    closemodal();


    function getdata() {
        $('.button').click(function () {
            modaldata = $(this).attr('data-modal');
            openmodal(modaldata);
        });
    }

    function openmodal() {
            $('.modal[data-modal="'+ modaldata + '"], .overlay').velocity('fadeIn', {
                duration: 350,
                complete: function () {

                }
            });
    }

    function closemodal() {
        $('.modalclose').click(function () {
            $('.modal[data-modal="'+ modaldata + '"], .overlay').velocity('fadeOut', {
                duration: 350,
                complete: function () {

                }
            });
        });
    }

});