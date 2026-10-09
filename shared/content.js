/* LEAP site content: the structured lists (values, committees, board, ...).
   The narrative copy (hero, why, mission, vision, how) lives directly in
   index.html and about.html so it reads top-to-bottom where it is used. */

window.LEAP = {
  name: "LEAP",
  fullName: "Leaders Emerge and Partner",
  region: "Northern Virginia",
  domain: "leap-nova.org",
  email: "hello@leap-nova.org",

  /* Interest form. Leave empty until the form exists: every "Get involved"
     button falls back to an email to the address above. */
  interestForm: "",

  /* Connect. Grow. Serve. */
  triad: [
    {
      word: "Connect",
      text: "Meet the leaders of the communities next to yours, and come to understand each other by working side by side."
    },
    {
      word: "Grow",
      text: "Learn from each other's ideas, experience, and ways of doing things, and bring that back to your own community."
    },
    {
      word: "Serve",
      text: "Put what we share to work on the problems we share, in projects open to every member of every community."
    }
  ],

  /* Values every community at the table already holds. Everything else is downstream. */
  values: [
    {
      name: "Dignity first",
      text: "Everyone is met with respect and accepted as they are."
    },
    {
      name: "Difference is richness",
      text: "Different faiths, cultures, and perspectives make us stronger, not weaker."
    },
    {
      name: "Service over self",
      text: "We give our time freely, because contributing to the community is the whole point."
    },
    {
      name: "Shared wisdom",
      text: "Decisions are shaped together, with every voice at the table."
    },
    {
      name: "Integrity in everything",
      text: "Good goals deserve good means. We act honestly, transparently, and well."
    }
  ],

  /* From values to work: the chain the whole platform follows. */
  flow: [
    { name: "Shared values", text: "What every community at the table already believes." },
    { name: "Shared problems", text: "What every community is already trying to solve." },
    { name: "Committees", text: "Leaders from different communities, organized around one problem." },
    { name: "Projects", text: "Concrete work the committee plans together." },
    { name: "Everyone", text: "Open to every member of every community." }
  ],

  /* Starting committees. Names are working names. */
  committees: [
    {
      id: "dialogue",
      hue: "indigo",
      name: "Dialogue",
      value: "Difference is richness",
      problem: "We live alongside neighbors of other faiths and cultures, yet rarely get to know them.",
      does: [
        "Dialogue circles where people meet as neighbors, not representatives.",
        "Visits to each other's communities and places of worship.",
        "A shared meal after a shared day of service."
      ]
    },
    {
      id: "aid",
      hue: "rose",
      name: "Humanitarian Aid",
      value: "Service over self",
      problem: "Every community runs its own drives for neighbors in need, often for the same causes, at the same time, separately.",
      does: [
        "Joint drives for food, clothing, and winter essentials.",
        "Coordinated responses when an emergency hits the region.",
        "Pooling volunteers and resources so each effort goes further."
      ]
    },
    {
      id: "career",
      hue: "teal",
      name: "Career Development",
      value: "Shared wisdom",
      problem: "Young adults in every community are figuring out their careers, often without the networks others take for granted.",
      does: [
        "Mentorship that crosses community lines.",
        "Mock interviews and resume clinics before hiring seasons.",
        "Workshops open to members of every community."
      ]
    }
  ],

  /* Shown faded: examples of where this could grow. */
  futureCommittees: [
    { name: "Community Building", hue: "saffron" },
    { name: "Outreach", hue: "olive" }
  ],

  /* Ways in */
  paths: [
    {
      name: "Join the board",
      text: "We are building a board of 5 to 7 leaders from different communities and organizations across the region. Two seats are filled.",
      link: "about.html#seats",
      linkText: "See the open seats"
    },
    {
      name: "Bring your community",
      text: "Do you lead a congregation, cultural association, student group, or civic organization? Let's find the problems we share."
    },
    {
      name: "Shape a committee",
      text: "Have an idea for a project, or a committee we haven't thought of? This is the time to bring it."
    }
  ],

  /* Board. Fill these in; photo is an image path (e.g. "img/name.jpg") or "" for initials. */
  boardSeats: 7,
  board: [
    {
      name: "Emin Arslan",
      role: "Founding board member",
      community: "American Turkish Friendship Association",
      bio: "A longtime participant in, and occasional organizer of, interfaith dialogue events in Austin and Northern Virginia. I helped start LEAP so that the conversations I love can lead to work we do together.",
      photo: "img/board-1.jpg"
    },
    {
      name: "Yusuf Arslan",
      role: "Founding board member",
      community: "American Turkish Friendship Association",
      bio: "[Two or three sentences: who you are, the community you come from, and why you started LEAP.]",
      photo: ""
    }
  ]
};
