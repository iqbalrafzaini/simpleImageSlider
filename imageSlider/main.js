var prev = document.getElementById('previous');
var next = document.getElementById('next');

var arr = ['image/img-1.png', 'image/img-2.png', 'image/img-3.png', 'image/img-4.png', 'image/img-5.png', 'image/img-6.png', 'image/img-7.png'];

var i = 0;

// next
next.addEventListener('click', function () {
  i++;
  if (i > arr.length - 1) {
    i = 0;
  }
  document.getElementById('image').src = arr[i];
});

prev.addEventListener('click', function () {
  i--;
  if (i < 0) {
    i = arr.length - 1;
  }
  document.getElementById('image').src = arr[i];
});
