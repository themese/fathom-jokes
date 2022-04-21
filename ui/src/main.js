class Joke {
  constructor(id, type, setup, punchline) {
    this.id = id;
    this.type = type;
    this.setup = setup;
    this.punchline = punchline;
  }
}
let joke = new Joke();
let isSetup = true;

$(document).ready(function () {
  $(document).tooltip({
    items: "#help",
    content:
      "Welcome to Laughaton! Click anywhere in the website to see the punchline! After that, click again to see a random joke again.",
  });
  getJoke();
  $("#joke-container").click(function () {
    if (isSetup) {
      $("#joke-container").text(joke.punchline);
      $("#joke-container").removeClass().addClass("punchline");
      $("body").css("background-color", "darkslategray");
      isSetup = false;
    } else {
      $("body").css("background-color", "lightgreen");
      getJoke();
    }
  });
  // once the website loads, we get a random joke and save it. We put the setup in the joke container and we add the class 'setup'
  // to indicate that the div now contains the joke's setup.
  // We play with the isSetup flag for the onClick functionality and we use the 'setup' class and the 'punchline' class to change the background colors
  function getJoke() {
    $.ajax({
      url: "http://localhost:8000/api/jokes/random",
      crossDomain: true,
    }).done(function (data) {
      joke = data;
      isSetup = true;
      $("#joke-container").removeClass().addClass("setup");
      $("#joke-container").text(joke.setup);
    });
  }
});
