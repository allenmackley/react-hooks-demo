import ChildOfContextConsumer from './ChildOfContextConsumer';
/**
 * Notice that we're not passing down any props here.
 * And, when we click Show / Hide Logo, this doesn't get rendered unnecessarily, only the child renders.
 */
function ContextConsumerComponent() {
  console.log('Inside ContextConsumerComponent');
  return (
    <div
      className="App"
    >
      <ChildOfContextConsumer />
    </div>
  );
}

export default ContextConsumerComponent;
