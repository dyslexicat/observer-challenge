const chat_div = document.querySelector(".chat");
var message;

const messages = [
  ["@aeon", "When are we going to hack the @banker?"],
  ["@aeon", "It's going to be big."],
  ["@zeno", "Tomorrow night when the security officer is sleeping."],
  ["@aeon", "You think they are suspecting us?"],
  ["@zeno", "Even if they find us we'll be long gone"],
  ["@aeon", "What are you going to do with the money?"],
  [
    "@zeno",
    "I don't really care about the money... I just want to see if they can solve this challenge.",
  ],
  ["@aeon", "Well, I'll definitely burn through my share"],
  ["@zeno", "Good for you."],
  ["@zeno", "It's almost time"],
  [],
  ["@zeno", "That went smoothly."],
  ["@aeon", "Haha, yeah it was easier than expect."],
  ["@aeon", "Let's see how long it will take them to solve this one."],
  ["@zeno", "If they can..."],
];

const createMessage = (username, text) => {
  const message = document.createElement("div");
  message.classList.add("message-div");
  const message_body = document.createElement("div");
  const message_text = document.createElement("span");
  const message_uname = document.createElement("span");
  message_body.classList.add("message-body");
  message_uname.classList.add("message-username");

  if (username === "@aeon") {
    message.style.backgroundColor = "#5bc0de";
  } else if (username === "@zeno") {
    message.style.backgroundColor = "#33d6a6";
  }

  message_text.classList.add("message-text");

  if (username === undefined && text === undefined) {
    message_text.textContent = "hc{github-example-text}"
  } else {
    message_text.textContent = text;
    message_uname.textContent = `${username}: `;
    message_body.appendChild(message_uname);
  }

  message_body.appendChild(message_text);
  message.appendChild(message_body);

  return message;
};

const startGame = () => {
  chat_div.innerHTML = "";

  for (let i = 0; i < messages.length; i++) {
    setTimeout(() => {
      if (i == 10) {
        message = createMessage();
        chat_div.appendChild(message);
        setTimeout(() => {
          message.textContent = "You'll never catch us :)";
        }, 50);
      } else {
        const username = messages[i][0];
        const text = messages[i][1];
        message = createMessage(username, text);
        chat_div.appendChild(message);
      }
      message.scrollIntoView();
    }, i * 1500);
  }
};

const loadTyper = () => {
  const story = document.querySelector(".story");
  var text = document.createElement("p");
  text.classList.add("story-continues");
  const button = document.getElementById("continue");

  var script = document.createElement("script");
  script.src = "typer.js";
  script.setAttribute("async", "true");
  text.innerHTML = `The message now reads <span
            class="typer hacker-message"
            data-words="&quot;You&apos;ll never catch us :)&quot;"
            data-delay="150"
            data-colors="#fff"
            data-loop="1"
          ></span
          >`;

  story.appendChild(text);
  document.body.appendChild(script);

  setTimeout(() => {
    loadRest();
  }, 5000);
  button.remove();
};

const loadRest = () => {
  const story = document.querySelector(".story");
  const rest = document.createElement("p");
  rest.innerHTML = `You sigh and remember when you saw another hackalacker's project built with the <a href="https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver">Mutation Observer API.</a>
  You have been practicing all this time for days like these. Will you be able to read the removed message and restore other hackalackers' <span class="username" >@banker</span> accounts using the API and the console?
  `;

  const narrator = document.createElement("div");
  narrator.innerHTML = `<p style="margin-bottom: 20px"><span class="username">@narrator</span>: Unintended solutions are welcome but please let me know how you managed to solve it! However, the intended solution uses the Mutation Observer API on the chat to observe added elements. 
  You can repeatedly press the button to rerun the messages being added to the page. The flag you are looking for is formatted like this: <span class="example">hc{example_flag}</span> so you can look for strings containing "hc" :)
  If you ever feel stuck feel free to message me for hints, and if you use the API in your personal projects or need help using it contact me! For example, I have used it to observe Twitch chat messages in another project.</p>
  <p>PS: If you have any ideas to make this "game" better (style it differently, rewrite the story, or anything) please send me your suggestions.</p>
  `;

  story.appendChild(rest);
  story.appendChild(narrator);

  const start_button = document.createElement("button");
  start_button.textContent = ">> read the messages // start";
  start_button.addEventListener("click", () => startGame());
  start_button.id = "start-game";
  story.appendChild(start_button);
};

const continue_button = document.getElementById("continue");
continue_button.addEventListener("click", () => loadTyper());
