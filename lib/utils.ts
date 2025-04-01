export function cn(...classes: (string | undefined | false)[]) {
  return classes.filter(Boolean).join(" ");
}
export async function getTechLogos(techStack: string[] = []) {
  if (!techStack || !Array.isArray(techStack)) {
    console.error("getTechLogos received invalid input:", techStack);
    return []; // Ensure it returns an array
  }

  return techStack.map((tech) => ({
    name: tech,
    logoUrl: `/logos/${tech.toLowerCase()}.png`, // Adjust based on your project
  }));
}
export const getRandomInterviewCover = () => {
  const covers = [
    "/images/cover1.jpg",
    "/images/cover2.jpg",
    "/images/cover3.jpg",
  ];
  return covers[Math.floor(Math.random() * covers.length)];
}; 
