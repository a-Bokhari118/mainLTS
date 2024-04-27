import { auth } from "@/auth";

export const currentUser = async () => {
  const sesstion = await auth();

  return sesstion?.user;
};

export const currentRole = async () => {
  const sesstion = await auth();

  return sesstion?.user?.role;
};
