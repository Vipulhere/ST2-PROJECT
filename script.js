const queryBtn = document.getElementById("btn");

queryBtn.addEventListener("click", function () {
let inputvalue = document.getElementById("input").value;

    if (!(inputvalue > 9999) || !(inputvalue < 100000)) {
        alert("Please Enter a 5 Digit Number!")
    }
    else {
        console.log("hello")

        sum = 0;

        while (inputvalue) {
            sum += inputvalue % 10;
            inputvalue = Math.floor(inputvalue / 10);
        }
        console.log(sum)
        let borderRadius = sum / 5
        console.log(borderRadius)
        let square = document.getElementById("square")
        square.style.height = `${sum}px`;
        square.style.width = `${sum}px`;
        square.style.backgroundColor = "white";
        square.style.borderRadius = `${sum / 5}px`;
    }
});

input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      document.getElementById("btn").click();
    }
  });