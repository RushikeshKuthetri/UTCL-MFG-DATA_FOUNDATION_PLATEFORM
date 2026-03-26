import { AuthenticatedTemplate } from "@azure/msal-react";
import { useMsal } from "@azure/msal-react";

import { TemplateList } from "../components/TemplateList";
export const Home = () => {
  const { instance } = useMsal();
  const activeAccount = instance.getActiveAccount();
  sessionStorage.setItem("accountDetails", JSON.stringify(activeAccount));

  return (
    <>
      <AuthenticatedTemplate>
        <TemplateList />
      </AuthenticatedTemplate>
    </>
  );
};
