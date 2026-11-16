
const prompts = [
  "Think of a childhood memory that still makes you smile. What could you hear, see, or smell in that moment?",

  "Remember a time you tried something new just for fun. What did you enjoy about it?",

  "Who is someone who makes you feel accepted exactly as you are?",

  "What is one small thing outside of sports that makes an ordinary day better?",

  "Think of a moment when you laughed so hard you forgot to worry. What made it funny?",

  "If your younger self could see you now, what kind thing might they say about how far you have come?",

  "Name three things you appreciate about yourself that have nothing to do with performance."
];

// HOMEPAGE: Change reflection prompts

const promptText = document.getElementById("promptText");
const newPrompt = document.getElementById("newPrompt");

if (newPrompt && promptText) {
  newPrompt.addEventListener("click", () => {
    const current = promptText.textContent;
    let next = prompts[Math.floor(Math.random() * prompts.length)];

    while (prompts.length > 1 && next === current) {
      next = prompts[Math.floor(Math.random() * prompts.length)];
    }

    promptText.textContent = next;
  });
}

// MOBILE NAVIGATION

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

// STORIES PAGE: Story submission preview

const storyText = document.getElementById("storyText");
const charCount = document.getElementById("charCount");
const storyForm = document.getElementById("storyForm");
const formMessage = document.getElementById("formMessage");
const storyList = document.getElementById("storyList");

// Character counter

if (storyText && charCount) {
  storyText.addEventListener("input", () => {
    charCount.textContent =
      `${storyText.value.length} / 500`;
  });
}

// Preview submitted story

if (storyForm && storyText && storyList && formMessage) {

  storyForm.addEventListener("submit", (event) => {

    event.preventDefault();

    const message = storyText.value.trim();

    if (!message) return;

    const card = document.createElement("article");
    card.className = "story-card";

    const tag = document.createElement("span");
    tag.className = "story-tag";
    tag.textContent = "A Message From An Athlete";

    const paragraph = document.createElement("p");
    paragraph.textContent = `“${message}”`;

    const small = document.createElement("small");
    small.textContent =
      "Local preview only · Not uploaded or published";

    const encouragement = document.createElement("div");
    encouragement.className = "encouragement";
    encouragement.textContent =
      "Thank you for sharing. Your voice matters. ♡";

    card.append(
      tag,
      paragraph,
      small,
      encouragement
    );

    storyList.prepend(card);

    storyText.value = "";
    charCount.textContent = "0 / 500";

    formMessage.textContent =
      "Your message is previewed on this page only. It has not been sent anywhere.";

  });

}
