function Withdraw() {
    const ctx = React.useContext(UserContext);
    const [show, setShow] = React.useState(true);
    const [withdraw, setWithdraw] = React.useState('');
    const [balance, setBalance] = React.useState(0);

 
    
        let transactionState = 0; // state of this transaction
        let status = `Account Balance $ ${balance}`;
        
        const handleChange = event => {
          console.log(`handleChange ${event.target.value}`);
          transactionState = Number(event.target.value);
        };
        const handleSubmit = () => {
          setBalance(balance + transactionState);
          event.preventDefault();
          ctx.users.push({balance});
        setShow(false);
        };    
    
      function clearForm(){
        setWithdraw('');
        setShow(true);
      }

      return (
        <Card
        bgcolor="primary"
        header="Withdraw"
        status={status}
        body={show ? (  
            <>
            Withdraw<br/>
            <input type="number" className="form-control" id="withdraw" placeholder="Withdraw Amount" value={withdraw} onChange={handleChange}/><br/>
            <button type="submit" className="btn btn-light" onClick={handleSubmit}>Submit</button>
            </>
          ):(
            <>
            <h5>Success</h5>
            <button type="submit" className="btn btn-light" onClick={clearForm}>Make Another Deposit</button>
            </>
          )}
  />
)
}

