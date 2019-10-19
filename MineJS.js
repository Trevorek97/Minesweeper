
function makeTable(tab,size, sign)
{
    var i,j;
    for(i=0;i<size;i++)
    {
        tab[i]= [];
        for(j=0;j<size;j++)
        {
            tab[i][j]=sign;
        }
    }
}


function setMines(tab, size)
{
    var i,j;
    var k=0;
    do
    {
        i = Math.round((Math.random() * (size-1)));
        j = Math.round((Math.random() * (size-1)));

        if (tab[i][j] !== '*')
        {
            tab[i][j] = '*';
            k++;
        }
    } while(k<size);
}

function setNumbers(tab,size)
{
    var i,j, sum;
    for (i = 0; i < size; i++)
    {
        for (j = 0; j < size; j++)
        {
            if (tab[i][j] !== '*')
            {
                sum = 0;
                if (i - 1 >= 0 && j - 1 >= 0 && tab[i - 1][j - 1] === '*') sum += 1; //LG
                if (i - 1 >= 0 && tab[i - 1][j] === '*') sum += 1; //G
                if (i - 1 >= 0 && j + 1 < size && tab[i - 1][j + 1] === '*') sum += 1; //PG
                if (j - 1 >= 0 && tab[i][j - 1] === '*') sum += 1; //L
                if (j + 1 < size && tab[i][j + 1] === '*') sum += 1; //P
                if (i + 1 < size && j - 1 >= 0 && tab[i + 1][j - 1] === '*') sum += 1; //LD
                if (i + 1 < size && tab[i + 1][j] === '*') sum += 1; //D
                if (j + 1 < size && i + 1 < size && tab[i + 1][j + 1] === '*') sum += 1; //PD

                tab[i][j] = sum;
                //if(sum !== 0)
                  //  tab[i][j] = sum;

            }

        }
    }
}

function showTable(tab,size)
{
    var i,j;
    var idmine = 0;
    for(i=0;i<size;i++)
    {
        for (j=0;j<size;j++)
        {
            document.write("<div class = 'minefield' tabindex = '" + idmine + "' id = 'idmine'>" + tab[i][j] + "</div>");
            idmine++;
        }
    }
}


function clickField()
{
    var startTime, stopTime;
    var game=false;
    var start=document.getElementById("startButton");
    start.onclick=function()
    {
      game=true;
      alert("Zaczynamy!");
      startTime = timer();
      start.onclick=function(){};
    };
    var colors=["black", "darkgray", "blue", "green", "red", "darkviolet", "darkred"];
    //game=true;
    var a = document.querySelectorAll("#idmine");
    for(i=0;i<100;i++)
    {
        a[i].onclick=function()
        {
            if(game===true)
            {
                this.style.backgroundColor = colors[1];
                if (this.innerHTML === '*')
                {
                    stopTime=timer();
                    var time = stopTime-startTime;
                    alert("GAME OVER. Czas gry: " + time + " sekund.");
                    game = false;
                    this.style.color = colors[0];
                    this.style.backgroundColor = colors[4];
                }
                else if (this.innerHTML === '0')
                {
                    this.style.color = colors[1];
                    var x = parseInt(this.getAttribute("tabindex"));
                    var tmp = x;

                    do
                    {
                        a[x].style.backgroundColor=colors[1];
                        a[x].style.color=colors[1];
                        x++;

                    }while(a[x].innerHTML === '0');

                    x=tmp;

                    do{
                      a[x].style.backgroundColor=colors[1];
                      a[x].style.color=colors[1];
                      x--;
                    }while(a[x].innerHTML === '0');
                }

                else if (this.innerHTML === '1') this.style.color = colors[2];
                else if (this.innerHTML === '2') this.style.color = colors[3];
                else if (this.innerHTML === '3') this.style.color = colors[4];
                else if (this.innerHTML === '4') this.style.color = colors[5];
                else if (this.innerHTML === '5') this.style.color = colors[6];
                alert(this.getAttribute("tabindex"));
            }
        };
    }
}


function timer()
{
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    return hours*3600 + minutes*60 + seconds;
}