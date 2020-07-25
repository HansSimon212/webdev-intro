// If the user confirms her purchase, reflect that their order
// has been placed successfully.  Removes confirm button.
document.getElementById('confirm_button').onclick = function () {
    document.getElementById('confirm_prompt').innerHTML = 'Order Placed Successfully!'
    document.getElementById("confirm_button").style.display = "none";
}
