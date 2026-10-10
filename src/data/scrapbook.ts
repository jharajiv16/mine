export type TimelineEntry = {
  date: string;
  title: string;
  copy: string;
  tone: "rose" | "lavender" | "yellow" | "sage";
  sticker: string;
  placeholder?: boolean;
};

export type Note = {
  title: string;
  message: string;
  color: "blush" | "cream" | "lavender" | "yellow";
};

export type PhotoFrame = {
  src: string;
  alt: string;
  label: string;
  caption: string;
  symbol: "sparkles" | "heart" | "mail";
};

export type Surprise = {
  label: string;
  symbol: string;
  message: string;
};

export const scrapbook = {
  recipient: "Hasini",
  sender: "Rajiv",
  navigation: {
    brand: "FOR HASINI",
    chapterCount: "01 / 08",
    openingAriaLabel: "Opening envelope"
  },
  hero: {
    eyebrow: "A little something for you",
    headingLead: "Hey,",
    intro: "I could have sent another text. Instead, I wanted to give a few meaningful things their own place.",
    envelopeLabel: "for you",
    handwrittenNote: "made carefully, for you",
    sideNote: "a small<br />corner of us",
    openButton: "Open the envelope",
    openedButton: "Envelope opened"
  },
  intro: {
    eyebrow: "02 / the scrapbook",
    headingLead: "A little book",
    headingAccent: "of us.",
    largeCopy: "Some moments deserve a place outside our chat history.",
    body: "This is a small collection of what I know so far, what I appreciate, and the pages we can still fill in together.",
    signature: "— R",
    collageBack: "little<br />moments",
    collagePhoto: "your photo<br />goes here",
    collageFront: "our story<br /><b>so far</b>",
    scrollLabel: "turn the page"
  },
  story: {
    eyebrow: "03 / memories",
    headingLead: "The pages",
    headingAccent: "we've made.",
    subheading: "The parts I can name honestly — and a few spaces left open for you."
  },
  timeline: [
    { date: "July", title: "The beginning of us", copy: "This is where our conversations began. I remember July as the start of paying attention to the possibility of us.", tone: "rose", sticker: "beginning" },
    { date: "Along the way", title: "Our kind of chaos", copy: "The teasing, jokes, random conversations, and small exchanges that made talking feel easy and distinctly ours.", tone: "lavender", sticker: "the everyday" },
    { date: "October 1", title: "That one day", copy: "The Truth or Dare moment and the second proposal gave October 1 a meaning I do not want to forget.", tone: "yellow", sticker: "October 1" },
    { date: "A small favorite", title: "The little things", copy: "I ask for a video call. You say no. I ask again. And again. 😭 Then, after enough convincing, the camera finally comes on. 📹 And suddenly, that little moment becomes one of my favorite things. Maybe I just really like seeing you. ♡", tone: "sage", sticker: "one favorite", placeholder: false },
    { date: "A hope for your next chapters", title: "More pages to come", copy: "You have so many things you want to try, so many hobbies to get lost in, and so many places you want to see. I hope you never stop being curious. I hope you travel to all the places you've dreamed about, try the things you've always wanted to try, discover new versions of yourself, and collect a ridiculous number of stories along the way. And maybe, someday, I'll get to be part of a few of them. ♡", tone: "rose", sticker: "future stories", placeholder: false }
  ] satisfies TimelineEntry[],
  gallery: {
    eyebrow: "04 / the gallery",
    headingLead: "Little snapshots",
    headingAccent: "of a feeling.",
    subheading: "",
    frames: [
      { src: "/images/memories/memory-01.jpeg", alt: "Hasini smiling with a flower by her hair", label: "A bright little moment", caption: "memory no. 01", symbol: "sparkles" },
      { src: "/images/memories/memory-02.jpeg", alt: "Hasini wearing glasses and looking to the side", label: "A quiet portrait", caption: "the little things", symbol: "heart" },
      { src: "/images/memories/memory-03.jpeg", alt: "Hasini in a floral outfit", label: "An ordinary day worth keeping", caption: "one of my favorites", symbol: "mail" },
      { src: "/images/memories/memory-04.jpeg", alt: "Hasini smiling in a floral outfit", label: "A soft little smile", caption: "memory no. 04", symbol: "heart" },
      { src: "/images/memories/memory-05.jpeg", alt: "Hasini smiling with her eyes closed", label: "A happy frame", caption: "memory no. 05", symbol: "sparkles" }
    ] satisfies PhotoFrame[],
    lightboxTitle: "Your memories belong here",
    lightboxBody: "Add photographs to public/images/memories and update the frame paths and captions in src/data/scrapbook.ts.",
    closeLabel: "Close photo viewer"
  },
  notes: {
    eyebrow: "05 / tiny notes",
    headingLead: "Little things I",
    headingAccent: "want you to know.",
    subheading: "A few thoughts I mean, without making them bigger than they are.",
    closedLabel: "tap to read",
    openLabel: "read ♡"
  },
  notesList: [
    { title: "Something I admire about you", message: "I admire how you care about the things that matter to you. That kind of attention says a lot.", color: "blush" },
    { title: "A small truth", message: "A normal conversation with you can quietly become the part of my day I keep thinking about.", color: "cream" },
    { title: "For a difficult day", message: "You do not have to have everything figured out to be worthy of patience, care, and appreciation.", color: "lavender" },
    { title: "Something I hope for", message: "I hope we keep making room for honest conversations, ordinary laughter, and memories we can actually name.", color: "yellow" }
  ] satisfies Note[],
  game: {
    eyebrow: "06 / a tiny game",
    headingLead: "Pick a little",
    headingAccent: "surprise.",
    instruction: "Choose one. There is a different note behind each one.",
    replayLabel: "choose again"
  },
  surprises: [
    { label: "A small note", symbol: "✦", message: "You matter to me, and I wanted to say that plainly." },
    { label: "A quiet wish", symbol: "♡", message: "I hope we keep finding reasons to talk, laugh, and be honest with each other." },
    { label: "An open page", symbol: "✿", message: "There are memories ahead that neither of us can write yet. That is part of the good thing." }
  ] satisfies Surprise[],
  letter: {
    eyebrow: "07 / one last page",
    headingLead: "Some things are easier",
    headingAccent: "to write slowly.",
    subheading: "A letter, when you are ready.",
    closedTitle: "A letter for Hasini",
    readButton: "Read my letter",
    foldButton: "fold it back",
    greeting: "Hey Hasini,",
    signoff: "With care,",
    paragraphs: [
      "I wanted to make something for you instead of sending another ordinary message. So I made this small corner of the internet and tried to keep it honest.",
      "Our conversations began in July, and October 1 became meaningful because of the Truth or Dare moment and the second proposal. I also value the less polished parts: the teasing, the random conversations, and the moments where we have had to understand each other better.",
      "I know I do not always get everything right. There are times I could listen more carefully, communicate more clearly, or show my care in a way that lands better. I am sorry for the times I have hurt you.",
      "This is not a promise that a website can prove anything. I would rather let the way I listen, communicate, and treat you say more over time.",
      "Thank you for the moments we have shared. I made this because you are important to me, and I wanted to give that thought a real shape."
    ]
  },
  closing: {
    eyebrow: "08 / the end... for now",
    headingLead: "This is only the",
    headingAccent: "beginning.",
    body: "Here is to the little things, the honest conversations, and the memories that we have not made yet.",
    signoff: "Made with care, by Rajiv. ♡",
    restartButton: "Read it all again"
  }
} as const;
