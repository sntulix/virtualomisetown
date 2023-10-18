function openInformationDialog() {
    console.log("Dialog_open");
    if (!document.getElementById('dialog_container')) {
        console.log("new Dialog_open");
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

        let box = document.createElement('div');
        let tmp = document.createElement('p');

        let title = document.createElement('h1');
        title.innerText = "Virtual Omise Town";
        box.appendChild(title);
        tmp.innerText = "https://github.com/sntulix/virtualomisetown";
        box.appendChild(tmp);
        frame.appendChild(box);

        box = document.createElement('div');
        title = document.createElement('h2');
        title.innerText = "using OpenSources";
        box.appendChild(title);

        tmp = document.createElement('div');
        tmp.innerText = "A-Frame [Mit License] https://aframe.io/";
        box.appendChild(tmp);
        frame.appendChild(box);

        tmp = document.createElement('div');
        tmp.innerText = "Flask [BSD 3-Clause License] https://flask.palletsprojects.com/";
        box.appendChild(tmp);
        frame.appendChild(box);

        tmp = document.createElement('div');
        tmp.innerText = "Flask-SocketIO [MIT License] https://flask-socketio.readthedocs.io/en/latest/";
        box.appendChild(tmp);
        frame.appendChild(box);

        container.appendChild(frame);
        document.body.appendChild(container);
    }
}