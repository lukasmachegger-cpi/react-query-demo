import {createPageResponseSchema, PageResponse} from "./dto/pageResponse.ts";
import {ResetCommandDto, ResetCommandSchema} from "./dto/resetCommandDto.ts";
import {remoteCommandsApi} from "./apiClients.ts";
import {useQuery} from "react-query";
import {AxiosError} from "axios";

const fetchResets = async (stationUuid: string): Promise<PageResponse<ResetCommandDto>> => {
    return remoteCommandsApi
        .get(`/remote-commands/reset?page=0&size=500&station-uuid=${stationUuid}`)
        .then(res => res.data)
        .then((data) => createPageResponseSchema(ResetCommandSchema).parse(data))
}

export default function useResets(stationUuid: string = "1234") {
    return useQuery<PageResponse<ResetCommandDto>, AxiosError>({
        queryKey: ['reset-commands', stationUuid],
        queryFn: () => fetchResets(stationUuid),
    })
}
