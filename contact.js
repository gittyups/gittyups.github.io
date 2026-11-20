// The address is not in the page source in any readable form. It is stored reversed and
// XOR-encoded, and decoded only when a person presses the button (a real, trusted click).
(function () {
  var codes = [122,120,116,57,100,114,114,101,116,114,115,58,100,99,126,101,96,87,99,101,120,103,103,98,100];
  var key = 23;
  var button = document.getElementById("contact-reveal");
  var box = document.getElementById("contact");
  var link = document.getElementById("contact-link");
  if (!button || !box || !link) return;
  button.hidden = false;
  button.addEventListener("click", function (event) {
    if (!event.isTrusted) return;
    var address = codes.map(function (c) { return String.fromCharCode(c ^ key); }).reverse().join("");
    link.textContent = address;
    link.href = "mail" + "to:" + address;
    box.hidden = false;
    button.hidden = true;
  });
})();
