# modal-dialog-component
a modal_dialog by vanilla javascript

## how to use:

`   <script src="./modal_dialog.js"></script> `

`    <link rel="stylesheet" href="./modal_dialog.css"> `


## params:
```
text: "i am alertDialog",
          confirmButton: {
                    className: "confirm-button",
                    buttonText: "确定",
                    clickCallback: () => {
                        alert("confirm");
                    }
                },
                cancelButton: {
                    className: "cancel-button",
                    buttonText: "取消",
                    clickCallback: () => {
                        alert("cancel");
                    }
                },                
                onClose: () => {
                    alert("close");
                }
            }
 ```
 
## more detail:
see demo.html
