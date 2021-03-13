import { Admin, EditGuesser, ListGuesser, Resource } from "react-admin";
import { FirebaseAuthProvider, FirebaseDataProvider } from "react-admin-firebase";

const config = {
  apiKey: "AIzaSyCaNQyhesGuoTwR6j6RirvCUmCMm8ZG0ag",
  authDomain: "betha-cash.firebaseapp.com",
  projectId: "betha-cash",
  storageBucket: "betha-cash.appspot.com",
  messagingSenderId: "1054394354589",
  appId: "1:1054394354589:web:6973bd92ccc85930c2fd74",
};

const App = () => (
  <Admin 
    dataProvider={FirebaseDataProvider(config, {})}
    authProvider={FirebaseAuthProvider(config, {})}
  >
    <Resource name="transactions" list={ListGuesser} edit={EditGuesser} />
  </Admin>
);

export default App;