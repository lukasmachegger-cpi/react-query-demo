import {z} from 'zod'

export const LocationSchema = z.object({
    stationUuid: z.string(),
    portProtocolId: z.number().nullable(),
    connectorProtocolId: z.number().nullable(),
})

export type LocationDto = z.infer<typeof LocationSchema>
