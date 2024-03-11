import React, { useEffect } from "react";

const AxeptioWidget = ({ clientId }) => {
  const ID = "65ef038ece59d99d53bfa351";
  useEffect(() => {
    window.axeptioSettings = { clientId: ID };

    const script = document.createElement("script");
    script.async = true;
    script.src = "//static.axept.io/sdk.js";
    document.body.appendChild(script);

    return () => {
      // Nettoyage si le composant est démonté
      document.body.removeChild(script);
    };
  }, [clientId]); // Les crochets indiquent que l'effet ne s'exécute que lorsque clientId change

  return null; // Ce composant ne rend rien visuellement
};

export default AxeptioWidget;
