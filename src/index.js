import './css/style.css';
import '@laylazi/bootstrap-rtl/dist/css/bootstrap-rtl.min.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min';
import 'popper.js/dist/popper.min';
import 'bootstrap/dist/js/bootstrap.min.js';
import '@fortawesome/fontawesome-free/js/all.min'

$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
    $('.add-to-cart-btn').click(function(){
        alert('اضف المنتج الي عربه الشراء');
    });
    $('#copyright').text('جميع الحقوق محفوظه سنه' + new Date().getFullYear());
    $('.product-option input[type="radio"]').change(function(){
        $(this).parents('.product-option').siblings().removeClass('active');
        $(this).parents('.product-option').addClass('active');
    });

});







