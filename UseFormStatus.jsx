import { useFormStatus } from "react-dom";

function CustomerRequest() {
    const { pending } = useFormStatus();

    return (
        <button disabled={pending}>
            {pending ? "Submitting..." : "Submit"}
        </button>
    );
}

function Status() {

    const handleFunction = async () => {
        await new Promise(res => setTimeout(res, 2000));
        console.log("submit");
    };

    return (
        <>
            <form action={handleFunction}>
                <input
                    type="text"
                    placeholder="Enter Name"
                />
                <br />
                <br />

                <input
                    type="text"
                    placeholder="Enter Pass"
                />
                <br />
                <br />

                <CustomerRequest />
            </form>
        </>
    );
}

export default Status;