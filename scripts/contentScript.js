chrome.runtime.onMessage.addListener((obj, sender, sendResponse) => {
    if (obj.act == "disp"){
        const body = document.querySelector(".table.mb-0 tbody");
        const rows = body.querySelectorAll('tr');
        for (var i = 0; i < rows.length - 1; i++) {
            var lastChild = rows[i].querySelector('td:last-child');
            var maxhrs = rows[i].querySelector('td:nth-child(3)').textContent;
            var prshrs = rows[i].querySelector('td:nth-child(4)').textContent;
            var lastChildValue = lastChild.textContent;
            if(Number(lastChildValue) < 75){
                lastChild.style.color = 'red';
                let toadd = 0;
                let lcv = lastChildValue;
                while(lcv < 75){
                    prshrs++;
                    maxhrs++;
                    lcv = (Number(prshrs)*100)/Number(maxhrs);

                    toadd = toadd + 1;
                }
                lastChild.textContent = lastChildValue +" ("+ toadd + ")"; 
            }
            else{
                lastChild.style.color = 'green';
                let lcv = lastChildValue;
                let toadd = -1;
                while(lcv >= 75){
                    maxhrs++;
                    lcv = (Number(prshrs)*100)/Number(maxhrs);
                    toadd = toadd + 1;
                }
                lastChild.textContent = lastChildValue +" ("+ toadd + ")"; 
            }
        }
    }
    else if(obj.act == "hide"){
        const body = document.querySelector(".table.mb-0 tbody");
        const rows = body.querySelectorAll('tr');
        for (var i = 0; i < rows.length - 1; i++) {
            var lastChild = rows[i].querySelector('td:last-child');
            lastChild.style.color = 'black';
            var lastChildValue = lastChild.textContent;
            lastChild.textContent = lastChildValue.split(" ")[0];
        }
    }

}); 