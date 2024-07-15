import { Session } from "next-auth";

export interface Overrides {
  session?: Session | null;
}
