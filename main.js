const mainElement = document.querySelector('main')
let coin = {
    state: 0,
    flip: function () {

        /* 1. Randomly set your coin object's "state" property to be either 
           0 or 1: use "this.state" to access the "state" property on this object.*/

        if (Math.random() < 0.5) {
            this.state = 0;
        } else {
            this.state = 1;
        }
    },

    /* 2. Return the string "Heads" or "Tails", depending on whether
       "this.state" is 0 or 1. */

    toString: function () {

        if (this.state === 0) {

            return "head";
        } else {
            return "tail"
        }
    },

    /* 3. Set the properties of this image element to show either face-up
    or face-down, depending on whether this.state is 0 or 1.*/

    toHTML: function (image) {
        image = document.createElement("img");
        img.src = "./images/Head.jpg";
        var src = document.getElementById("image")
        src.appendChild(img)
        return image
    },

    toHTML: function (image) {
        var img = document.createElement("img");
        img.src = "./images/tail.jpg";
        var src = document.getElementById("image")
        src.appendChild(img)
        return image
    }
}

//Write a function called display20Flips that uses a loop to flip the coin 20 times.
// Each time the coin flips, display the result of each flip as a string on the page 
//(make use of your toString() method)

var timesFlipped = 0;
function display20Flips(head, tail) {
    this.head = head
    this.tail = tail
}
display20Flips.prototype.toString = function display20Flips() {
}
display20Flips = 20

for (let i = 0; i < 1; i++) {
    this.state = Math.floor(Math.random() * 20)
}

//Write a function called display20Images, again using a loop to flip the coin 20 times…but 
//this time instead of displaying the result as a string, display the result of 
//each flip as an HTML IMG element on the page (make use of your toHTML() method).

var timesFlipped = 0;
function display20Images(head, tail) {
    this.head = head
    this.tail = tail
}
display20Images.innerHTML = function display20Images() {
}
display20Flips = 20

for (let i = 0; i < 1; i++) {
    this.state = Math.floor(Math.random() * 20)
}
