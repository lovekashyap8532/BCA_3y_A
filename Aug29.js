// Pyramid or Loops

for(let i=1;i<=5;i++){
    for(let j=1;j<=i;j++){
        document.write("*")
    }
    document.write("<br>")
}


for(let i=1;i<=5;i++){
    for(let j=1;j<=i;j++){
        document.write(i)
    }
    document.write("<br>")
}



for(let i=1;i<=5;i++){
    for(let j=1;j<=i;j++){
        document.write(j)
    }
    document.write("<br>")
}



for(let i=1;i<=5;i++){
    for(let j=1;j<=6-i;j++){
        document.write("&nbsp;&nbsp")
    }
    for(let j=1;j<=i;j++){
        document.write("*")
    }
    document.write("<br>")
}




for(let i=1;i<=5;i++){
    for(let j=1;j<=i;j++){
        document.write("&nbsp;&nbsp")
    }
    for(let j=1;j<=2*(6-i)-1;j++){
        document.write("*")
    }
    document.write("<br>")
}







for(let i=1;i<=5;i++){
    for(let j=1;j<=6-i;j++){
        document.write("&nbsp;&nbsp")
    }
    for(let j=1;j<=2*i-1;j++){
        document.write("*")
    }
    document.write("<br>")
}







// Daiamond
for(let i=1;i<=5;i++){
    for(let j=1;j<=6-i;j++){
        document.write("&nbsp;&nbsp")
    }
    for(let j=1;j<=2*i-1;j++){
        document.write("*")
    }
    document.write("<br>")
}
for(let i=1;i<=5;i++){
    for(let j=1;j<=i;j++){
        document.write("&nbsp;&nbsp")
    }
    for(let j=1;j<=2*(6-i)-1;j++){
        document.write("*")
    }
    document.write("<br>")
}
