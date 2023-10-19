function openInformationDialog() {
    console.log("Dialog_open");
    if (!document.getElementById('license_container')) {
        console.log("new Dialog_open");
        let container = document.createElement('div');
        container.setAttribute('id', 'license_container');
        container.setAttribute('class', 'license_container');

        let header = document.createElement('div');
        let button = document.createElement('button');
        button.innerText = '閉じる×';
        button.onclick = function () {
            console.log("remove dialog.");
            document.body.removeChild(document.getElementById('license_container'));
        }
        header.appendChild(button);
        container.appendChild(header);

        let frame = document.createElement('div');
        frame.setAttribute('class', 'center_container');

        let box = document.createElement('div');
        let tmp;

        let title = document.createElement('h1');
        title.innerText = "Virtual Omise Town";
        box.appendChild(title);
        tmp = document.createElement('div');
        tmp.innerText = "MIT License\n" +
            "\n" +
            "Copyright (c) 2023 shizu\n" +
            "\n" +
            "Permission is hereby granted, free of charge, to any person obtaining a copy\n" +
            "of this software and associated documentation files (the \"Software\"), to deal\n" +
            "in the Software without restriction, including without limitation the rights\n" +
            "to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n" +
            "copies of the Software, and to permit persons to whom the Software is\n" +
            "furnished to do so, subject to the following conditions:\n" +
            "\n" +
            "The above copyright notice and this permission notice shall be included in all\n" +
            "copies or substantial portions of the Software.\n" +
            "\n" +
            "THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n" +
            "IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n" +
            "FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n" +
            "AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n" +
            "LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n" +
            "OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\n" +
            "SOFTWARE.";
        box.appendChild(tmp);
        tmp = document.createElement('div');
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