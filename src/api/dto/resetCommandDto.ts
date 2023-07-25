import {z} from 'zod'
import {LocationSchema} from "./locationDto.ts";
import {RemoteCommandStatus} from "./remoteCommandStatus.ts";
import {AdvancedRemoteCommandStatus} from "./advancedRemoteCommandStatus.ts";

export const ResetCommandSchema = z.object({
    uuid: z.string().uuid(),
    location: LocationSchema,
    message: z.object({}),
    status: z.string().transform(s => s as RemoteCommandStatus),
    advancedStatus: z.string().transform(s => s as AdvancedRemoteCommandStatus),
    createdAt: z.string().transform(s => new Date(s)),
    updatedAt: z.string().transform(s => new Date(s)),
})

export type ResetCommandDto = z.infer<typeof ResetCommandSchema>
