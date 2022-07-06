var SUPPORT_HTML = null;

mp.keys.bind(0x74, true,function(){
    setTimeout(async () => {
        mp.gui.cursor.visible = true;
    }, 0);
    if(!SUPPORT_HTML){
        SUPPORT_HTML =  mp.browsers.new('package://Support/ui.html')
        SUPPORT_HTML.execute(`discord("${webhook}");`)
    } else if(SUPPORT_HTML){
        SUPPORT_HTML.destroy();
        SUPPORT_HTML = null;
        setTimeout(async () => {
            mp.gui.cursor.visible = false;
        }, 0);
    }
});

mp.events.add('startsupport', player =>{
    mp.gui.chat.push('Deine Anfrage wurde gesendet!')
    SUPPORT_HTML.destroy();
    SUPPORT_HTML = null;
    mp.gui.cursor.show(false,false);
    
});

