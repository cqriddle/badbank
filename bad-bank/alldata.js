function AllData() {
    const ctx = React.useContext(UserContext);
    const [status, setStatus] = React.useState('');
 

    return (
        <Card
        bgcolor="primary"
        header="All Data"
        status={status}
        body= {
            JSON.stringify(ctx)
        }
        />
    );
}
 