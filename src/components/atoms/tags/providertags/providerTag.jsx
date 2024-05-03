import React from "react";

function ProviderTag({ provider }) {

    console.log(provider);

    const providerPath = `https://image.tmdb.org/t/p/w500${provider.logo_path}`; 
    let backgroundStyle;
    if (provider.provider_name === "Netflix") {
        backgroundStyle = {
            backgroundImage: "linear-gradient(130deg, rgba(224,3,9,1) 0%, rgba(165,2,6,1) 100%)",
        };
    } if (provider.provider_name === "Canal+") {
        backgroundStyle = {
            backgroundImage: "linear-gradient(130deg, rgba(60,60,60,1) 0%, rgba(35,35,35,1) 100%)",
        };
    } if (provider.provider_name === "Disney Plus") {
        backgroundStyle = {
            backgroundImage: "linear-gradient(130deg, rgba(8,172,182,1) 0%, rgba(1,30,46,1) 100%)",
        };
    } if (provider.provider_name === "Crunchyroll") {
        backgroundStyle = {
            backgroundImage: "linear-gradient(130deg, rgba(94,38,0,1) 0%, rgba(244,117,33,1) 100%)",
        };
    } if (provider.provider_name === "Amazon Prime Video") {
        backgroundStyle = {
            backgroundImage: "linear-gradient(130deg, rgba(32,189,235,1) 0%, rgba(0,39,100,1) 100%)",
        };
    }


    return (
        <div className="Provider" style={backgroundStyle}>
            <img src={providerPath} className="Provider__logo" alt={`${provider.provider_name} logo`} />
            <p className="Provider__name">{provider.provider_name}</p>
        </div>
    )
}

export default ProviderTag;