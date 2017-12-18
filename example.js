var cloudscraper = require('cloudscraper');

console.time('test')
cloudscraper.setCookies('__cfduid=d4cc3a30fd923edfafc4edcf95dd464c71513624022; cf_clearance=2c611731cfcbd038554c520797e3d883ac6f2346-1513624029-10800','https://bittrex.com/');

cloudscraper.request({
  url: 'https://bittrex.com/',
  method: 'GET',
  gzip: true,
  }, function (e,r,b) {
    if(e){
      console.log(e);
      return;
    }

    console.log('Reusable cookies: '+cloudscraper.getCookies('https://bittrex.com/'));

    console.log(r.headers, b);

    cloudscraper.request({
      url: 'https://bittrex.com/?'+(+new Date()),
      method: 'GET',
      gzip: true,
      }, function (e,r,b) {
        if(e){
          console.log(e);
          return;
        }

        console.log(r.headers, b);
        console.timeEnd('test');

    });
});
