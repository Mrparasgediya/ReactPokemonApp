import { FC, ReactElement } from "react";
import LoadingSpinner from "./LoadingSpinner";

const ContentContainer: FC<{
  children: ReactElement;
  isLoading: boolean;
  error: string;
}> = ({ children, isLoading, error }) => {
  return (
    <div
      className={`min-h-[75vh] ${
        isLoading ? "flex items-center justify-center" : ""
      } app-container mx-auto`}
    >
      {isLoading ? (
        <LoadingSpinner />
      ) : error ? (
        <div className="error-text">Error: {error}</div>
      ) : (
        children
      )}
    </div>
  );
};

export default ContentContainer;
