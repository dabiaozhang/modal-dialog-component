# modal-dialog-component
a modal_dialog by vanilla javascript

## how to use:

`   <script src="./modal_dialog.js"></script> `

`    <link rel="stylesheet" href="./modal_dialog.css"> `


## params:
```
text: "custom text"
{
    confirmButton: {
        className: "confirm button class name",
        buttonText: "confirm button inner text",
        clickCallback: () => {
              alert("confirm event");
            }
        },
    cancelButton: {
         className: "cancel button class name",
         buttonText: "cancel button inner text",
         clickCallback: () => {
            alert("cancel event");
         }
    },                
    onClose: () => {
       alert("close event");
    }
}
 ```
 
## more detail:
see demo.html
