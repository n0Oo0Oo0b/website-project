const DATA = {
    "Internet": "The network of computers that are interconnected around the world.",
    "ISP": "An organization that provides connection to the internet (usually for a paid fee). Short for 'Internet Service Provider'.",
    "NIC": "Small chips embedded into computers that allows it to connect to a computer network. Short for 'Network Interface Card'.",
    "URL": "It is a refrence that points to the location of a certain resource. Short for 'Uniform Resource Locator'.",
    "Web Browser": "An application that allows the user to traverse the web.",
    "Modem": "A device that connects a home to to the ISP. It converts between ISP signals and local signals",
    "Client": "The user-side of the web. Usually refers to the web browser running in the user's machine.",
    "Server": "Massive hubs that store the websites that make up the web. These websites are then accessed by the client on request",
    "Packet": "Information that is sent around the web to transfer data. They each carry small (fixed) amounts of data.",
    "Cookie": "A system to keep track of which user is who. Once it is given, it can be used to track the user and act accordingly.",
    "Protocol": "A set of rules that controls how data should be transferred over a certain medium.",
    "HTTP(S)": "A protocol for sending hypertext across the web. HTTPS is encrypted and more secure. Short for 'HyperText Transfer Protocol (Secure)",
    "IP Address": "An address that is used to identify a certain device in a network. Short for 'Internet Protocol Address'.",
    "MAC Address": "An address assigned to a NIC for use as a network address. Short for 'Media Access Control Address'.",
    "HTML": "A markup language used to build webpages (not a programming language). Short for 'HyperText Markup Language'",
    "CSS": "A stylesheet language used in conjunction with HTML for the presentation of the webpage. Short for 'Cascading Style Sheet'",
    "Hub": "A device used to connect the parts of a Local Area Network (such as a Wi-Fi router).",
    "Switch": "A type of a hub used for wired networks (see LAN). Usually connected through ethernet.",
    "LAN": "A network that connects local devices to one place. Short for 'Local Area Network'.",
    "WAN": "A network of LANs that span a large geographical area. Short for 'Wide Area Network'."
};
const terms = Object.keys(DATA);
let $table;
let idName = (n) => {
    return n.toLowerCase().replace(' ', '-');
};

$(() => {
    $table = $('#glossary-table');
    for (let [k, v] of Object.entries(DATA)) {
        for (let i=0; i<terms.length; i++) {
            kw = terms[i];
            let idx = v.toLowerCase().indexOf(kw.toLowerCase());
            if (idx !== -1) {
                let middle = `<span class="definition" style="text-decoration:underline;">${v.substring(idx, idx+kw.length)}</span>`
                v = v.substring(0, idx) + middle + v.substring(idx+kw.length, v.length);
            }
        }
        
        $(`<tr id="${idName(k)}">`)
            .append($(`<td>${k}</td>`))
            .append($(`<td>${v}</td>`))
            .appendTo($table);
    }

    for (const $e of $('.definition')) {
        $e.onclick = () => {
            $('#' + idName($e.innerText))[0].style.animation = '';
            $('#' + idName($e.innerText))[0].style.animation = 'flash 0.8s linear';
        };
    }
});