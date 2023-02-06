function Deposit() {
    const [show, setShow] = React.useState(true);
    const [deposit, setDeposit] = React.useState('');
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
        setShow(true);
        };    
    
      function clearForm(){
        setDeposit('');
        setShow(false);
      }

      return (
        <Card
        bgcolor="primary"
        header="Deposit"
        status={status}
        body={show ? (  
            <>
            Deposit<br/>
            <input type="number" className="form-control" id="deposit" placeholder="Deposit Amount" value={deposit} onChange={handleChange}/><br/>
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

