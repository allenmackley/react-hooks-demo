import { AppProvider } from './AppContext';
import ContextConsumerComponent from './ContextConsumerComponent';
import Footer from './Footer';
import '../App.css';

function HooksIntermediate() {
  return (
    <>
      {/**'
      * A 'context' is simply a value that can be passed around freely anywhere in the app that we wrap in its Provider.
      */}
      <AppProvider>
        <ContextConsumerComponent />
      </AppProvider>
      <Footer />
    </>
  );
}

export default HooksIntermediate;
