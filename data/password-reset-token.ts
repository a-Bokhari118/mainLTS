import { db } from "@/lib/db";

export const getPasswordResetTokenByToken = async (token: string) => {
  try {
    const passowrdResetToken = await db.passwordResetToken.findUnique({
      where: { token },
    });

    return passowrdResetToken;
  } catch (error) {
    return;
  }
};

export const getPasswordResetTokenByEmail = async (email: string) => {
  try {
    const passowrdResetToken = await db.passwordResetToken.findFirst({
      where: { email },
    });

    return passowrdResetToken;
  } catch (error) {
    return;
  }
};
