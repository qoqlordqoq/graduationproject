if(Meteor.isClient){
  Companies = new Mongo.Collection('companies');

  Meteor.subscribe('companies');

  Template.companies.helpers({
    showCompany: function(){
      return Companies.find({}, {sort: {companyName: 1}});
    },

    companiesSearchedByName: function(){
      return Companies.find({companyName: { $regex: Session.get('prefix')+".*", $options: 'i' }});
    },

    companiesSearchedByNaceCode: function(){
      return Companies.find({naceKodu: { $regex: Session.get('prefix')+".*", $options: 'i' }});
    },

    isAdmin: function(){
      if(Meteor.userId() == "iX2mwvmdAWHMvtdeM"){
        return true;
      }else{
        return false;
      }
    },

  });

  Template.companies.events({
        "click .delete-company": function(event){
          if(confirm('Şirketi Silmek İstediğinizden Emin Misiniz?')){
            if(Meteor.userId() == "iX2mwvmdAWHMvtdeM"){
              Meteor.call('deleteCompany', this._id)
              return false;
            }else{
                alert("Admin yetkisi gerekli!");
            }
          }
          return false;
        },

        "submit .searchCompany": function(event){    //submit yerine click olursa texte tıkladığımız andada alıgılayıp arıyor.
          var name = event.target.namesearched.value;
          if(name == ""){
            alert("Please enter a search word!!");
          }else {
            Session.set('prefix', name);
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
