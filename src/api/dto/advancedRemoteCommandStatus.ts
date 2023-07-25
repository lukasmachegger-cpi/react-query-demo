import {z} from "zod";

export const RemoteCommandStatusSchema = z.union([
    z.literal("WAITING_FOR_RESPONSE"),
    z.literal("ACCEPTED_BY_STATION"),
    z.literal("REJECTED_BY_STATION"),
    z.literal("NOT_IMPLEMENTED_BY_STATION"),
    z.literal("ACTUAL_MESSAGE_RECEIVED"),
    z.literal("TIMEOUT"),
])

export type AdvancedRemoteCommandStatus = z.infer<typeof RemoteCommandStatusSchema>
