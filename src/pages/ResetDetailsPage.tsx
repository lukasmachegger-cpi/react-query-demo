import {ReactElement} from "react";
import {useParams} from "react-router-dom";
import useReset from "../api/useReset.tsx";
import {Loader} from "@chargepoint/cp-kit/loader";
import {Card, Content, Heading, Title} from "@chargepoint/cp-kit/card";
import ResetCommandStatusPill from "../components/ResetCommandStatusPill.tsx";

export default function ResetDetailsPage(): ReactElement {
    const {uuid} = useParams()

    if (!uuid) return <></>

    const {data, isError, isLoading, isIdle} = useReset(uuid)

    if (isIdle || isLoading) return (
        <div className="my-10">
            <Loader size="lg"/>
        </div>
    )

    if (isError) return <p>Error in request</p>

    return (
        <Card className="rounded-[5px] border w-1/2 m-4">
            <Heading>
                <Title>
                    Reset Command {data.uuid}
                </Title>
                <div>
                    <ResetCommandStatusPill status={data.status}/>
                </div>
            </Heading>
            <Content>
                <p>Station: {data.location.stationUuid}</p>
                <p>Created: {data.createdAt.toISOString()}</p>
                <p>Updated: {data.updatedAt.toISOString()}</p>
            </Content>
        </Card>
    )
}
