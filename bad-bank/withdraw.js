function Withdraw() {
    const ctx = React.useContext(UserContext);
    const [show, setShow] = React.useState(true);
    const [withdraw, setWithdraw] = React.useState('');
    const [balance, setBalance] = React.useState(0);
    const [validTransaction, setValidTransaction] = React.useState(false);

    let transactionState = 0; // state of this transaction
    // let status = `Account Balance $ ${balance}`;
    let status1 = `Account Balance $ ${balance}`;
        
    function handleCreate(){
      if (withdraw > totalState) {
       alert('Insufficient Funds');
     } else {
         setShow(false);
       }}  
 
 const handleChange = event => {
   console.log(`handleChange ${event.target.value}`);
   if (Number(event.target.value) > totalState) {
     return setValidTransaction(false);
   }
   if (withdraw && Number(event.target.value) > totalState) {
     setValidTransaction(false);
   } else {
     setValidTransaction(true);
   }
   setWithdraw(Number(event.target.value));
 };
    
    
        const handleSubmit = () => {
          // setBalance(balance + transactionState);
          setBalance(Number(balance) - Number(withdraw))
          event.preventDefault();
          setWithdraw('');
        setShow(true);
        }; 

      function clearForm(){
        setWithdraw('');
        setShow(true);
      }

      function finalSubmit(){
        handleCreate();
        handleSubmit();
        
      }

      return (
        <Card
        bgcolor="primary"
        header="Withdraw"
        status={status1}
        body={show ? (  
            <>
            Withdraw<br/>
            <input type="number" className="form-control" id="withdraw" placeholder="Withdraw Amount" value={withdraw} onChange={handleChange}/><br/>
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



