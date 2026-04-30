function calculate() {
    let area = document.getElementById("area").value;
    let yieldValue = document.getElementById("yield").value;

    if (area === "" || yieldValue === "") {
        document.getElementById("result").innerHTML =
            "Please enter all values";
        return;
    }

    let total = area * yieldValue;

    document.getElementById("result").innerHTML =
        "Total Production: " + total + " kg";
}