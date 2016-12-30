$(function() {
  $.ajax({
    url: 'https://www.codeschool.com/users/ferfabricio.json',
    dataType: 'jsonp',
    success: function(response) {
      addCourse(response.courses.completed);
    }
  });

  function addCourse(courses) {
    courses.forEach(function(element) {
      $("#badges").append('<div class="course"><h3>'+element.title+'</h3><img src="'+element.badge+'"><a href="'+element.url+'" target="_blank" class="btn btn-primary">See Course</a></div>');
    })
  }
});
