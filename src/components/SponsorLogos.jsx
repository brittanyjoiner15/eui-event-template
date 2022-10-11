import { useState } from "react";
import {
  EuiFlexGroup,
  EuiFlexItem,
  EuiTitle,
} from "@elastic/eui";
import { sponsors } from "../data/sponsors";
import { useIsXs, useIsS, useIsM } from "../hooks/responsive";
import loadingSpinner from '../images/sponsor-logos/loading.gif';
import useHover from "../hooks/hover";

export const SponsorLogo = ({ src, name }) => {
  const [logo, setLogo] = useState(loadingSpinner);
  if (!src.startsWith('http')) {
    import(`../images/sponsor-logos/${src}`).then((module) => {
      setLogo(module.default);
    });
  }

  const [hoverRef, isHovered] = useHover();
  const borderWidth = '2px';
  return (
    <div ref={hoverRef} style={{
      display: 'grid',
      placeItems: 'center',
      width: '200px',
      height: '150px',
      position: 'relative',
      borderWidth,
      borderStyle: 'solid',
      borderColor: isHovered ? 'var(--color-accent)' : 'transparent',
      transition: 'border-color .15s ease-out',
      overflow: 'hidden',
    }}>
      <img
        src={src.startsWith('http') ? src : logo}
        alt={name}
        title={name}
        style={{
          position: 'absolute',
          top: '0',
          left: '0',
          width: '100%',
          height: '100%',
          objectFit: 'contain',
          padding: '1rem',
        }}
      />
      <div style={{
        position: 'absolute',
        bottom: '0',
        left: `-${borderWidth}`,
        width: `calc(100% + (${borderWidth} * 2))`,
        height: 'auto',
        backgroundColor: 'var(--color-accent)',
        border: `${borderWidth} solid var(--color-accent)`,
        opacity: isHovered ? 1 : 0,
        textDecoration: 'none',
        color: 'black',
        fontSize: '1rem',
        fontWeight: 600,
        padding: '2px 4px',
        transform: isHovered ? 'translateY(0%)' : 'translateY(100%)',
        transition: 'opacity .15s ease-out, transform .15s ease-out',
      }}>{name}</div>
    </div>
  );
};

export default function SponsorLogos() {
  const [isXs, isS] = [useIsXs(), useIsS(), useIsM()];
  const titleSize = isXs ? "xs" : isS ? "s" : "m";

  return (
    <>
      <EuiFlexGroup
        className="xMargin"
        direction="column"
      >
        <div style={{ maxWidth: '1200px' }}>
          <EuiTitle size={titleSize}>
            <h1 style={{ marginTop: '12px', marginBottom: '24px' }} className="eui-textCenter">Featured Sponsors</h1>
          </EuiTitle>
          <EuiFlexItem style={{
            display: 'flex',
            flexWrap: 'wrap',
            flexDirection: 'row',
            justifyContent: 'center',
            gap: '1rem',
          }}>
            {sponsors.map(({ name, src, href }) => {
              if (href?.length) {
                return (
                  <a href={href} key={name} target="_blank" rel="noreferrer" title={name}>
                    <SponsorLogo src={src} name={name} />
                  </a>
                );
              }
              return (
                <SponsorLogo src={src} name={name} />
              );
            })}
          </EuiFlexItem>
        </div>
      </EuiFlexGroup>
    </>
  );
};