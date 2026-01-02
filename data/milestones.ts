import type { Milestone } from "@/lib/schemas";

export const milestones: Milestone[] = [
  // Certifications
  {
    title: "Graduation Certificate",
    date: "2021-06",
    kind: "cert",
    proofUrl:
      "https://drive.google.com/file/d/18-7fbodbrCyFqutgqZncntsCsTH68HnV/view",
    img: "/grad-cert.jpg",
    description:
      "Certificate of graduation from Misr University for Science and Technology for my Bachelor's degree in Computer Science (Oct 2017 – Jun 2021).",
  },
  {
    title: "Full-Stack MERN Developer Certificate",
    date: "2021-06",
    kind: "cert",
    proofUrl:
      "https://drive.google.com/file/d/18-7fbodbrCyFqutgqZncntsCsTH68HnV/view",
    img: "/iti-cert.jpg",
    description:
      "Certificate of graduation from the Information Technology Institute (ITI) in Egypt (Feb 2025 - Jul 2025) - 5 months.",
  },

  // Education
  {
    title: "Full-Stack MERN Developer Training",
    date: "2025-07",
    kind: "education",
    proofUrl:
      "https://drive.google.com/file/d/18-7fbodbrCyFqutgqZncntsCsTH68HnV/view",
    img: "/iti-image.jpg",
    description:
      "Trained as a Full-Stack MERN Developer at Information Technology Institute (ITI) in Egypt (Feb 2025 - Jul 2025) - 5 months. I learned about the MERN stack, and how to build a full-stack application from scratch.",
    keyAchievements: [
      "Learned a lot of new technologies and frameworks",
      "Developed a business mindset and problem-solving skills",
      "Made new friends and built a strong network",
    ],
  },
  {
    title: "Bachelor of Computer Science",
    date: "2021-06",
    kind: "education",
    proofUrl:
      "https://drive.google.com/file/d/18-7fbodbrCyFqutgqZncntsCsTH68HnV/view",
    img: "/grad-image.jpg",
    description:
      "Graduated from Misr University for Science and Technology, Specialized in Computer Science (Oct 2017 - Jun 2021)",
    keyAchievements: [
      "GPA: 3.11/4.0",
      "Research in Artificial Intelligence impact on developers",
      "Graduation project was about Apartments and Hotels Management System",
    ],
  },

  // YouTube Videos
  {
    title: "How to organize your studying with AI by markmaps and tables",
    date: "2025-06",
    kind: "youtube",
    videoId: "Ucc-8YV65JI",
    description:
      "A practical guide for how to organize your studying with AI by using markmaps and tables to generate your own study plan and materials.",
    keyAchievements: [
      "Increasing likes and engagement",
      "Viewers are happy with the content",
      "Demonstrated the power of AI in studying",
    ],
  },
  {
    title: "Comparison between ChatGPT, Claude, and Grok",
    date: "2025-06",
    kind: "youtube",
    videoId: "IDjzIFWQEpk",
    description:
      "A practical comparison and guide for developers to choose the best AI tool for their projects while showing the best use cases for each assistant.",
    keyAchievements: [
      "Built an audience",
      "Growing views",
      "Recorded and Edited the video",
    ],
  },
];
