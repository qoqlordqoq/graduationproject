import { Meteor } from 'meteor/meteor';
import { Email } from 'meteor/email'

Meteor.startup(() => {
   process.env.MAIL_URL = 'smtp://aliimrankorkmaz@gmail.com:onering398@smtp.gmail.com:587';//465 iken de yolluyodu 587 yapınca yollamaya başladı
  // code to run on server at startup
  Contact = new Mongo.Collection('contact');
  Companies = new Mongo.Collection('companies');

  Meteor.methods({

    addNewCompany: function(company_name, company_address, company_website, company_telephone, nace_code, meslek_grubu, nace_baslik, google_harita, google_streetview){
      if(!Meteor.userId()){
        throw new Meteor.Error('No Access!!');
      }
      Companies.insert({
        companyName: company_name,
        companyAddress: company_address,
        companyWebsite: company_website,
        companyTelephone: company_telephone,
        naceKodu: nace_code,
        meslekGrubu: meslek_grubu,
        naceBaslik: nace_baslik,
        googleHarita: google_harita,
        googleStreet: google_streetview,
        createdAt: new Date(),
        userId: Meteor.userId()
      });

    },

    deleteCompany: function(taskId){
      Companies.remove(taskId);
    },

    yorumEkle: function(isim, soyisim, yorum) {
      if(!Meteor.userId()){
        throw new Meteor.Error('No Access!!');
      }
      Contact.insert({
        isim: isim,
        soyisim: soyisim,
        yorum: yorum,
        createdAt: new Date(),
        userId: Meteor.userId()
      });
    },

    yorumSil: function(taskId){
      Contact.remove(taskId);
    },


    sendEmail: function (to, from, subject, text) {
      check([to, from, subject, text], [String]);
      // Let other method calls from the same client start running,
      // without waiting for the email sending to complete.
      this.unblock();
      Email.send({
          to: to,
          from: from,
          subject: subject,
          text: text
      });
    },
  });
  
  Meteor.publish('users', function() {
      return Meteor.users.find({});
  });

  Meteor.publish('contact', function() {
    return Contact.find();
  });

  Meteor.publish("userData", function () {
    if (this.userId) {
      return Meteor.users.find({_id: this.userId},
                               {fields: {'other': 1, 'things': 1}});
    } else {
      this.ready();
    }
  });

  Meteor.publish('companies', function() {
    return Companies.find();
  });












});
