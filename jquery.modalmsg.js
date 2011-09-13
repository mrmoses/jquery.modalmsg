//args = [{}] (options object)
//args = [title] (title string)
//args = [title,html] (title string, html string)
jQuery.fn.modalmsg = function(options) {
    var t = this;
    var doclose = false;
    
    if(arguments.length == 2) {
    	title = options; //title string
    	html = arguments[1]; //html string
    } else if(typeof options == "string") {
	    if (options == "close") {
	        doclose = true;
	    } else {
			title = options;//title string
	    }
    } else {
		title = options.title;//title string
		html = options.html;
    }
	
	//initialize dialog if necessary
	if(!t.is(":data(dialog)")) {
		//create the dialog
		t.dialog({
			modal: true,
			resizable: false,
			draggable: false,
			title: msg,
			autoOpen: !doclose //if creating the dialog but msg was "close" dont open it
		});
		//remove the close link
		t.prev().find(".ui-dialog-titlebar-close").remove();
	}

    //if no msg is provided, use "Please wait..." as default
    var msg = title || "Please wait...";

    //detect if the dialog is open, closed, or undefined
    switch (t.dialog("isOpen")) {
        case true: //if its open
            //and msg is "close", then close it
            if (doclose) {
                t.dialog("close");
            } else { //else update the msg
                $("#ui-dialog-title-" + t.attr("id")).text(msg);
            }
            break;
        case false: //if its closed
            //and msg is "close", then do nothing
            //if msg is not "close", update msg and open it
            if (!doclose) {
                $("#ui-dialog-title-" + t.attr("id")).text(msg);
                t.dialog("open");
            }
            break;
    }
};