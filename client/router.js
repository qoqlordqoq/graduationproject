Router.configure({
    layoutTemplate: 'layout'
});

Router.map(function(){
    this.route('slideout', {path: '/', data: {title: 'My title'}});
    this.route('hakkimizda');
    this.route('iletisim');
    this.route('galeri');
    this.route('companies');
    this.route('addCompany');
    this.route('generalTemplate');
    this.route('search');
});
