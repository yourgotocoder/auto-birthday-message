const birthdayMessageGenerator = (name, message) => {
    return `
        <style>
            @import url("https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap");
            @import url("https://fonts.googleapis.com/css2?family=Arvo:wght@700&family=Dancing+Script&display=swap");
            .outer-line {
                padding: 2px;
                border: 2px solid rgb(108, 170, 15);
                max-width: 405px;
                margin: 0 auto;
                margin-bottom: 250px;
            }
            .main-card {
                max-width: 400px;
                border: 2px solid rgb(108, 170, 15);
                text-align: center;
                height: 380px;
                display: grid;
                grid-row: 35% 65%;
                margin: 0 auto;
                padding: 6px 7px;
            }
            .opening-greeting {
                font-family: "Arvo", serif;
                color: royalblue;
            }
            .name {
                font-size: 1.8rem;
                font-family: "Dancing Script", cursive;
                font-style: italic;
            }
            .header {
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 1.6rem;
                flex-direction: column;
            }
            .content {
                font-style: italic;
                font-family: "Dancing Script", cursive;
                color: black;
                font-size: larger;
            }
            .closing-message {
                display: flex;
                justify-content: space-between;
            }
        </style>
        <div class="outer-line">
        <div class="main-card">
            <div class="header">
            <h1 class="opening-greeting">Happy Birthday</h1>
            <h2 class="name">${name}</h2>
            </div>
            <div class="content">
            <p class="opening-message">
                ${message}
            </p>
            <p class="closing-message">
                <span>Best Regards,</span> <span>CSE Department, SMIT.</span>
            </p>
            </div>
        </div>
        </div>
        <div
        style="
            font-family: Calibri, Arial, Helvetica, sans-serif;
            font-size: 12pt;
            color: rgb(0, 0, 0);
        "
        >
        <span
            style="
            font-family: georgia, serif;
            font-size: 12pt;<style>
            @import url("https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap");
            @import url("https://fonts.googleapis.com/css2?family=Arvo:wght@700&family=Dancing+Script&display=swap");
            .outer-line {
                padding: 2px;
                border: 2px solid rgb(108, 170, 15);
                max-width: 405px;
                margin: 0 auto;
            }
            .main-card {
                max-width: 400px;
                border: 2px solid rgb(108, 170, 15);
                text-align: center;
                height: 380px;
                display: grid;
                grid-row: 35% 65%;
                margin: 0 auto;
                padding: 6px 7px;
            }
            .opening-greeting {
                font-family: "Arvo", serif;
                color: royalblue;
            }
            .name {
                font-size: 1.8rem;
                font-family: "Dancing Script", cursive;
                font-style: italic;
            }
            .header {
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 1.6rem;
                flex-direction: column;
            }
            .content {
                font-style: italic;
                font-family: "Dancing Script", cursive;
                color: black;
                font-size: larger;
            }
            .closing-message {
                display: flex;
                justify-content: space-between;
            }
        </style>
        <div class="outer-line">
        <div class="main-card">
            <div class="header">
            <h1 class="opening-greeting">Happy Birthday</h1>
            <h2 class="name">${name}</h2>
            </div>
            <div class="content">
            <p class="opening-message">
                ${message}
            </p>
            <p class="closing-message">
                <span>Best Regards,</span> <span>CSE Department, SMIT.</span>
            </p>
            </div>
        </div>
        </div>
        <div
        style="
            font-family: Calibri, Arial, Helvetica, sans-serif;
            font-size: 12pt;
            color: rgb(0, 0, 0);
        "
        >
        <span
            style="
            font-family: georgia, serif;
            font-size: 12pt;
            color: rgb(0, 111, 201);
            background-color: rgba(0, 0, 0, 0);
            "
            >Dr. Dhruba Ningombam</span
        >
        </div>
        <div
        style="
            font-family: Calibri, Arial, Helvetica, sans-serif;
            font-size: 12pt;
            color: rgb(0, 0, 0);
        "
        >
        <span
            style="
            font-family: georgia, serif;
            font-size: 12pt;
            color: rgb(0, 111, 201);
            background-color: rgba(0, 0, 0, 0);
            "
            >Alumni Coordinator CSE Dept, SMIT</span
        >
        </div>
        <div
        style="
            font-family: Calibri, Arial, Helvetica, sans-serif;
            font-size: 12pt;
            color: rgb(0, 0, 0);
        "
        >
        <span
            style="
            font-family: georgia, serif;
            font-size: 12pt;
            color: rgb(0, 111, 201);
            background-color: rgba(0, 0, 0, 0);
            "
            >Assistant Professor(Selection Grade)</span
        >
        </div>
        <div
        style="
            font-family: Calibri, Arial, Helvetica, sans-serif;
            font-size: 12pt;
            color: rgb(0, 0, 0);
        "
        >
        <span
            style="
            font-family: georgia, serif;
            font-size: 12pt;
            color: rgb(0, 111, 201);
            background-color: rgba(0, 0, 0, 0);
            "
            >Department of Computer Science and Engineering</span
        >
        </div>
        <div
        style="
            font-family: Calibri, Arial, Helvetica, sans-serif;
            font-size: 12pt;
            color: rgb(0, 0, 0);
        "
        >
        <span
            style="
            font-family: georgia, serif;
            font-size: 12pt;
            color: rgb(0, 111, 201);
            background-color: rgba(0, 0, 0, 0);
            "
            >Sikkim Manipal Institute of Technology</span
        >
        </div>
        <div
        style="
            font-family: Calibri, Arial, Helvetica, sans-serif;
            font-size: 12pt;
            color: rgb(0, 0, 0);
        "
        >
        <span
            style="
            font-family: georgia, serif;
            font-size: 12pt;
            color: rgb(0, 111, 201);
            background-color: rgba(0, 0, 0, 0);
            "
            >Majhitar, Rangpo, E-Sikkim, 737136, Sikkim</span
        >
        </div>
        <div
        style="
            font-family: Calibri, Arial, Helvetica, sans-serif;
            font-size: 12pt;
            color: rgb(0, 0, 0);
        "
        >
        <span
            style="
            font-family: georgia, serif;
            font-size: 12pt;
            color: rgb(0, 111, 201);
            background-color: rgba(0, 0, 0, 0);
            "
            >Phone: +913592246219 Extn. 348(O), 608(R)</span
        >
        </div>
        <div
        style="
            font-family: Calibri, Arial, Helvetica, sans-serif;
            font-size: 12pt;
            color: rgb(0, 0, 0);
        "
        >
        <span
            style="
            font-family: georgia, serif;
            font-size: 12pt;
            color: rgb(0, 111, 201);
            background-color: rgba(0, 0, 0, 0);
            "
            >Mobile: 9635527577</span
        >
        </div>  
            color: rgb(0, 111, 201);
            background-color: rgba(0, 0, 0, 0);
            "
            >Dr. Dhruba Ningombam</span
        >
        </div>
        <div
        style="
            font-family: Calibri, Arial, Helvetica, sans-serif;
            font-size: 12pt;
            color: rgb(0, 0, 0);
        "
        >
        <span
            style="
            font-family: georgia, serif;
            font-size: 12pt;
            color: rgb(0, 111, 201);
            background-color: rgba(0, 0, 0, 0);
            "
            >Alumni Coordinator CSE Dept, SMIT</span
        >
        </div>
        <div
        style="
            font-family: Calibri, Arial, Helvetica, sans-serif;
            font-size: 12pt;
            color: rgb(0, 0, 0);
        "
        >
        <span
            style="
            font-family: georgia, serif;
            font-size: 12pt;
            color: rgb(0, 111, 201);
            background-color: rgba(0, 0, 0, 0);
            "
            >Assistant Professor(Selection Grade)</span
        >
        </div>
        <div
        style="
            font-family: Calibri, Arial, Helvetica, sans-serif;
            font-size: 12pt;
            color: rgb(0, 0, 0);
        "
        >
        <span
            style="
            font-family: georgia, serif;
            font-size: 12pt;
            color: rgb(0, 111, 201);
            background-color: rgba(0, 0, 0, 0);
            "
            >Department of Computer Science and Engineering</span
        >
        </div>
        <div
        style="
            font-family: Calibri, Arial, Helvetica, sans-serif;
            font-size: 12pt;
            color: rgb(0, 0, 0);
        "
        >
        <span
            style="
            font-family: georgia, serif;
            font-size: 12pt;
            color: rgb(0, 111, 201);
            background-color: rgba(0, 0, 0, 0);
            "
            >Sikkim Manipal Institute of Technology</span
        >
        </div>
        <div
        style="
            font-family: Calibri, Arial, Helvetica, sans-serif;
            font-size: 12pt;
            color: rgb(0, 0, 0);
        "
        >
        <span
            style="
            font-family: georgia, serif;
            font-size: 12pt;
            color: rgb(0, 111, 201);
            background-color: rgba(0, 0, 0, 0);
            "
            >Majhitar, Rangpo, E-Sikkim, 737136, Sikkim</span
        >
        </div>
        <div
        style="
            font-family: Calibri, Arial, Helvetica, sans-serif;
            font-size: 12pt;
            color: rgb(0, 0, 0);
        "
        >
        <span
            style="
            font-family: georgia, serif;
            font-size: 12pt;
            color: rgb(0, 111, 201);
            background-color: rgba(0, 0, 0, 0);
            "
            >Phone: +913592246219 Extn. 348(O), 608(R)</span
        >
        </div>
        <div
        style="
            font-family: Calibri, Arial, Helvetica, sans-serif;
            font-size: 12pt;
            color: rgb(0, 0, 0);
        "
        >
        <span
            style="
            font-family: georgia, serif;
            font-size: 12pt;
            color: rgb(0, 111, 201);
            background-color: rgba(0, 0, 0, 0);
            "
            >Mobile: 9635527577</span
        >
        </div>    
        `;
}

module.exports = birthdayMessageGenerator;