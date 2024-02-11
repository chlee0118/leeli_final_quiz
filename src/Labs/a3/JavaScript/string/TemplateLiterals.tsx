const TemplateLiterals = () => {
    const five = 2 + 3;
    const result1 = "2 + 3 = " + five;
    const result2 = `2 + 3 = ${2 + 3}`;
    const username = 'alice';
    const greeting1 = `Welcome home ${username}`;
    const loggedIn = false;
    const greeting2 = `Logged in: ${loggedIn ? "Yes" : "No"}`;
  
    return (
      <div>
        <h3>Template Literals</h3>
        <p>{result1}</p>
        <p>{result2}</p>
        <p>{greeting1}</p>
        <p>{greeting2}</p>
      </div>
    );
  }
  
  export default TemplateLiterals;
  