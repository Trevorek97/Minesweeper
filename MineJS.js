
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

function showTableA(tab,size)
{
    var i,j;
    var idmine =0;
    for(i=0;i<size;i++)
    {
        for (j = 0; j < size; j++)
        {
            //document.write(tab[i][j] + ' ');

           // document.write("<div class='minefield' id='1mine" + idmine + "'>" + tab[i][j] + "</div>");
            document.write("<div class='minefield' id='idmine'>" + tab[i][j] + "</div>");
            idmine++;
        }
//        document.write("<br/>");
    }
}

