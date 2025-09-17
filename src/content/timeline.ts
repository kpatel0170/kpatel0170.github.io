export interface TimelineSection {
  heading: string;
  content: string[];
  images?: string[];
}

export interface TimelineFrontmatter {
  title: string;
  description?: string;
}

export const timelineFrontmatter: TimelineFrontmatter = {
  title: "Timeline — Key Milestones",
  description:
    "A comprehensive overview of my professional and personal growth journey."
};

export const timelineSections: TimelineSection[] = [
  {
    heading: "Won Cohort 8 by Cultivator",
    content: [
      "Our team won $10,000 with Enrolleasy in Cohort 8 organized by Cultivator — powered by Conexus."
    ],
    images: [
      "/timeline/202311-cohort8-enrolleasy.png",
      "/timeline/202311-cohort8-enrolleasy-2.png"
    ]
  },
  {
    heading: "Introduction to Hackathon",
    content: ["Organized a brainstorming and intro to hackathon with URGDSC."],
    images: ["/timeline/202311-intro-to-hackathon.png"]
  },
  {
    heading: "Introduction to Git and Version Control",
    content: ["Organized Introduction to Git and Version with URGDSC."],
    images: ["/timeline/202309-intro-to-git.png"]
  },
  {
    heading: "Most Creative Use of Twilio (Give Back Hacks 3 by MLH)",
    content: [
      "parkAway is like an Airbnb for vehicles.",
      "Tech Stack: React.js, Express.js, Node.js, MongoDB, Bootstrap, Twilio",
      "GitHub: https://github.com/kpatel0170/parkAway"
    ]
  },
  {
    heading: "Won 3rd Overall in Sustain Hacks (MLH)",
    content: [
      '"Electron" — Saving megawatts saves megabucks: a machine learning model predicting energy needs to prevent overflow.',
      "Implemented with React, Flask, Jupyter Notebook.",
      "GitHub: https://github.com/kpatel0170/Electron"
    ]
  },
  {
    heading: "Junior Developer - Summer Student",
    content: [
      "Happy to share I am starting a new role as a Junior Developer at FarmSimple Solutions Canada Inc."
    ]
  },
  {
    heading: "GitHub Campus Expert",
    content: [
      "I've been selected as a first-ever GitHub Campus Expert in Saskatchewan, Canada."
    ],
    images: ["/timeline/202305-github-campus-expert.png"]
  },
  {
    heading: "Organized The Solution Challenge Hackathon",
    content: [
      "Happy to host our first in-person hackathon with Google Developer Student Club at the University of Regina (URGDSC), partnering with HackRegina to empower students and give practical experience."
    ],
    images: [
      "/timeline/202304-ur-solution-challenge.png",
      "/timeline/202304-ur-solution-challenge-2.png",
      "/timeline/202304-ur-solution-challenge-3.png"
    ]
  },
  {
    heading: "Won 48-hr Startup Hackathon",
    content: [
      "Our team won 1st prize in the 48-hour Startup Hackathon by The Key Incubator at University of Regina."
    ],
    images: ["/timeline/202303-48hr-key-incubator.png"]
  },
  {
    heading: "Winner 24-hr Startup Hackathon",
    content: [
      "**WinningMoment** 🎉 Our team is proud to announce we took the top prize at the 24-hour Startup event organized by Cultivator (Enrolleasy)."
    ],
    images: ["/timeline/202302-24hr-enrolleasy.png"]
  },
  {
    heading: "Attended HackED '23 Hackathon by University of Alberta and MLH",
    content: [
      "Attended HackED '23 — learned a lot and connected with other builders."
    ]
  },
  {
    heading: "Career Fair — University of Regina",
    content: [
      "Attended the career fair at University of Regina; connected with recruiters across companies. #careerfair2022 #UofR"
    ]
  },
  {
    heading: "URGDSC Info Session",
    content: [
      "Had a wonderful time at URGDSC's info session (UofR/online). Loved the talks from Core team members."
    ]
  },
  {
    heading: "URSU Volunteers — URSU Cares Pantry Event",
    content: ["Volunteered at URSU Cares Pantry events."],
    images: ["/timeline/202110-ursu-pentry.png"]
  },
  {
    heading: "Staples — Sales / Part-time",
    content: [
      "Some insights into my sales performance at Staples — competing with full-timers was fun and a great learning experience."
    ],
    images: ["/timeline/202205-staples.png"]
  },
  {
    heading:
      "Summer Student — Office Administrator (Government of Saskatchewan)",
    content: [
      "Ended my journey as a Summer Student — Office Administrator at the Government of Saskatchewan."
    ]
  },
  {
    heading: "URGDSC — Core Team Member",
    content: [
      "Excited to join Google Developer Student Clubs, URGDSC as a Core Team Member."
    ],
    images: ["/timeline/202209-urgdsc.png"]
  },
  {
    heading: "Blizzard World / Vintage Game Projects",
    content: [
      "Blizzard World — extended versions of vintage computer games (Colossal Cave Adventure, Nightfall).",
      "Implemented Nightfall in 6 variants using functional programming techniques."
    ]
  },
  {
    heading: "Joined as a URSU Volunteer",
    content: [
      "Joined as a URSU Volunteer at the University of Regina Students' Union."
    ]
  }
];
