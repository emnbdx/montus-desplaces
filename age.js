var toString = function(year, month) {
  if(year > 1) {
    return '<span class="h1 font-weight-bold">' + year + '</span> ans'
    + '<span class="h1 font-weight-bold">' + month + '</span> mois';
  } else if(year > 0){
    return '<span class="h1 font-weight-bold">' + year + '</span> an'
    + '<span class="h1 font-weight-bold">' + month + '</span> mois';
  } else {
    return '<span class="h1 font-weight-bold">' + month + '</span> mois';
  }  
}

var displayAge = function() {
  var startDate = new Date(2019, 11, 1)
  var age = new Date((new Date() - startDate))

  document.getElementById('clock').innerHTML = toString(age.getFullYear() - 1970, age.getMonth())
}

displayAge()