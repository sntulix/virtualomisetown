function Dialog_open(shop_id, player_id) {
    console.log("Dialog_open");
    if (!document.getElementById('dialog_container')) {
        console.log("new Dialog_open");
        console.log("Player:" + player_id + ", " + "open shop: " + shop_id);
        let container = document.createElement('div');
        container.setAttribute('id', 'dialog_container');
        container.setAttribute('class', 'dialog_container');

        let header = document.createElement('div');
        let button = document.createElement('button');
        button.innerText = '閉じる×';
        button.onclick = function () {
            console.log("remove dialog.");
            document.body.removeChild(document.getElementById('dialog_container'));
        }
        header.appendChild(button);
        container.appendChild(header);

        let frame = document.createElement('div');
        frame.setAttribute('class', 'center_container');

        let title = document.createElement('h2');
        title.innerText = "無線部 部室";
        frame.appendChild(title);
//        frame.appendChild(document.createElement('br'));

        let open_button = document.createElement('button');
        open_button.innerText = '入る';
        open_button.onclick = function () {
            console.log("open url.");
            window.location.href = 'https://www.facebook.com/groups/215626544518421';
        }
        frame.appendChild(open_button);

        container.appendChild(frame);
        document.body.appendChild(container);
    }
}