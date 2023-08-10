import React from 'react';
import Link from '@docusaurus/Link';


const ENGAGE_URL = "https://n3o.cloud/eu1/engage/";

type ILinkProps = {
    text: string;
    route: string;
    isEngage?: boolean;
    isInternal?: boolean;
};


export default function K2Link({ text, route, isEngage = false, isInternal = false }: ILinkProps) {
    const routeToRedirect = isEngage ? `${ENGAGE_URL}${route}` : isInternal ? `/${route}` : `${route}`;
    return (
        <Link to={routeToRedirect}>{text}</Link>
    );
}

// <K2Link route="dashboard" text="Engage dashboard" isEngage />
// <K2Link route="docs/engage/donations/payments/failed-payments/" text="Internal Redirection" isInternal/>
// <K2Link route="https://docusaurus.io/docs/markdown-features/react" text="External But Not Engage"/>
