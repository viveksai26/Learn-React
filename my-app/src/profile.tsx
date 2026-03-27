function Profile() {
    return (
        <img
            src="https://i.imgur.com/MK3eW3Am.jpg"
            alt="Katherine Johnson"
        />
    )
}

function Gallery() {
    return (
        <>
            <Profile />
            <Profile />
            <Profile />
        </>
    )
}

export {Profile, Gallery}