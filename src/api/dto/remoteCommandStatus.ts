import {z} from "zod";

export const RemoteCommandStatusSchema = z.union([
    z.literal("RUNNING"),
    z.literal("SUCCESS"),
    z.literal("ERROR")
])

export type RemoteCommandStatus = z.infer<typeof RemoteCommandStatusSchema>
