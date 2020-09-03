import React from "react";

// This component uses styled components for it's styling
import styled from "styled-components";

import * as tokens from "clarity-design-tokens/web/dist/badge";

const DefaultBadge = styled.span({
  display: "inline-block",
  padding: `${tokens.paddingVertical} ${tokens.paddingHorizontal}`,
  backgroundColor: tokens.backgroundColor,
  borderRadius: tokens.borderRadius,
});

const DangerBadge = styled(DefaultBadge)({
  backgroundColor: tokens.dangerBackgroundColor,
  color: tokens.dangerColor,
});

const WarningBadge = styled(DefaultBadge)({
  backgroundColor: tokens.warningBackgroundColor,
  color: tokens.warningColor,
});

const SuccessBadge = styled(DefaultBadge)({
  backgroundColor: tokens.successBackgroundColor,
  color: tokens.successColor,
});

const map = {
  danger: DangerBadge,
  default: DefaultBadge,
  warning: WarningBadge,
  success: SuccessBadge,
};

const Badge = ({ children, variant = `default` }) => {
  const Wrapper = map[variant];
  if (Wrapper) {
    return <Wrapper>{children}</Wrapper>;
  } else {
    return null;
  }
};

export default Badge;
