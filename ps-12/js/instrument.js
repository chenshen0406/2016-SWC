  var C = 2;
  var count = C;

  function blink1() {
  count--;
  var img = document.getElementById("bb");

  img.src = "img/1.png";
  if (count < 0) {
              count = C;
              return;
              } else {
              setTimeout(blink2, 500);
              }


              }

              function blink2() {
              var img = document.getElementById("bb");
              img.src = "img/4.png";
              setTimeout(blink1, 500);
              }

              function eyebrow1() {
count--;
              var img = document.getElementById("bb");
              img.src = "img/1.png";
              if (count < 0) {
                          count = C;
                          return;
                          } else {
                          setTimeout(eyebrow2, 500);
                          }
                          }

                          function eyebrow2() {
                          var img = document.getElementById("bb");
                          img.src = "img/5.png";
                          setTimeout(eyebrow1, 500);
                          }
