import React, { ReactNode } from "react";
import NewsletterBanner from "../NewsletterBannner";

// Layout component to add newsletter banner below every page of the library
const LibraryPageLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      {children}
      <NewsletterBanner />
    </>
  );
};

export default LibraryPageLayout;
