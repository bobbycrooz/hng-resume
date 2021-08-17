jQuery(document).ready(function( $ ) {

  // Smooth scroll for the menu and links with .scrollto classes
  $('.smothscroll').on('click', function(e) {
    e.preventDefault();
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      if (target.length) {

        $('html, body').animate({
          scrollTop: target.offset().top - 62
        }, 1500, 'easeInOutExpo');
      }
    }
  });

  $('.carousel').carousel({
    interval: 1000
  });

  // JavaScript Chart
  var doughnutData = [{
      value: 75,
      color: "#1abc9c"
    },
    {
      value: 25,
      color: "#F87171"
    }
  ];
  var myDoughnut = new Chart(document.getElementById("javascript").getContext("2d")).Doughnut(doughnutData);

  // Tailwind Css Chart
  var doughnutData = [{
    value: 80,
    color: "#1abc9c"
  },
  {
    value: 20,
    color: "#F87171"
  }
  ];
  var myDoughnut = new Chart(document.getElementById("tail").getContext("2d")).Doughnut(doughnutData);

  // react Chart
  var doughnutData = [{
    value: 85,
    color: "#1abc9c"
  },
  {
    value: 15,
    color: "#F87171"
  }
  ];
  var myDoughnut = new Chart(document.getElementById("react").getContext("2d")).Doughnut(doughnutData);

  // sass Chart
  var doughnutData = [{
    value: 80,
    color: "#1abc9c"
  },
  {
    value: 20,
    color: "#F87171"
  }
  ];
  var myDoughnut = new Chart(document.getElementById("sass").getContext("2d")).Doughnut(doughnutData);

  // next Chart
  var doughnutData = [{
    value: 50,
    color: "#1abc9c"
  },
  {
    value: 50,
    color: "#F87171"
  }
  ];
  var myDoughnut = new Chart(document.getElementById("next").getContext("2d")).Doughnut(doughnutData);

  // figma Chart
  var doughnutData = [{
    value: 40,
    color: "#1abc9c"
  },
  {
    value: 60,
    color: "#F87171"
  }
  ];
  var myDoughnut = new Chart(document.getElementById("figma").getContext("2d")).Doughnut(doughnutData);
});
