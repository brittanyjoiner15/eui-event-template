import { useState, Fragment } from "react";
import {
  EuiFlexGroup,
  EuiFlexItem,
  EuiText,
  EuiAccordion,
  EuiSpacer,
  useGeneratedHtmlId,
  EuiTitle,
  EuiTextColor,
  EuiContext,
  EuiMark,
  useEuiI18n,
  EuiButton,
  EuiI18n
} from "@elastic/eui";
import { faqs } from "../../data/faqs";
import { useIsXs, useIsS, useIsM } from "../../hooks/responsive";

const FaqAccordionRow = ({ question, detail, answer }) => {
  const [isXs, isS] = [useIsXs(), useIsS()];
  const titleSize = isXs ? "xs" : isS ? "s" : "m";
  const activeTitleColor = 'var(--color-accent)';
  const [isOpen, setIsOpen] = useState('closed');
  const [titleColor, setTitleColor] = useState(undefined);
  const onToggle = (isOpen) => {
    setIsOpen(isOpen ? 'open' : 'closed');
    setTitleColor(isOpen ? activeTitleColor : undefined);
  };
  const buttonContent = (title, subtitle) => {
    return (
      <div>
        <EuiTitle size={titleSize}>
          <h3 style={{ lineHeight: 1, color: titleColor }}>{title}</h3>
        </EuiTitle>
        {subtitle && (
          <EuiText size={titleSize}>
            <p>
              <EuiTextColor color="subdued">
                {subtitle}
              </EuiTextColor>
            </p>
          </EuiText>
        )}
      </div>
    );
  };

  const accordionId = useGeneratedHtmlId({ prefix: "faqAccordion" });

  return (
    <EuiAccordion
      id={accordionId}
      buttonContent={buttonContent(question, detail)}
      paddingSize="l"
      onToggle={onToggle}
      forceState={isOpen}
    >
      <EuiText size="m">{answer}</EuiText>
    </EuiAccordion>
  );
}

export default function FAQsPanel({t}) {



  return (
    <>

      <EuiFlexGroup
        className="xMargin"
        direction="column"
      >
        <div style={{ maxWidth: '1200px' }}>
          <EuiFlexItem>
            {faqs?.map(({ question, detail, answer }, i) => {
              const FunctionalAnswer = () => answer;
              const content = typeof answer === "string" ? `${answer}` : <FunctionalAnswer />;

              return (
                <Fragment key={question}>
                  {i > 0 && <EuiSpacer />}
                  <FaqAccordionRow
                    question={t(question)}
                    detail={t(detail)}
                    answer={t(content)}
                  />
                </Fragment>
              );
            })}
          </EuiFlexItem>
        </div>
      </EuiFlexGroup>
    </>
  );
};
//Use i18n of elastic UI ?
