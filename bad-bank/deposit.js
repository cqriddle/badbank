function Deposit() {
    const [show, setShow] = React.useState(true);
    const [deposit, setDeposit] = React.useState('');
    const [balance, setBalance] = React.useState(0);
    const [validTransaction, setValidTransaction] = React.useState(false);

 
    
        let transactionState = 0; // state of this transaction
        // let status = `Account Balance $ ${balance}`;
        let status1 = `Account Balance $ ${balance}`;


        function handleCreate(){
             if (deposit <= 0) {
              alert('Must enter number for deposit');
            } else {
                setShow(false);
              }}  
        
        const handleChange = event => {
          console.log(`handleChange ${event.target.value}`);
          if (Number(event.target.value) <= 0) {
            return setValidTransaction(false);
          }
          if (deposit && Number(event.target.value) <= 0) {
            setValidTransaction(false);
          } else {
            setValidTransaction(true);
          }
          setDeposit(Number(event.target.value));
        };

        const handleSubmit = () => {
          // setBalance(balance + transactionState);
          setBalance(Number(balance) + Number(deposit))
          event.preventDefault();
          setDeposit('');
        setShow(true);
        };    
    
      function clearForm(){
        setDeposit('');
        setShow(true);
      }

      function finalSubmit(){
        handleCreate();
        handleSubmit();
        
      }

      return (
        <Card
        bgcolor="primary"
        header="Deposit"
        status={status1}
        body={show ? (  
            <>
            Deposit<br/>
            <input type="number" className="form-control" id="deposit" placeholder="Deposit Amount" value={deposit} onChange={handleChange}/><br/>
            <button type="submit" className="btn btn-light" onClick={finalSubmit}>Submit</button>
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



