/**
 * The footer doesn't get render when we Show / Hide the logo because it's not wrapped in the provider and because it doesn't access the useContext() hook.
 */
function Footer() {
  console.log('Inside Footer');
  return (
    <div
      className="App-footer"
    >
      Footer
    </div>
  );
}

export default Footer;