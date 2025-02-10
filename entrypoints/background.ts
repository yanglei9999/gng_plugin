import api from './api/Api';

export default defineBackground(() => {
    console.log('Hello background!', { id: browser.runtime.id });
    browser.sidePanel.setPanelBehavior({ openPanelOnActionClick: true });

    // browser.action.onClicked.addListener(() => {
    //     console.log('Action clicked!');
        
    //     browser.tabs.query({url: browser.runtime.getURL("/newtab.html")}).then(tabs => {
    //         console.log('Tabs:', tabs);
    //         if (tabs.length >= 1) {
    //             const tab = tabs[0];
    //             if (tab.id !== undefined) {
    //                 console.log('Activating tab:', tab.id);
    //                 browser.tabs.update(tab.id, { active: true });
    //             }
    //             else {
    //                 console.error('Tab ID is undefined:', tab);
    //             }
    //         }
    //         else {
    //             browser.tabs.create({ url: './newtab.html' });
    //         }
    //     });

    // });


    browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
        console.log('Message received:', request, sender,sendResponse);


        api.login('yanglei9999', 'Yanglei2539096!!').then(data => {
            console.log('Login:', data);
            sendResponse(data);
        })


        // const params = {"username":"yanglei9999","password":"Yanglei2539096!!","captcha":"","returnUrl":""}

        // fetch('https://gng.daouoffice.com/api/login', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(params)
        // }).then(response => response.json()).then(data => {
        //     console.log('Success:', data)
        //     sendResponse(data)
        // })



        // const response = await fetch("https://gng.daouoffice.com/api/login");
        // const text = await response.text();
        // const cookies = response.headers.get('set-cookie');
        //
        // console.log('Response:', text, cookies);

        // sendResponse({
        //     response: text,
        //     cookies: cookies
        // });

        return true;
    });


});
