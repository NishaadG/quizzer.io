function check(){
    var c= 0 ;
    if (document.getElementById('correct1').checked)
    {
        c++;
    }
    if (document.getElementById('correct2').checked)
    {
        c++;
    }
    if (document.getElementById('correct3').checked)
    {
        c++;
    }
    if (document.getElementById('correct4').checked)
    {
        c++;
    }
    if (document.getElementById('correct5').checked)
    {
        c++;
    }
    alert("Your score is "+c);
}
