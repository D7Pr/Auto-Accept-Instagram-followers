
setInterval(() => {
    var connection = document.querySelectorAll("._acas");

    for(let i=0;i<connection.length;i++)
    {        
        if(connection[i].innerText=="Confirm")
        {       
            connection[i].click();
        }
    }

}, 2000);