import React from "react";
import CertificateViewer from "./CertificateViewer";
import {certificates} from '../../data/certificates';


const App = () => {
    return (
        <CertificateViewer certificates={certificates}/>
    );
};

export default App;
