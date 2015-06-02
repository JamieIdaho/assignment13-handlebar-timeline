

$.getJSON('http://private-44f6d-timeline6.apiary-mock.com/timeline').done(function(data) {

  console.log('data', data);

  data.timelines.forEach(function(timeline){

      var m = moment(new Date(timeline.timestamp));
      timeline.date = m.format('M/D/YY');
      timeline.times = m.format('hh:mm');


return timeline;

});


$('.container').html(template.example(data));

});



