import {ReactElement} from "react";
import {RemoteCommandStatus} from "../api/dto/remoteCommandStatus.ts";
import {Pill, PillProps} from "@chargepoint/cp-kit/pill";

export interface ResetCommandStatusPillProps {
    status: RemoteCommandStatus
}

export default function ResetCommandStatusPill({status}: ResetCommandStatusPillProps): ReactElement {

    const variantMapping: {
        [K in RemoteCommandStatus]: PillProps["variant"]
    } = {
        ERROR: "danger",
        RUNNING: 'information',
        SUCCESS: 'available'
    }

    return <Pill variant={variantMapping[status]}>{status}</Pill>
}
