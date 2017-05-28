if(Meteor.isClient){
  Template.search.helpers({
    companiesSearchedByName: function(){
      return Companies.find({companyName: { $regex: Session.get('prefix')+".*", $options: 'i' }});
    },

    companiesSearchedByNaceCode: function(){
      return Companies.find({naceKodu: { $regex: Session.get('prefixNace')+".*", $options: 'i' }});
    }
  });
  Template.search.events({
        "submit .searchCompany": function(event){    //submit yerine click olursa texte tıkladığımız andada alıgılayıp arıyor.
          var name = event.target.namesearched.value;
          if(name == ""){
            alert("Lütfen kelime girin!");
          }else {
            Session.set('prefix', name);
          }
          return false; //Ekran yenilenmesini engellemek için.
        },

        "submit .searchCompanyNace": function(event){    //submit yerine click olursa texte tıkladığımız andada alıgılayıp arıyor.
          var name = event.target.namesearched.value;
          if(name == ""){
            alert("Lütfen kelime girin!");
          }else {
            Session.set('prefixNace', name);
          }
          return false; //Ekran yenilenmesini engellemek için.
        },

        "click .getName": function(event) {
          var text = $(event.target).text();
          Session.set('prefixForGeneral', text);
          document.title = text;
        },
  });
}
