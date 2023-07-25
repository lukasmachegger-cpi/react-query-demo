import {ResetCommandDto, ResetCommandSchema} from "./dto/resetCommandDto.ts";
import {remoteCommandsApi} from "./apiClients.ts";
import {useQuery} from "react-query";
import {AxiosError} from "axios";

const fetchReset = async (resetUuid: string): Promise<ResetCommandDto> => {
    return remoteCommandsApi
        .get(`/remote-commands/reset/${resetUuid}`)
        .then(res => res.data)
        .then((data) => ResetCommandSchema.parse(data))
}

export default function useReset(resetUuid: string) {
    return useQuery<ResetCommandDto, AxiosError>({
        queryKey: ['reset-commands', resetUuid],
        queryFn: () => fetchReset(resetUuid)
    })
}
