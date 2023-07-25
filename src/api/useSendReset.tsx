import {ResetCommandDto, ResetCommandSchema} from "./dto/resetCommandDto.ts";
import {remoteCommandsApi} from "./apiClients.ts";
import {useMutation, useQueryClient} from "react-query";
import {toastQueue} from "../App.tsx";

const reset = async (): Promise<ResetCommandDto> => {
    return remoteCommandsApi
        .post('/remote-commands/reset', {
            location: {
                stationUuid: '1234',
            },
            message: {
                type: 'IMMEDIATE',
            },
        })
        .then((res) => res.data)
        .then((data) => ResetCommandSchema.parse(data))
}

export default function useSendReset() {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: reset,
        onSuccess: () => {
            queryClient.invalidateQueries(['reset-commands'])

            toastQueue.add(
                {
                    title: 'Reset successful',
                    description: 'Successfully sent a reset to the station!',
                },
                {
                    timeout: 5000,
                },
            )
        },
        onError: () => {
            toastQueue.add({
                title: 'Reset failed',
                description: 'Error on reset attempt!',
            })
        },
    })
}
