function showBalloon() {
  var wObjballoon = document.getElementById("makeImg");
  if (wObjballoon.className == "balloon1") {
    wObjballoon.className = "balloon";
  } else {
    wObjballoon.className = "balloon1";
  }
}
/*
document.addEventListener(
  "DOMContentLoaded",
  function () {
    var wObjballoonO = document.getElementById("balloonU");
    wObjballoonO.addEventListener(
      "mouseout",
      () => {
        var wObjballoon2 = document.getElementById("makeImg");
        wObjballoon2.className = "balloon1";
      },
      false
    );
  },
  false
);
*/
