// Shared prop type for translation function

import { useTranslations } from "next-intl";

type WithT = {
  t: ReturnType<typeof useTranslations>;
};

export default WithT;
