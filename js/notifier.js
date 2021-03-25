let toastWrap = document.getElementById("toasts-here");
let exampleHtml = `<div class="content-wrapper">
Ödeme işleminiz başarıyla gerçekleşmiştir. <br>
Sorgu No : 1283185
</div>`
let exampleAlarm = [
    alarm = {
        name: "XRP (XRP)",
        link: "#",
        status: "decrease",
        percentage: "-10,26%",
        value: "-$0,4686",
        time: "18:17"
    },
    alarm = {
        name: "Bitcoin (BTC)",
        status: "increase",
        percentage: "-10,26%",
        value: "-$0,4686",
        time: "18:17"
    }
];

let exampleUser = [
    comment = {
        name: "Ahmet Kripto",
        profileLink: "#",
        commentLink: "#",
    },
    comment = {
        name: "Mehmet Kripto",
        profileLink: "#",
        commentLink: "#",
    }
]

function notifNormal(htmlMessage) {
    normalToast = `<div class="toast showing mt-3 p-1" role="alert" aria-live="assertive" aria-atomic="true">
    <div class="toast-body">
        <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
        <div class="content-wrapper">
            ${htmlMessage}
        </div>
        <div class="btn-wrapper">
            <button class="btn btn-success">TAMAM</button>
        </div>
    </div>
</div>`
    toastWrap.innerHTML += normalToast;
    return true;
}


function notifAlarm(alarmArray) {
    for (let i = 0; i < alarmArray.length; i++) {
        function checkStatus() {
            if (alarmArray[i].status === "decrease") {
                return "düştü";
            } else {
                return "arttı"
            }
        }


        alarmToast = `<div class="toast alarm showing mt-3 p-1" role="alert" aria-live="assertive" aria-atomic="true">
        <div class="toast-body">
            <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
            <p class="toast-heading">Alarm Bildirimleri</p>
            <div class="alarm-wrapper">
                <p><span class="text-primary fw-bold"><a href="${alarmArray[i].link}">${alarmArray[i].name}</a></span> ${checkStatus()} <span
                        class="text-danger fw-bold">${alarmArray[i].percentage}
                    </span>${alarmArray[i].value} <br><span class="text-muted">izleme listesi - ${alarmArray[i].time}</span></p>
            </div>
            <div class="btn-wrapper">
                <button class="btn btn-success">TAMAM</button>
            </div>
        </div>
    </div>`;
        toastWrap.innerHTML += alarmToast;
    }
    return true;
}

function notifUser(commentArray) {
    for (let i = 0; i < commentArray.length; i++) {
        userToast = `<div class="toast notif-user showing mt-3 p-1" role="alert" aria-live="assertive" aria-atomic="true">
    <div class="toast-body">
        <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
        <p class="toast-heading">Kullanıcı Bildirimleri</p>
        <div class="alarm-wrapper">
            <p><span class="text-primary fw-bold"><a href="${commentArray[i].profileLink}">${commentArray[i].name}</a></span> cevap yazdı. <span
                    class="text-success fw-bold"><a href="${commentArray[i].commentLink}">hemen git</a>
                </span><br><span class="text-muted">bir saat önce</span></p>
        </div>
        <div class="btn-wrapper">
            <button class="btn btn-success">TAMAM</button>
        </div>
    </div>
</div>`;
        toastWrap.innerHTML += userToast;
    }
    return true;
}