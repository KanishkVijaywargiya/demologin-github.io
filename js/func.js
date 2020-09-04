function validate() {
    var srn = document.getElementById("srn_check").value;
    console.log('srn:', srn);

    var failed = document.getElementById('failed');
    var success = document.getElementById('success');

    var hideSuccess = function () {
        success.style.display = "none";
    };
    var hideFailed = function () {
        failed.style.display = "none";
    };

    if (
        srn.search(/^[A-Z a-z]+[0-9]+[0-9]+[A-Z a-z]+[A-Z a-z]+[0-9]+[0-9]+[0-9]+$/) == -1 ||
        srn.length != 8) {
        failed.style.display = "block";
        setTimeout(() => { hideFailed() }, 3000); // 3 seconds
    } else {
        success.style.display = "block";
        setTimeout(() => { hideSuccess() }, 3000); // 3 seconds
    }
};
