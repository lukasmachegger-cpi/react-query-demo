import {ReactElement} from "react";
import useSendReset from "../api/useSendReset.tsx";
import {Button} from "@chargepoint/cp-kit/button";

export function SendResetButton(): ReactElement {
    const sendReset = useSendReset()

    return <Button variant='primary' onPress={() => sendReset.mutate()} className="m-4">
        Send Reset
    </Button>
}
