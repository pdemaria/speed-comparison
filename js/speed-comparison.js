$(function() {
  function elementPruning(group) {
    // We're looking at removing elements that are not the first, based on their text contents
    var identifiers = [];
    group = $(group);

    group.each(function(e) {
      var currnt = $(this);
      var txt = currnt.text();

      if ($.inArray(txt, identifiers) == -1) {
        identifiers.push(txt);
      }
    });

    $.each(identifiers, function(i, v) {
      console.log(v);
      group.filter(':contains("' + v + '")').not(":eq(0)").hide();
    });
  }

  elementPruning(".portfolio-info h2");
});
