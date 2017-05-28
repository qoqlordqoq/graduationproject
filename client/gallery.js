Template.pswp.events({
    "click .btn": function() {
      Meteor.call('openPhotoSwipe');
      //document.getElementById('btn').onclick = openPhotoSwipe;

    }
});
Meteor.methods({
openPhotoSwipe: function() {
  var pswpElement = document.querySelectorAll('.pswp')[0];

  // build items array
  var items = [
      {
          src: 'img1.jpg',
          w: 800,
          h: 531
      },
      {
          src: 'img2.jpg',
          w: 800,
          h: 531
      },
      {
          src: 'img3.jpg',
          w: 800,
          h: 531
      },
      {
          src: 'img4.jpg',
          w: 800,
          h: 531
      },
      {
          src: 'img5.jpg',
          w: 800,
          h: 531
      },
      {
          src: 'img6.jpg',
          w: 800,
          h: 531
      },
      {
          src: 'img7.jpg',
          w: 800,
          h: 531
      },
      {
          src: 'img8.jpg',
          w: 800,
          h: 531
      },
      {
          src: 'img9.jpg',
          w: 800,
          h: 531
      },
      {
          src: 'img10.jpg',
          w: 800,
          h: 531
      },
      {
          src: 'img11.jpg',
          w: 800,
          h: 531
      },
      {
          src: 'img12.jpg',
          w: 800,
          h: 531
      },
      {
          src: 'img13.jpg',
          w: 800,
          h: 531
      }

  ];

  // define options (if needed)
  var options = {
           // history & focus options are disabled on CodePen
      history: false,
      focus: false,

      showAnimationDuration: 0,
      hideAnimationDuration: 0

  };

  var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
  gallery.init();
}
});
