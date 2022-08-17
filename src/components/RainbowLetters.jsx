export const makeRainbowText = () => {
  const colors = [
    "#FF1616",
    "#F7B012",
    "#FFDE59",
    "#7ED957",
    "#38B6FF",
    "#CB6CE6",
    "#8C52FF",
    "",
    "#FF1616",
    "#F7B012",
    "#FFDE59",
    "#7ED957",
    "#38B6FF",
  ];
  const letters = "RAINBOW STACK".split("");
  const rainbowedLetters = letters.map((letter, index) => {
    return (
      <span style={{ color: `${colors[index]}`, fontFamily: "Inter" }}>
        {letter}
      </span>
    );
  });
  return (
    <span>
      <strong>{rainbowedLetters} SUMMIT</strong>
    </span>
  );
};
