/*meteor add accounts-ui accounts-password eklendi (Login İçin)*/
/*meteor remove insecure silindi (Siteyi daha güvenlikli yapmak için.)*/
/*meteor remove autopublish silindi (Direk taskları paylaşmamak için.)*/
/*meteor add session eklendi (Session kullanabilmek için.)*/
/*meteor add accounts-facebook eklendi(Facebook Login için.)*/
/*meteor add spectrum:photoswipe eklendi(Gallery için.)*/
/*meteor add twbs:bootstrap eklendi(Bootstrap için)*/
/*meteor add iron:router eklendi(Link geçişleri için - Yeni Proje yaratıldığında contact collectionunu iki kere yazılmış sayıyor.. -)*/
/*meteor add email eklendi (email için)*/
/*meteor add simple:reactive-method (helpers da method çağırmak için)*/
/*meteor add chriswessels:slideout (sol menu)*/
Contact = new Mongo.Collection('contact');

Meteor.subscribe('contact');

Template.comment.helpers({
  showComment: function(){
    return Contact.find({}, {sort: {createdAt: -1}});
  },

  isAdmin: function(){
    if(Meteor.userId() == "iX2mwvmdAWHMvtdeM"){
      return true;
    }else{
      return false;
    }
  },
});

Template.comment.events({
  "click .add-comment": function(event){
    var isim = $("#isim").val();
    var soyisim = $("#soyisim").val();
    var yorum = $("#yorum").val();

    if(isim == "" || soyisim == "" || yorum == ""){
      alert("Lütfen boşlukları doldurun!");
    }else {
      Meteor.call('yorumEkle', isim, soyisim, yorum);
      alert("Yorum Eklendi!");
      Meteor.call('sendEmail','ali_bademlili@hotmail.com','aliimrankorkmaz@gmail.com','Yeni bir yorumunuz var!', Meteor.user().profile.name +' sitenize yeni yorum ekledi! ;\n'+'YORUM: '+yorum);

    }
    event.target.isim.value = "";
    event.target.soyisim.value = "";
    event.target.yorum.value = "";
    return false;
  },

  "click .delete-comment": function(event){
    if(confirm('Yorumu Silmek İstediğinizden Emin Misiniz?')){
      if(Meteor.userId() == "iX2mwvmdAWHMvtdeM"){
        Meteor.call('yorumSil', this._id)
        return false;
      }else{
          alert("Admin yetkisi gerekli!");
      }
    }
    return false;
  },


  "click .sakla": function(event){
    var elem = document.getElementById('ali');
    if(Meteor.userId() == "iX2mwvmdAWHMvtdeM"){
      elem.style.display = 'none';
      return false;
    }else{
      elem.style.display = 'none';
      alert("Admin yetkisi gerekli!");
    }
  },
});


Template.generalTemplate.helpers({
  companiesSearchedByNameForGeneral: function(){
    return Companies.find({companyName: Session.get('prefixForGeneral')});
  },
});

Template.generalTemplate.events({
  "submit .searchTasks": function(event){    //submit yerine click olursa texte tıkladığımız andada alıgılayıp arıyor.
    var name = event.target.namesearched.value;
    if(name == ""){
      alert("Please enter a search word!!");
    }else {
      Session.set('prefix', name);
    }
    return false; //Ekran yenilenmesini engellemek için.
  },
});



$(function() {
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 50) {
            var menuArkaplan = document.getElementById("menuCss");
            /*menuArkaplan.style.backgroundColor = "#1D1F20";
            menuArkaplan.style.opacity = "0.7";*/
            var menuYazi = document.getElementById("menuYazi");
            var menuYazi2 = document.getElementById("menuYazi2");
            var menuYazi3 = document.getElementById("menuYazi3");
            var menuYazi4 = document.getElementById("menuYazi4");
            var menuYazi5 = document.getElementById("menuYazi5");
            var menuYazi6 = document.getElementById("menuYazi6");
            var menuYazi7 = document.getElementById("menuYazi7");



            menuArkaplan.style.backgroundColor = "#1D1F20";
            menuYazi.style.color = "#FFF";
            menuYazi2.style.color = "#FFF";
            menuYazi3.style.color = "#FFF";
            menuYazi4.style.color = "#FFF";
            menuYazi5.style.color = "#FFF";
            menuYazi6.classList.remove("facebookMenuButtonBlack");
            menuYazi6.classList.add("facebookMenuButtonWhite");
            menuYazi7.style.color = "#FFF";

        } else {
            //remove the background property so it comes transparent again (defined in your css)
            var menuArkaplan = document.getElementById("menuCss");
            /*menuArkaplan.style.backgroundColor = "#1D1F20";
            menuArkaplan.style.opacity = "1";*/
            var menuYazi = document.getElementById("menuYazi");
            var menuYazi2 = document.getElementById("menuYazi2");
            var menuYazi3 = document.getElementById("menuYazi3");
            var menuYazi4 = document.getElementById("menuYazi4");
            var menuYazi5 = document.getElementById("menuYazi5");
            var menuYazi6 = document.getElementById("menuYazi6");
            var menuYazi7 = document.getElementById("menuYazi7");

            menuArkaplan.style.backgroundColor = ""
            menuYazi.style.color = "#000";
            menuYazi2.style.color = "#000";
            menuYazi3.style.color = "#000";
            menuYazi4.style.color = "#000";
            menuYazi5.style.color = "#000";
            menuYazi6.classList.remove("facebookMenuButtonWhite");
            menuYazi6.classList.add("facebookMenuButtonBlack");
            menuYazi7.style.color = "#000";
        }
    });
});
