﻿//Дамјан Јанчевски / Damjan Janchevski / Damjan Jančevski


function ValidateS(){
    var standard = document.getElementById("standard");
    return standard;
}

var txt;

function latinTocyrilics() {
    txt = document.transliteracija.text2.value;

    txt = txt.replace(/dzh/g, "џ");
    txt = txt.replace(/ch/g, "ч");
    txt = txt.replace(/sh/g, "ш");
    txt = txt.replace(/zh/g, "ж");
    txt = txt.replace(/dz/g, "ѕ");
    txt = txt.replace(/gh/g, "ѓ");
    txt = txt.replace(/lj/g, "љ");
    txt = txt.replace(/gj/g, "ѓ");
    txt = txt.replace(/nj/g, "њ");
    txt = txt.replace(/kj/g, "ќ");
    txt = txt.replace(/ts/g, "ц");
    txt = txt.replace(/dž/g, "џ");
    txt = txt.replace(/dj/g, "џ");
    txt = txt.replace(/a/g, "а");
    txt = txt.replace(/b/g, "б");
    txt = txt.replace(/v/g, "в");
    txt = txt.replace(/ǵ/g, "ѓ");
    txt = txt.replace(/g'/g, "ѓ");
    txt = txt.replace(/z'/g, "ѕ");
    txt = txt.replace(/j/g, "ј");
    txt = txt.replace(/Í/g, "љ");
    txt = txt.replace(/l̂/g, "љ");
    txt = txt.replace(/l'/g, "љ");
    txt = txt.replace(/m/g, "м");
    txt = txt.replace(/ń/g, "њ");
    txt = txt.replace(/n̂/g, "њ");
    txt = txt.replace(/n'/g, "њ");
    txt = txt.replace(/o/g, "о");
    txt = txt.replace(/p/g, "п");
    txt = txt.replace(/r/g, "р");
    txt = txt.replace(/k'/g, "ќ");
    txt = txt.replace(/ḱ/g, "ќ");
    txt = txt.replace(/u/g, "у");
    txt = txt.replace(/f/g, "ф");
    txt = txt.replace(/с'/g, "ч");
    txt = txt.replace(/č/g, "ч");
    txt = txt.replace(/d̂/g, "џ");
    txt = txt.replace(/s'/g, "ш");
    txt = txt.replace(/š/g, "ш");
    txt = txt.replace(/g/g, "г");
    txt = txt.replace(/d/g, "д");
    txt = txt.replace(/c/g, "ц");
    txt = txt.replace(/s/g, "с");
    txt = txt.replace(/k/g, "к");
    txt = txt.replace(/l/g, "л");
    txt = txt.replace(/z/g, "з");
    txt = txt.replace(/e/g, "е");
    txt = txt.replace(/i/g, "и");
    txt = txt.replace(/n/g, "н");
    txt = txt.replace(/t/g, "т");
    txt = txt.replace(/h/g, "х");


    txt = txt.replace(/Dž/g, "Џ");
    txt = txt.replace(/DZH/g, "Џ");
    txt = txt.replace(/DZh/g, "Џ");
    txt = txt.replace(/Dzh/g, "Џ");
    txt = txt.replace(/DJ/g, "Џ");
    txt = txt.replace(/GJ/g, "Ѓ");
    txt = txt.replace(/Gj/g, "Ѓ");
    txt = txt.replace(/KJ/g, "Ќ");
    txt = txt.replace(/Kj/g, "Ќ");
    txt = txt.replace(/Gh/g, "Ѓ");
    txt = txt.replace(/GH/g, "Ѓ");
    txt = txt.replace(/ZH/g, "Ж");
    txt = txt.replace(/Zh/g, "Ж");
    txt = txt.replace(/DZ/g, "Ѕ");
    txt = txt.replace(/Dz/g, "Ѕ");
    txt = txt.replace(/LJ/g, "Љ");
    txt = txt.replace(/Lj/g, "Љ");
    txt = txt.replace(/NJ/g, "Њ");
    txt = txt.replace(/Nj/g, "Њ");
    txt = txt.replace(/TS/g, "Х");
    txt = txt.replace(/CH/g, "Ч");
    txt = txt.replace(/Ts/g, "Ц");
    txt = txt.replace(/Ch/g, "Ч");
    txt = txt.replace(/SH/g, "Ш");
    txt = txt.replace(/Sh/g, "Ш");
    txt = txt.replace(/A/g, "А");
    txt = txt.replace(/B/g, "Б");
    txt = txt.replace(/V/g, "В");
    txt = txt.replace(/ǵ/g, "Ѓ");
    txt = txt.replace(/G'/g, "Ѓ");
    txt = txt.replace(/Z'/g, "Ѕ");
    txt = txt.replace(/Ĺ/g, "Љ");
    txt = txt.replace(/l̂/g, "Љ");
    txt = txt.replace(/L'/g, "Љ");
    txt = txt.replace(/M/g, "М");
    txt = txt.replace(/Ń/g, "Њ");
    txt = txt.replace(/n̂/g, "Њ");
    txt = txt.replace(/N'/g, "Њ");
    txt = txt.replace(/O/g, "О");
    txt = txt.replace(/P/g, "П");
    txt = txt.replace(/R/g, "Р");
    txt = txt.replace(/K'/g, "Ќ");
    txt = txt.replace(/ḱ/g, "Ќ");
    txt = txt.replace(/U/g, "У");
    txt = txt.replace(/F/g, "Ф");
    txt = txt.replace(/H/g, "Х");
    txt = txt.replace(/C'/g, "Ч");
    txt = txt.replace(/č/g, "Ч");
    txt = txt.replace(/D/g, "Џ");
    txt = txt.replace(/d̂/g, "Џ");
    txt = txt.replace(/S'/g, "Ш");
    txt = txt.replace(/š/g, "Ш");
    txt = txt.replace(/G/g, "Г");
    txt = txt.replace(/E/g, "Е");
    txt = txt.replace(/Z/g, "З");
    txt = txt.replace(/I/g, "И");
    txt = txt.replace(/J/g, "Ј");
    txt = txt.replace(/K/g, "К");
    txt = txt.replace(/L/g, "Л");
    txt = txt.replace(/N/g, "Н");
    txt = txt.replace(/S/g, "С");
    txt = txt.replace(/T/g, "Т");
    txt = txt.replace(/C/g, "Ц");
    txt = txt.replace(/D/g, "Д");
    txt = txt.replace(/Ѐ/g, "Ѐ");
    txt = txt.replace(/Ì/g, "Ѝ");
    txt = txt.replace(/E'/g, "Ѐ");
    txt = txt.replace(/I'/g, "Ѝ");
    txt = txt.replace(/è/g, "ѐ");
    txt = txt.replace(/ì/g, "ѝ");
    txt = txt.replace(/e'/g, "ѐ");
    txt = txt.replace(/i'/g, "ѝ");

    

    document.transliteracija.text1.value = txt;
}

function cyrilicsTolatin() {
    txt = document.transliteracija.text1.value;
    
    var standard = ValidateS();

    if(standard.value == "1"){
        txt = txt.replace(/ѐ/g, "è");
        txt = txt.replace(/ѝ/g, "ì");
        txt = txt.replace(/а/g, "a");
        txt = txt.replace(/б/g, "b");
        txt = txt.replace(/в/g, "v");
        txt = txt.replace(/г/g, "g");
        txt = txt.replace(/д/g, "d");
        txt = txt.replace(/ѓ/g, "ǵ");
        txt = txt.replace(/е/g, "e");
        txt = txt.replace(/ж/g, "ž");
        txt = txt.replace(/з/g, "z");
        txt = txt.replace(/ѕ/g, "ẑ");
        txt = txt.replace(/и/g, "i");
        txt = txt.replace(/ј/g, "j");
        txt = txt.replace(/к/g, "k");
        txt = txt.replace(/л/g, "l");
        txt = txt.replace(/љ/g, "l̂");
        txt = txt.replace(/м/g, "m");
        txt = txt.replace(/н/g, "n");
        txt = txt.replace(/њ/g, "n̂");
        txt = txt.replace(/о/g, "o");
        txt = txt.replace(/п/g, "p");
        txt = txt.replace(/р/g, "r");
        txt = txt.replace(/с/g, "s");
        txt = txt.replace(/т/g, "t");
        txt = txt.replace(/ќ/g, "ḱ");
        txt = txt.replace(/у/g, "u");
        txt = txt.replace(/ф/g, "f");
        txt = txt.replace(/х/g, "h");
        txt = txt.replace(/ц/g, "c");
        txt = txt.replace(/ч/g, "č");
        txt = txt.replace(/џ/g, "d̂");
        txt = txt.replace(/ш/g, "š");
        txt = txt.replace(/Ѐ/g, "Ѐ");
        txt = txt.replace(/Ѝ/g, "Ì");
        txt = txt.replace(/А/g, "A");
        txt = txt.replace(/Б/g, "B");
        txt = txt.replace(/В/g, "V");
        txt = txt.replace(/Г/g, "G");
        txt = txt.replace(/Д/g, "D");
        txt = txt.replace(/Ѓ/g, "Ǵ");
        txt = txt.replace(/Е/g, "E");
        txt = txt.replace(/Ж/g, "Ž");
        txt = txt.replace(/З/g, "Z");
        txt = txt.replace(/Ѕ/g, "Ẑ");
        txt = txt.replace(/И/g, "I");
        txt = txt.replace(/Ј/g, "J");
        txt = txt.replace(/К/g, "K");
        txt = txt.replace(/Л/g, "L");
        txt = txt.replace(/Љ/g, "L̂");
        txt = txt.replace(/М/g, "M");
        txt = txt.replace(/Н/g, "N");
        txt = txt.replace(/Њ/g, "N̂");
        txt = txt.replace(/О/g, "O");
        txt = txt.replace(/П/g, "P");
        txt = txt.replace(/Р/g, "R");
        txt = txt.replace(/С/g, "S");
        txt = txt.replace(/Т/g, "T");
        txt = txt.replace(/Ќ/g, "Ḱ");
        txt = txt.replace(/У/g, "U");
        txt = txt.replace(/Ф/g, "F");
        txt = txt.replace(/Х/g, "H");
        txt = txt.replace(/Ц/g, "C");
        txt = txt.replace(/Ч/g, "Č");
        txt = txt.replace(/Џ/g, "D̂");
        txt = txt.replace(/Ш/g, "Š");
    } else if(standard.value == "2"){
        txt = txt.replace(/ѐ/g, "è");
        txt = txt.replace(/ѝ/g, "ì");
        txt = txt.replace(/а/g, "a");
        txt = txt.replace(/б/g, "b");
        txt = txt.replace(/в/g, "v");
        txt = txt.replace(/г/g, "g");
        txt = txt.replace(/д/g, "d");
        txt = txt.replace(/ѓ/g, "ǵ");
        txt = txt.replace(/е/g, "e");
        txt = txt.replace(/ж/g, "ž");
        txt = txt.replace(/з/g, "z");
        txt = txt.replace(/ѕ/g, "dz");
        txt = txt.replace(/и/g, "i");
        txt = txt.replace(/ј/g, "j");
        txt = txt.replace(/к/g, "k");
        txt = txt.replace(/л/g, "l");
        txt = txt.replace(/љ/g, "lj");
        txt = txt.replace(/м/g, "m");
        txt = txt.replace(/н/g, "n");
        txt = txt.replace(/њ/g, "nj");
        txt = txt.replace(/о/g, "o");
        txt = txt.replace(/п/g, "p");
        txt = txt.replace(/р/g, "r");
        txt = txt.replace(/с/g, "s");
        txt = txt.replace(/т/g, "t");
        txt = txt.replace(/ќ/g, "ḱ");
        txt = txt.replace(/у/g, "u");
        txt = txt.replace(/ф/g, "f");
        txt = txt.replace(/х/g, "h");
        txt = txt.replace(/ц/g, "c");
        txt = txt.replace(/ч/g, "č");
        txt = txt.replace(/џ/g, "dž");
        txt = txt.replace(/ш/g, "š");
        txt = txt.replace(/Ѐ/g, "Ѐ");
        txt = txt.replace(/Ѝ/g, "Ì");
        txt = txt.replace(/А/g, "A");
        txt = txt.replace(/Б/g, "B");
        txt = txt.replace(/В/g, "V");
        txt = txt.replace(/Г/g, "G");
        txt = txt.replace(/Д/g, "D");
        txt = txt.replace(/Ѓ/g, "Ǵ");
        txt = txt.replace(/Е/g, "E");
        txt = txt.replace(/Ж/g, "Ž");
        txt = txt.replace(/З/g, "Z");
        txt = txt.replace(/Ѕ/g, "DZ");
        txt = txt.replace(/И/g, "I");
        txt = txt.replace(/Ј/g, "J");
        txt = txt.replace(/К/g, "K");
        txt = txt.replace(/Л/g, "L");
        txt = txt.replace(/Љ/g, "Lj");
        txt = txt.replace(/М/g, "M");
        txt = txt.replace(/Н/g, "N");
        txt = txt.replace(/Њ/g, "Nj");
        txt = txt.replace(/О/g, "O");
        txt = txt.replace(/П/g, "P");
        txt = txt.replace(/Р/g, "R");
        txt = txt.replace(/С/g, "S");
        txt = txt.replace(/Т/g, "T");
        txt = txt.replace(/Ќ/g, "Ḱ");
        txt = txt.replace(/У/g, "U");
        txt = txt.replace(/Ф/g, "F");
        txt = txt.replace(/Х/g, "H");
        txt = txt.replace(/Ц/g, "C");
        txt = txt.replace(/Ч/g, "Č");
        txt = txt.replace(/Џ/g, "Dž");
        txt = txt.replace(/Ш/g, "Š");
    }else if(standard.value == "3"){
        txt = txt.replace(/ѐ/g, "è");
        txt = txt.replace(/ѝ/g, "ì");
        txt = txt.replace(/а/g, "a");
        txt = txt.replace(/б/g, "b");
        txt = txt.replace(/в/g, "v");
        txt = txt.replace(/г/g, "g");
        txt = txt.replace(/д/g, "d");
        txt = txt.replace(/ѓ/g, "gj");
        txt = txt.replace(/е/g, "e");
        txt = txt.replace(/ж/g, "ž");
        txt = txt.replace(/з/g, "z");
        txt = txt.replace(/ѕ/g, "dz");
        txt = txt.replace(/и/g, "i");
        txt = txt.replace(/ј/g, "j");
        txt = txt.replace(/к/g, "k");
        txt = txt.replace(/л/g, "l");
        txt = txt.replace(/љ/g, "lj");
        txt = txt.replace(/м/g, "m");
        txt = txt.replace(/н/g, "n");
        txt = txt.replace(/њ/g, "nj");
        txt = txt.replace(/о/g, "o");
        txt = txt.replace(/п/g, "p");
        txt = txt.replace(/р/g, "r");
        txt = txt.replace(/с/g, "s");
        txt = txt.replace(/т/g, "t");
        txt = txt.replace(/ќ/g, "kj");
        txt = txt.replace(/у/g, "u");
        txt = txt.replace(/ф/g, "f");
        txt = txt.replace(/х/g, "h");
        txt = txt.replace(/ц/g, "c");
        txt = txt.replace(/ч/g, "ch");
        txt = txt.replace(/џ/g, "dj");
        txt = txt.replace(/ш/g, "sh");
        txt = txt.replace(/Ѐ/g, "Ѐ");
        txt = txt.replace(/Ѝ/g, "Ì");
        txt = txt.replace(/А/g, "A");
        txt = txt.replace(/Б/g, "B");
        txt = txt.replace(/В/g, "V");
        txt = txt.replace(/Г/g, "G");
        txt = txt.replace(/Д/g, "D");
        txt = txt.replace(/Ѓ/g, "Gj");
        txt = txt.replace(/Е/g, "E");
        txt = txt.replace(/Ж/g, "Zh");
        txt = txt.replace(/З/g, "Z");
        txt = txt.replace(/Ѕ/g, "Dz");
        txt = txt.replace(/И/g, "I");
        txt = txt.replace(/Ј/g, "J");
        txt = txt.replace(/К/g, "K");
        txt = txt.replace(/Л/g, "L");
        txt = txt.replace(/Љ/g, "Lj");
        txt = txt.replace(/М/g, "M");
        txt = txt.replace(/Н/g, "N");
        txt = txt.replace(/Њ/g, "Nj");
        txt = txt.replace(/О/g, "O");
        txt = txt.replace(/П/g, "P");
        txt = txt.replace(/Р/g, "R");
        txt = txt.replace(/С/g, "S");
        txt = txt.replace(/Т/g, "T");
        txt = txt.replace(/Ќ/g, "Kj");
        txt = txt.replace(/У/g, "U");
        txt = txt.replace(/Ф/g, "F");
        txt = txt.replace(/Х/g, "H");
        txt = txt.replace(/Ц/g, "C");
        txt = txt.replace(/Ч/g, "Ch");
        txt = txt.replace(/Џ/g, "Dj");
        txt = txt.replace(/Ш/g, "Sh");
    }

    document.transliteracija.text2.value = txt;
}