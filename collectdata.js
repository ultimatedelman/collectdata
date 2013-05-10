//given a set of inputs and optionally a data structure, 
//will scrape all the data and return a structured data object
$.fn.collectData = function (data) {
  var inputs = $(this);
  data = data || {};
  inputs.each(function (i, elem) {
    var value, prop;
    value = elem.value;
    if (elem.type == 'radio') {
      if (elem.checked) {
        prop = elem.name;
        value = elem.value;
        if (value === 'true') { //make bools actually bools
          value = true;
        } else if (value === 'false') {
          value = false;
        }
      }
    } else {
      prop = elem.name;
      value = elem.type == 'checkbox' ? elem.checked : elem.value;  
    }
    if (prop && typeof value !== 'undefined') {
      //things meant to be arrays will be preset as such
      if (data[prop] instanceof Array) {
        data[prop].push(value);
      } else {
        data[prop] = value;
      }
    }
  });
  return data;
}