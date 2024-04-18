import { Authenticator } from '@aws-amplify/ui-react'
import { useRef, useCallback } from 'react'
import { Button, Modal } from 'react-daisyui'

export const Login = () => {
    const ref = useRef<HTMLDialogElement>(null)
    const handleShow = useCallback(() => {
        ref.current?.showModal()
    }, [ref])
    return (
        <div className="font-sans">
            <Button size="sm" color="primary" onClick={handleShow}>
                Login
            </Button>
            <Modal ref={ref} backdrop>
                <Modal.Body>
                    <Authenticator className="max-w-xs" />
                </Modal.Body>
                <Modal.Actions>
                    <form method="dialog">
                        <Button>Close</Button>
                    </form>
                </Modal.Actions>
            </Modal>
        </div>
    )
}
