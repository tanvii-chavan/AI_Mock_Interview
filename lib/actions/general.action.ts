import prisma from "@/lib/prisma"; // Ensure Prisma is correctly imported

export async function getInterviewById(interviewId: string) {
  try {
    const interview = await prisma.interview.findUnique({
      where: { id: interviewId },
    });

    return interview;
  } catch (error) {
    console.error("Error fetching interview by ID:", error);
    return null;
  }
}

export async function getInterviewsByUserId(userId: string) {
  try {
    return await prisma.interview.findMany({
      where: { userId },
      select: { id: true, title: true, company: true },
    });
  } catch (error) {
    console.error("Error fetching interviews by user ID:", error);
    return [];
  }
}

export async function getLatestInterviews() {
  try {
    return await prisma.interview.findMany({
      orderBy: { createdAt: "desc" },
      take: 5, // Get the latest 5 interviews
      select: { id: true, title: true, company: true },
    });
  } catch (error) {
    console.error("Error fetching latest interviews:", error);
    return [];
  }
}

export async function getFeedbackByInterviewId(interviewId: string) {
  try {
    return await prisma.feedback.findUnique({
      where: { interviewId },
      select: {
        totalScore: true,
        finalAssessment: true,
        createdAt: true,
      },
    });
  } catch (error) {
    console.error("Error fetching feedback:", error);
    return null;
  }
}
