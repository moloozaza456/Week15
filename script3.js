let zodiac = prompt("Enter year value of Year : ");//String
let year = parseInt(zodiac); //Convert String to integer(number)
function myZodiact(year,liy){


        switch(year){
            case 1972: case 1984: case 1996: case 2008: case 2020:
                alert("Rat ZODIAC SIGN" + liy);
                console.log("Rat ZODIAC SIGN" + liy);
                document.getElementById("A").innerHTML = "Rat ZODIAC SIGN" + liy;
                break;
            case 1973: case 1985: case 1997: case 2009: case 2021:
                alert("Oxen ZODIAC SIGN" + liy);
                console.log("Oxen ZODIAC SIGN" + liy);
                document.getElementById("A").innerHTML = "Oxen ZODIAC SIGN" + liy;
                break;
            case 1974: case 1974: case 1986: case 1998: case 2010: case 2022:
                alert("Tiger ZODIAC SIGN" + liy);
                console.log("Tiger ZODIAC SIGN"+ liy);
                document.getElementById("A").innerHTML = "Tiger ZODIAC SIGN"+ liy;
                break;
            case 1975: case 1987: case 1999: case 2011: case 2023:
                alert("Rabbit ZODIAC SIGN"+ liy);
                console.log("Rabbit ZODIAC SIGN"+ liy);
                document.getElementById("A").innerHTML = "Rabbit ZODIAC SIGN"+ liy;
                break;
            case 1976: case 1988: case 2000: case 2012: case 2024:
                alert("Dragon ZODIAC SIGN"+ liy);
                console.log("Dragon ZODIAC SIGN"+ liy);
                document.getElementById("A").innerHTML = "Dragon ZODIAC SIGN"+ liy;
                break;
            case 1977: case 1989: case 2001: case 2013: case 2025:
                alert("Snake ZODIAC SIGN"+ liy);
                console.log("Snake ZODIAC SIGN"+ liy);
                document.getElementById("A").innerHTML = "Snake ZODIAC SIGN"+ liy;
                break;
            case 1978: case 1990: case 2002: case 2014: case 2026:
                alert("House ZODIAC SIGN"+ liy);
                console.log("House ZODIAC SIGN"+ liy);
                document.getElementById("A").innerHTML = "House ZODIAC SIGN"+ liy;
                break;
            case 1979: case 1991: case 2003: case 2015: case 2027:
                alert("Sheep ZODIAC SIGN"+ liy);
                console.log("Sheep ZODIAC SIGN"+ liy);
                document.getElementById("A").innerHTML = "Sheep ZODIAC SIGN"+ liy;
                break;
            case 1980: case 1992: case 2004: case 2016: case 2028:
                alert("Monkey ZODIAC SIGN"+ liy);
                console.log("Monkey ZODIAC SIGN"+ liy);
                document.getElementById("A").innerHTML = "Monkey ZODIAC SIGN"+ liy;
                break;
            case 1981: case 1993: case 2005: case 2017: case 2029:
                alert("Rooster ZODIAC SIGN"+ liy);
                console.log("Rooster ZODIAC SIGN"+ liy);
                document.getElementById("A").innerHTML = "Rooster ZODIAC SIGN"+ liy;
                break;
            case 1982: case 1994: case 2006: case 2018: case 2030:
                alert("Dog ZODIAC SIGN"+ liy);
                console.log("Dog ZODIAC SIGN"+ liy);
                document.getElementById("A").innerHTML = "Dog ZODIAC SIGN"+ liy;
                break;
            case 1983: case 1995: case 2007: case 2019: case 2031:
                alert("Pig ZODIAC SIGN"+ liy);
                console.log("Pig ZODIAC SIGN"+ liy);
                document.getElementById("A").innerHTML = "Pig ZODIAC SIGN"+ liy;
                break;
            default:
                alert("ERROR ZODIAC SIGN"+ liy);
                console.log("ERROR ZODIAC SIGN"+ liy);
                document.getElementById("A").innerHTML = "ERROR ZODIAC SIGN"+ liy;
    }
}
myZodiact(year,"I Love You");