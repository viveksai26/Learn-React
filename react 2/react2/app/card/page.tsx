
export default function Card({ children }: { children: React.ReactNode }) {
    return (
        <>
            <div className="card">
                {children}
            </div>
            <PackList />
        </>
    );
}


export function Item({showItem, itemName}: {showItem: boolean, itemName: string}) {
    if (showItem) {
        return (<>
            <div className="item">
                {itemName} !!
            </div>
        </>
        );
    } else {
        return (
            <div className="item">
                {itemName}
            </div>
        );
    }
}

export function PackList() {
    const items = [{"name": "Apple", showItem: true}, {"name": "Banana", showItem: false}, {"name": "Cherry", showItem: false}];
    const listItems: any = [];
    items.map((item, index) => (
        listItems.push(<div key={index} className="pack-item">
            <Item showItem={item.showItem} itemName={item.name} />
        </div>)
    ));
    listItems.push(<li key={-1} className="pack-item">
        <Item showItem={true} itemName={"Grapes"} />
    </li>);
    return (
        <div className="pack-list">
            {/* {items.map((item, index) => (
                listItems.push(<div key={index} className="pack-item">
                    <Item showItem={item.showItem} itemName={item.name} />
                </div>)
            ))}
            {listItems} */}
            {/* {items.map((item, index) => (
                <div key={index} className="pack-item">
                    <Item showItem={item.showItem} itemName={item.name} />
                </div>
            ))} */}
            <ul>
                {listItems}
            </ul>
        </div>
    );
}