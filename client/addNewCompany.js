if(Meteor.isClient){
  Template.addCompany.events({
    "click .add-new-company": function(event){
      var isim = $("#isim").val();
      var adres = $("#adres").val();
      var website = $("#website").val();
      var telefon = $("#telefon").val();
      var nacekodu = $("#nacekodu").val();
      var meslekgrubu = $("#meslekgrubu").val();
      var nacebaslik = $("#nacebaslik").val();
      var googleharita = $("#googlemaps").val();
      var googlesokakgorunumu = $("#googlestreetview").val();

      if(isim == "" || adres == "" || website == "" || isim == "" || adres == "" || website == "" || nacebaslik == "" || googleharita == "" || googlesokakgorunumu == ""){
        alert("Lütfen tüm boşlukları doldurun!");
      }else {
        Meteor.call('addNewCompany', isim, adres, website, telefon, nacekodu, meslekgrubu, nacebaslik, googleharita, googlesokakgorunumu);
        alert("Yeni Site Eklendi!");
        /*Meteor.call('sendEmail','ali_bademlili@hotmail.com','aliimrankorkmaz@gmail.com','Hello from Meteor!','Sitenize yeni yorum eklendi! ;\n'+yorum);*/

      }
      event.target.isim.value = "";
      event.target.adres.value = "";
      event.target.website.value = "";
      event.target.telefon.value = "";
      event.target.nacekodu.value = "";
      event.target.meslekgrubu.value = "";
      event.target.nacebaslik.value = "";
      event.target.googleharita.value = "";
      event.target.googlesokakgorunumu.value = "";

      return false;
    }

  });
}
