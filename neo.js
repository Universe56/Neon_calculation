function mult() {
    var first = document.getElementById('one').value;
    var second = document.getElementById('two').value;

    document.getElementById('result').value = first * second;





    var first2 = document.getElementById('one2').value;
    first2 = parseInt(first2);

    var first3 = document.getElementById('one3').value;
    first3 = parseInt(first3);



    document.getElementById('summa').value = (first * second) + first2 + first3;

}
