class dialog {
    
    constructor(options) {
        this.overlay = null;
        this.dialog = null;
        this.dialogText = null;
        this.initDialog(options);
    }
    initDialog(options) {
        this.overlay = document.createElement("div");
        this.dialog = document.createElement("div");
        this.dialogText = document.createElement("p");
        this.overlay.className = "overlay";
        this.dialog.className = "dialog";
        this.dialogText.className = "dialog-text";
        this.dialogText.innerText = options.text || '';
        this.overlay.append(this.dialog);
        this.dialog.append(this.dialogText);
        document.body.appendChild(this.overlay);
        this.overlay.onclick = () => {
            this.close();
            options.onClose && options.onClose();
        }
        this.dialog.onclick = (event) => {
            event.stopPropagation();
        }        
        this.overlay.style = "display:none";
    }
    show() {
        this.overlay.style = "display:flex";
    }
    close() {
        this.overlay.style = "display:none";
        this.overlay = null;
    }

}

class dialogButton {
    constructor(options) {
        this.button = document.createElement("button");
        this.button.className = options.className || 'confirm-button';
        this.button.innerText = options.buttonText || '确定';
        this.button.onclick = options.clickCallback;
    }
}

class alertDialog extends dialog {
    constructor(options) {
        super(options);
        this.button = null;
        this.buttonContain = null;
        this.initConfirmButton(options);
    }
    initConfirmButton(options) {
        this.buttonContain = document.createElement("div");
        this.buttonContain.className = "button-contain";
        if( options.confirmButton ) {
            this.button = new dialogButton(options.confirmButton).button;
            this.buttonContain.append(this.button);
        }
        this.dialog.append(this.buttonContain);
    }
}

class confirmDialog extends alertDialog {
    constructor(options) {
        super(options);
        this.cancelButton = null;
        this.initCancelButton(options);
    }
    initCancelButton(options) {
        if( options.cancelButton ) {
            this.cancelButton = new dialogButton(options.cancelButton).button;
            this.buttonContain.prepend(this.cancelButton);
        }
    }
}
