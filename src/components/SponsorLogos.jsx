import { useState } from "react";
import {
  EuiFlexGroup,
  EuiTitle,
} from "@elastic/eui";
import { sponsors } from "../data/sponsors";
import { useIsXs, useIsS, useIsM } from "../hooks/responsive";
import loadingSpinner from '../images/sponsor-logos/loading.gif';

export const SponsorLogo = ({ src, name }) => {
  const [logo, setLogo] = useState(loadingSpinner);
  if (!src.startsWith('http')) {
    import(`../images/sponsor-logos/${src}`).then((module) => {
      setLogo(module.default);
    });
  }

  return (
    <div className="sponsor-logo-grid__logo">
      <img
        src={src.startsWith('http') ? src : logo}
        alt={name}
        title={name}
      />
      <div>{name}</div>
    </div>
  );
};

export default function SponsorLogos() {
  const [isXs, isS] = [useIsXs(), useIsS(), useIsM()];
  const titleSize = isXs ? "xs" : isS ? "s" : "m";

  return (
    <>
      <EuiFlexGroup
        className="sponsor-logo-grid-container xMargin"
        direction="column"
      >
        <div>
          <EuiTitle size={titleSize}>
            <h1 className="sponsor-logo-grid-title">Featured Sponsors</h1>
          </EuiTitle>
          <div className="sponsor-logo-grid">
            {sponsors.map(({ name, src, href }, i) => {
              const key = `${name}-${i}`;
              if (href?.length) {
                return (
                  <a href={href} key={key} target="_blank" rel="noreferrer" title={name}>
                    <SponsorLogo src={src} name={name} />
                  </a>
                );
              }
              return (
                <SponsorLogo src={src} name={name} key={key} />
              );
            })}
          </div>
        </div>
      </EuiFlexGroup>
    </>
  );
};