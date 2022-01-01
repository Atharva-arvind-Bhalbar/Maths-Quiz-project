player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

player1_score = 0 ;
player2_score = 0 ;

document.getElementsByid("player1_name").innerHTML = player1_name + ":" ;
document.getElementsByid("player2_name").innerHTML = player2_name + ":" ;

document.getElementsByid("player1_score").innerHTML = player1_score ;
document.getElementsByid("player2_score").innerHTML = player2_score ;

function send()
{
    get_world = document.getElementsByid("Number").value;
    console.log("Number in lower case = " + Number);

    charAt1 = Number.charAt1(1);
    console.log(charAt1);

    length_divide_2 = Math.floor(Number.length/2);
    charAt2 = Number.charAt(length_divide_2);
    console.log(charAt2);

    length_minus_1 = Number.length - 1 ;
    charAt3 = Number.charAt(length_minus_1);
    console.log(charAt3);

    remove_charAt1 = Number.replace(charAt1, "_");
    remove_charAt2 = remove_charAt1.replace(charAt2, "_");
    remove_charAt3 = remove_charAt2.replace(charAt3, "_");
    console.log(remove_charAt3);

    document.getElementsByid("number1").value;
    document.getElementById("number2").value;
}
 function check()
 {
    get_Number = document.getElementById("input_check_box").value;
    console.log (Number);
 }