jquery.modalmsg provides an easy API interface for using modal dialogs to help users be patient by letting them know what is happening.

Provide HTML for the dialog:
    <div id="ModalMessage" class="hide">
        <center style="padding: 25px;"><img src="/communications/Content/images/ajax-loader-15px.gif" src="...loading..." /></center>
    </div>
	
Setting a message will open the dialog:
    $("#ModalMessage").modalmsg("Loading something...");
	
Setting another message will update the dialog:
    $("#ModalMessage").modalmsg("Reticulating splines...");
	
Close the modal message like so:
    $("#ModalMessage").modalmsg("close");

  