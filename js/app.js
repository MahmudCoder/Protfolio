
// $(document).ready(function(){

//     $('#menu').click(function(){

//         $(this).toggleClass('fa-times');
//         $('header').toggleClass('toggle');

//     });

//     $(window).on('scroll load',function(){

//         $('#menu').removeClass('fa-times');
//         $('header').removeClass('toggle'); 

//     })
// })










let head = document.querySelector('header');

document.querySelector('#menu').addEventListener('click',function(event){
    head.classList.toggle('active')
    event.stopPropagation()
})

document.querySelector('body').addEventListener('click',function(){
    head.classList.remove('active')
})

head.addEventListener('click',function(event){
    event.stopPropagation()
})














