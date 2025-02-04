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
});
