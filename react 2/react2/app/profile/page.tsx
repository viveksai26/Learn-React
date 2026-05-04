export default function Profile({ name, size }: { name: string, size: number }) {
    return (
        <>
            <img
                className="avatar"
                src="https://react.dev/images/docs/scientists/7vQD0fPs.jpg"
                width={size}
                height={size}
                alt={name}
            />
        </>

    );
}
