function f(){
    mas = new Array();
    i = 0;
    var k = false;
    var c = false;
    mas[i] = document.getElementById("name").value;i++;
    mas[i] = document.getElementById("surname").value;i++;
    mas[i] = document.getElementById("date").value;
    if(/(\d{2})\.\d{2}\.\d{4}/.test(mas[i]))
    {
        mas[i] = RegExp.$1;
        k = true;
    }
    else alert("Введите дату правильно");
    i++;
    y = document.getElementById("M").checked;
    z = document.getElementById("W");
    if((y == true))
    {
        mas[i] = "Мужчина"; 
        c = true;
    }
    else if((y==false) && (z.checked == true))
    {
       mas[i] = "Женщина"; 
       c = true;
    }
    else alert("Введите ваш пол правильно");
    i++;
    x = document.getElementById("cod");
    mas[i] = x.options[x.selectedIndex].text;
    if(k == true && c == true)
    {
        confirm("Это вы"+", "+mas[0].toString()+" "+mas[1].toString()+", рожденный(ая) "+mas[2].toString()+
        " числа. "+mas[3].toString()+", любящий(ая) цвет ");
    }
    else alert("Исправьте ошибки");

}