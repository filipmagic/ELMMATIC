$(document).ready(function(){
  $("#btn1").click(function(){
    $("#ref3").css('display', 'none');
    $("#ref2").css('display', 'none');
    $("#ref1").fadeIn().css('display', 'flex');
    $('#btn1').css({
                     'border-bottom': '2px solid #2540e5',
                     'color': '#202020'
                     
                     
                 });
    $('#btn2').css({
                     'border-bottom': 'none',
                     'color': '#202020'
                 });
    $('#btn3').css({
                     'border-bottom': 'none',
                     'color': '#202020'
                 });
  });
  $("#btn2").click(function(){
    $("#ref3").css('display', 'none');
    $("#ref2").fadeIn().css('display', 'flex');
    $("#ref1").css('display', 'none');
    $('#btn2').css({
                     'border-bottom': '2px solid #2540e5',
                     'color': '#202020'
                 });
    $('#btn1').css({
                     'border-bottom': 'none',
                     'color': '#202020' 
                     
                 });
    $('#btn3').css({
                     'border-bottom': 'none',
                     'color': '#202020'
                 });
  });
  $("#btn3").click(function(){
    $("#ref3").fadeIn().css('display', 'flex');
    $("#ref2").css('display', 'none');
    $("#ref1").css('display', 'none');
    $('#btn3').css({
                     'border-bottom': '2px solid #2540e5',
                     'color': '#202020'
                 });
    $('#btn1').css({
                     'border-bottom': 'none',
                     'color': '#202020'
                 });
    $('#btn2').css({
                     'border-bottom': 'none',
                     'color': '#202020'
                 });
  });
});