chrome.runtime.onMessage.addListener((obj) => {
    switch (obj.message) {
        case "showAttendance":
            showAttendance();
            break;
        case "hideAttendance":
            hideAttendance();
            break;
        case "fillfeedback":
            fillFeedback();
            break;
        default:
            break;
    }
});

const showAttendance = () => {
    const body = document.querySelector(".table.mb-0 tbody");
    const rows = body.querySelectorAll('tr');

    rows.forEach(row => {
        const lastChild = row.querySelector('td:last-child');
        const maxhrs = row.querySelector('td:nth-child(3)').textContent;
        const prshrs = row.querySelector('td:nth-child(4)').textContent;
        const lastChildValue = lastChild.textContent;
        calcAttendace(lastChild, lastChildValue, maxhrs, prshrs);
    });
}

const calcAttendace = (lastChild, lastChildValue, maxhrs, prshrs) => {
    let lcv = lastChildValue;
    let toadd = 0;

    if (Number(lastChildValue) < 75) {
        lastChild.style.color = 'red';
        toadd = 0;
        while (lcv < 75) {
            prshrs++;
            maxhrs++;
            lcv = (Number(prshrs) * 100) / Number(maxhrs);
            toadd = toadd + 1;
        }
    } else {
        lastChild.style.color = 'green';
        toadd = -1;
        while (lcv >= 75) {
            maxhrs++;
            lcv = (Number(prshrs) * 100) / Number(maxhrs);
            toadd = toadd + 1;
        }
    }
    lastChild.textContent = lastChildValue + " (" + toadd + ")";
}

const hideAttendance = () => {
    const body = document.querySelector(".table.mb-0 tbody");
    const rows = body.querySelectorAll('tr');
    for (var i = 0; i < rows.length - 1; i++) {
        var lastChild = rows[i].querySelector('td:last-child');
        lastChild.style.color = 'black';
        var lastChildValue = lastChild.textContent;
        lastChild.textContent = lastChildValue.split(" ")[0];
    }
}

const fillFeedback = () => {
    const main = document.querySelectorAll("#home");
    const mainTable = main.item(main.length - 1)

    const mainBody = mainTable.querySelector("tbody");
    const mainRows = mainBody.querySelectorAll("tr");

    mainRows.forEach(row => {
        const rowSelect = row.querySelector("select");
        if (rowSelect) {
            rowSelect.value = "5";
        }
    });
}