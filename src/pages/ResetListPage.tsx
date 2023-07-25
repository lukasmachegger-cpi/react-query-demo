import {ReactElement} from "react";
import useResets from "../api/useResets.tsx";
import {Loader} from "@chargepoint/cp-kit/loader";
import {Table, TableHeader, Column, TableBody, Row, Cell} from "@chargepoint/cp-kit/table";
import {ResetCommandDto} from "../api/dto/resetCommandDto.ts";
import {useNavigate} from 'react-router-dom'
import {Button} from "@chargepoint/cp-kit/button";
import ResetCommandStatusPill from "../components/ResetCommandStatusPill.tsx";
import {SendResetButton} from "../components/SendResetButton.tsx";

export default function ResetListPage(): ReactElement {
    const navigate = useNavigate()
    const {data, isError, isIdle, isLoading} = useResets()

    if (isIdle || isLoading) return (
        <div className="my-10">
            <Loader size="lg"/>
        </div>
    )

    if (isError) return <p>Error in request</p>

    return (
        <>
            <SendResetButton/>
            <Table className="mx-4">
                <TableHeader>
                    <Column>UUID</Column>
                    <Column>Location</Column>
                    <Column>Status</Column>
                    <Column>Timestamp</Column>
                    <Column>DETAILS</Column>
                </TableHeader>
                <TableBody items={data.content}>
                    {(item: ResetCommandDto) => (
                        <Row key={item.uuid}>
                            <Cell>{item.uuid}</Cell>
                            <Cell>
                                <pre>{JSON.stringify(item.location)}</pre>
                            </Cell>
                            <Cell>
                                <ResetCommandStatusPill status={item.status}/>
                            </Cell>
                            <Cell>{item.updatedAt.toISOString()}</Cell>
                            <Cell>
                                <Button variant="secondary" onPress={() => navigate(item.uuid)}>
                                    Details
                                </Button>
                            </Cell>
                        </Row>
                    )}
                </TableBody>
            </Table>
        </>
    )
}
